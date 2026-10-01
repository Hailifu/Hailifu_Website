// @ts-check
// Round 20 (owner 2026-10-01): "light, dark, system mode doesn't work on admin portal".
const { test, expect } = require('@playwright/test');
const { mockSupabase, loginAdmin, galleryRow } = require('./helpers/mock-supabase');

const now = () => new Date().toISOString();
const tables = () => ({
    installations: [galleryRow({ category: 'cctv' }), galleryRow({ category: 'solar' })],
    leads: [{ id: 'l1', data: { id: 'l1', name: 'Kofi Mensah', phone: '0240000000', service: 'cctv', status: 'new', message: 'Need 4 cameras', createdAt: now() }, updated_at: now() }],
    reviews: [{ id: 'r_1', data: { id: 'r_1', name: 'Ama', rating: 5, comment: 'Good work', status: 'published', source: 'website', createdAt: now() }, updated_at: now() }]
});

async function openTab(page, tab) {
    const menuBtn = page.locator('#hmAdminMenuBtn');
    if (await menuBtn.isVisible()) await menuBtn.click();
    await page.click(`#adminPanel .nav-item[data-admin-tab="${tab}"]`);
    await page.waitForTimeout(900);
}
const adminBgLightness = (page) => page.evaluate(() => {
    const m = getComputedStyle(document.getElementById('adminPanel')).backgroundColor.match(/\d+(\.\d+)?/g).map(Number);
    return (Math.max(m[0], m[1], m[2]) + Math.min(m[0], m[1], m[2])) / 510;
});

// every visible piece of text: contrast against the background it really sits on
function lowContrast() {
    const parse = (s) => {
        const str = String(s);
        const m = str.match(/[\d.]+/g);
        if (!m) return null;
        const v = m.map(Number);
        return str.startsWith('color(srgb') ? [v[0] * 255, v[1] * 255, v[2] * 255, v[3]] : v; // color-mix() results
    };
    const lum = ([r, g, b]) => [r, g, b].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }).reduce((a, v, i) => a + v * [0.2126, 0.7152, 0.0722][i], 0);
    const bgOf = (el) => {
        for (let e = el; e; e = e.parentElement) {
            const cs = getComputedStyle(e);
            if (cs.backgroundImage && cs.backgroundImage.includes('url(')) return null; // photo behind: skip
            const c = parse(cs.backgroundColor);
            if (c && (c[3] === undefined || c[3] > 0.6)) return c;
        }
        return [255, 255, 255];
    };
    const bad = [];
    const root = document.getElementById('adminPanel');
    for (const el of root.querySelectorAll('*')) {
        if (!Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) continue;
        const cs = getComputedStyle(el);
        if (cs.visibility === 'hidden' || Number(cs.opacity) < 0.3) continue;
        if (el.closest('[hidden], [aria-hidden="true"], .r7-topbar, .hm-switch, option, .lg-tile, .sg-tile, .hm-media-thumb')) continue;
        const bg = bgOf(el);
        if (!bg) continue;
        const fg = parse(cs.color);
        const a = lum(fg), b = lum(bg);
        const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
        if (ratio < 3) bad.push(`${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}.${String(el.className).split(' ').slice(0, 2).join('.')} "${el.textContent.trim().slice(0, 30)}" ${ratio.toFixed(2)} fg=${cs.color} bg=rgb(${bg.slice(0, 3).join(',')})`);
    }
    return bad;
}

test.describe('Admin portal theme', () => {
    test('Light, Dark and Auto switch the admin and are remembered', async ({ page }) => {
        await page.emulateMedia({ colorScheme: 'dark' });
        await mockSupabase(page, tables());
        await loginAdmin(page);
        const control = page.locator('#hmAdminTheme');
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await expect(control.locator('[data-theme-set="system"]')).toHaveAttribute('aria-pressed', 'true');
        expect(await adminBgLightness(page)).toBeLessThan(0.2);

        await control.locator('[data-theme-set="light"]').click();
        await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
        await expect.poll(() => adminBgLightness(page)).toBeGreaterThan(0.85);
        await expect(control.locator('[data-theme-set="light"]')).toHaveAttribute('aria-pressed', 'true');
        expect(await page.evaluate(() => localStorage.getItem('hailifu_theme'))).toBe('light');

        await control.locator('[data-theme-set="dark"]').click();
        await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
        await expect.poll(() => adminBgLightness(page)).toBeLessThan(0.2);

        await page.emulateMedia({ colorScheme: 'light' });
        await control.locator('[data-theme-set="system"]').click();
        await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
        expect(await page.evaluate(() => localStorage.getItem('hailifu_theme'))).toBeNull();
        await page.emulateMedia({ colorScheme: 'dark' }); // Auto follows the device as it changes
        await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    });

    test('in light mode every admin tab is readable (no white-on-white, no dark leftovers)', async ({ page }) => {
        test.setTimeout(180000);
        await page.setViewportSize({ width: 1366, height: 900 });
        await page.addInitScript(() => { try { localStorage.setItem('hailifu_theme', 'light'); } catch {} });
        await mockSupabase(page, tables());
        await loginAdmin(page);
        const tabs = await page.$$eval('#adminPanel .nav-item[data-admin-tab]', (n) => n.map((x) => x.dataset.adminTab));
        const problems = {};
        for (const tab of tabs) {
            await openTab(page, tab);
            const bad = await page.evaluate(lowContrast);
            if (bad.length) problems[tab] = bad.slice(0, 12);
        }
        expect(problems).toEqual({});
    });
});
