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

// 2026-10-04 owner: "on admin all the review is not accurate". The overview counted the old
// browser copy / built-in sample reviews (about 20) instead of the real reviews in Supabase.
test('overview Reviews number is the real count from the database', async ({ page }) => {
    const row = (id, status) => {
        const data = { id, name: 'Hailifu customer', rating: 5, comment: 'Good job.', status, source: 'website', media: [], createdAt: new Date().toISOString() };
        return { id, data, updated_at: data.createdAt };
    };
    await mockSupabase(page, { reviews: [row('r_a', 'published'), row('r_b', 'published'), row('r_c', 'hidden')], review_private: [] });
    await loginAdmin(page);
    const kpi = page.locator('#hmDash .hm-kpi[data-tab="reviews"]');
    await expect(kpi.locator('.hm-kpi-value')).toHaveAttribute('data-hm-count', '2');
    await expect(kpi.locator('.hm-kpi-note')).toHaveText('on the website, 1 hidden');
});

test('overview Leads does not show an old copy saved in this browser when the database has none', async ({ page }) => {
    await page.addInitScript(() => {
        try { localStorage.setItem('hailifu_leads', JSON.stringify([{ id: 'lead_old', name: 'Old test lead', phone: '0550000000', service: 'cctv', status: 'new', createdAt: new Date().toISOString() }])); } catch {}
    });
    await mockSupabase(page, { leads: [] });
    await loginAdmin(page);
    const kpi = page.locator('#hmDash .hm-kpi[data-tab="leads"]').first();
    await expect(kpi.locator('.hm-kpi-value')).toHaveAttribute('data-hm-count', '0');
    await expect(page.locator('#hmDash .hm-mini-leads')).toHaveCount(0);
});

test('overview Live adverts counts adverts from the database', async ({ page }) => {
    const ad = (id, active) => ({ id, data: { id, title: 'Ad ' + id, active, createdAt: new Date().toISOString() }, updated_at: new Date().toISOString() });
    await mockSupabase(page, { adverts: [ad('a1', true), ad('a2', true), ad('a3', false)] });
    await loginAdmin(page);
    const kpi = page.locator('#hmDash .hm-kpi[data-tab="adverts"]');
    await expect(kpi.locator('.hm-kpi-value')).toHaveAttribute('data-hm-count', '2');
    await expect(kpi.locator('.hm-kpi-note')).toHaveText('banner is on');
});
