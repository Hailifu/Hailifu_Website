// Simulated Supabase for e2e tests (auth, REST tables, Storage bucket "media").
// Usage: const sb = await mockSupabase(page, { installations: [galleryRow({...})] });
//        sb.db.installations, sb.storage (Map path -> {size,type}), sb.calls, sb.refuseDeletes = true
const now = Math.floor(Date.now() / 1000);
const user = { id: 'u1', aud: 'authenticated', role: 'authenticated', email: 'owner@example.com', app_metadata: {}, user_metadata: {}, created_at: new Date().toISOString() };
const session = { access_token: 'header.eyJzdWIiOiJ1MSJ9.sig', token_type: 'bearer', expires_in: 3600, expires_at: now + 3600, refresh_token: 'refresh', user };

let seq = 0;
function galleryRow(partial = {}) {
    seq += 1;
    const id = partial.id || `g_test${seq}`;
    const data = {
        id,
        kind: 'gallery',
        category: 'cctv',
        mediaType: 'image',
        src: `https://res.cloudinary.com/daovfi3i5/image/upload/v1/test-${seq}.jpg`,
        thumb: '',
        source: 'cloudinary',
        storagePath: '',
        caption: '',
        featured: false,
        cover: false,
        order: seq,
        createdAt: new Date(Date.now() - seq * 60000).toISOString(),
        ...partial
    };
    return { id, data, updated_at: data.createdAt };
}

function matchesFilters(row, params) {
    for (const [key, raw] of params.entries()) {
        if (['select', 'order', 'limit', 'on_conflict', 'columns'].includes(key)) continue;
        const value = raw.replace(/^eq\./, '');
        if (!raw.startsWith('eq.')) continue;
        if (key === 'data->>kind') { if (String(row.data?.kind || '') !== value) return false; continue; }
        if (String(row[key] ?? '') !== value) return false;
    }
    return true;
}

async function mockSupabase(page, tables = {}) {
    const db = { leads: [], adverts: [], reviews: [], installations: [], ...tables };
    const sb = { db, storage: new Map(), calls: [], refuseDeletes: false, refuseUploads: false, refuseWrites: false, refuseDeleteIds: new Set(), offlineTables: new Set() };
    await page.route('**/*.supabase.co/**', async (route) => {
        const req = route.request();
        const url = new URL(req.url());
        const method = req.method();
        const json = (status, body) => route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(body) });
        sb.calls.push(`${method} ${decodeURIComponent(url.pathname + url.search)}`);

        if (url.pathname.includes('/auth/v1/token')) {
            const body = JSON.parse(req.postData() || '{}');
            if (body.password === 'correct-horse' || body.refresh_token) return json(200, session);
            return json(400, { code: 400, error_code: 'invalid_credentials', msg: 'Invalid login credentials' });
        }
        if (url.pathname.includes('/auth/v1/user')) return json(200, user);
        if (url.pathname.includes('/auth/v1/logout')) return route.fulfill({ status: 204 });

        // Storage
        if (url.pathname.includes('/storage/v1/object/list/media')) {
            return json(200, [...sb.storage.entries()].filter(([p]) => !p.includes('/')).map(([name, m]) => ({ name, id: name, created_at: new Date().toISOString(), metadata: { size: m.size, mimetype: m.type } })));
        }
        const objPrefix = '/storage/v1/object/media/';
        if (method === 'POST' && url.pathname.includes(objPrefix)) {
            if (sb.refuseUploads) return json(403, { statusCode: '403', error: 'Unauthorized', message: 'new row violates row-level security policy' });
            const path = decodeURIComponent(url.pathname.split(objPrefix)[1]);
            sb.storage.set(path, { size: (req.postDataBuffer() || []).length, type: req.headers()['content-type'] || '' });
            return json(200, { Key: `media/${path}` });
        }
        if (method === 'DELETE' && url.pathname.endsWith('/storage/v1/object/media')) {
            const { prefixes = [] } = JSON.parse(req.postData() || '{}');
            const removed = prefixes.filter((p) => sb.storage.delete(p));
            return json(200, removed.map((name) => ({ name, bucket_id: 'media' })));
        }

        // REST
        const m = url.pathname.match(/\/rest\/v1\/(\w+)/);
        if (m) {
            const table = m[1];
            if (sb.offlineTables.has(table)) return route.abort('failed');
            const rows = db[table] || (db[table] = []);
            const params = url.searchParams;
            if (method === 'GET') return json(200, rows.filter((r) => matchesFilters(r, params)));
            if (method === 'POST') {
                if (sb.refuseWrites) return json(403, { code: '42501', message: 'new row violates row-level security policy for table "' + table + '"' });
                let body = JSON.parse(req.postData() || '[]');
                body = Array.isArray(body) ? body : [body];
                // optional per-row rule, like a database policy: sb.insertGuard = (table, row) => boolean
                if (sb.insertGuard && body.some((r) => !sb.insertGuard(table, r))) {
                    return json(403, { code: '42501', message: 'new row violates row-level security policy for table "' + table + '"' });
                }
                body.forEach((r) => {
                    const i = rows.findIndex((x) => x.id === r.id);
                    if (i >= 0) rows[i] = { ...rows[i], ...r }; else rows.push(r);
                });
                return json(201, body);
            }
            if (method === 'PATCH') return json(200, []);
            if (method === 'DELETE') {
                if (sb.refuseDeletes) return json(200, []);
                const removed = rows.filter((r) => matchesFilters(r, params) && !sb.refuseDeleteIds.has(r.id));
                db[table] = rows.filter((r) => !removed.includes(r));
                return json(200, params.has('select') ? removed.map((r) => ({ id: r.id })) : []);
            }
        }
        return json(200, []);
    });
    return sb;
}

async function loginAdmin(page) {
    await page.goto('/hailifu=access', { waitUntil: 'load' });
    await page.waitForSelector('#hmLoginEmail', { timeout: 15000 });
    await page.fill('#hmLoginEmail', 'owner@example.com');
    await page.fill('#hmLoginPassword', 'correct-horse');
    await page.click('.hm-login-submit');
    await page.waitForFunction(() => document.getElementById('adminPanel')?.classList.contains('active'), null, { timeout: 15000 });
    await page.waitForTimeout(800);
}

module.exports = { mockSupabase, loginAdmin, galleryRow };
