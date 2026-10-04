// @ts-check
// Advert product view (2026-10-04, owner: "when click on advert button it should land you to the advertising product").
const { test, expect } = require('@playwright/test');
const { mockSupabase } = require('./helpers/mock-supabase');

const IMG = 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/ad.jpg';
const ad = (id, extra = {}) => ({ id, data: { id, title: 'Smart doorbell camera', text: 'See who is at the gate from your phone.', active: true, ctaLabel: 'Request a Quote', ctaUrl: '', imageUrl: IMG, createdAt: new Date().toISOString(), ...extra }, updated_at: new Date().toISOString() });

async function openSite(page, rows, w = 1280) {
    await page.setViewportSize({ width: w, height: 820 });
    await page.route(IMG, (r) => r.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="#e8741e"/></svg>' }));
    await mockSupabase(page, { adverts: rows });
    await page.goto('/');
    await page.locator('#hmAds').scrollIntoViewIfNeeded();
    await expect(page.locator('#hmAds .hm-ad.is-active h3')).toHaveText('Smart doorbell camera');
}

for (const [name, w] of [['desktop', 1280], ['phone', 390]]) {
    test(`${name}: the advert button opens the product, with quote and WhatsApp`, async ({ page }) => {
        await openSite(page, [ad('a1')], w);
        const btn = page.locator('#hmAds .hm-ad.is-active .hm-ad-cta');
        await expect(btn).toContainText('View offer');
        await btn.click();
        const view = page.locator('#hmAdView');
        await expect(view).toHaveClass(/active/);
        await expect(view.locator('h3')).toHaveText('Smart doorbell camera');
        await expect(view.locator('p')).toHaveText('See who is at the gate from your phone.');
        await expect(view.locator('.hm-adview-media img')).toHaveAttribute('src', IMG);
        await expect(view.locator('.hm-adview-wa')).toHaveAttribute('href', /wa\.me\/233550997270\?text=.*Smart%20doorbell%20camera/);
        await page.waitForTimeout(600);
        await page.screenshot({ path: `test-results/advert-view-${name}.png` });
        await view.locator('[data-adview-quote]').click();
        await expect(view).toBeHidden();
        await expect(page.locator('#popupOverlay')).toHaveClass(/active/);
    });
}

test('the advert photo opens it too; X, outside tap and Esc close it', async ({ page }) => {
    await openSite(page, [ad('a1')]);
    const view = page.locator('#hmAdView');
    await page.locator('#hmAds .hm-ad.is-active .hm-ad-media').click();
    await expect(view).toHaveClass(/active/);
    await page.click('#hmAdViewClose');
    await expect(view).toBeHidden();
    await page.locator('#hmAds .hm-ad.is-active .hm-ad-cta').click();
    await page.mouse.click(10, 10);
    await expect(view).toBeHidden();
    await page.locator('#hmAds .hm-ad.is-active .hm-ad-cta').click();
    await page.keyboard.press('Escape');
    await expect(view).toBeHidden();
});

test('an advert with a web link set in admin still goes to that link', async ({ page }) => {
    await openSite(page, [ad('a1', { ctaUrl: 'https://example.com/doorbell', ctaLabel: 'Shop now' })]);
    const link = page.locator('#hmAds .hm-ad.is-active a.hm-ad-cta');
    await expect(link).toHaveAttribute('href', 'https://example.com/doorbell');
    await expect(link).toContainText('Shop now');
});
