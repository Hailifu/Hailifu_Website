const { test } = require('@playwright/test');
const { mockSupabase, loginAdmin, galleryRow } = require('./helpers/mock-supabase');
const SVG = (c) => '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="' + c + '"/></svg>';
test('lib picker', async ({ page }) => {
  const sb = await mockSupabase(page, { installations: [galleryRow({ id: 'g1', category: 'cctv' })] });
  ['a','b','c','d','e'].forEach((n) => sb.storage.set('lib-' + n + '.jpg', { size: 1, type: 'image/jpeg' }));
  let i = 0; await page.route(/storage\/v1\/object\/public\/|res\.cloudinary/, (r) => r.fulfill({ status: 200, contentType: 'image/svg+xml', body: SVG(['#3a6','#a63','#36a','#a36','#6a3','#888'][i++ % 6]) }));
  await loginAdmin(page);
  await page.click('#adminPanel .nav-item[data-admin-tab="projects"]');
  await page.click('#sgAdmin .sg-tab[data-sg-cat="cctv"]');
  await page.click('#sgAdmin [data-sg-lib="toggle"]');
  await page.locator('#sgLibPanel .sg-lib-item input').nth(1).check();
  await page.locator('#sgLibPanel .sg-lib-item input').nth(3).check();
  await page.waitForTimeout(500);
  const a = await page.locator('#sgAdmin .sg-add').boundingBox(); const b = await page.locator('#sgLibPanel').boundingBox();
  await page.screenshot({ path: 'C:/Users/01hai/AppData/Local/Temp/claude/C--Users-01hai-OneDrive-Desktop-Hailifu-Website-main/daa9bb4c-fdec-4bb2-a91a-ea95e88ecc1e/scratchpad/lib-picker.png', clip: { x: a.x - 10, y: a.y - 10, width: a.width + 20, height: (b.y + b.height) - a.y + 20 } });
});
