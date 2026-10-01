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

module.exports = {};
