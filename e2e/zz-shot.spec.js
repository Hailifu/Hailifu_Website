const { test } = require('@playwright/test');
const { mockSupabase } = require('./helpers/mock-supabase');
for (const [n, vp] of [['desk', { width: 1366, height: 900 }], ['phone', { width: 390, height: 844 }]]) {
  test('aftercare empty ' + n, async ({ page }) => {
    await page.setViewportSize(vp);
    await mockSupabase(page, {});
    await page.goto('/', { waitUntil: 'load' });
    await page.locator('#about .about-grid').scrollIntoViewIfNeeded();
    await page.waitForTimeout(2500);
    await page.locator('#about .about-grid').screenshot({ path: 'C:/Users/01hai/AppData/Local/Temp/claude/C--Users-01hai-OneDrive-Desktop-Hailifu-Website-main/daa9bb4c-fdec-4bb2-a91a-ea95e88ecc1e/scratchpad/af-empty-' + n + '.png' });
  });
}
