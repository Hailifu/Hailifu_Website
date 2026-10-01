// Phone menu (☰): tapping a section link must take you to that section.
// Bug 2026-10-01: the page is frozen while the menu is open (scroll lock), so the jump
// was lost and the page was put back at the top when the menu closed.
const { test, expect, devices, chromium, webkit } = require('@playwright/test');
const { mockSupabase } = require('./helpers/mock-supabase');

for (const [label, engine, device] of [['Android', chromium, devices['Pixel 7']], ['iPhone', webkit, devices['iPhone 13']]]) {
    test(`phone menu links scroll to their section (${label})`, async ({ baseURL }) => {
        test.setTimeout(120000);
        const browser = await engine.launch();
        try {
            const ctx = await browser.newContext({ ...device, baseURL });
            const page = await ctx.newPage();
            await mockSupabase(page);
            await page.goto('/', { waitUntil: 'load' });
            for (const [text, id] of [['Services', 'services'], ['Reviews', 'reviews']]) {
                // the menu bar hides while scrolling down; back at the top it is shown
                await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
                await expect(page.locator('#r7Burger')).toBeInViewport();
                await page.locator('#r7Burger').tap();
                await expect(page.locator('#r7NavSheet')).toHaveClass(/is-open/);
                await page.locator('.r7-sheet-links a', { hasText: text }).tap();
                await expect(page.locator('#r7NavSheet')).not.toHaveClass(/is-open/);
                await expect.poll(() => page.evaluate((t) => Math.round(document.getElementById(t).getBoundingClientRect().top), id), { timeout: 8000 })
                    .toBeLessThan(260);
                await expect.poll(() => page.evaluate((t) => Math.round(document.getElementById(t).getBoundingClientRect().top), id)).toBeGreaterThan(-40);
                await expect(page).toHaveURL(new RegExp(`#${id}$`));
            }
        } finally { await browser.close(); }
    });
}
