// @ts-check
// Round 11 (approved in chat 2026-10-01): featured work on phones, photos in full,
// PIN removed, aftercare without built-in photo, paper-note top bar, coloured switches,
// reviews live at once, account menu reliability.
const { test, expect } = require('@playwright/test');
const { mockSupabase, loginAdmin, galleryRow } = require('./helpers/mock-supabase');

const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
const starred = () => [1, 2, 3].map((i) => galleryRow({ id: `f${i}`, category: ['cctv', 'solar', 'electrical'][i - 1], featured: true, order: i, src: `https://res.cloudinary.com/daovfi3i5/image/upload/v1/feat-${i}.jpg` }));
const servePhotos = (page) => page.route(/res\.cloudinary\.com/, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));

test.describe('Featured Work on a phone', () => {
    test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

    test('the featured photo changes by itself after the galleries load', async ({ page }) => {
        await mockSupabase(page, { installations: starred() });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        const loop = page.locator('#featuredLoop');
        await loop.scrollIntoViewIfNeeded();
        await expect(page.locator('#featuredLoop .featured-loop-slide')).toHaveCount(3, { timeout: 10000 });
        const active = () => page.locator('#featuredLoop .featured-loop-slide.is-active').getAttribute('data-featured-index');
        const first = await active();
        await expect.poll(active, { timeout: 7000 }).not.toBe(first);
    });

    test('tapping a dot shows that photo', async ({ page }) => {
        await mockSupabase(page, { installations: starred() });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('#featuredLoop').scrollIntoViewIfNeeded();
        await expect(page.locator('#featuredLoop .featured-loop-slide')).toHaveCount(3, { timeout: 10000 });
        await page.locator('#featuredLoopDots .featured-loop-dot').nth(2).tap();
        await expect(page.locator('#featuredLoop .featured-loop-slide.is-active')).toHaveAttribute('data-featured-index', '2');
    });
});

module.exports = {};
