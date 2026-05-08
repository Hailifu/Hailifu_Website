// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Public smoke', () => {
    test('home responds and title matches brand', async ({ page }) => {
        const res = await page.goto('/');
        expect(res, 'navigation should return a response').toBeTruthy();
        expect(res.ok()).toBeTruthy();
        await expect(page).toHaveTitle(/HAILIFU/i);
    });

    test('hero Request a Quote opens and closes invoice popup', async ({ page }) => {
        await page.goto('/');
        await page.locator('#heroQuoteBtn').click();
        await expect(page.locator('#popupOverlay.active')).toBeVisible();
        await expect(page.locator('#popupQuoteForm')).toBeVisible();
        await page.locator('#popupClose').click();
        await expect(page.locator('#popupOverlay')).toBeHidden();
    });

    test('Contact Us opens quote popup', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /contact us/i }).click();
        await expect(page.locator('#popupOverlay.active')).toBeVisible();
        await page.locator('#popupClose').click();
    });

    test('service card Request a Quote opens popup', async ({ page }) => {
        await page.goto('/');
        await page.locator('.request-quote-btn').first().click();
        await expect(page.locator('#popupOverlay.active')).toBeVisible();
        await expect(page.locator('#serviceContext h3')).toBeVisible();
    });

    test('deep link #quote resolves in document', async ({ page }) => {
        await page.goto('/#quote');
        await expect(page.locator('#quote')).toBeAttached();
        await expect(page.locator('#services')).toBeVisible();
    });

    test('theme toggle updates html data-theme', async ({ page }) => {
        await page.goto('/');
        const html = page.locator('html');
        const before = await html.getAttribute('data-theme');
        await page.locator('#themeToggle').click();
        await expect.poll(async () => html.getAttribute('data-theme'), { timeout: 5000 }).not.toBe(before);
    });

    test('Write a Review opens modal', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: /write a review/i }).first().click();
        await expect(page.locator('#reviewModal.active')).toBeVisible({ timeout: 15000 });
        await page.locator('#reviewModalClose').click();
        await expect(page.locator('#reviewModal')).toBeHidden();
    });
});
