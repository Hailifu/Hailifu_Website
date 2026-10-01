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

// A wide 3:1 picture: cropping would cut its ends off.
const WIDE = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400"><rect width="1200" height="400" fill="#2a6"/><rect width="100" height="400" fill="#e33"/><rect x="1100" width="100" height="400" fill="#33e"/></svg>`;
const serveWide = (page) => page.route(/res\.cloudinary\.com/, (route) => route.fulfill({ status: 200, contentType: 'image/svg+xml', body: WIDE }));

test.describe('Photos and videos in full', () => {
    for (const vp of [{ name: 'desktop', size: { width: 1280, height: 860 } }, { name: 'phone', size: { width: 390, height: 844 } }]) {
        test(`work photos are never cropped and have a blurred fill (${vp.name})`, async ({ page }) => {
            await page.setViewportSize(vp.size);
            const rows = ['cctv', 'solar', 'electrical'].map((c, i) => galleryRow({ id: `p${i}`, category: c, featured: true, cover: true, order: i }));
            await mockSupabase(page, { installations: rows });
            await serveWide(page);
            await page.goto('/', { waitUntil: 'load' });
            await expect(page.locator('#featuredLoop .featured-loop-slide')).toHaveCount(3, { timeout: 10000 });
            for (const sel of ['#featured-work .featured-card-media img', '#showcase .hm-sc-media img']) {
                const img = page.locator(sel).first();
                await img.scrollIntoViewIfNeeded();
                await expect(img).toHaveCSS('object-fit', 'contain');
                const info = await img.evaluate((el) => {
                    const fill = el.parentElement.querySelector(':scope > .r11-fill');
                    const host = getComputedStyle(el.parentElement).position;
                    return { fill: fill ? getComputedStyle(fill).backgroundImage : '', host };
                });
                expect(info.fill, sel).toContain('cloudinary');
                expect(info.host, `${sel} frame must be positioned`).not.toBe('static');
            }
        });
    }

    test('the hero background video still fills the screen (not a work photo)', async ({ page }) => {
        await mockSupabase(page, {});
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('.hero-video-container video').first()).toHaveCSS('object-fit', 'cover');
    });
});

test.describe('Admin PIN removed', () => {
    test('Site Control has no PIN card and the old stored PIN is cleared', async ({ page }) => {
        await page.addInitScript(() => { try { if (!sessionStorage.getItem('pinSeeded')) { localStorage.setItem('hailifu_admin_control_pin', '9999'); sessionStorage.setItem('pinSeeded', '1'); } } catch {} });
        await mockSupabase(page, {});
        await loginAdmin(page);
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="site-control"]');
        await page.waitForSelector('#afCard');
        await expect(page.locator('#adminControlPinInput')).toHaveCount(0);
        await expect(page.locator('#saveAdminPinBtn')).toHaveCount(0);
        await expect(page.getByText('Destructive Action PIN')).toHaveCount(0);
        expect(await page.evaluate(() => localStorage.getItem('hailifu_admin_control_pin'))).toBeNull();
    });
});

test.describe('Aftercare without a built-in photo', () => {
    test('with nothing saved the Aftercare card shows no photo', async ({ page }) => {
        await mockSupabase(page, {});
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('#integrityPanel').scrollIntoViewIfNeeded();
        await page.waitForTimeout(1500);
        await expect(page.locator('#integrityContainer')).toBeHidden();
        expect(await page.locator('#integrityImage').getAttribute('src') || '').not.toContain('field-technician');
    });

    test('a saved Aftercare photo still shows', async ({ page }) => {
        const row = { id: '__aftercare_settings', data: { id: '__aftercare_settings', type: 'settings', imageUrl: 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/af.jpg' }, updated_at: '' };
        await mockSupabase(page, { adverts: [row] });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('#integrityPanel').scrollIntoViewIfNeeded();
        await expect(page.locator('#integrityImage')).toBeVisible();
        await expect(page.locator('#integrityContainer')).toBeVisible();
    });
});

test.describe('Switches in colour', () => {
    test('a switch is green with a tick when on and red with a cross when off', async ({ page }) => {
        await mockSupabase(page, {});
        await loginAdmin(page);
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="adverts"]');
        const sw = page.locator('label.hm-switch:has(#hmAdActive)');
        await sw.scrollIntoViewIfNeeded();
        const look = () => sw.evaluate((el) => ({
            track: getComputedStyle(el.querySelector('.hm-switch-track')).backgroundColor,
            mark: getComputedStyle(el.querySelector('.hm-switch-thumb'), '::after').content
        }));
        await expect(page.locator('#hmAdActive')).toBeChecked();
        await expect.poll(look).toEqual({ track: 'rgb(34, 165, 91)', mark: '"✓"' });
        await sw.click();
        await page.mouse.move(5, 5);
        await expect(page.locator('#hmAdActive')).not.toBeChecked();
        await expect.poll(look).toEqual({ track: 'rgb(208, 69, 60)', mark: '"✕"' });
    });
});

module.exports = {};
