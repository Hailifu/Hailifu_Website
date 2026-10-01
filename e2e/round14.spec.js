// @ts-check
// Round 14 (owner request 2026-10-01): homepage section order/visibility really works and reaches
// every visitor; the browser tab shows an icon; logo_k1iyvc.png removed.
const { test, expect } = require('@playwright/test');
const { mockSupabase, loginAdmin } = require('./helpers/mock-supabase');

const sectionsRow = (order, hidden) => ({ id: '__sections_settings', data: { id: '__sections_settings', type: 'settings', order, hidden }, updated_at: new Date().toISOString() });
const pageOrder = (page) => page.evaluate(() => [...document.querySelectorAll('body > section[id]')]
    .map((s) => s.id + (s.style.display === 'none' ? '(hidden)' : '')));

async function openSections(page) {
    const menuBtn = page.locator('#hmAdminMenuBtn');
    if (await menuBtn.isVisible()) await menuBtn.click();
    await page.click('#adminPanel .nav-item[data-admin-tab="site-control"]');
    await page.waitForSelector('#scCard [data-sc-id="showcase"]');
}

test.describe('Homepage sections', () => {
    test('a visitor sees the saved order, and a hidden section and its menu links are gone', async ({ page }) => {
        await mockSupabase(page, { adverts: [sectionsRow(['reviews', 'services', 'featured-work', 'showcase', 'about', 'trust-strip'], ['trust-strip', 'about'])] });
        await page.goto('/', { waitUntil: 'load' });
        await expect.poll(() => pageOrder(page)).toEqual(['hero', 'reviews', 'services', 'featured-work', 'showcase', 'about(hidden)', 'trust-strip(hidden)']);
        const aboutLinks = page.locator('a[href="#about"]:not(#adminPanel a)');
        const n = await aboutLinks.count();
        for (let i = 0; i < n; i++) await expect(aboutLinks.nth(i)).toBeHidden();
        // the next visit is arranged from the saved copy straight away, before Supabase answers
        expect(await page.evaluate(() => JSON.parse(localStorage.getItem('hailifu_sections_v1') || '{}').hidden)).toEqual(['trust-strip', 'about']);
    });

    test('admin arrows and Show switch change the page and save for everyone; reset restores', async ({ page }) => {
        const sb = await mockSupabase(page);
        await loginAdmin(page);
        await openSections(page);
        const card = page.locator('#scCard');
        await expect(card.locator('[data-sc-id="trust-strip"] [data-sc-action="up"]')).toBeDisabled();
        await expect(card.locator('[data-sc-id="reviews"] [data-sc-action="down"]')).toBeDisabled();

        await card.locator('[data-sc-id="showcase"] [data-sc-action="down"]').click();
        await expect(card.locator('#scStatus')).toContainText('number 5');
        await card.locator('[data-sc-id="trust-strip"] .hm-switch').click();
        await expect(card.locator('#scStatus')).toContainText('hidden from every visitor');

        const saved = () => sb.db.adverts.find((r) => r.id === '__sections_settings')?.data;
        await expect.poll(() => saved()?.order).toEqual(['trust-strip', 'featured-work', 'about', 'showcase', 'services', 'reviews']);
        expect(saved().hidden).toEqual(['trust-strip']);
        expect(await pageOrder(page)).toEqual(['hero', 'trust-strip(hidden)', 'featured-work', 'about', 'showcase', 'services', 'reviews']);
        await expect(card.locator('.sc-row').nth(4)).toHaveAttribute('data-sc-id', 'showcase');

        await card.locator('[data-sc-action="reset"]').click();
        await expect.poll(() => saved()?.hidden).toEqual([]);
        expect(saved().order).toEqual(['trust-strip', 'featured-work', 'showcase', 'about', 'services', 'reviews']);
        expect(await pageOrder(page)).toEqual(['hero', 'trust-strip', 'featured-work', 'showcase', 'about', 'services', 'reviews']);
    });

    test('a refused save puts everything back and says so', async ({ page }) => {
        const sb = await mockSupabase(page);
        await loginAdmin(page);
        await openSections(page);
        sb.refuseWrites = true;
        const card = page.locator('#scCard');
        await card.locator('[data-sc-id="reviews"] [data-sc-action="up"]').click();
        await expect(card.locator('#scStatus')).toContainText('Not allowed');
        await expect(card.locator('.sc-row').last()).toHaveAttribute('data-sc-id', 'reviews');
        expect((await pageOrder(page)).slice(-1)).toEqual(['reviews']);
    });
});

test.describe('Browser tab icon', () => {
    test('the tab icon is a real picture and the old placeholder is gone', async ({ page, request }) => {
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        const href = await page.locator('link[rel="icon"][type="image/x-icon"]').getAttribute('href');
        const ico = await (await request.get(href || '/favicon.ico')).body();
        expect(ico.readUInt16LE(2)).toBe(1); // icon file
        const sizes = [];
        for (let i = 0; i < ico.readUInt16LE(4); i++) sizes.push(ico[6 + i * 16]);
        expect(sizes).toEqual([16, 32, 48]); // was one 1x1 blank
        const png = await (await request.get('/favicon-32.png')).body();
        expect(png.readUInt32BE(16)).toBe(32);
        expect((await request.get('/logo_k1iyvc.png')).status()).toBe(404);
    });

    test('an uploaded logo still becomes the tab icon, and removing it brings the built-in icons back', async ({ page }) => {
        await page.goto('/', { waitUntil: 'load' });
        const icons = () => page.evaluate(() => [...document.querySelectorAll('link[rel="icon"]')].map((l) => `${l.getAttribute('href')}|${l.getAttribute('type') || ''}`));
        await page.evaluate(() => window.hailifuSetLogo('https://example.supabase.co/storage/v1/object/public/media/site/logo-1.png'));
        expect(await icons()).toEqual(['https://example.supabase.co/storage/v1/object/public/media/site/logo-1.png|', 'https://example.supabase.co/storage/v1/object/public/media/site/logo-1.png|']);
        await page.evaluate(() => window.hailifuSetLogo(''));
        expect(await icons()).toEqual(['/favicon.ico?v=r14|image/x-icon', '/favicon-32.png?v=r14|image/png']);
    });
});
