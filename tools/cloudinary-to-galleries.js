#!/usr/bin/env node
/* ==========================================================================
   Cloudinary -> Galleries helper (runs on YOUR computer only, never on the site)

   Lists every image and video in your Cloudinary account (read-only), sorts
   them by folder into the website's services, and writes cloudinary-links.html
   with a "Copy links" box per service. Paste each box into
   Admin > Galleries > (service) > Paste links. Duplicates are skipped there.

   Keys come ONLY from environment variables typed in your own terminal:
     PowerShell:  $env:CLOUDINARY_API_KEY="..."; $env:CLOUDINARY_API_SECRET="..."
     then:        node tools/cloudinary-to-galleries.js
   (or CLOUDINARY_URL=cloudinary://KEY:SECRET@CLOUD). Cloud defaults to daovfi3i5.
   Nothing is saved except the output page, which contains public links only.
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');

const DEFAULT_CLOUD = 'daovfi3i5';

// Website services (same keys and labels as the site's galleries)
const SERVICES = [
    ['cctv', 'CCTV'],
    ['electrical', 'Electrical'],
    ['networking', 'Networking'],
    ['fencing', 'Electric fence'],
    ['airconditioning', 'Air conditioning'],
    ['solar', 'Solar'],
    ['gates', 'Gate automation'],
    ['blindcurtain', 'Blinds & curtains'],
    ['smarthome', 'Smart home']
];

// Checked in this order, on a folder name with spaces/dashes/underscores removed.
// Fence before electric ("electric-fence"), gate before automation ("gate automation").
const RULES = [
    ['fencing', (n) => /fenc/.test(n)],
    ['gates', (n) => /gate/.test(n)],
    ['cctv', (n) => /cctv|camera|surveillance/.test(n)],
    ['networking', (n) => /network|wifi|cabling|^lan/.test(n)],
    ['airconditioning', (n) => n === 'ac' || /aircon|airconditioning|airconditioner|hvac/.test(n)],
    ['solar', (n) => /solar/.test(n)],
    ['blindcurtain', (n) => /blind|curtain|window/.test(n)],
    ['smarthome', (n) => /smarthome/.test(n)],
    ['electrical', (n) => /electric|wiring|lighting/.test(n)]
];

function normalizeName(segment) {
    return String(segment || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

// The deepest folder segment that names a service wins ("projects/east-legon/cctv" -> cctv)
function serviceForFolder(folder) {
    const segments = String(folder || '').split('/').filter(Boolean).reverse();
    for (const segment of segments) {
        const n = normalizeName(segment);
        if (!n) continue;
        const hit = RULES.find(([, test]) => test(n));
        if (hit) return hit[0];
    }
    return '';
}

function folderOf(resource) {
    if (resource.asset_folder) return String(resource.asset_folder);
    if (resource.folder) return String(resource.folder);
    const id = String(resource.public_id || '');
    return id.includes('/') ? id.slice(0, id.lastIndexOf('/')) : '';
}

// Cloudinary's built-in demo assets (every new account has them): not your work
function isCloudinarySample(r) {
    const id = String(r.public_id || '');
    const folder = folderOf(r);
    return id === 'sample' || /^samples(\/|$)/i.test(folder) || /^samples\//i.test(id);
}

// Folder first, then tags, then the file name ("showcase/cctv-office.jpg" -> cctv)
function serviceForResource(r) {
    const byFolder = serviceForFolder(folderOf(r));
    if (byFolder) return byFolder;
    for (const tag of Array.isArray(r.tags) ? r.tags : []) {
        const byTag = serviceForFolder(tag);
        if (byTag) return byTag;
    }
    const id = String(r.public_id || '');
    return serviceForFolder(id.slice(id.lastIndexOf('/') + 1));
}

function groupResources(resources) {
    const services = Object.fromEntries(SERVICES.map(([key]) => [key, []]));
    const unsorted = [];
    const seen = new Set();
    let skipped = 0;
    for (const r of resources || []) {
        const url = String(r.secure_url || r.url || '').replace(/^http:/i, 'https:');
        if (!url || seen.has(url)) continue;
        if (isCloudinarySample(r)) { skipped += 1; continue; }
        seen.add(url);
        const folder = folderOf(r);
        const item = { url, type: r.resource_type === 'video' ? 'video' : 'image', folder, id: String(r.public_id || '') };
        const service = serviceForResource(r);
        if (service) services[service].push(item); else unsorted.push(item);
    }
    return { services, unsorted, total: seen.size, skipped };
}

function readCredentials(env) {
    const e = env || {};
    const clean = (v) => String(v || '').trim(); // pasted keys often carry a stray space
    if (e.CLOUDINARY_URL) {
        const m = /^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/.exec(clean(e.CLOUDINARY_URL));
        if (m) return { cloud: clean(m[3]), key: clean(m[1]), secret: clean(m[2]) };
    }
    const key = clean(e.CLOUDINARY_API_KEY);
    const secret = clean(e.CLOUDINARY_API_SECRET);
    if (!key || !secret) {
        throw new Error('Set CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in this terminal first (Cloudinary > Settings > API Keys).');
    }
    return { cloud: clean(e.CLOUDINARY_CLOUD_NAME) || DEFAULT_CLOUD, key, secret };
}

// Read-only Admin API listing, every page, images then videos.
async function listAllResources(creds, fetchImpl) {
    const doFetch = fetchImpl || fetch;
    const auth = `Basic ${Buffer.from(`${creds.key}:${creds.secret}`).toString('base64')}`;
    const all = [];
    for (const type of ['image', 'video']) {
        let cursor = '';
        do {
            const url = new URL(`https://api.cloudinary.com/v1_1/${encodeURIComponent(creds.cloud)}/resources/${type}/upload`);
            url.searchParams.set('max_results', '500');
            url.searchParams.set('tags', 'true');
            if (cursor) url.searchParams.set('next_cursor', cursor);
            const res = await doFetch(url.toString(), { headers: { Authorization: auth } });
            let body = {};
            try { body = await res.json(); } catch {}
            if (!res.ok) {
                const msg = body && body.error && body.error.message ? body.error.message : `HTTP ${res.status}`;
                if (res.status === 401 || res.status === 403) {
                    throw new Error(`Cloudinary refused the keys (${res.status}): ${msg}\n` +
                        `Check: the key and secret are from the same row in Settings > API Keys, and they belong to the cloud "${creds.cloud}" ` +
                        '(the Cloud name at the top of your Cloudinary dashboard). If your cloud name is different, run: $env:CLOUDINARY_CLOUD_NAME="your-cloud-name"');
                }
                throw new Error(`Cloudinary error (${res.status}): ${msg}`);
            }
            (body.resources || []).forEach((r) => all.push({ ...r, resource_type: r.resource_type || type }));
            cursor = body.next_cursor || '';
        } while (cursor);
    }
    return all;
}

// --check: read-only look at what this key can see (counts and folder names only)
async function diagnose(creds, fetchImpl) {
    const doFetch = fetchImpl || fetch;
    const auth = `Basic ${Buffer.from(`${creds.key}:${creds.secret}`).toString('base64')}`;
    const base = `https://api.cloudinary.com/v1_1/${encodeURIComponent(creds.cloud)}`;
    const get = async (p) => {
        try {
            const res = await doFetch(`${base}${p}`, { headers: { Authorization: auth } });
            let body = {};
            try { body = await res.json(); } catch {}
            return { ok: res.ok, status: res.status, body };
        } catch (err) {
            return { ok: false, status: 0, body: { error: { message: String(err.message || err) } } };
        }
    };
    const report = { cloud: creds.cloud, totalInAccount: null, plan: '', folders: [], foldersNote: '', lists: {} };
    const usage = await get('/usage');
    if (usage.ok) { report.totalInAccount = Number(usage.body.resources); report.plan = String(usage.body.plan || ''); }
    else report.usageNote = `not allowed (${usage.status})`;
    const folders = await get('/folders');
    if (folders.ok) report.folders = (folders.body.folders || []).map((f) => String(f.path || f.name));
    else report.foldersNote = `not allowed (${folders.status})`;
    for (const kind of ['image/upload', 'video/upload', 'image/private', 'image/authenticated', 'video/authenticated', 'raw/upload']) {
        const r = await get(`/resources/${kind}?max_results=1`);
        if (!r.ok) report.lists[kind] = `not allowed (${r.status})`;
        else {
            const n = (r.body.resources || []).length;
            report.lists[kind] = n === 0 ? '0' : r.body.next_cursor ? `${n}+` : String(n);
        }
    }
    return report;
}

function formatDiagnosis(r) {
    const lines = [
        `Cloud: ${r.cloud}`,
        `Files in the whole account (usage): ${r.totalInAccount == null ? r.usageNote || 'unknown' : r.totalInAccount}${r.plan ? ` (plan ${r.plan})` : ''}`,
        `Top-level folders: ${r.folders.length ? r.folders.join(', ') : r.foldersNote || '(none)'}`,
        'What this key can list (first page):'
    ];
    Object.entries(r.lists).forEach(([k, v]) => lines.push(`  ${k}: ${v}`));
    return lines.join('\n');
}

const esc = (v) => String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// Small preview: fill 240x180; videos use a still frame (.jpg of the first second)
function thumbUrl(item) {
    const t = 'c_fill,w_240,h_180';
    if (item.type === 'video') return item.url.replace('/video/upload/', `/video/upload/${t},so_0/`).replace(/\.[a-z0-9]+(\?.*)?$/i, '.jpg');
    return item.url.replace('/image/upload/', `/image/upload/${t}/`);
}

function box(key, label, items, note) {
    const links = items.map((i) => i.url).join('\n');
    return `
<section class="box" id="svc-${esc(key)}">
  <header>
    <h2>${esc(label)} <span>${items.length}</span></h2>
    <button type="button" data-copy="${esc(key)}"${items.length ? '' : ' disabled'}>Copy links</button>
  </header>
  ${note ? `<p class="note">${note}</p>` : ''}
  <div class="thumbs">${items.map((i) => `<figure><img src="${esc(thumbUrl(i))}" alt="" loading="lazy">${i.type === 'video' ? '<b>Video</b>' : ''}${key === 'unsorted' ? `<figcaption>${esc(i.folder || '(no folder)')}</figcaption>` : ''}</figure>`).join('')}</div>
  <textarea readonly rows="4" data-service="${esc(key)}">${esc(links)}</textarea>
</section>`;
}

function buildPage(groups, meta) {
    const m = meta || {};
    const sections = SERVICES.map(([key, label]) => box(key, label, groups.services[key] || [], ''));
    // Unsorted: one box per folder, so a whole folder can be pasted into one service
    const byFolder = new Map();
    groups.unsorted.forEach((i) => {
        const f = i.folder || '(no folder)';
        if (!byFolder.has(f)) byFolder.set(f, []);
        byFolder.get(f).push(i);
    });
    [...byFolder.entries()].forEach(([folder, items], n) => {
        const key = `unsorted-${folder.replace(/[^a-z0-9_-]+/gi, '-').replace(/^-+|-+$/g, '') || `folder${n}`}`;
        sections.push(box(key, `Unsorted: ${folder}`, items, n === 0
            ? 'These files did not name a service in their folder, tags or file name. Look at the thumbnails, then paste each folder (or just the lines you want) into the right service in Galleries.'
            : ''));
    });
    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Cloudinary links for Galleries</title>
<style>
  :root { color-scheme: dark; --bg: #0b0b0c; --panel: #151517; --line: rgba(255,255,255,.09); --text: #f2f0ec; --muted: #9a9792; --accent: #e8741e; }
  * { box-sizing: border-box; }
  body { margin: 0; padding: 28px 16px 60px; background: var(--bg); color: var(--text); font: 15px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
  main { max-width: 1100px; margin: 0 auto; display: grid; gap: 16px; }
  h1 { margin: 0; font-size: 1.6rem; letter-spacing: -.02em; }
  .lead { margin: 4px 0 8px; color: var(--muted); max-width: 70ch; }
  .lead b { color: var(--text); }
  .box { background: var(--panel); border: 1px solid var(--line); border-radius: 14px; padding: 16px; }
  .box header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  h2 { margin: 0; font-size: 1.05rem; }
  h2 span { display: inline-grid; place-items: center; min-width: 26px; height: 22px; padding: 0 7px; margin-left: 6px; border-radius: 999px; background: rgba(255,255,255,.08); color: var(--muted); font-size: .78rem; }
  button { height: 36px; padding: 0 16px; border: 0; border-radius: 10px; background: var(--accent); color: #140c05; font-weight: 700; cursor: pointer; }
  button:disabled { opacity: .35; cursor: default; }
  button.done { background: #46c37b; }
  .note { margin: 10px 0 0; color: var(--muted); font-size: .88rem; }
  .thumbs { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0; }
  .thumbs:empty { display: none; }
  figure { position: relative; margin: 0; width: 120px; }
  figure img { width: 120px; height: 90px; object-fit: cover; border-radius: 8px; background: #222; display: block; }
  figure b { position: absolute; top: 4px; left: 4px; padding: 1px 6px; border-radius: 999px; background: rgba(0,0,0,.7); font-size: .68rem; }
  figcaption { font-size: .72rem; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  textarea { width: 100%; min-height: 70px; padding: 10px; border-radius: 10px; border: 1px solid var(--line); background: var(--bg); color: var(--muted); font: 12px/1.5 ui-monospace, Consolas, monospace; resize: vertical; }
</style>
</head>
<body>
<main>
  <div>
    <h1>Cloudinary links for Galleries</h1>
    <p class="lead">Cloud <b>${esc(m.cloud || '')}</b>, ${groups.total} files${groups.skipped ? ` (${groups.skipped} Cloudinary sample files left out)` : ''}, made ${esc(m.generatedAt || '')}. For each service: press <b>Copy links</b>, then in the admin open <b>Galleries</b>, pick the same service and paste into <b>Paste links</b>, then <b>Add links</b>. Links already in a gallery are skipped, so repeating is safe.</p>
  </div>
  ${sections.join('\n')}
</main>
<script>
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-copy]');
    if (!btn) return;
    var box = document.querySelector('textarea[data-service="' + btn.getAttribute('data-copy') + '"]');
    if (!box) return;
    box.select();
    var done = function () { btn.textContent = 'Copied'; btn.classList.add('done'); setTimeout(function () { btn.textContent = 'Copy links'; btn.classList.remove('done'); }, 1800); };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(box.value).then(done, function () { document.execCommand('copy'); done(); });
    else { document.execCommand('copy'); done(); }
  });
</script>
</body>
</html>
`;
}

async function main() {
    let creds;
    try {
        creds = readCredentials(process.env);
    } catch (err) {
        console.error(err.message);
        process.exitCode = 1;
        return;
    }
    if (process.argv.includes('--check')) {
        console.log(`Checking what this key can see in "${creds.cloud}" (read-only)...`);
        console.log(formatDiagnosis(await diagnose(creds)));
        return;
    }
    console.log(`Reading Cloudinary account "${creds.cloud}" (read-only)...`);
    let resources;
    try {
        resources = await listAllResources(creds);
    } catch (err) {
        console.error(err.message);
        process.exitCode = 1;
        return;
    }
    const groups = groupResources(resources);
    const out = path.resolve(process.cwd(), 'cloudinary-links.html');
    fs.writeFileSync(out, buildPage(groups, { cloud: creds.cloud, generatedAt: new Date().toLocaleString() }));
    const counts = Object.entries(groups.services).filter(([, v]) => v.length).map(([k, v]) => `${k} ${v.length}`).join(', ');
    console.log(`Found ${groups.total} files. ${counts || 'No service folders matched.'}${groups.unsorted.length ? `, unsorted ${groups.unsorted.length}` : ''}.`);
    console.log(`Open this page in your browser: ${out}`);
}

if (require.main === module) main();

module.exports = { serviceForFolder, folderOf, groupResources, readCredentials, listAllResources, buildPage, thumbUrl, diagnose, formatDiagnosis, SERVICES };
