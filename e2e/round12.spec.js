// @ts-check
// Round 12 (owner request 2026-10-01): no white haze after the admin closes, logo upload,
// Featured Work click.
const { test, expect } = require('@playwright/test');
const { mockSupabase, loginAdmin, galleryRow } = require('./helpers/mock-supabase');

const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');

// Anything visible covering most of the screen (even if it ignores clicks), apart from the hero.
const covers = (page) => page.evaluate(() => {
    const found = [];
    for (const el of document.querySelectorAll('body *')) {
        if (el.closest('.hero, .hero-video-container')) continue;
        const cs = getComputedStyle(el);
        if (cs.position !== 'fixed' && cs.position !== 'absolute') continue;
        if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) < 0.02) continue;
        const r = el.getBoundingClientRect();
        if (r.width < innerWidth * 0.8 || r.height < innerHeight * 0.8 || r.top > 10 || r.left > 10) continue;
        const bf = cs.backdropFilter || cs.webkitBackdropFilter || 'none';
        const tinted = cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent';
        if (tinted || bf !== 'none') found.push(`${el.id || el.className}`);
    }
    return found;
});

test.describe('No white haze after the admin closes', () => {
    test('log out leaves the site clear, really signs out, and the admin opens again with the password', async ({ page }) => {
        await mockSupabase(page, {});
        await loginAdmin(page);
        const logout = page.waitForRequest((r) => r.url().includes('/auth/v1/logout'), { timeout: 5000 });
        await page.click('#adminLogoutBtn');
        await logout; // the Supabase session is ended, not just the window closed
        await page.waitForTimeout(700);
        expect(await covers(page)).toEqual([]);
        await loginAdmin(page); // asks for the password again
        await expect(page.locator('#adminPanel')).toHaveClass(/active/);
    });

    test('"Back to website" on the login leaves the site clear', async ({ page }) => {
        await mockSupabase(page, {});
        await page.goto('/hailifu=access', { waitUntil: 'load' });
        await page.waitForSelector('#hmLoginEmail', { timeout: 15000 });
        await page.click('.hm-login-cancel');
        await page.waitForTimeout(700);
        expect(await covers(page)).toEqual([]);
    });
});

test.describe('Clicking Featured Work', () => {
    for (const vp of [{ name: 'desktop', size: { width: 1366, height: 860 } }, { name: 'phone', size: { width: 390, height: 844 } }]) {
        test(`opens the gallery viewer at that photo, not the old project window (${vp.name})`, async ({ page }) => {
            await page.setViewportSize(vp.size);
            const rows = [1, 2, 3].map((i) => galleryRow({ id: `c${i}`, category: 'cctv', featured: i === 2, order: i, src: `https://res.cloudinary.com/daovfi3i5/image/upload/v1/cctv-${i}.jpg` }))
                .concat([galleryRow({ id: 's1', category: 'solar', featured: true, order: 4, src: 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/solar-1.jpg' })]);
            await mockSupabase(page, { installations: rows });
            await page.route(/res\.cloudinary\.com/, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));
            await page.goto('/', { waitUntil: 'load' });
            await expect(page.locator('#featuredLoop .featured-loop-slide')).toHaveCount(2, { timeout: 10000 });
            await page.evaluate(() => document.getElementById('featuredLoop').scrollIntoView({ block: 'center' }));
            const slide = page.locator('#featuredLoop .featured-loop-slide[data-media-src*="cctv-2"]');
            await page.locator(`#featuredLoopDots .featured-loop-dot >> nth=${await slide.getAttribute('data-featured-index')}`).click();
            await page.waitForTimeout(700);
            const box = await page.locator('#featuredLoop .featured-loop-viewport').boundingBox();
            await page.mouse.click(box.x + box.width / 2, box.y + box.height * 0.3);
            await expect(page.locator('#hmGallery')).toBeVisible();
            await expect(page.locator('#projectModal')).not.toHaveClass(/active|open/);
            await expect(page.locator('#hmGalFigure img')).toHaveAttribute('src', /cctv-2/); // the photo that was clicked
            await expect(page.locator('#hmGalCat')).toContainText('CCTV');
            const idx = () => page.locator('#featuredLoop .featured-loop-slide.is-active').getAttribute('data-featured-index');
            const before = await idx();
            await page.waitForTimeout(2600);
            expect(await idx()).toBe(before); // the slider pauses behind the viewer
        });
    }
});

module.exports = {};
