const { test } = require('@playwright/test');
const { mockSupabase } = require('./helpers/mock-supabase');
const row = (tone) => ({ id: '__topbar_settings', data: { id: '__topbar_settings', type: 'settings', enabled: true, message: 'Free CCTV site survey this month. Book before Friday.', ctaLabel: 'Get a quote', ctaUrl: '', tone, startsOn: '', endsOn: '' }, updated_at: '' });
for (const [n, vp, tone] of [['desk', { width: 1366, height: 800 }, 'orange'], ['phone', { width: 390, height: 844 }, 'orange'], ['phone-dark', { width: 390, height: 844 }, 'dark']]) {
  test('note ' + n, async ({ page }) => {
    await page.setViewportSize(vp);
    await mockSupabase(page, { adverts: [row(tone)] });
    await page.goto('/', { waitUntil: 'load' });
    await page.waitForFunction(() => document.getElementById('r7Topbar')?.classList.contains('is-in'), null, { timeout: 15000 });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: 'C:/Users/01hai/AppData/Local/Temp/claude/C--Users-01hai-OneDrive-Desktop-Hailifu-Website-main/daa9bb4c-fdec-4bb2-a91a-ea95e88ecc1e/scratchpad/note-' + n + '.png' });
  });
}
