// Run: node --test tools/
const test = require('node:test');
const assert = require('node:assert/strict');
const {
    serviceForFolder,
    folderOf,
    groupResources,
    listAllResources,
    buildPage,
    readCredentials
} = require('./cloudinary-to-galleries');

test('folder names map to the site services', () => {
    const cases = {
        cctv: 'cctv', 'CCTV Installs': 'cctv', cameras: 'cctv', 'hailifu/surveillance': 'cctv',
        electrical: 'electrical', Electric: 'electrical', wiring: 'electrical',
        'electric-fence': 'fencing', fence: 'fencing', 'Electric Fencing': 'fencing',
        ac: 'airconditioning', aircon: 'airconditioning', 'Air Conditioning': 'airconditioning', hvac: 'airconditioning',
        solar: 'solar', 'solar-panels': 'solar',
        gates: 'gates', 'gate automation': 'gates', 'sliding_gate': 'gates',
        blinds: 'blindcurtain', curtains: 'blindcurtain', 'window blinds': 'blindcurtain',
        'smart-home': 'smarthome', 'Smart Home': 'smarthome'
    };
    for (const [folder, service] of Object.entries(cases)) {
        assert.equal(serviceForFolder(folder), service, folder);
    }
    assert.equal(serviceForFolder(''), '');
    assert.equal(serviceForFolder('samples'), '');
    assert.equal(serviceForFolder('backup/2023'), '');
    // the deepest folder that names a service wins
    assert.equal(serviceForFolder('projects/east-legon/cctv'), 'cctv');
    assert.equal(serviceForFolder('solar/gates-shots'), 'gates');
});

test('folder comes from asset_folder, then folder, then the public_id path', () => {
    assert.equal(folderOf({ asset_folder: 'cctv', public_id: 'x' }), 'cctv');
    assert.equal(folderOf({ folder: 'gates', public_id: 'gates/abc' }), 'gates');
    assert.equal(folderOf({ public_id: 'solar/roof/abc' }), 'solar/roof');
    assert.equal(folderOf({ public_id: 'abc' }), '');
});

