const { test } = require('@playwright/test');
const { mockSupabase, loginAdmin } = require('./helpers/mock-supabase');
for (const [n, vp] of [['desk', { width: 1366, height: 860 }], ['phone', { width: 390, height: 844 }]]) {
test('menu on top ' + n, async ({ page }) => {
  test.setTimeout(120000);
  await page.setViewportSize(vp);
  await mockSupabase(page, {});
  await loginAdmin(page);
  for (const tab of ['overview', 'leads', 'projects', 'media', 'reviews', 'adverts', 'site-control', 'control-center', 'notifications']) {
    const nb = page.locator('#hmAdminMenuBtn'); if (await nb.isVisible()) await nb.click();
    await page.click(`#adminPanel .nav-item[data-admin-tab="${tab}"]`);
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 0));
    const r = await page.evaluate(() => {
      const btn = document.getElementById('hmAccountBtn'); const b = btn.getBoundingClientRect();
      const hitBtn = document.elementFromPoint(b.left + b.width / 2, b.top + b.height / 2);
      btn.click();
      const items = Array.from(document.querySelectorAll('#hmAccountMenu [role="menuitem"]'));
      const res = items.map((it) => { const q = it.getBoundingClientRect(); const h = document.elementFromPoint(q.left + q.width / 2, q.top + q.height / 2); return it.contains(h) ? 'ok' : (h ? (h.id || h.className || h.tagName) : 'none'); });
      btn.click();
      return { btn: btn.contains(hitBtn) ? 'ok' : (hitBtn ? (hitBtn.id || hitBtn.className || hitBtn.tagName) : 'none'), items: res };
    });
    console.log(n, tab, JSON.stringify(r));
  }
});
}
