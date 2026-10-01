// @ts-check
// Service galleries (docs/superpowers/specs/2026-09-30-service-galleries-design.md)
const { test, expect } = require('@playwright/test');
const { mockSupabase, loginAdmin, galleryRow } = require('./helpers/mock-supabase');

const cards = (page) => page.locator('#hmScGrid .hm-sc-card');
const cardTitles = (page) => page.locator('#hmScGrid .hm-sc-card h3').allTextContents();

async function openHome(page) {
    await page.goto('/', { waitUntil: 'load' });
    await page.locator('#hmScGrid').scrollIntoViewIfNeeded();
}

test.describe('Service galleries — public', () => {
    test('shows one card per service from gallery rows', async ({ page }) => {
        await mockSupabase(page, {
            installations: [
                galleryRow({ category: 'cctv', cover: true }),
                galleryRow({ category: 'cctv' }),
                galleryRow({ category: 'cctv', mediaType: 'video', src: 'https://res.cloudinary.com/daovfi3i5/video/upload/v1/v.mp4' }),
                galleryRow({ category: 'airconditioning' })
            ]
        });
        await openHome(page);
        await expect(cards(page)).toHaveCount(2);
        const first = cards(page).first();
        await expect(first.locator('h3')).toHaveText('CCTV');
        await expect(first.locator('p')).toContainText('2 photos · 1 video');
        await expect(first).toHaveAttribute('data-sc-open', 'cctv');
    });

    test('showcase wording talks about services, not projects', async ({ page }) => {
        await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' }), galleryRow({ category: 'solar' })] });
        await openHome(page);
        await expect(cards(page)).toHaveCount(2);
        await expect(page.locator('#hmScChips [data-sc-filter="all"]')).toContainText('All services');
        await expect(page.locator('#hmScCount')).toContainText('2 services');
        await expect(cards(page).first().locator('.hm-sc-cat')).toBeHidden(); // title already names the service
    });

    test('card opens the service gallery', async ({ page }) => {
        await mockSupabase(page, {
            installations: [galleryRow({ category: 'cctv' }), galleryRow({ category: 'cctv' }), galleryRow({ category: 'cctv' })]
        });
        await openHome(page);
        await expect(cards(page)).toHaveCount(1);
        await cards(page).first().click();
        await expect(page.locator('#hmGallery')).toBeVisible();
        await expect(page.locator('#hmGalCounter')).toHaveText('1 / 3');
        await expect.poll(() => page.evaluate(() => location.hash)).toBe('#project=cctv');
    });

    test('falls back to built-in projects when no gallery rows', async ({ page }) => {
        await mockSupabase(page, { installations: [] });
        await openHome(page);
        await expect.poll(async () => (await cardTitles(page)).length).toBeGreaterThan(0);
        expect(await cardTitles(page)).toContain('AI-Assisted Monitoring');
    });

    test('falls back when Supabase is unreachable', async ({ page }) => {
        const errors = [];
        page.on('pageerror', (e) => errors.push(e.message));
        const sb = await mockSupabase(page, {});
        sb.offlineTables.add('installations');
        await openHome(page);
        await expect.poll(async () => (await cardTitles(page)).length).toBeGreaterThan(0);
        expect(errors).toEqual([]);
    });

    test('legacy localStorage projects are ignored when gallery rows exist', async ({ page }) => {
        await page.addInitScript(() => {
            localStorage.setItem('hailifu_projects', JSON.stringify([{ id: 'old1', title: 'Old Local Project', category: 'cctv', mediaSrc: '/logo.webp', mediaType: 'image', showInShowcase: true }]));
        });
        await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' })] });
        await openHome(page);
        await expect(cards(page)).toHaveCount(1);
        expect(await cardTitles(page)).not.toContain('Old Local Project');
    });
});

// ---------- admin ----------
const fs = require('fs');
const path = require('path');
const PNG_1PX = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
const png = (name) => ({ name, mimeType: 'image/png', buffer: PNG_1PX });
const mp4 = (name) => ({ name, mimeType: 'video/mp4', buffer: Buffer.from('00000018667479706d703432', 'hex') });
const galleryRows = (sb) => sb.db.installations.filter((r) => r.data && r.data.kind === 'gallery');

