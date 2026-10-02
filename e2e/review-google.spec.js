// @ts-check
// Reviews with Google accounts (2026-10-02): like Google Business reviews.
// Sign in with Google, Google name + photo on the review, one review per account, email private.
const { test, expect } = require('@playwright/test');
const { mockSupabase, googleReviewer } = require('./helpers/mock-supabase');

const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
const AUTH_KEY = 'sb-qcyhxurhbvcgftyzlqdu-auth-token';

async function signInAsGoogle(page, sb, who = googleReviewer()) {
    sb.googleUser = who.user;
    await page.addInitScript(([key, session]) => { try { localStorage.setItem(key, JSON.stringify(session)); } catch {} }, [AUTH_KEY, who.session]);
}

async function openForm(page) {
    await page.goto('/', { waitUntil: 'load' });
    await page.evaluate(() => document.querySelector('.hm-cta-review [data-review-modal-open]').click());
    await expect(page.locator('#reviewModal')).toHaveClass(/active/);
}

const send = async (page) => {
    await page.evaluate(() => { const f = document.getElementById('reviewForm'); if (f) f.dataset.openedAt = String(Date.now() - 60000); });
    await page.locator('#reviewForm .submit-btn').click();
};

test('Google sign-in off in Supabase: the form works as before (no Google step)', async ({ page }) => {
    await mockSupabase(page);
    await openForm(page);
    await expect(page.locator('#reviewForm')).toBeVisible();
    await expect(page.locator('#hmRvGate')).toBeHidden();
});

test('not signed in: asks to continue with Google, which opens Google sign-in', async ({ page }) => {
    const sb = await mockSupabase(page);
    sb.googleEnabled = true;
    await openForm(page);
    await expect(page.locator('#hmRvGate')).toBeVisible();
    await expect(page.locator('#hmRvGate')).toContainText('Your email stays private');
    await expect(page.locator('#reviewForm')).toBeHidden();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'test-results/review-google-gate.png' });
    await page.click('#hmRvGoogleBtn');
    await expect.poll(() => sb.oauthUrl).toContain('provider=google');
});

test('signed in with Google: posts with the Google name and photo, then signs the visitor out', async ({ page }) => {
    const sb = await mockSupabase(page);
    sb.googleEnabled = true;
    await signInAsGoogle(page, sb);
    await page.route(/googleusercontent\.com/, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));
    await openForm(page);
    await expect(page.locator('#hmRvWho')).toBeVisible();
    await expect(page.locator('#hmRvWhoName')).toHaveText('Mohammed Desheni Alhassan');
    await expect(page.locator('#reviewForm')).toBeVisible();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'test-results/review-google-ready.png' });
    await page.click('#googleStarRating .google-star[data-rating="5"]');
    await page.fill('#reviewComment', 'Best Cctv in Ghana');
    await page.setInputFiles('#reviewMediaInput', [{ name: 'a.png', mimeType: 'image/png', buffer: PNG }]);
    await expect(page.locator('#reviewMediaList .hm-rv-thumb')).toHaveCount(1);
    await send(page);
    await expect(page.locator('#formSuccess')).toContainText('Thank you');
    await expect.poll(() => sb.db.reviews.length).toBe(1);
    const d = sb.db.reviews[0].data;
    expect(d.name).toBe('Mohammed Desheni Alhassan');
    expect(d.authorImage).toContain('googleusercontent.com');
    expect(JSON.stringify(d)).not.toContain('mohammed@example.com'); // email never in the public review
    expect(d.media.length).toBe(1);
    await expect.poll(() => page.evaluate((k) => localStorage.getItem(k), AUTH_KEY)).toBeNull(); // signed out again
});

test('a Google account that already reviewed sees a thank-you instead of the form', async ({ page }) => {
    const sb = await mockSupabase(page);
    sb.googleEnabled = true;
    await signInAsGoogle(page, sb);
    sb.reviewedEmails.add('mohammed@example.com');
    await openForm(page);
    await expect(page.locator('#hmRvDone')).toBeVisible();
    await expect(page.locator('#hmRvDone')).toContainText("You've already reviewed Hailifu");
    await expect(page.locator('#reviewForm')).toBeHidden();
});

test('if the database says "already reviewed" on posting, the thank-you shows', async ({ page }) => {
    const sb = await mockSupabase(page);
    sb.googleEnabled = true;
    await signInAsGoogle(page, sb);
    await openForm(page);
    await expect(page.locator('#reviewForm')).toBeVisible();
    sb.reviewedEmails.add('mohammed@example.com'); // e.g. posted from another phone meanwhile
    await page.click('#googleStarRating .google-star[data-rating="4"]');
    await send(page);
    await expect(page.locator('#hmRvDone')).toBeVisible();
    expect(sb.db.reviews.length).toBe(0);
});

test('the review card shows the Google name, photo and "1 review · 1 photo"', async ({ page }) => {
    const data = { id: 'r_googlecard1', name: 'Mohammed Desheni Alhassan', authorImage: 'https://lh3.googleusercontent.com/a/test-photo', identityProvider: 'google', verified: true, rating: 5, comment: 'Best Cctv in Ghana', status: 'published', source: 'website', media: [{ path: 'reviews/r_googlecard1/1-a.webp', type: 'image' }], createdAt: new Date(Date.now() - 23 * 7 * 86400000).toISOString() };
    await mockSupabase(page, { reviews: [{ id: data.id, data, updated_at: data.createdAt }] });
    await page.route(/googleusercontent\.com|\/storage\/v1\/object\/public\//, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));
    await page.goto('/', { waitUntil: 'load' });
    const card = page.locator('.featured-review-card', { hasText: 'Best Cctv in Ghana' }).first();
    await expect(card).toBeAttached({ timeout: 15000 });
    await expect(card).toContainText('Mohammed Desheni Alhassan');
    await expect(card.locator('.hm-rv-count')).toHaveText('1 review · 1 photo');
    await expect(card.locator('img.reviewer-avatar')).toHaveAttribute('src', /googleusercontent\.com/);
    // the cards slide in a carousel, so screenshot without waiting for it to stop
    await card.evaluate((el) => el.scrollIntoView({ block: 'center' }));
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'test-results/review-google-card.png' });
});

test('a visitor signed in with Google never opens the admin', async ({ page }) => {
    const sb = await mockSupabase(page);
    sb.googleEnabled = true;
    await signInAsGoogle(page, sb);
    await page.goto('/hailifu=access', { waitUntil: 'load' });
    await expect(page.locator('#hmLoginEmail')).toBeVisible({ timeout: 15000 }); // asked to sign in as admin
    expect(await page.evaluate(() => !!document.getElementById('adminPanel')?.classList.contains('active'))).toBe(false);
});
