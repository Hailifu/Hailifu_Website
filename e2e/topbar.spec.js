// @ts-check
// Top advert (round 11): a small paper note. Drops, stays 12 s, lifts, comes back after 45 s
// (until closed). Floats, so the menu never moves.
const { test, expect } = require('@playwright/test');
const { mockSupabase } = require('./helpers/mock-supabase');

function topbarRow(extra = {}) {
    const data = { id: '__topbar_settings', type: 'settings', enabled: true, message: 'Free CCTV site survey this month', ctaLabel: 'Get a quote', ctaUrl: '', tone: 'orange', startsOn: '', endsOn: '', ...extra };
    return { id: '__topbar_settings', data, updated_at: new Date().toISOString() };
}
const isDown = (page) => page.evaluate(() => !!document.getElementById('r7Topbar')?.classList.contains('is-in'));
// Advance the fake clock in small steps until the note has dropped (data loads in real time).
async function waitForDrop(page) {
    await page.waitForFunction(() => !!document.getElementById('r7Topbar'), null, { timeout: 15000 });
    for (let i = 0; i < 20 && !(await isDown(page)); i++) await page.clock.runFor(250);
    expect(await isDown(page)).toBe(true);
}

test.describe('Top advert note', () => {
    test('drops, stays 12 s, lifts, and only comes back after 45 s', async ({ page }) => {
        await page.clock.install();
        await mockSupabase(page, { adverts: [topbarRow()] });
        await page.goto('/', { waitUntil: 'load' });
        await waitForDrop(page);
        await page.clock.runFor(8000);
        expect(await isDown(page)).toBe(true); // not the old 5 s flicker
        await page.clock.runFor(4500);
        await expect.poll(() => isDown(page)).toBe(false);
        await expect(page.locator('#r7Topbar')).toBeAttached(); // lifted, not removed
        await page.clock.runFor(30000);
        expect(await isDown(page)).toBe(false);
        await page.clock.runFor(16000);
        await expect.poll(() => isDown(page)).toBe(true);
    });

    test('stays down while the pointer is on it, then carries on', async ({ page }) => {
        await page.clock.install();
        await mockSupabase(page, { adverts: [topbarRow()] });
        await page.goto('/', { waitUntil: 'load' });
        await waitForDrop(page);
        await page.clock.runFor(1000);
        await page.hover('#r7Topbar .r7-topbar-text');
        await page.clock.runFor(30000);
        expect(await isDown(page)).toBe(true);
        await page.mouse.move(400, 600);
        await page.clock.runFor(12500);
        await expect.poll(() => isDown(page)).toBe(false);
    });

    test('closing it stops it for the visit', async ({ page }) => {
        await page.clock.install();
        await mockSupabase(page, { adverts: [topbarRow()] });
        await page.goto('/', { waitUntil: 'load' });
        await waitForDrop(page);
        await page.click('#r7Topbar [data-topbar-close]');
        await page.clock.runFor(120000);
        expect(await isDown(page)).toBe(false);
        expect(await page.evaluate(() => document.getElementById('r7Topbar').hidden)).toBe(true);
    });

    test('it is a small note, not a full-width bar, and the menu stays put', async ({ page }) => {
        await page.clock.install();
        await mockSupabase(page, { adverts: [topbarRow()] });
        await page.goto('/', { waitUntil: 'load' });
        const navTop = () => page.evaluate(() => document.querySelector('.main-nav').getBoundingClientRect().top);
        // the menu slides in on page load: measure once it has arrived (fast machines got here mid-slide)
        await expect.poll(() => page.evaluate(() => document.querySelector('.main-nav').getAnimations({ subtree: true }).filter((a) => a.playState === 'running').length)).toBe(0);
        const before = await navTop();
        await waitForDrop(page);
        const box = await page.locator('#r7Topbar').boundingBox();
        const vw = page.viewportSize().width;
        expect(box.width).toBeLessThan(260);
        expect(box.width).toBeLessThan(vw / 2);
        expect(await navTop()).toBe(before);
    });
});
