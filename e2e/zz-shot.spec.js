const { test, expect } = require('@playwright/test');
const { mockSupabase } = require('./helpers/mock-supabase');
test('debug gap', async ({ page }) => {
  const sb = await mockSupabase(page);
  const open = async () => { await page.goto('/', { waitUntil: 'load' }); await page.locator('.hm-cta-review [data-review-modal-open]').click(); await expect(page.locator('#reviewModal')).toHaveClass(/active/); };
  const back = () => page.evaluate(() => { document.getElementById('reviewForm').dataset.openedAt = String(Date.now() - 60000); });
  await open();
  await page.click('#googleStarRating .google-star[data-rating="4"]');
  await page.fill('#reviewComment', 'Good work on our solar.');
  await back();
  await page.locator('#reviewForm .submit-btn').click();
  await expect.poll(() => sb.db.reviews.length).toBe(1);
  console.log('ls after send', await page.evaluate(() => localStorage.getItem('hailifu_review_last_sent')));
  await open();
  console.log('ls after reload', await page.evaluate(() => localStorage.getItem('hailifu_review_last_sent')));
});
