// @ts-check
// Service photo grid (2026-10-02): a service card opens that service's photos as a grid.
const { test, expect } = require('@playwright/test');
const { mockSupabase, galleryRow } = require('./helpers/mock-supabase');

const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');

async function openHome(page, rows) {
    await mockSupabase(page, { installations: rows });
    await page.route(/res\.cloudinary\.com/, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));
    await page.goto('/', { waitUntil: 'load' });
    await expect(page.locator('#hmScGrid .hm-sc-card').first()).toBeVisible({ timeout: 15000 });
}

const cctvRows = () => [
    galleryRow({ category: 'cctv', caption: 'Villa, East Legon' }),
    galleryRow({ category: 'cctv' }),
    galleryRow({ category: 'cctv', mediaType: 'video', src: 'https://res.cloudinary.com/daovfi3i5/video/upload/v1/v.mp4' }),
    galleryRow({ category: 'solar' })
];

test('service card opens its photos as a grid; a tile opens the photo; grid button goes back', async ({ page }) => {
    await openHome(page, cctvRows());
    const card = page.locator('#service-cctv');
    await expect(card.locator('.hm-svc-hint')).toContainText('See photos');
    await card.locator('h3').click();
    await expect(page.locator('#hmGallery')).toHaveClass(/is-grid/);
    await expect(page.locator('#hmGalTitle')).toHaveText('CCTV');
    await expect(page.locator('#hmGalGrid .hm-gal-tile')).toHaveCount(3);
    await expect(page.locator('#hmGallery [data-gal="grid"]')).toBeHidden();
    await expect(page.locator('#hmGalStage')).toBeHidden();

    await page.locator('#hmGalGrid [data-gal-tile="1"]').click();
    await expect(page.locator('#hmGallery')).not.toHaveClass(/is-grid/);
    await expect(page.locator('#hmGalCounter')).toHaveText('2 / 3');
    await expect(page.locator('#hmGalFigure img')).toBeVisible();

    await page.locator('#hmGallery [data-gal="grid"]').click();
    await expect(page.locator('#hmGallery')).toHaveClass(/is-grid/);

    // Escape from a photo goes back to the grid, Escape on the grid closes
    await page.locator('#hmGalGrid [data-gal-tile="0"]').click();
    await page.keyboard.press('Escape');
    await expect(page.locator('#hmGallery')).toHaveClass(/is-grid/);
    await page.keyboard.press('Escape');
    await expect(page.locator('#hmGallery')).toBeHidden();
});

test('Request a Quote on a service card still opens the quote form', async ({ page }) => {
    await openHome(page, cctvRows());
    await page.locator('#service-cctv .request-quote-btn').click();
    await expect(page.locator('#popupOverlay')).toHaveClass(/active/);
    await expect(page.locator('#hmGallery')).toHaveCount(0);
});

test('a service without photos opens the quote form', async ({ page }) => {
    await openHome(page, cctvRows());
    await page.locator('#service-gates h3').click();
    await expect(page.locator('#popupOverlay')).toHaveClass(/active/);
});

test('service card opens with the keyboard', async ({ page }) => {
    await openHome(page, cctvRows());
    await page.locator('#service-cctv').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#hmGallery')).toHaveClass(/is-grid/);
});

test('phone: grid shows two columns and no page errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.setViewportSize({ width: 390, height: 844 });
    await openHome(page, cctvRows());
    await page.evaluate(() => document.querySelector('#service-cctv h3').click());
    await expect(page.locator('#hmGallery')).toHaveClass(/is-grid/);
    const boxes = await page.locator('#hmGalGrid .hm-gal-tile').evaluateAll((els) => els.map((el) => el.getBoundingClientRect().top));
    expect(boxes[0]).toBe(boxes[1]);
    expect(boxes[2]).toBeGreaterThan(boxes[0]);
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'test-results/service-grid-phone.png' });
    expect(errors).toEqual([]);
});

test('grid follows Light, Dark and System theme', async ({ page }) => {
    const bg = () => page.locator('#hmGallery').evaluate((el) => getComputedStyle(el).backgroundColor);
    const lum = (c) => { const [r, g, b] = c.match(/\d+/g).map(Number); return (r + g + b) / 3; };
    await page.emulateMedia({ colorScheme: 'light' });
    await page.addInitScript(() => { try { localStorage.removeItem('hailifu_theme'); } catch {} });
    await openHome(page, cctvRows());
    await page.evaluate(() => document.querySelector('#service-cctv h3').click());
    await expect(page.locator('#hmGallery')).toHaveClass(/is-grid/);
    await page.waitForTimeout(700); // fade-in
    expect(lum(await bg())).toBeGreaterThan(200); // System + light device
    await page.screenshot({ path: 'test-results/service-grid-light.png' });
    await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark')); // visitor picks Dark
    await expect.poll(async () => lum(await bg())).toBeLessThan(40);
    await page.screenshot({ path: 'test-results/service-grid-dark.png' });
});
