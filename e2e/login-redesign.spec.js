// @ts-check
// Admin login redesign (2026-10-02): split screen, Light / Dark / Auto switch, forgot-password flow.
const { test, expect } = require('@playwright/test');
const { mockSupabase, loginAdmin } = require('./helpers/mock-supabase');

async function openLogin(page, theme) {
    if (theme) await page.addInitScript((t) => { try { localStorage.setItem('hailifu_theme', t); } catch {} }, theme);
    await mockSupabase(page);
    await page.goto('/hailifu=access', { waitUntil: 'load' });
    await expect(page.locator('#hmLoginEmail')).toBeVisible({ timeout: 15000 });
}

for (const theme of ['dark', 'light']) {
    for (const [name, w, h] of [['desk', 1366, 820], ['phone', 390, 844]]) {
        test(`login ${theme} ${name}: photo side + form, no page errors`, async ({ page }) => {
            const errors = [];
            page.on('pageerror', (e) => errors.push(e.message));
            await page.setViewportSize({ width: w, height: h });
            await openLogin(page, theme);
            await expect(page.locator('#hmAdminLogin .hm-login-art')).toBeVisible();
            await expect(page.locator(`#hmLoginTheme [data-theme-set="${theme}"]`)).toHaveAttribute('aria-pressed', 'true');
            const box = await page.locator('#hmAdminLogin .hm-login-submit').boundingBox();
            expect(box && box.y + box.height).toBeLessThanOrEqual(h); // Sign in visible without scrolling
            await page.waitForTimeout(1200);
            await page.screenshot({ path: `test-results/login-${theme}-${name}.png` });
            expect(errors).toEqual([]);
        });
    }
}

test('login theme switch changes and saves the site theme', async ({ page }) => {
    await openLogin(page, 'dark');
    await page.click('#hmLoginTheme [data-theme-set="light"]');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await expect(page.locator('#hmLoginTheme [data-theme-set="light"]')).toHaveAttribute('aria-pressed', 'true');
    expect(await page.evaluate(() => localStorage.getItem('hailifu_theme'))).toBe('light');
    await page.click('#hmLoginTheme [data-theme-set="system"]');
    await expect(page.locator('html')).toHaveAttribute('data-theme-mode', 'system');
    expect(await page.evaluate(() => localStorage.getItem('hailifu_theme'))).toBeNull();
    await expect(page.locator('#hmAdminLogin')).toBeVisible(); // the login stays open
});

test('forgot password: reset mode and back to sign in', async ({ page }) => {
    await openLogin(page);
    await page.click('#hmAdminLogin .hm-login-pwblock [data-login-mode]');
    await expect(page.locator('#hmLoginTitle')).toHaveText('Reset password');
    await expect(page.locator('#hmLoginPassword')).toBeHidden();
    await expect(page.locator('.hm-login-submit-text')).toHaveText('Send reset link');
    await page.click('#hmAdminLogin .hm-login-back-signin');
    await expect(page.locator('#hmLoginTitle')).toHaveText('Welcome back');
    await expect(page.locator('#hmLoginPassword')).toBeVisible();
    await expect(page.locator('#hmAdminLogin .hm-login-back-signin')).toBeHidden();
});

test.describe('Login photo the owner can change', () => {
    const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
    const lpRow = (imageUrl) => ({ id: '__login_settings', data: { id: '__login_settings', type: 'settings', imageUrl }, updated_at: '' });
    const servePhotos = (page) => page.route(/res\.cloudinary\.com|\/storage\/v1\/object\/public\//,(route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));
    const artSrc = (page) => page.locator('#hmAdminLogin .hm-login-art-img').getAttribute('src');

    test('a saved login photo shows on the login; none saved = the original photo', async ({ page }) => {
        await mockSupabase(page, { adverts: [lpRow('https://res.cloudinary.com/daovfi3i5/image/upload/v1/login-new.jpg')] });
        await servePhotos(page);
        await page.goto('/hailifu=access', { waitUntil: 'load' });
        await expect(page.locator('#hmLoginEmail')).toBeVisible({ timeout: 15000 });
        await expect.poll(() => artSrc(page)).toContain('login-new.jpg');
    });

    test('original photo when nothing is saved', async ({ page }) => {
        await mockSupabase(page);
        await page.goto('/hailifu=access', { waitUntil: 'load' });
        await expect(page.locator('#hmLoginEmail')).toBeVisible({ timeout: 15000 });
        await page.waitForTimeout(1500);
        expect(await artSrc(page)).toBe('/assets/img/field-technician.webp');
    });

    test('owner changes it in Site Control: upload, link, library, original', async ({ page }) => {
        const sb = await mockSupabase(page);
        sb.storage.set('library-shot.jpg', { size: 1000, type: 'image/jpeg' });
        await servePhotos(page);
        await loginAdmin(page);
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="site-control"]');
        await page.waitForSelector('#lpCard');
        const saved = () => (sb.db.adverts.find((r) => r.id === '__login_settings') || {}).data?.imageUrl;
        await expect(page.locator('#lpPreview img')).toHaveAttribute('src', '/assets/img/field-technician.webp');

        await page.setInputFiles('#lpFile', { name: 'shop.png', mimeType: 'image/png', buffer: PNG });
        await expect.poll(() => saved() || '').toContain('site/login-');
        await expect(page.locator('#lpPreview img')).toHaveAttribute('src', /site\/login-/);

        await page.fill('#lpLink', 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/pasted.jpg');
        await page.click('[data-lp-action="link"]');
        await expect.poll(saved).toBe('https://res.cloudinary.com/daovfi3i5/image/upload/v1/pasted.jpg');
        await expect.poll(() => [...sb.storage.keys()].some((k) => k.startsWith('site/login-'))).toBe(false); // replaced upload removed

        await page.fill('#lpLink', 'javascript:alert(1)');
        await page.click('[data-lp-action="link"]');
        await expect(page.locator('#lpStatus')).toContainText('https');

        await page.click('[data-lp-action="library"]');
        await page.click('#lpLibrary [data-lp-pick]');
        await expect.poll(saved).toContain('library-shot.jpg');

        await page.click('[data-lp-action="reset"]');
        await expect.poll(saved).toBe('');
        await expect(page.locator('#lpPreview img')).toHaveAttribute('src', '/assets/img/field-technician.webp');
    });
});
