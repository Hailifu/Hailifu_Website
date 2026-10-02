// @ts-check
// Simpler review form (2026-10-02): stars, comment, photos on screen; the rest folded away.
const { test, expect } = require('@playwright/test');
const { mockSupabase } = require('./helpers/mock-supabase');

async function openForm(page) {
    await page.goto('/', { waitUntil: 'load' });
    await page.evaluate(() => document.querySelector('.hm-cta-review [data-review-modal-open]').click());
    await expect(page.locator('#reviewModal')).toHaveClass(/active/);
}

for (const [name, w, h] of [['desk', 1280, 800], ['phone', 390, 844]]) {
    test(`${name}: only stars, comment and photos show; extra questions are closed`, async ({ page }) => {
        await page.setViewportSize({ width: w, height: h });
        await mockSupabase(page);
        await openForm(page);
        await expect(page.locator('#googleStarRating')).toBeVisible();
        await expect(page.locator('#reviewComment')).toBeVisible();
        await expect(page.locator('#reviewMediaBtn')).toBeVisible();
        await expect(page.locator('#reviewMoreDetails')).not.toHaveAttribute('open', '');
        await expect(page.locator('#reviewLikeTags')).toBeHidden();
        await expect(page.locator('#reviewServiceGrid')).toBeHidden();
        await page.waitForTimeout(900);
        await page.screenshot({ path: `test-results/review-simple-${name}.png` });
        await page.click('#reviewMoreDetails > summary');
        await expect(page.locator('#reviewLikeTags')).toBeVisible();
        await expect(page.locator('#reviewServiceGrid')).toBeVisible();
    });
}

test('a star-only review still posts, and the details section closes for the next one', async ({ page }) => {
    const sb = await mockSupabase(page);
    await openForm(page);
    await page.click('#reviewMoreDetails > summary');
    await page.click('#googleStarRating .google-star[data-rating="5"]');
    await page.evaluate(() => { const f = document.getElementById('reviewForm'); if (f) f.dataset.openedAt = String(Date.now() - 60000); });
    await page.locator('#reviewForm .submit-btn').click();
    await expect(page.locator('#formSuccess')).toContainText('Thank you');
    await expect.poll(() => sb.db.reviews.length).toBe(1);
    expect(sb.db.reviews[0].data.rating).toBe(5);
    await expect.poll(() => page.locator('#reviewMoreDetails').evaluate((d) => d.open)).toBe(false);
});

test('when the database refuses reviews, the message does not blame the connection', async ({ page }) => {
    const sb = await mockSupabase(page);
    sb.refuseWrites = true; // like the live database before reviews_public_submit.sql is run
    await openForm(page);
    await page.click('#googleStarRating .google-star[data-rating="5"]');
    await page.fill('#reviewComment', 'Great job');
    await page.evaluate(() => { const f = document.getElementById('reviewForm'); if (f) f.dataset.openedAt = String(Date.now() - 60000); });
    await page.locator('#reviewForm .submit-btn').click();
    await expect(page.locator('#reviewModal')).toContainText("Reviews can't be posted right now");
    await expect(page.locator('#reviewModal')).toContainText('not your connection');
    await expect(page.locator('#reviewComment')).toHaveValue('Great job');
});
