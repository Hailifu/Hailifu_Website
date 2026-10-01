// @ts-check
// Round 11 (approved in chat 2026-10-01): featured work on phones, photos in full,
// PIN removed, aftercare without built-in photo, paper-note top bar, coloured switches,
// reviews live at once, account menu reliability.
const { test, expect, webkit, devices } = require('@playwright/test');
const { mockSupabase, loginAdmin, galleryRow } = require('./helpers/mock-supabase');

const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
const starred = () => [1, 2, 3].map((i) => galleryRow({ id: `f${i}`, category: ['cctv', 'solar', 'electrical'][i - 1], featured: true, order: i, src: `https://res.cloudinary.com/daovfi3i5/image/upload/v1/feat-${i}.jpg` }));
// Index of the slide whose box covers the middle of the featured frame (what the visitor sees).
const visibleSlide = (page) => page.evaluate(() => {
    const vp = document.querySelector('#featuredLoop .featured-loop-viewport') || document.getElementById('featuredLoop');
    const r = vp.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const slides = Array.from(document.querySelectorAll('#featuredLoop .featured-loop-slide'));
    const hit = slides.find((s) => { const b = s.getBoundingClientRect(); return b.left <= cx && b.right >= cx && b.width > 0; });
    return hit ? hit.getAttribute('data-featured-index') : null;
});
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
        // The class alone is not enough: the slide the visitor SEES must change too.
        await expect.poll(() => visibleSlide(page), { timeout: 7000 }).not.toBe(first);
    });

    test('the photo on screen matches the active dot', async ({ page }) => {
        await mockSupabase(page, { installations: starred() });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('#featuredLoop').scrollIntoViewIfNeeded();
        await expect(page.locator('#featuredLoop .featured-loop-slide')).toHaveCount(3, { timeout: 10000 });
        await page.locator('#featuredLoopDots .featured-loop-dot').nth(1).tap();
        await expect.poll(() => visibleSlide(page), { timeout: 4000 }).toBe('1');
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

// iPhone engine (WebKit): the old phone mode froze after the first slide here.
test('Featured Work keeps changing on an iPhone (WebKit)', async ({ baseURL }) => {
    const browser = await webkit.launch();
    try {
        const ctx = await browser.newContext({ ...devices['iPhone 13'], baseURL });
        const page = await ctx.newPage();
        const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => galleryRow({ id: `w${i}`, category: 'cctv', featured: true, order: i, src: `https://res.cloudinary.com/daovfi3i5/image/upload/v1/w-${i}.jpg` }));
        await mockSupabase(page, { installations: rows });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('#featuredLoop').scrollIntoViewIfNeeded();
        await expect(page.locator('#featuredLoop .featured-loop-slide')).toHaveCount(9, { timeout: 10000 });
        await expect.poll(() => visibleSlide(page), { timeout: 12000 }).toBe('3');
    } finally { await browser.close(); }
});

module.exports = {};