test('resources are grouped by service; unknown folders go to Unsorted with their folder', () => {
    const resources = [
        { public_id: 'cctv/a', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/cctv/a.jpg' },
        { public_id: 'b', asset_folder: 'Gates', resource_type: 'video', secure_url: 'https://res.cloudinary.com/demo/video/upload/v1/b.mp4' },
        { public_id: 'misc/c', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/misc/c.png' },
        { public_id: 'cctv/a', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/cctv/a.jpg' }, // duplicate
        { public_id: 'd', resource_type: 'image', secure_url: 'http://res.cloudinary.com/demo/image/upload/v1/d.jpg' }
    ];
    const g = groupResources(resources);
    assert.deepEqual(g.services.cctv.map((r) => r.url), ['https://res.cloudinary.com/demo/image/upload/v1/cctv/a.jpg']);
    assert.equal(g.services.gates[0].type, 'video');
    assert.deepEqual(g.unsorted.map((r) => [r.folder, r.url]), [
        ['misc', 'https://res.cloudinary.com/demo/image/upload/v1/misc/c.png'],
        ['', 'https://res.cloudinary.com/demo/image/upload/v1/d.jpg'] // http upgraded to https
    ]);
    assert.equal(g.total, 4);
});

test('lists every page of images and videos with Basic auth', async () => {
    const calls = [];
    const fakeFetch = async (url, opts) => {
        calls.push({ url, auth: opts.headers.Authorization });
        const u = new URL(url);
        const type = u.pathname.includes('/video/') ? 'video' : 'image';
        const cursor = u.searchParams.get('next_cursor');
        if (type === 'image' && !cursor) return { ok: true, status: 200, json: async () => ({ resources: [{ public_id: 'i1' }], next_cursor: 'p2' }) };
        if (type === 'image') return { ok: true, status: 200, json: async () => ({ resources: [{ public_id: 'i2' }] }) };
        return { ok: true, status: 200, json: async () => ({ resources: [{ public_id: 'v1' }] }) };
    };
    const all = await listAllResources({ cloud: 'demo', key: 'k', secret: 's' }, fakeFetch);
    assert.deepEqual(all.map((r) => [r.public_id, r.resource_type]), [['i1', 'image'], ['i2', 'image'], ['v1', 'video']]);
    assert.equal(calls.length, 3);
    assert.ok(calls.every((c) => c.auth === `Basic ${Buffer.from('k:s').toString('base64')}`));
    assert.ok(calls[0].url.startsWith('https://api.cloudinary.com/v1_1/demo/resources/image/upload?'));
    assert.ok(calls[0].url.includes('max_results=500'));
});

test('wrong keys give a clear message, not a stack of JSON', async () => {
    const fakeFetch = async () => ({ ok: false, status: 401, json: async () => ({ error: { message: 'Invalid api_key' } }) });
    await assert.rejects(listAllResources({ cloud: 'demo', key: 'k', secret: 'bad' }, fakeFetch), /Cloudinary refused the keys \(401\): Invalid api_key/);
});

test('credentials come from environment variables or CLOUDINARY_URL, never from files', () => {
    assert.deepEqual(readCredentials({ CLOUDINARY_API_KEY: 'k', CLOUDINARY_API_SECRET: 's' }), { cloud: 'daovfi3i5', key: 'k', secret: 's' });
    assert.deepEqual(readCredentials({ CLOUDINARY_URL: 'cloudinary://key1:sec2@mycloud' }), { cloud: 'mycloud', key: 'key1', secret: 'sec2' });
    assert.deepEqual(readCredentials({ CLOUDINARY_API_KEY: 'k', CLOUDINARY_API_SECRET: 's', CLOUDINARY_CLOUD_NAME: 'other' }).cloud, 'other');
    assert.throws(() => readCredentials({}), /CLOUDINARY_API_KEY/);
});

test('check mode reports what the key can see, without printing any secret', async () => {
    const { diagnose, formatDiagnosis } = require('./cloudinary-to-galleries');
    const seen = [];
    const fakeFetch = async (url) => {
        const u = new URL(url);
        seen.push(u.pathname);
        const p = u.pathname.replace('/v1_1/demo', '');
        const reply = (body) => ({ ok: true, status: 200, json: async () => body });
        if (p === '/usage') return reply({ plan: 'Free', resources: 57 });
        if (p === '/folders') return reply({ folders: [{ name: 'cctv', path: 'cctv' }, { name: 'Gates', path: 'Gates' }] });
        if (p === '/resources/image/upload') return reply({ resources: [] });
        if (p === '/resources/image/private') return reply({ resources: [{ public_id: 'a' }], next_cursor: 'x' });
        if (p === '/resources/image/authenticated') return ({ ok: false, status: 403, json: async () => ({ error: { message: 'Permission denied' } }) });
        return reply({ resources: [] });
    };
    const report = await diagnose({ cloud: 'demo', key: 'k', secret: 'topsecret' }, fakeFetch);
    assert.equal(report.totalInAccount, 57);
    assert.deepEqual(report.folders, ['cctv', 'Gates']);
    assert.equal(report.lists['image/upload'], '0');
    assert.equal(report.lists['image/private'], '1+');
    assert.equal(report.lists['image/authenticated'], 'not allowed (403)');
    const text = formatDiagnosis(report);
    assert.ok(!text.includes('topsecret'));
    assert.match(text, /57/);
    assert.match(text, /image\/private: 1\+/);
});

test('without a service folder, tags then the file name decide; Cloudinary samples are skipped', () => {
    const g = groupResources([
        { public_id: 'showcase/cctv-office-legon', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/showcase/cctv-office-legon.jpg' },
        { public_id: 'hailifu/IMG_2201', tags: ['Solar', 'roof'], resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/hailifu/IMG_2201.jpg' },
        { public_id: 'hailifu_uploads/photo_991', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/hailifu_uploads/photo_991.jpg' },
        { public_id: 'samples/animals/cat', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/samples/animals/cat.jpg' },
        { public_id: 'sample', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg' }
    ]);
    assert.equal(g.services.cctv.length, 1);
    assert.equal(g.services.solar.length, 1);
    assert.deepEqual(g.unsorted.map((i) => i.folder), ['hailifu_uploads']);
    assert.equal(g.skipped, 2);
    assert.equal(g.total, 3);
});

test('unsorted files get one copy box per folder', () => {
    const g = groupResources([
        { public_id: 'hailifu/a', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/hailifu/a.jpg' },
        { public_id: 'hailifu/b', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/hailifu/b.jpg' },
        { public_id: 'showcase/c', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/showcase/c.jpg' }
    ]);
    const html = buildPage(g, { cloud: 'demo', generatedAt: 'x' });
    assert.match(html, /<h2>Unsorted: hailifu <span>2<\/span><\/h2>/);
    assert.match(html, /<h2>Unsorted: showcase <span>1<\/span><\/h2>/);
    assert.match(html, /data-service="unsorted-hailifu"[^>]*>https:\/\/res\.cloudinary\.com\/demo\/image\/upload\/v1\/hailifu\/a\.jpg\nhttps:\/\/res\.cloudinary\.com\/demo\/image\/upload\/v1\/hailifu\/b\.jpg</);
});

test('the listing asks Cloudinary for tags', async () => {
    const urls = [];
    await listAllResources({ cloud: 'demo', key: 'k', secret: 's' }, async (url) => { urls.push(url); return { ok: true, status: 200, json: async () => ({ resources: [] }) }; });
    assert.ok(urls.every((u) => new URL(u).searchParams.get('tags') === 'true'));
});

test('networking folders map to the Networking service', () => {
    for (const f of ['networking', 'Network', 'LAN cabling', 'wifi', 'structured-cabling']) assert.equal(serviceForFolder(f), 'networking', f);
    // "electric" rule must not swallow networking, and cctv stays cctv
    assert.equal(serviceForFolder('cctv-network-video'), 'cctv');
});

test('spaces around pasted keys are ignored', () => {
    assert.deepEqual(
        readCredentials({ CLOUDINARY_API_KEY: '795000000000000 ', CLOUDINARY_API_SECRET: ' secret-1 ', CLOUDINARY_CLOUD_NAME: ' mycloud ' }),
        { cloud: 'mycloud', key: '795000000000000', secret: 'secret-1' }
    );
});

test('the page has one box per service with copyable links, escapes text, and never contains the secret', () => {
    const groups = groupResources([
        { public_id: 'cctv/a', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/cctv/a.jpg' },
        { public_id: 'cctv/b', resource_type: 'video', secure_url: 'https://res.cloudinary.com/demo/video/upload/v1/cctv/b.mp4' },
        { public_id: 'x', asset_folder: '<script>alert(1)</script>', resource_type: 'image', secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/x.jpg' }
    ]);
    const html = buildPage(groups, { cloud: 'demo', generatedAt: '2026-09-30 12:00' });
    assert.match(html, /<h2>CCTV <span>2<\/span><\/h2>/);
    assert.match(html, /<textarea[^>]*data-service="cctv"[^>]*>https:\/\/res\.cloudinary\.com\/demo\/image\/upload\/v1\/cctv\/a\.jpg\nhttps:\/\/res\.cloudinary\.com\/demo\/video\/upload\/v1\/cctv\/b\.mp4<\/textarea>/);
    assert.match(html, /Unsorted/);
    assert.ok(!html.includes('<script>alert(1)</script>'));
    assert.ok(html.includes('&lt;script&gt;alert(1)&lt;/script&gt;'));
    assert.ok(!/api_secret|CLOUDINARY_API_SECRET/.test(html));
    // video thumbnails use a still frame
    assert.match(html, /video\/upload\/c_fill,w_240,h_180,so_0\/v1\/cctv\/b\.jpg/);
});
