// @ts-check
// Admin refresh (2026-10-02): reloading keeps the owner in the admin, on the same tab.
const { test, expect } = require('@playwright/test');
const { mockSupabase, loginAdmin } = require('./helpers/mock-supabase');

const adminOpen = (page) => page.waitForFunction(() => document.getElementById('adminPanel')?.classList.contains('active'), null, { timeout: 15000 });

async function openTab(page, tab) {
    const menuBtn = page.locator('#hmAdminMenuBtn');
    if (await menuBtn.isVisible()) await menuBtn.click();
    await page.click(`#adminPanel .nav-item[data-admin-tab="${tab}"]`);
}

for (const [name, w, h] of [['desk', 1280, 800], ['phone', 390, 844]]) {
    test(`${name}: reloading the page keeps the admin open on the same tab`, async ({ page }) => {
        await page.setViewportSize({ width: w, height: h });
        await mockSupabase(page);
        await loginAdmin(page);
        await openTab(page, 'site-control');
        await page.waitForSelector('#afCard');
        await page.reload({ waitUntil: 'load' });
        await adminOpen(page);
        await expect(page.locator('#afCard')).toBeVisible({ timeout: 15000 });
        await expect(page.locator('#hmAdminLogin')).toHaveCount(0); // no second sign-in
        await page.waitForTimeout(600);
        await page.screenshot({ path: `test-results/admin-refresh-${name}.png` });
        // and again: a second reload also stays on the same tab
        await page.reload({ waitUntil: 'load' });
        await adminOpen(page);
        await expect(page.locator('#afCard')).toBeVisible({ timeout: 15000 });
    });
}

test('the Refresh button reloads and comes back to the same tab', async ({ page }) => {
    await mockSupabase(page);
    await loginAdmin(page);
    await openTab(page, 'reviews');
    await expect(page.locator('#hmAdminPageTitle')).toContainText(/review/i);
    await Promise.all([page.waitForEvent('load'), page.click('#hmAdminRefresh')]);
    await adminOpen(page);
    await expect(page.locator('#hmAdminPageTitle')).toContainText(/review/i, { timeout: 15000 });
});

test('after Log out, a reload shows the normal website', async ({ page }) => {
    await mockSupabase(page);
    await loginAdmin(page);
    await page.evaluate(() => document.getElementById('adminLogoutBtn').click());
    await page.waitForFunction(() => !document.getElementById('adminPanel')?.classList.contains('active'));
    await page.reload({ waitUntil: 'load' });
    await page.waitForTimeout(2500);
    expect(await page.evaluate(() => !!document.getElementById('adminPanel')?.classList.contains('active'))).toBe(false);
    await expect(page.locator('#hmAdminLogin')).toHaveCount(0);
});

test('a normal visit in a new tab never opens the admin', async ({ page, context }) => {
    await mockSupabase(page);
    await loginAdmin(page);
    const other = await context.newPage();
    await mockSupabase(other);
    await other.goto('/', { waitUntil: 'load' });
    await other.waitForTimeout(2500);
    expect(await other.evaluate(() => !!document.getElementById('adminPanel')?.classList.contains('active'))).toBe(false);
});
