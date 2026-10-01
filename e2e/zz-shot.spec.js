const { test } = require('@playwright/test');
const { mockSupabase, loginAdmin } = require('./helpers/mock-supabase');
test('switches', async ({ page }) => {
  await mockSupabase(page, {});
  await loginAdmin(page);
  const m = page.locator('#hmAdminMenuBtn'); if (await m.isVisible()) await m.click();
  await page.click('#adminPanel .nav-item[data-admin-tab="adverts"]');
  await page.waitForSelector('#hmAdActive', { state: 'attached' });
  await page.waitForTimeout(800);
  const first = page.locator('#adminPanel .hm-switch').first();
  await first.scrollIntoViewIfNeeded();
  const box = await page.locator('#adminMainContent').boundingBox();
  await page.screenshot({ path: 'C:/Users/01hai/AppData/Local/Temp/claude/C--Users-01hai-OneDrive-Desktop-Hailifu-Website-main/daa9bb4c-fdec-4bb2-a91a-ea95e88ecc1e/scratchpad/switch-ads.png', clip: { x: box.x, y: box.y, width: Math.min(box.width, 1100), height: 520 } });
  await page.locator('label.hm-switch:has(#hmAdActive)').click();
  await page.locator('label.hm-switch:has(#hmAdActive)').screenshot({ path: 'C:/Users/01hai/AppData/Local/Temp/claude/C--Users-01hai-OneDrive-Desktop-Hailifu-Website-main/daa9bb4c-fdec-4bb2-a91a-ea95e88ecc1e/scratchpad/switch-off.png' });
});