async function openGalleriesTab(page) {
    // on phones the sidebar is a drawer behind the menu button, as for a real user
    const menuBtn = page.locator('#hmAdminMenuBtn');
    if (await menuBtn.isVisible()) {
        await menuBtn.click();
        await expect(page.locator('#adminPanel.is-nav-open')).toHaveCount(1);
    }
    await page.click('#adminPanel .nav-item[data-admin-tab="projects"]');
    await page.waitForSelector('#sgAdmin', { timeout: 15000 });
}

test.describe('Service galleries — admin', () => {
    test('galleries tab lists items by service', async ({ page }) => {
        await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' }), galleryRow({ category: 'cctv' }), galleryRow({ category: 'solar' })] });
        await loginAdmin(page);
        await expect(page.locator('#adminPanel .nav-item[data-admin-tab="projects"]')).toContainText('Galleries');
        await openGalleriesTab(page);
        await expect(page.locator('.sg-tab[data-sg-cat="cctv"] span')).toHaveText('2');
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(2);
        await page.click('.sg-tab[data-sg-cat="solar"]');
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(1);
    });

    test('upload photo and video into CCTV', async ({ page, browser }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' }), galleryRow({ category: 'cctv' })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await page.setInputFiles('#sgFile', [png('site photo.png'), mp4('gate.mp4')]);
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(4, { timeout: 15000 });
        const paths = [...sb.storage.keys()];
        expect(paths.length).toBe(2);
        paths.forEach((p) => expect(p.startsWith('gallery/cctv/')).toBeTruthy());
        const added = galleryRows(sb).filter((r) => r.data.source === 'supabase');
        expect(added.length).toBe(2);
        added.forEach((r) => { expect(r.data.category).toBe('cctv'); expect(paths).toContain(r.data.storagePath); });
        expect(added.map((r) => r.data.mediaType).sort()).toEqual(['image', 'video']);
        // a visitor sees it
        const visitor = await browser.newPage();
        await mockSupabase(visitor, sb.db);
        await openHome(visitor);
        await expect(cards(visitor).first().locator('p')).toContainText('3 photos · 1 video');
        await visitor.close();
    });

    test('bad file does not stop the others', async ({ page }, testInfo) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        fs.mkdirSync(testInfo.outputDir, { recursive: true });
        const file = (name, buf) => { const p = path.join(testInfo.outputDir, name); fs.writeFileSync(p, buf); return p; };
        // Playwright cannot mix buffers and paths, and a 61 MB buffer must be a path
        await page.setInputFiles('#sgFile', [
            file('notes.pdf', Buffer.from('%PDF-1.4')),
            file('big.mp4', Buffer.alloc(61 * 1024 * 1024)),
            file('ok.png', PNG_1PX)
        ]);
        await expect(page.locator('#sgQueue')).toContainText('Only photos and videos', { timeout: 15000 });
        await expect(page.locator('#sgQueue')).toContainText('Too big (max 50 MB)');
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(2, { timeout: 15000 });
        expect(galleryRows(sb).length).toBe(2);
    });

    test('not allowed upload leaves nothing behind', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' })] });
        sb.refuseUploads = true;
        await loginAdmin(page);
        await openGalleriesTab(page);
        await page.setInputFiles('#sgFile', [png('a.png')]);
        await expect(page.locator('#sgQueue')).toContainText('Not allowed. Sign in again as admin.', { timeout: 15000 });
        expect(galleryRows(sb).length).toBe(1);
    });

    test('tab chosen right after sign-in is not reset to the Dashboard', async ({ page }) => {
        await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' })] });
        await page.goto('/hailifu=access', { waitUntil: 'load' });
        await page.fill('#hmLoginEmail', 'owner@example.com');
        await page.fill('#hmLoginPassword', 'correct-horse');
        await page.click('.hm-login-submit');
        await page.waitForFunction(() => document.getElementById('adminPanel')?.classList.contains('active'));
        const times = [];
        await page.exposeFunction('__titleSeen', (t) => times.push(t));
        await page.evaluate(() => new MutationObserver(() => window.__titleSeen(document.getElementById('hmAdminPageTitle').textContent))
            .observe(document.getElementById('hmAdminPageTitle'), { childList: true, characterData: true, subtree: true }));
        for (const delay of [0, 300, 800]) {
            await page.waitForTimeout(delay);
            await page.evaluate(() => document.querySelector('#adminPanel .nav-item[data-admin-tab="projects"]').click());
        }
        await page.waitForTimeout(3000); // outlast the delayed "open admin" timers
        expect(times.filter((t, i) => i > 0 && t === 'Dashboard' && times[i - 1] === 'Galleries')).toEqual([]);
        await expect(page.locator('#hmAdminPageTitle')).toHaveText('Galleries');
    });

    test('offline shows state with retry', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' })] });
        await loginAdmin(page);
        sb.offlineTables.add('installations');
        await openGalleriesTab(page);
        await expect(page.locator('#sgAdmin .hm-state.is-offline')).toContainText("Storage can't be reached");
        sb.offlineTables.delete('installations');
        await page.click('[data-sg-action="retry"]');
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(1);
    });
});

