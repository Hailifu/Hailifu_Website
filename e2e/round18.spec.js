// @ts-check
// Round 18 (owner 2026-10-01): "I don't see smart home in the service" + admin colours must follow the brand colour.
const { test, expect } = require('@playwright/test');
const { mockSupabase, loginAdmin, galleryRow } = require('./helpers/mock-supabase');

async function openAdminTab(page, tab) {
    const menuBtn = page.locator('#hmAdminMenuBtn');
    if (await menuBtn.isVisible()) await menuBtn.click();
    await page.click(`#adminPanel .nav-item[data-admin-tab="${tab}"]`);
}

test.describe('Smart Home service', () => {
    test('smart home is a service everywhere on the public site', async ({ page }) => {
        const errors = [];
        page.on('pageerror', (e) => errors.push(e.message));
        await mockSupabase(page, { installations: [galleryRow({ category: 'smarthome' }), galleryRow({ category: 'cctv', cover: true })] });
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('#service-smarthome h3')).toHaveText('Smart Home');
        await expect(page.locator('#hmScGrid .hm-sc-card[data-sc-open="smarthome"] h3')).toHaveText('Smart home');
        await page.locator('#service-smarthome .request-quote-btn').click();
        await expect(page.locator('#hmQuoteChips .hm-chip[data-service="smarthome"]')).toHaveClass(/is-selected/);
        await page.locator('#popupClose').click();
        await expect(page.locator('#reviewServiceGrid input[value="Smart home"]')).toHaveCount(1);
        await page.click('#chatbotToggle');
        await expect(page.locator('#r7ChatReplies [data-reply="smarthome"]')).toBeVisible({ timeout: 8000 });
        await expect(page.locator('#service-smarthome .service-media img')).toHaveAttribute('src', /res\.cloudinary\.com/);
        expect(errors).toEqual([]);
    });

    test('smart home has a gallery tab and a service card choice in admin', async ({ page }) => {
        await mockSupabase(page, { installations: [galleryRow({ category: 'smarthome' })] });
        await loginAdmin(page);
        await openAdminTab(page, 'projects');
        await page.waitForSelector('#sgAdmin', { timeout: 15000 });
        await expect(page.locator('.sg-tab[data-sg-cat="smarthome"]')).toContainText('Smart home');
        await openAdminTab(page, 'site-control');
        await expect(page.locator('#adminPanel select option[value="service-smarthome"]')).toHaveCount(1);
    });
});

test.describe('Admin follows the brand colour', () => {
    const brandRow = { id: '__brand_settings', data: { id: '__brand_settings', type: 'settings', primary: '#7c3aed' }, updated_at: '' };
    const PURPLE = 'rgb(124, 58, 237)';

    test('Select Service Card: readable names, and the open list uses the brand colour', async ({ page }) => {
        await mockSupabase(page, { adverts: [brandRow] });
        await loginAdmin(page);
        await openAdminTab(page, 'site-control');
        const select = page.locator('#serviceCardSelector');
        await expect(select.locator('option[value="service-smarthome"]')).toHaveText('Smart Home');
        await expect(select.locator('option[value="service-cctv"]')).toHaveText('CCTV Installation');
        expect(await select.evaluate((s) => getComputedStyle(s).appearance)).toBe('base-select');
        await select.scrollIntoViewIfNeeded();
        await select.click();
        const option = select.locator('option[value="service-solar"]');
        await expect(option).toBeVisible();
        await option.hover();
        await expect.poll(() => option.evaluate((o) => getComputedStyle(o).backgroundColor)).not.toBe('rgba(0, 0, 0, 0)');
        await option.click();
        await expect(select).toHaveValue('service-solar');
        await select.click();
        await expect.poll(() => select.locator('option:checked').evaluate((o) => getComputedStyle(o).backgroundColor)).toBe(PURPLE);
    });

    test('ticks, radios and date pickers use the brand colour on the site and in admin', async ({ page }) => {
        await mockSupabase(page, { adverts: [brandRow] });
        await page.goto('/', { waitUntil: 'load' });
        await expect.poll(() => page.evaluate(() => getComputedStyle(document.documentElement).accentColor)).toBe(PURPLE);
        await loginAdmin(page);
        await openAdminTab(page, 'adverts');
        await expect.poll(() => page.locator('#r7TbStart').evaluate((i) => getComputedStyle(i).accentColor)).toBe(PURPLE);
    });
});
