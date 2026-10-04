// @ts-check
// 2026-10-04: hero video the owner can change (Site Control -> "Hero video", adverts row
// __hero_settings { videoUrl }) and the phone-speed fix for Featured Work (only the shown
// slide and its two neighbours are drawn).
const { test, expect } = require('@playwright/test');
const { mockSupabase, loginAdmin, galleryRow } = require('./helpers/mock-supabase');

const heroRow = (videoUrl) => ({ id: '__hero_settings', data: { id: '__hero_settings', type: 'settings', videoUrl }, updated_at: '' });
const heroSrc = (page) => page.locator('#heroVideo source').getAttribute('src');
// no real video bytes needed: answer every video request with an empty mp4
const serveVideos = (page) => page.route(/\.(mp4|webm|mov)(\?|#|$)|\/storage\/v1\/object\/public\/media\/site\/hero-/, (route) => (route.request().method() === 'GET'
    ? route.fulfill({ status: 200, contentType: 'video/mp4', body: '' })
    : route.fallback())); // uploads go on to the mocked Supabase

test.describe('Hero video the owner can change', () => {
    test('a saved hero video plays on the homepage and is remembered for the next visit', async ({ page }) => {
        const url = 'https://res.cloudinary.com/daovfi3i5/video/upload/v1/new-hero.mp4';
        await mockSupabase(page, { adverts: [heroRow(url)] });
        await serveVideos(page);
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        await expect.poll(() => heroSrc(page), { timeout: 15000 }).toBe(url);
        expect(await page.evaluate(() => localStorage.getItem('hailifu_hero_video_v1'))).toBe(url);

        // next visit: the inline script picks it before the built-in video loads
        await page.reload({ waitUntil: 'domcontentloaded' });
        expect(await heroSrc(page)).toBe(url);
    });

    test('original video when nothing is saved (and a stale copy is dropped)', async ({ page }) => {
        await page.addInitScript(() => { try { if (!sessionStorage.getItem('seeded')) { sessionStorage.setItem('seeded', '1'); localStorage.setItem('hailifu_hero_video_v1', 'https://example.com/old.mp4'); } } catch {} });
        await mockSupabase(page);
        await serveVideos(page);
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        await expect.poll(() => heroSrc(page), { timeout: 15000 }).toBe('/cover-video.mp4');
        expect(await page.evaluate(() => localStorage.getItem('hailifu_hero_video_v1'))).toBeNull();
    });

    test('owner changes it in Site Control: upload, link, library, original', async ({ page }) => {
        const sb = await mockSupabase(page);
        sb.storage.set('library-clip.mp4', { size: 1000, type: 'video/mp4' });
        await serveVideos(page);
        await loginAdmin(page);
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="site-control"]');
        await page.waitForSelector('#hvCard');
        const saved = () => (sb.db.adverts.find((r) => r.id === '__hero_settings') || {}).data?.videoUrl;
        await expect(page.locator('#hvPreview video')).toHaveAttribute('src', '/cover-video.mp4');

        // a photo is refused
        await page.setInputFiles('#hvFile', { name: 'shop.png', mimeType: 'image/png', buffer: Buffer.from('x') });
        await expect(page.locator('#hvStatus')).toContainText('Choose a video');

        await page.setInputFiles('#hvFile', { name: 'My Clip.mp4', mimeType: 'video/mp4', buffer: Buffer.alloc(2048) });
        await expect.poll(() => saved() || '').toContain('site/hero-');
        await expect(page.locator('#hvPreview video')).toHaveAttribute('src', /site\/hero-/);
        const uploaded = [...sb.storage.entries()].find(([k]) => k.startsWith('site/hero-'));
        expect(uploaded && uploaded[1].type).toBe('video/mp4');
        expect(await heroSrc(page)).toContain('site/hero-');

        await page.fill('#hvLink', 'https://res.cloudinary.com/daovfi3i5/video/upload/v1/pasted.mp4');
        await page.click('[data-hv-action="link"]');
        await expect.poll(saved).toBe('https://res.cloudinary.com/daovfi3i5/video/upload/v1/pasted.mp4');
        await expect.poll(() => [...sb.storage.keys()].some((k) => k.startsWith('site/hero-'))).toBe(false); // replaced upload removed

        await page.fill('#hvLink', 'javascript:alert(1)');
        await page.click('[data-hv-action="link"]');
        await expect(page.locator('#hvStatus')).toContainText('https');

        await page.click('[data-hv-action="library"]');
        await page.click('#hvLibrary [data-hv-pick]');
        await expect.poll(saved).toContain('library-clip.mp4');

        await page.click('[data-hv-action="reset"]');
        await expect.poll(saved).toBe('');
        await expect(page.locator('#hvPreview video')).toHaveAttribute('src', '/cover-video.mp4');
        expect(await heroSrc(page)).toBe('/cover-video.mp4');
    });
});

test.describe('Featured Work on phones', () => {
    test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

    test('only the shown slide and its neighbours are drawn; slides wait 4.5 s on phones', async ({ page }) => {
        const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
        const rows = Array.from({ length: 12 }, (_, i) => galleryRow({ featured: true, caption: `Job ${i}` }));
        await mockSupabase(page, { installations: rows });
        await page.route(/res\.cloudinary\.com/, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        await page.waitForFunction(() => document.querySelectorAll('#featuredLoop .featured-loop-slide').length >= 10, null, { timeout: 20000 });
        await page.evaluate(() => document.getElementById('featured-work').scrollIntoView({ block: 'center' }));

        const state = () => page.evaluate(() => {
            const slides = [...document.querySelectorAll('#featuredLoop .featured-loop-slide')];
            return {
                total: slides.length,
                active: slides.findIndex((s) => s.classList.contains('is-active')),
                drawn: slides.filter((s) => getComputedStyle(s).visibility !== 'hidden').length,
                endless: document.getAnimations().filter((a) => a.effect && a.effect.getComputedTiming().iterations === Infinity
                    && a.effect.target && a.effect.target.closest && a.effect.target.closest('.featured-loop-slide:not(.is-active):not(.is-near)')).length
            };
        });
        const first = await state();
        expect(first.drawn).toBe(3);
        expect(first.endless).toBe(0);

        await page.waitForTimeout(3000);
        expect((await state()).active).toBe(first.active); // still waiting at 3 s (was 2 s)
        await expect.poll(async () => (await state()).active, { timeout: 4000 }).toBe((first.active + 1) % first.total);
        expect((await state()).drawn).toBe(3);
    });
});
