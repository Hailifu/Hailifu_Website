// @ts-check
// Round 19 (owner 2026-10-01): "after uploading review it says your photos could not be uploaded,
// popup doesn't look nice, why do I keep seeing that message on my phone; on my laptop it works".
const { test, expect, devices } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { mockSupabase } = require('./helpers/mock-supabase');

const PNG = fs.readFileSync(path.join(__dirname, '..', 'apple-touch-icon.png'));
const REVIEW_UPLOAD = /\/storage\/v1\/object\/media\/reviews\//;

// Like the real bucket (admin_setup.sql): only image/* and video/* files are accepted,
// and the review rule only allows these file endings.
function strictStorage(page, sb, { failFirst = 0 } = {}) {
    let fails = failFirst;
    const saved = [];
    page.route(REVIEW_UPLOAD, async (route) => {
        const req = route.request();
        if (fails > 0) { fails -= 1; return route.abort('connectionreset'); }
        const name = decodeURIComponent(new URL(req.url()).pathname.split('/object/media/')[1]);
        const body = (req.postDataBuffer() || Buffer.alloc(0)).toString('latin1');
        const headerType = req.headers()['content-type'] || '';
        const partType = (body.match(/Content-Type:\s*([^\r\n]+)/i) || [])[1] || headerType;
        const okType = /^(image|video)\//i.test(partType.trim());
        const okExt = /\.(webp|jpg|jpeg|png|gif|heic|mp4|webm|mov|m4v)$/i.test(name);
        if (!okType || !okExt) {
            return route.fulfill({ status: 400, contentType: 'application/json', body: JSON.stringify({ statusCode: '415', error: 'invalid_mime_type', message: `mime type ${partType} is not supported` }) });
        }
        sb.storage.set(name, { size: body.length, type: partType });
        saved.push({ name, type: partType.trim() });
        return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ Key: `media/${name}` }) });
    });
    return saved;
}

async function openAndFill(page) {
    await page.goto('/', { waitUntil: 'load' });
    await page.locator('.hm-cta-review [data-review-modal-open]').tap();
    await expect(page.locator('#reviewModal')).toHaveClass(/active/);
    await page.locator('#googleStarRating .google-star[data-rating="5"]').tap();
    await page.fill('#reviewComment', 'Neat CCTV job.');
}
async function send(page) {
    await page.evaluate(() => { document.getElementById('reviewForm').dataset.openedAt = String(Date.now() - 60000); });
    await page.locator('#reviewForm .submit-btn').tap();
}

test.describe('Review photos from a phone', () => {
    const { defaultBrowserType, ...pixel } = devices['Pixel 7'];
    test.use(pixel);

    test('a photo the phone gives without a file type still uploads, as a real image', async ({ page }) => {
        const sb = await mockSupabase(page);
        const saved = strictStorage(page, sb);
        await openAndFill(page);
        await page.setInputFiles('#reviewMediaInput', { name: 'IMG_20261001_101500', mimeType: '', buffer: PNG });
        await send(page);
        await expect(page.locator('#formSuccess')).toContainText('Thank you', { timeout: 20000 });
        expect(saved).toHaveLength(1);
        expect(saved[0].type).toMatch(/^image\//);
        expect(sb.db.reviews[0].data.media).toHaveLength(1);
    });

    test('a photo named .heif is sent as the picture it really is, never as .heif', async ({ page }) => {
        const sb = await mockSupabase(page);
        const saved = strictStorage(page, sb);
        await openAndFill(page);
        await page.setInputFiles('#reviewMediaInput', { name: '20261001_101500.heif', mimeType: 'image/heif', buffer: PNG });
        await send(page);
        await expect(page.locator('#formSuccess')).toContainText('Thank you', { timeout: 20000 });
        expect(saved).toHaveLength(1);
        expect(saved[0].name).toMatch(/\.(webp|jpg|png)$/); // never .heif (refused by the storage rule)
        expect(saved[0].type).toMatch(/^image\//);
    });

    test('a dropped connection is retried once without bothering the visitor', async ({ page }) => {
        const sb = await mockSupabase(page);
        strictStorage(page, sb, { failFirst: 1 });
        await openAndFill(page);
        await page.setInputFiles('#reviewMediaInput', { name: 'photo.jpg', mimeType: 'image/jpeg', buffer: PNG });
        await send(page);
        await expect(page.locator('#formSuccess')).toContainText('Thank you', { timeout: 20000 });
        expect(sb.db.reviews[0].data.media).toHaveLength(1);
    });

    test('if photos still fail: a clear card under the button, Try again and Post without photos', async ({ page }) => {
        const sb = await mockSupabase(page);
        strictStorage(page, sb, { failFirst: 2 }); // first try + automatic retry both fail
        await openAndFill(page);
        await page.setInputFiles('#reviewMediaInput', { name: 'photo.jpg', mimeType: 'image/jpeg', buffer: PNG });
        await send(page);
        const notice = page.locator('#formSuccess');
        await expect(notice).toHaveClass(/is-error/, { timeout: 20000 });
        await expect(notice).toContainText('photo');
        await expect(notice).toBeInViewport();
        // sits under the Post button and covers nothing
        await page.waitForTimeout(800); // smooth scroll settles
        const gap = await page.evaluate(() => document.getElementById('formSuccess').getBoundingClientRect().top - document.querySelector('#reviewForm .submit-btn').getBoundingClientRect().bottom);
        expect(gap).toBeGreaterThanOrEqual(0);
        const covered = await notice.evaluate((n) => {
            const r = n.getBoundingClientRect();
            const x = r.left + r.width / 2;
            return [r.top + 4, r.top + r.height / 2, r.bottom - 4].some((y) => { const hit = document.elementFromPoint(x, y); return hit && !n.contains(hit); });
        });
        expect(covered).toBe(false);
        expect(sb.db.reviews).toHaveLength(0);
        // Try again works once the connection is back
        await notice.locator('[data-rv-notice="retry"]').tap();
        await expect(notice).toContainText('Thank you', { timeout: 20000 });
        expect(sb.db.reviews[0].data.media).toHaveLength(1);
    });

    test('Post without photos sends the review without them', async ({ page }) => {
        const sb = await mockSupabase(page);
        strictStorage(page, sb, { failFirst: 99 });
        await openAndFill(page);
        await page.setInputFiles('#reviewMediaInput', { name: 'photo.jpg', mimeType: 'image/jpeg', buffer: PNG });
        await send(page);
        const notice = page.locator('#formSuccess');
        await expect(notice).toHaveClass(/is-error/, { timeout: 20000 });
        await notice.locator('[data-rv-notice="skip"]').tap();
        await expect(notice).toContainText('Thank you', { timeout: 20000 });
        expect(sb.db.reviews[0].data.media || []).toHaveLength(0);
        expect(sb.db.reviews[0].data.comment).toBe('Neat CCTV job.');
    });

    test('service choices are readable in light mode', async ({ page }) => {
        await mockSupabase(page);
        await page.emulateMedia({ colorScheme: 'light' });
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('.hm-cta-review [data-review-modal-open]').tap();
        const span = page.locator('#reviewServiceGrid .review-service-option span').first();
        const color = await span.evaluate((s) => getComputedStyle(s).color);
        expect(color).not.toBe('rgb(255, 255, 255)');
    });
});
