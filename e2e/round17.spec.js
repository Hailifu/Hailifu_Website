// @ts-check
// Round 17 (owner request 2026-10-01): "I should be able to upload a file on the top drop advert banner".
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { mockSupabase, loginAdmin } = require('./helpers/mock-supabase');

const PNG = fs.readFileSync(path.join(__dirname, '..', 'apple-touch-icon.png'));
const PUBLIC = 'https://qcyhxurhbvcgftyzlqdu.supabase.co/storage/v1/object/public/media/';
function topbarRow(extra = {}) {
    const data = { id: '__topbar_settings', type: 'settings', enabled: true, message: 'Free CCTV site survey this month', ctaLabel: 'Get a quote', ctaUrl: '', tone: 'orange', startsOn: '', endsOn: '', ...extra };
    return { id: '__topbar_settings', data, updated_at: new Date().toISOString() };
}
const servePublic = (page) => page.route(/\/storage\/v1\/object\/public\//, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));

async function openAdverts(page) {
    const menuBtn = page.locator('#hmAdminMenuBtn');
    if (await menuBtn.isVisible()) await menuBtn.click();
    await page.click('#adminPanel .nav-item[data-admin-tab="adverts"]');
    await page.waitForSelector('#r7TbForm');
}

test.describe('Top advert note with a picture', () => {
    test('visitors see the picture in the note, also when there is no message', async ({ page }) => {
        const url = `${PUBLIC}site/topbar-abc-flyer.webp`;
        await mockSupabase(page, { adverts: [topbarRow({ imageUrl: url, message: '' })] });
        await servePublic(page);
        await page.goto('/', { waitUntil: 'load' });
        const img = page.locator('#r7Topbar .r7-topbar-img img');
        await expect(img).toHaveAttribute('src', url, { timeout: 15000 });
        await expect(page.locator('#r7Topbar')).toHaveClass(/has-img/);
    });

    test('a picture link that is not https is ignored', async ({ page }) => {
        await mockSupabase(page, { adverts: [topbarRow({ imageUrl: 'javascript:alert(1)' })] });
        await page.goto('/', { waitUntil: 'load' });
        await page.waitForFunction(() => !!document.getElementById('r7Topbar'), null, { timeout: 15000 });
        await expect(page.locator('#r7Topbar .r7-topbar-img')).toHaveCount(0);
    });

    test('owner uploads a picture, saves, then removes it (old file deleted)', async ({ page }) => {
        const sb = await mockSupabase(page, { adverts: [topbarRow()] });
        await servePublic(page);
        await loginAdmin(page);
        await openAdverts(page);
        await page.setInputFiles('#r7TbImage', { name: 'flyer.png', mimeType: 'image/png', buffer: PNG });
        await expect(page.locator('#r7TbPreview .r7-topbar-img img')).toBeVisible(); // preview straight away
        await page.click('#r7TbSave');
        const saved = () => sb.db.adverts.find((r) => r.id === '__topbar_settings')?.data;
        await expect.poll(() => saved()?.imageUrl || '').toMatch(/\/media\/site\/topbar-.+/);
        const uploaded = [...sb.storage.keys()].filter((k) => k.startsWith('site/topbar-'));
        expect(uploaded).toHaveLength(1);
        expect(saved().imageUrl).toContain(uploaded[0]);

        await page.click('#r7TbForm [data-tb-action="remove-image"]');
        await expect(page.locator('#r7TbPreview .r7-topbar-img')).toHaveCount(0);
        await page.click('#r7TbSave');
        await expect.poll(() => saved()?.imageUrl).toBe('');
        await expect.poll(() => [...sb.storage.keys()].filter((k) => k.startsWith('site/topbar-'))).toEqual([]);
    });

    test('a picture alone is enough to switch the note on; other files are refused', async ({ page }) => {
        const sb = await mockSupabase(page, { adverts: [topbarRow({ enabled: false, message: '' })] });
        await servePublic(page);
        await loginAdmin(page);
        await openAdverts(page);
        await page.setInputFiles('#r7TbImage', { name: 'notes.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.4') });
        await expect(page.locator('#r7TbError')).toContainText('picture');
        await page.setInputFiles('#r7TbImage', { name: 'flyer.png', mimeType: 'image/png', buffer: PNG });
        await page.locator('#r7TbForm .hm-switch').first().click();
        await page.click('#r7TbSave');
        const saved = () => sb.db.adverts.find((r) => r.id === '__topbar_settings')?.data;
        await expect.poll(() => saved()?.enabled).toBe(true);
        expect(saved().message).toBe('');
        expect(saved().imageUrl).toMatch(/site\/topbar-/);
        await expect(page.locator('#r7TbStatus')).toContainText('Live');
    });
});