test.describe('Service galleries — links and arranging', () => {
    const rowById = (sb, id) => sb.db.installations.find((r) => r.id === id);

    test('add Cloudinary and YouTube links', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await page.fill('#sgLinks', [
            'https://res.cloudinary.com/daovfi3i5/image/upload/v1/a.jpg',
            'https://youtu.be/dQw4w9WgXcQ',
            'https://res.cloudinary.com/daovfi3i5/video/upload/v1/b.mp4'
        ].join('\n'));
        await page.click('#sgLinksForm button[type="submit"]');
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(4);
        const added = galleryRows(sb).slice(1).map((r) => [r.data.mediaType, r.data.source, r.data.category]);
        expect(added).toEqual([['image', 'cloudinary', 'cctv'], ['youtube', 'youtube', 'cctv'], ['video', 'cloudinary', 'cctv']]);
        await expect(page.locator('#sgLinks')).toHaveValue('');
    });

    test('bad and duplicate links are reported', async ({ page }) => {
        const existing = 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/exists.jpg';
        const sb = await mockSupabase(page, { installations: [galleryRow({ category: 'cctv', src: existing })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await page.fill('#sgLinks', ['javascript:alert(1)', 'http://x.com/a.jpg', '', existing].join('\n'));
        await page.click('#sgLinksForm button[type="submit"]');
        await expect(page.locator('#sgLinksMsg')).toContainText('2 not added');
        await expect(page.locator('#sgLinksMsg')).toContainText('1 already in the gallery');
        expect(galleryRows(sb).length).toBe(1);
    });

    test('caption, featured, cover, reorder, move', async ({ page, browser }) => {
        const a = galleryRow({ id: 'g_a', category: 'cctv', order: 1, cover: true, src: 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/a.jpg' });
        const b = galleryRow({ id: 'g_b', category: 'cctv', order: 2, src: 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/b.jpg' });
        const c = galleryRow({ id: 'g_c', category: 'cctv', order: 3, src: 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/c.jpg' });
        const sb = await mockSupabase(page, { installations: [a, b, c] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        const tile = (id) => page.locator(`#sgGrid .sg-tile[data-sg-id="${id}"]`);

        await tile('g_b').locator('.sg-caption').fill('Villa, East Legon');
        await tile('g_b').locator('.sg-caption').blur();
        await expect.poll(() => rowById(sb, 'g_b').data.caption).toBe('Villa, East Legon');

        await tile('g_b').locator('[data-sg-action="feature"]').click();
        await expect.poll(() => rowById(sb, 'g_b').data.featured).toBe(true);

        await tile('g_b').locator('[data-sg-action="cover"]').click();
        await expect.poll(() => [rowById(sb, 'g_a').data.cover, rowById(sb, 'g_b').data.cover]).toEqual([false, true]);
        const visitor = await browser.newPage();
        await mockSupabase(visitor, sb.db);
        await openHome(visitor);
        await expect(cards(visitor).first().locator('.hm-sc-media img')).toHaveAttribute('src', /b\.jpg/);
        await visitor.close();

        await tile('g_c').locator('[data-sg-action="left"]').click();
        await expect.poll(() => rowById(sb, 'g_c').data.order < rowById(sb, 'g_b').data.order).toBe(true);
        await expect(page.locator('#sgGrid .sg-tile').nth(1)).toHaveAttribute('data-sg-id', 'g_c');

        // 2026-10-01: the "Move to…" dropdown became a Move button with a service list
        await tile('g_a').locator('[data-sg-action="move-open"]').click();
        await tile('g_a').locator('.sg-move-menu [data-sg-move-to="solar"]').click();
        await expect.poll(() => rowById(sb, 'g_a').data.category).toBe('solar');
        await expect(tile('g_a')).toHaveCount(0);
        await expect(page.locator('.sg-tab[data-sg-cat="solar"] span')).toHaveText('1');
    });
});

test.describe('Service galleries — delete', () => {
    const tile = (page, id) => page.locator(`#sgGrid .sg-tile[data-sg-id="${id}"]`);
    async function deleteTile(page, id) {
        await tile(page, id).locator('[data-sg-action="ask-delete"]').click();
        await expect(tile(page, id).locator('.sg-confirm')).toBeVisible();
        await tile(page, id).locator('[data-sg-action="confirm-delete"]').click();
    }

    test('delete removes row, file and public item', async ({ page, browser }) => {
        const sb = await mockSupabase(page, { installations: [
            galleryRow({ id: 'g_up', category: 'cctv', source: 'supabase', storagePath: 'gallery/cctv/x.webp', src: 'https://example.supabase.co/storage/v1/object/public/media/gallery/cctv/x.webp' }),
            galleryRow({ id: 'g_keep', category: 'cctv' })
        ] });
        sb.storage.set('gallery/cctv/x.webp', { size: 10, type: 'image/webp' });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await deleteTile(page, 'g_up');
        await expect(tile(page, 'g_up')).toHaveCount(0);
        expect(sb.db.installations.map((r) => r.id)).toEqual(['g_keep']);
        await expect.poll(() => sb.storage.has('gallery/cctv/x.webp')).toBe(false);
        const visitor = await browser.newPage();
        await mockSupabase(visitor, sb.db);
        await openHome(visitor);
        await expect(cards(visitor).first().locator('p')).toContainText('1 photo');
        await visitor.close();
    });

    test('refused delete keeps the item', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ id: 'g_1', category: 'cctv' })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        sb.refuseDeletes = true;
        await deleteTile(page, 'g_1');
        await expect(page.locator('#adminMediaToast')).toContainText('Could not delete');
        await expect(tile(page, 'g_1')).toHaveCount(1);
        expect(sb.db.installations.length).toBe(1);
    });

    test('cloudinary item delete keeps the Cloudinary file', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ id: 'g_cl', category: 'cctv', source: 'cloudinary' })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await deleteTile(page, 'g_cl');
        await expect(tile(page, 'g_cl')).toHaveCount(0);
        expect(sb.db.installations.length).toBe(0);
        expect(sb.calls.filter((c) => c.startsWith('DELETE /storage/'))).toEqual([]);
    });

    test('deleting cover and last item', async ({ page, browser }) => {
        const sb = await mockSupabase(page, { installations: [
            galleryRow({ id: 'g_cov', category: 'cctv', cover: true, order: 1, src: 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/cov.jpg' }),
            galleryRow({ id: 'g_next', category: 'cctv', order: 2, src: 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/next.jpg' }),
            galleryRow({ id: 'g_sol', category: 'solar', order: 1 })
        ] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await deleteTile(page, 'g_cov');
        await expect(tile(page, 'g_cov')).toHaveCount(0);
        const v1 = await browser.newPage();
        await mockSupabase(v1, sb.db);
        await openHome(v1);
        await expect(cards(v1).first().locator('.hm-sc-media img')).toHaveAttribute('src', /next\.jpg/);
        await v1.close();
        await deleteTile(page, 'g_next');
        await expect(tile(page, 'g_next')).toHaveCount(0);
        const v2 = await browser.newPage();
        await mockSupabase(v2, sb.db);
        await openHome(v2);
        await expect(cards(v2)).toHaveCount(1);
        await expect(cards(v2).first().locator('h3')).toHaveText('Solar');
        await v2.close();
    });
});

test.describe('Service galleries — import and media library', () => {
    test('import copies current photos once', async ({ page }) => {
        const legacy = { id: 'legacy1', data: { id: 'legacy1', title: 'Old gate job', category: 'gates', mediaSrc: 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/old-gate.jpg', mediaType: 'image' }, updated_at: new Date().toISOString() };
        const sb = await mockSupabase(page, { installations: [legacy] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await page.click('[data-sg-action="import"]');
        await expect(page.locator('#adminMediaToast')).toContainText(/Imported \d+ photo/);
        const rows = galleryRows(sb);
        expect(rows.length).toBeGreaterThan(1);
        const allowed = ['cctv', 'electrical', 'fencing', 'airconditioning', 'solar', 'gates', 'blindcurtain', 'smarthome'];
        rows.forEach((r) => expect(allowed).toContain(r.data.category));
        expect(rows.some((r) => r.data.src.includes('old-gate.jpg') && r.data.category === 'gates' && r.data.source === 'cloudinary')).toBeTruthy();
        // the site's own built-in photos are stored root-relative, never tied to the domain used while importing
        expect(rows.filter((r) => /localhost|127\.0\.0\.1/.test(r.data.src))).toEqual([]);
        expect(rows.some((r) => r.data.src.startsWith('/assets/'))).toBeTruthy();
        const before = rows.length;
        await page.click('[data-sg-action="import"]');
        await expect(page.locator('#adminMediaToast')).toContainText('Imported 0 photos');
        expect(galleryRows(sb).length).toBe(before);
    });

    test('media library add to gallery', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [] });
        sb.storage.set('x.webp', { size: 1200, type: 'image/webp' });
        await loginAdmin(page);
        await page.click('#adminPanel .nav-item[data-admin-tab="media"]');
        const tileSel = '#hmMedia .hm-tile[data-media-name="x.webp"]';
        await page.waitForSelector(tileSel);
        await page.click(`${tileSel} [data-hm-action="to-gallery"]`);
        await page.selectOption(`${tileSel} .hm-togal select`, 'gates');
        await page.click(`${tileSel} [data-hm-action="to-gallery-add"]`);
        await expect(page.locator('#adminMediaToast')).toContainText('Added to Gate automation gallery');
        const rows = galleryRows(sb);
        expect(rows.length).toBe(1);
        expect(rows[0].data).toMatchObject({ category: 'gates', storagePath: 'x.webp', source: 'supabase', mediaType: 'image' });
        expect(rows[0].data.src).toMatch(/\/storage\/v1\/object\/public\/media\/x\.webp$/);
    });
});

test.describe('Service galleries — featured and phones', () => {
    const slideTitles = (page) => page.locator('#featured-work .featured-loop-slide .featured-card-title').allTextContents();

    test('featured items drive Featured Work', async ({ page }) => {
        await mockSupabase(page, { installations: [
            galleryRow({ category: 'cctv', featured: true }),
            galleryRow({ category: 'solar', featured: true }),
            galleryRow({ category: 'gates' }),
            galleryRow({ category: 'cctv' })
        ] });
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('#featured-work .featured-loop-slide')).toHaveCount(2, { timeout: 15000 });
        expect((await slideTitles(page)).map((t) => t.trim()).sort()).toEqual(['CCTV', 'Solar']);
    });

    test('without starred items each service cover is featured', async ({ page }) => {
        await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' }), galleryRow({ category: 'gates' }), galleryRow({ category: 'gates' })] });
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('#featured-work .featured-loop-slide')).toHaveCount(2, { timeout: 15000 });
        expect((await slideTitles(page)).map((t) => t.trim()).sort()).toEqual(['CCTV', 'Gate automation']);
    });

    test('phone layout has no sideways scroll', async ({ page }, testInfo) => {
        await page.setViewportSize({ width: 390, height: 844 });
        const rows = [galleryRow({ category: 'cctv', caption: 'Office CCTV, Spintex' }), galleryRow({ category: 'solar' }), galleryRow({ category: 'cctv', mediaType: 'video', src: 'https://res.cloudinary.com/daovfi3i5/video/upload/v1/v.mp4' })];
        await mockSupabase(page, { installations: rows });
        await openHome(page);
        await expect(cards(page)).toHaveCount(2);
        expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
        await page.screenshot({ path: testInfo.outputPath('public-390.png') });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(2);
        const overflow = await page.evaluate(() => { const m = document.getElementById('adminMainContent'); return Math.max(document.documentElement.scrollWidth - innerWidth, m.scrollWidth - m.clientWidth); });
        expect(overflow).toBeLessThanOrEqual(0);
        await page.screenshot({ path: testInfo.outputPath('admin-390.png') });
    });
});

test.describe('Service galleries — review fixes', () => {
    const tile = (page, id) => page.locator(`#sgGrid .sg-tile[data-sg-id="${id}"]`);

    test('captions with quotes survive and unsafe links are never rendered', async ({ page }) => {
        await mockSupabase(page, { installations: [
            galleryRow({ id: 'g_q', category: 'cctv', caption: 'Villa "Sunrise", East Legon' }),
            galleryRow({ id: 'g_js', category: 'cctv', src: 'javascript:alert(1)' }),
            galleryRow({ id: 'g_th', category: 'cctv', thumb: 'javascript:alert(2)' })
        ] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await expect(tile(page, 'g_q').locator('.sg-caption')).toHaveValue('Villa "Sunrise", East Legon');
        await expect(tile(page, 'g_js')).toHaveCount(0);
        const srcs = await page.$$eval('#sgGrid img', (n) => n.map((i) => i.getAttribute('src')));
        srcs.forEach((s) => expect(s).not.toMatch(/^javascript:/i));
    });

    test('media library file is not deleted with its gallery item, and cannot be added twice', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [] });
        sb.storage.set('x.webp', { size: 1200, type: 'image/webp' });
        await loginAdmin(page);
        await page.click('#adminPanel .nav-item[data-admin-tab="media"]');
        const t = '#hmMedia .hm-tile[data-media-name="x.webp"]';
        await page.waitForSelector(t);
        for (let i = 0; i < 2; i++) {
            await page.click(`${t} [data-hm-action="to-gallery"]`);
            await page.selectOption(`${t} .hm-togal select`, i === 0 ? 'gates' : 'solar');
            await page.click(`${t} [data-hm-action="to-gallery-add"]`);
            await expect(page.locator('#adminMediaToast')).toContainText(i === 0 ? 'Added to' : 'already in a gallery');
            await page.waitForTimeout(300);
        }
        expect(galleryRows(sb).length).toBe(1);
        const id = galleryRows(sb)[0].id;
        await openGalleriesTab(page);
        await page.click('.sg-tab[data-sg-cat="gates"]');
        await tile(page, id).locator('[data-sg-action="ask-delete"]').click();
        await tile(page, id).locator('[data-sg-action="confirm-delete"]').click();
        await expect(tile(page, id)).toHaveCount(0);
        expect(sb.storage.has('x.webp')).toBe(true);
    });

    test('typing the next caption is not wiped when the previous one saves', async ({ page }) => {
        await mockSupabase(page, { installations: [galleryRow({ id: 'g_1', category: 'cctv', order: 1 }), galleryRow({ id: 'g_2', category: 'cctv', order: 2 })] });
        await page.route('**/rest/v1/installations*', async (route) => {
            if (route.request().method() === 'POST') await new Promise((r) => setTimeout(r, 600));
            await route.fallback();
        });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await tile(page, 'g_1').locator('.sg-caption').fill('First caption');
        await page.keyboard.press('Tab'); // change fires, save starts
        await tile(page, 'g_2').locator('.sg-caption').click();
        await page.keyboard.type('Second caption in progress', { delay: 40 });
        await page.waitForTimeout(1200); // first save finishes during/after typing
        await expect(tile(page, 'g_2').locator('.sg-caption')).toHaveValue('Second caption in progress');
        await expect(tile(page, 'g_2').locator('.sg-caption')).toBeFocused();
    });

    test('visitors never see old local projects while galleries load', async ({ page }) => {
        await page.addInitScript(() => {
            localStorage.setItem('hailifu_projects', JSON.stringify([{ id: 'old1', title: 'Old Local Project', category: 'cctv', mediaSrc: '/logo.webp', mediaType: 'image', showInShowcase: true }]));
        });
        await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' })] });
        await page.route('**/rest/v1/installations*', async (route) => { await new Promise((r) => setTimeout(r, 1800)); await route.fallback(); });
        const seen = [];
        await page.exposeFunction('__cardSeen', (t) => seen.push(t));
        await page.addInitScript(() => {
            document.addEventListener('DOMContentLoaded', () => {
                new MutationObserver(() => document.querySelectorAll('#hmScGrid .hm-sc-card h3').forEach((h) => window.__cardSeen(h.textContent)))
                    .observe(document.body, { childList: true, subtree: true });
            });
        });
        await page.goto('/', { waitUntil: 'load' });
        await expect(cards(page)).toHaveCount(1, { timeout: 15000 });
        await expect(cards(page).first().locator('h3')).toHaveText('CCTV');
        expect(seen).not.toContain('Old Local Project');
    });

    test('captions show under the photo in the public gallery', async ({ page }) => {
        await mockSupabase(page, { installations: [galleryRow({ category: 'cctv', cover: true, caption: 'Villa, East Legon' }), galleryRow({ category: 'cctv', caption: 'Shop, Tema' })] });
        await openHome(page);
        await cards(page).first().click();
        await expect(page.locator('#hmGalDesc')).toContainText('Villa, East Legon');
        await page.keyboard.press('ArrowRight');
        await expect(page.locator('#hmGalDesc')).toContainText('Shop, Tema');
    });
});

test.describe('Service galleries — dashboard', () => {
    const kpi = (page) => page.locator('#hmDash .hm-kpi[data-tab="projects"]');

    test('dashboard counts gallery items, not old projects', async ({ page }) => {
        await mockSupabase(page, { installations: [
            galleryRow({ category: 'cctv' }), galleryRow({ category: 'cctv' }),
            galleryRow({ category: 'cctv', mediaType: 'video', src: 'https://res.cloudinary.com/daovfi3i5/video/upload/v1/v.mp4' }),
            galleryRow({ category: 'solar' })
        ] });
        await loginAdmin(page);
        await expect(kpi(page).locator('.hm-kpi-label')).toHaveText('Gallery');
        await expect(kpi(page).locator('.hm-kpi-value')).toHaveAttribute('data-hm-count', '4');
        await expect(kpi(page).locator('.hm-kpi-note')).toHaveText('across 2 services');
        await expect(page.locator('#hmDash .hm-action[data-tab="projects"]')).toContainText('Manage galleries');
    });

    test('before any gallery items the dashboard points to Import', async ({ page }) => {
        await mockSupabase(page, { installations: [] });
        await loginAdmin(page);
        await expect(kpi(page).locator('.hm-kpi-label')).toHaveText('Gallery');
        await expect(kpi(page).locator('.hm-kpi-value')).toHaveAttribute('data-hm-count', '0');
        await expect(kpi(page).locator('.hm-kpi-note')).toHaveText('none yet: import in Galleries');
    });

    test('dashboard updates after an upload without reloading', async ({ page }) => {
        await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' })] });
        await loginAdmin(page);
        await expect(kpi(page).locator('.hm-kpi-value')).toHaveAttribute('data-hm-count', '1');
        await openGalleriesTab(page);
        await page.setInputFiles('#sgFile', [png('new.png')]);
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(2, { timeout: 15000 });
        await page.click('#adminPanel .nav-item[data-admin-tab="overview"]');
        await expect(kpi(page).locator('.hm-kpi-value')).toHaveAttribute('data-hm-count', '2');
    });
});

test.describe('Service galleries — minor fixes', () => {
    const tile = (page, id) => page.locator(`#sgGrid .sg-tile[data-sg-id="${id}"]`);

    test('a file whose save is refused is removed from storage again', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ category: 'cctv' })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        sb.refuseWrites = true; // upload works, saving the row is refused
        await page.setInputFiles('#sgFile', [png('a.png')]);
        await expect(page.locator('#sgQueue')).toContainText('Not allowed', { timeout: 15000 });
        await expect.poll(() => sb.storage.size).toBe(0);
        expect(galleryRows(sb).length).toBe(1);
    });

    test('several files uploaded together keep distinct positions', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ category: 'cctv', order: 1 })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await page.setInputFiles('#sgFile', [png('a.png'), png('b.png'), png('c.png'), png('d.png')]);
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(5, { timeout: 15000 });
        const orders = galleryRows(sb).map((r) => r.data.order);
        expect(new Set(orders).size).toBe(orders.length);
    });

    test('links that are not photos or videos, or YouTube without a video, are refused', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ category: 'cctv', mediaType: 'youtube', source: 'youtube', src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await page.fill('#sgLinks', [
            'https://example.com/about',
            'https://www.youtube.com/@hailifu',
            'https://youtu.be/dQw4w9WgXcQ',
            'https://example.com/photos/site.jpg?w=1200'
        ].join('\n'));
        await page.click('#sgLinksForm button[type="submit"]');
        await expect(page.locator('#sgLinksMsg')).toContainText('1 added');
        await expect(page.locator('#sgLinksMsg')).toContainText('2 not added');
        await expect(page.locator('#sgLinksMsg')).toContainText('1 already in the gallery');
        const srcs = galleryRows(sb).map((r) => r.data.src);
        expect(srcs.some((u) => u.includes('site.jpg'))).toBeTruthy();
        expect(srcs.length).toBe(2);
    });

    test('public gallery follows the admin order; cover only sets the card photo', async ({ page }) => {
        await mockSupabase(page, { installations: [
            galleryRow({ category: 'cctv', order: 1, caption: 'First', src: 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/first.jpg' }),
            galleryRow({ category: 'cctv', order: 2, caption: 'Second', cover: true, src: 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/second.jpg' })
        ] });
        await openHome(page);
        await expect(cards(page).first().locator('.hm-sc-media img')).toHaveAttribute('src', /second\.jpg/);
        await cards(page).first().click();
        await expect(page.locator('#hmGalDesc')).toContainText('First');
    });

    test('refused caption, star and cover saves change nothing', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ id: 'g_a', category: 'cctv', cover: true }), galleryRow({ id: 'g_b', category: 'cctv' })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        sb.refuseWrites = true;
        await tile(page, 'g_b').locator('.sg-caption').fill('Should not save');
        await tile(page, 'g_b').locator('.sg-caption').blur();
        await expect(page.locator('#adminMediaToast')).toContainText('Not allowed');
        await tile(page, 'g_b').locator('[data-sg-action="feature"]').click();
        await tile(page, 'g_b').locator('[data-sg-action="cover"]').click();
        await page.waitForTimeout(800);
        const b = sb.db.installations.find((r) => r.id === 'g_b').data;
        expect([b.caption, b.featured, b.cover]).toEqual(['', false, false]);
        await expect(tile(page, 'g_b').locator('[data-sg-action="feature"]')).toHaveAttribute('aria-pressed', 'false');
        await expect(tile(page, 'g_a')).toHaveClass(/is-cover/);
    });

    test('deleting every gallery item brings the built-in photos back', async ({ page, browser }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ id: 'g_only', category: 'cctv' })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await tile(page, 'g_only').locator('[data-sg-action="ask-delete"]').click();
        await tile(page, 'g_only').locator('[data-sg-action="confirm-delete"]').click();
        await expect(tile(page, 'g_only')).toHaveCount(0);
        await expect(page.locator('#sgGrid .sg-empty')).toBeVisible();
        const visitor = await browser.newPage();
        await mockSupabase(visitor, sb.db);
        await openHome(visitor);
        await expect.poll(async () => (await cardTitles(visitor)).length).toBeGreaterThan(1);
        expect(await cardTitles(visitor)).toContain('AI-Assisted Monitoring');
        await visitor.close();
    });
});

module.exports = { cards, cardTitles, openHome, loginAdmin, mockSupabase, galleryRow, openGalleriesTab, galleryRows, png, mp4 };
