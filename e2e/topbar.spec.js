// @ts-check
// Top advert bar: drops down, stays 5 s, lifts, drops again 5 s later (until closed).
const { test, expect } = require('@playwright/test');
const { mockSupabase } = require('./helpers/mock-supabase');

function topbarRow(extra = {}) {
    const data = { id: '__topbar_settings', type: 'settings', enabled: true, message: 'Free CCTV site survey this month', ctaLabel: 'Get a quote', ctaUrl: '', tone: 'orange', startsOn: '', endsOn: '', ...extra };
    return { id: '__topbar_settings', data, updated_at: new Date().toISOString() };
}
const isDown = (page) => page.evaluate(() => !!document.getElementById('r7Topbar')?.classList.contains('is-in'));

test.describe('Top advert bar', () => {
    test('drops every 5 seconds: down 5 s, up 5 s, down again', async ({ page }) => {
        await page.clock.install();
        await mockSupabase(page, { adverts: [topbarRow()] });
        await page.goto('/', { waitUntil: 'load' });
        await page.clock.runFor(2500);
        await expect.poll(() => isDown(page)).toBe(true);
        await page.clock.runFor(5200);
        await expect.poll(() => isDown(page)).toBe(false);
        await expect(page.locator('#r7Topbar')).toBeAttached(); // lifted, not removed
        await page.clock.runFor(5200);
        await expect.poll(() => isDown(page)).toBe(true);
        await page.clock.runFor(5200);
        await expect.poll(() => isDown(page)).toBe(false);
    });

    test('stays down while the pointer is on it, then carries on', async ({ page }) => {
        await page.clock.install();
        await mockSupabase(page, { adverts: [topbarRow()] });
        await page.goto('/', { waitUntil: 'load' });
        await page.clock.runFor(2500);
        await expect.poll(() => isDown(page)).toBe(true);
        await page.hover('#r7Topbar .r7-topbar-text');
        await page.clock.runFor(12000);
        expect(await isDown(page)).toBe(true);
        await page.mouse.move(700, 600);
        await page.clock.runFor(5200);
        await expect.poll(() => isDown(page)).toBe(false);
    });

    test('closing it stops the cycle for the visit', async ({ page }) => {
        await page.clock.install();
        await mockSupabase(page, { adverts: [topbarRow()] });
        await page.goto('/', { waitUntil: 'load' });
        await page.clock.runFor(2500);
        await expect.poll(() => isDown(page)).toBe(true);
        await page.click('#r7Topbar [data-topbar-close]');
        await page.clock.runFor(30000);
        expect(await isDown(page)).toBe(false);
        expect(await page.evaluate(() => document.getElementById('r7Topbar').hidden)).toBe(true);
    });

    test('the menu follows the bar down and back up', async ({ page }) => {
        await page.clock.install();
        await mockSupabase(page, { adverts: [topbarRow()] });
        await page.goto('/', { waitUntil: 'load' });
        await page.clock.runFor(2500);
        await expect.poll(() => page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--r7-topbar-h'))).not.toBe('0px');
        await page.clock.runFor(5200);
        await expect.poll(() => page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--r7-topbar-h'))).toBe('0px');
    });
});
