// @ts-check
// Round 10 (approved in chat 2026-10-01): admin address, scroll lock, aftercare photo,
// gallery swipe, Google-style review form, login + switches redesign.
const { test, expect } = require('@playwright/test');
const { mockSupabase, loginAdmin, galleryRow } = require('./helpers/mock-supabase');

test.describe('Admin address /hailifu=access', () => {
    test('the new address opens the admin login', async ({ page }) => {
        await mockSupabase(page);
        await page.goto('/hailifu=access', { waitUntil: 'load' });
        await expect(page.locator('#hmLoginEmail')).toBeVisible({ timeout: 15000 });
        expect(new URL(page.url()).pathname).toBe('/');
    });

    test('the old ?admin and #admin addresses no longer open it', async ({ page }) => {
        await mockSupabase(page);
        for (const path of ['/?admin', '/#admin']) {
            await page.goto(path, { waitUntil: 'load' });
            await page.waitForTimeout(1500);
            await expect(page.locator('#hmLoginEmail'), path).toBeHidden();
        }
    });

    test('a normal visit after using the admin address does not open the login', async ({ page }) => {
        await mockSupabase(page);
        await page.goto('/hailifu=access', { waitUntil: 'load' });
        await expect(page.locator('#hmLoginEmail')).toBeVisible({ timeout: 15000 });
        await page.goto('/', { waitUntil: 'load' });
        await page.waitForTimeout(1500);
        await expect(page.locator('#hmLoginEmail')).toBeHidden();
    });
});

test.describe('Page stays still behind popups', () => {
    const locked = (page) => page.evaluate(() => document.documentElement.classList.contains('hm-scroll-locked') && getComputedStyle(document.body).position === 'fixed');
    async function scrollTo(page, y) {
        await page.evaluate((v) => { document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, v); }, y);
        await page.waitForTimeout(300);
        return page.evaluate(() => window.scrollY);
    }

    test('quote form freezes the page and puts it back where it was', async ({ page }) => {
        await mockSupabase(page);
        await page.goto('/', { waitUntil: 'load' });
        const y = await scrollTo(page, 1400);
        await page.evaluate(() => document.querySelector('#heroQuoteBtn').click());
        await expect(page.locator('#popupOverlay')).toHaveClass(/active/);
        await expect.poll(() => locked(page)).toBe(true);
        await page.mouse.wheel(0, 1200);
        await page.waitForTimeout(300);
        await page.keyboard.press('Escape');
        await expect.poll(() => locked(page)).toBe(false);
        expect(Math.abs((await page.evaluate(() => window.scrollY)) - y)).toBeLessThan(4);
    });

    test('review form, gallery viewer and phone menu freeze the page too', async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await mockSupabase(page, { installations: [galleryRow({ id: 'g1', category: 'cctv' })] });
        await page.goto('/', { waitUntil: 'load' });
        await scrollTo(page, 900);

        await page.evaluate(() => document.querySelector('.hm-cta-review [data-review-modal-open]').click());
        await expect(page.locator('#reviewModal')).toHaveClass(/active/);
        await expect.poll(() => locked(page)).toBe(true);
        await page.keyboard.press('Escape');
        await expect.poll(() => locked(page)).toBe(false);

        await page.locator('#showcase .hm-sc-card').first().waitFor({ state: 'attached', timeout: 20000 }); // slow CI: cards render late
        await page.evaluate(() => document.querySelector('#showcase .hm-sc-card').click());
        await expect(page.locator('#hmGallery')).toHaveClass(/is-open/);
        await expect.poll(() => locked(page)).toBe(true);
        await page.keyboard.press('Escape');
        await expect.poll(() => locked(page)).toBe(false);

        await scrollTo(page, 0); // the menu bar tucks away while scrolling down
        await page.click('.r7-burger');
        await expect(page.locator('#r7NavSheet')).toHaveClass(/is-open/);
        await expect.poll(() => locked(page)).toBe(true);
    });

    test('admin portal freezes the site behind it but scrolls itself', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 700 });
        await mockSupabase(page, { installations: Array.from({ length: 12 }, (_, i) => galleryRow({ id: `g${i}`, category: 'cctv' })) });
        await loginAdmin(page);
        await expect.poll(() => locked(page)).toBe(true);
        await page.click('#adminPanel .nav-item[data-admin-tab="projects"]');
        await page.waitForSelector('#sgAdmin');
        await page.mouse.move(700, 450);
        await page.mouse.wheel(0, 900);
        await page.waitForTimeout(500);
        const inner = await page.evaluate(() => {
            const els = [document.querySelector('#adminPanel'), ...document.querySelectorAll('#adminPanel *')];
            return els.some((el) => el.scrollTop > 0);
        });
        expect(inner).toBe(true);
    });
});

test.describe('Aftercare photo the owner can change', () => {
    const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
    const afRow = (imageUrl) => ({ id: '__aftercare_settings', data: { id: '__aftercare_settings', type: 'settings', imageUrl }, updated_at: '' });
    const servePhotos = (page) => page.route(/res\.cloudinary\.com|\/storage\/v1\/object\/public\//, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));
    async function openSiteControl(page) {
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="site-control"]');
        await page.waitForSelector('#afCard');
    }

    test('a saved Aftercare photo shows for every visitor, ignoring old per-browser photos', async ({ page }) => {
        await page.addInitScript(() => localStorage.setItem('hailifu_integrity_image_url', 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/old-local.jpg'));
        await mockSupabase(page, { adverts: [afRow('https://res.cloudinary.com/daovfi3i5/image/upload/v1/aftercare-new.jpg')] });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        await expect.poll(() => page.locator('#integrityImage').getAttribute('src')).toContain('aftercare-new.jpg');
        await expect(page.locator('#integrityImage')).toBeVisible();
    });

    test('owner uploads a new photo in Site Control; it is saved for everyone', async ({ page }) => {
        const sb = await mockSupabase(page);
        await servePhotos(page);
        await loginAdmin(page);
        await openSiteControl(page);
        await page.setInputFiles('#afFile', { name: 'team.png', mimeType: 'image/png', buffer: PNG });
        await expect.poll(() => (sb.db.adverts.find((r) => r.id === '__aftercare_settings') || {}).data?.imageUrl || '').toContain('site/aftercare-');
        expect([...sb.storage.keys()].some((k) => k.startsWith('site/aftercare-'))).toBe(true);
        await expect(page.locator('#afPreview img')).toHaveAttribute('src', /site\/aftercare-/);
        await expect(page.locator('#afStatus')).toContainText('Saved');
    });

    test('paste a link, pick from the Media Library, and reset to the default photo', async ({ page }) => {
        const sb = await mockSupabase(page);
        sb.storage.set('library-shot.jpg', { size: 1000, type: 'image/jpeg' });
        await servePhotos(page);
        await loginAdmin(page);
        await openSiteControl(page);
        const saved = () => (sb.db.adverts.find((r) => r.id === '__aftercare_settings') || {}).data?.imageUrl;

        await page.fill('#afLink', 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/pasted.jpg');
        await page.click('[data-af-action="link"]');
        await expect.poll(saved).toBe('https://res.cloudinary.com/daovfi3i5/image/upload/v1/pasted.jpg');

        await page.fill('#afLink', 'javascript:alert(1)');
        await page.click('[data-af-action="link"]');
        await expect(page.locator('#afStatus')).toContainText('https');
        expect(saved()).toBe('https://res.cloudinary.com/daovfi3i5/image/upload/v1/pasted.jpg');

        await page.click('[data-af-action="library"]');
        await page.click('#afLibrary [data-af-pick]');
        await expect.poll(saved).toContain('library-shot.jpg');

        await page.click('[data-af-action="reset"]');
        await expect.poll(saved).toBe('');
        await expect(page.locator('#afPreview .af-empty')).toBeVisible(); // round 11: no built-in photo
    });
});

test.describe('Gallery viewer: smooth swipe', () => {
    const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
    const rows = (n) => Array.from({ length: n }, (_, i) => galleryRow({ id: `s${i}`, category: 'cctv', order: i + 1, src: `https://res.cloudinary.com/daovfi3i5/image/upload/v1/swipe-${i + 1}.jpg` }));
    async function openViewer(page, n = 3) {
        await page.setViewportSize({ width: 1000, height: 760 });
        await mockSupabase(page, { installations: rows(n) });
        await page.route(/res\.cloudinary\.com/, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('#showcase .hm-sc-card').first().waitFor({ state: 'attached', timeout: 20000 }); // slow CI: cards render late
        await page.evaluate(() => document.querySelector('#showcase .hm-sc-card').click());
        await expect(page.locator('#hmGallery')).toHaveClass(/is-open/);
        if (n > 1) await page.locator('#hmGalGrid [data-gal-tile="0"]').click(); // card opens the photo grid first
        await expect(page.locator('#hmGalCounter')).toHaveText(`1 / ${n}`);
        await page.waitForTimeout(500);
        const box = await page.locator('#hmGalFigure').boundingBox();
        return { x: box.x + box.width / 2, y: box.y + box.height / 2, w: box.width };
    }
    const shiftX = (page) => page.locator('#hmGalFigure').evaluate((el) => parseFloat(getComputedStyle(el).translate) || 0);

    test('the photo follows the finger and the next photo slides in beside it', async ({ page }) => {
        const c = await openViewer(page);
        await page.mouse.move(c.x, c.y);
        await page.mouse.down();
        await page.mouse.move(c.x - 150, c.y, { steps: 12 });
        expect(await shiftX(page)).toBeLessThan(-100);
        await expect(page.locator('#hmGallery .hm-gal-peek.is-next img')).toHaveAttribute('src', /swipe-2\.jpg/);
        await expect(page.locator('#hmGallery .hm-gal-peek.is-next')).toBeVisible();
        await page.mouse.move(c.x - c.w * 0.4, c.y, { steps: 10 });
        await page.mouse.up();
        await expect(page.locator('#hmGalCounter')).toHaveText('2 / 3');
        await expect.poll(() => shiftX(page)).toBe(0);
        await expect(page.locator('#hmGalFigure img')).toHaveAttribute('src', /swipe-2\.jpg/);
    });

    test("the browser's own image drag is blocked so a mouse swipe is not cancelled", async ({ page }) => {
        await openViewer(page);
        const blocked = await page.locator('#hmGalFigure img').evaluate((img) => { const ev = new DragEvent('dragstart', { bubbles: true, cancelable: true }); img.dispatchEvent(ev); return ev.defaultPrevented; });
        expect(blocked).toBe(true);
    });

    test('a short slow drag springs back to the same photo', async ({ page }) => {
        const c = await openViewer(page);
        await page.mouse.move(c.x, c.y);
        await page.mouse.down();
        await page.mouse.move(c.x + 40, c.y, { steps: 20 });
        await page.waitForTimeout(250);
        await page.mouse.up();
        await page.waitForTimeout(600);
        await expect(page.locator('#hmGalCounter')).toHaveText('1 / 3');
        expect(await shiftX(page)).toBe(0);
    });

    test('a quick flick changes photo, and swiping right goes back', async ({ page }) => {
        const c = await openViewer(page);
        await page.mouse.move(c.x, c.y);
        await page.mouse.down();
        await page.mouse.move(c.x - 70, c.y, { steps: 2 });
        await page.mouse.up();
        await expect(page.locator('#hmGalCounter')).toHaveText('2 / 3');
        await page.waitForTimeout(500);
        await page.mouse.move(c.x, c.y);
        await page.mouse.down();
        await page.mouse.move(c.x + c.w * 0.4, c.y, { steps: 10 });
        await page.mouse.up();
        await expect(page.locator('#hmGalCounter')).toHaveText('1 / 3');
    });

    test('a drag never zooms or closes the viewer; a single photo stretches and springs back', async ({ page }) => {
        const c = await openViewer(page, 1);
        await page.mouse.move(c.x, c.y);
        await page.mouse.down();
        await page.mouse.move(c.x - 200, c.y, { steps: 10 });
        const pulled = await shiftX(page);
        expect(pulled).toBeLessThan(-10);
        expect(pulled).toBeGreaterThan(-200 * 0.6); // resists: moves less than the finger
        await page.mouse.up();
        await page.waitForTimeout(700);
        expect(await shiftX(page)).toBe(0);
        await expect(page.locator('#hmGallery')).toHaveClass(/is-open/);
        await expect(page.locator('#hmGalFigure')).not.toHaveClass(/is-zoomed/);
    });
});

test.describe('Review form like Google (no name or phone)', () => {
    const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
    const png = (n) => ({ name: `photo-${n}.png`, mimeType: 'image/png', buffer: PNG });
    async function openForm(page) {
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('.hm-cta-review [data-review-modal-open]').click();
        await expect(page.locator('#reviewModal')).toHaveClass(/active/);
    }
    // round 11 spam guard ignores forms sent within 3 s of opening: tests act faster than people
    const submit = async (page) => {
        await page.evaluate(() => { const f = document.getElementById('reviewForm'); if (f) f.dataset.openedAt = String(Date.now() - 60000); });
        await page.locator('#reviewForm .submit-btn').click();
    };
    const pick = (page, group, value) => page.click(`#reviewForm [data-review-single="${group}"] [data-value="${value}"]`);
    const siteRow = (partial = {}) => {
        const data = { id: 'r_photo1', name: 'Hailifu customer', rating: 5, comment: 'Neat CCTV job.', status: 'published', services: ['CCTV installation'], likes: ['Clean finish'], used: 'service', price: 'fair', amount: '2k-5k', speed: 'same-day', media: [{ path: 'reviews/r_photo1/1-a.webp', type: 'image' }], createdAt: new Date().toISOString(), ...partial };
        return { id: data.id, data, updated_at: data.createdAt };
    };

    test('the form has no name or phone and says it posts publicly', async ({ page }) => {
        await mockSupabase(page);
        await openForm(page);
        await expect(page.locator('#reviewVisitorName')).toHaveCount(0);
        await expect(page.locator('#reviewVisitorPhone')).toHaveCount(0);
        await expect(page.locator('#reviewModal')).toContainText('Hailifu Brilliant Installation');
        await expect(page.locator('#reviewModal')).toContainText('Posting publicly on hailifugh.com');
        for (const q of ['Share details of your own experience', 'Add photos & videos', 'What do you like about this business?', 'Did you use this business?', 'Which services did you get?', 'How would you describe the price you paid?', 'How much did you pay?', 'How quickly did they respond?']) {
            await expect(page.locator('#reviewForm'), q).toContainText(q);
        }
    });

    test('a visitor answers everything and adds photos; it goes live, the amount is kept private', async ({ page }) => {
        const sb = await mockSupabase(page);
        await openForm(page);
        await page.click('#googleStarRating .google-star[data-rating="4"]');
        await page.fill('#reviewComment', 'Clean wiring, cameras work on my phone.');
        await page.setInputFiles('#reviewMediaInput', [png(1), png(2)]);
        await expect(page.locator('#reviewMediaList .hm-rv-thumb')).toHaveCount(2);
        await page.click('#reviewMoreDetails > summary'); // the optional questions are folded away (2026-10-02)
        await page.click('#reviewForm [data-review-like-tag="Clean finish"]');
        await pick(page, 'used', 'service');
        await page.click('#reviewServiceGrid label:has(input[value="CCTV installation"])');
        await pick(page, 'price', 'fair');
        await pick(page, 'amount', '500-2k');
        await pick(page, 'speed', 'same-day');
        await submit(page);
        await expect(page.locator('#formSuccess')).toContainText('Thank you');
        await expect(page.locator('#formSuccess a[href*="g.page"]')).toBeVisible();
        await expect.poll(() => sb.db.reviews.length).toBe(1);
        const d = sb.db.reviews[0].data;
        expect(d.status).toBe('published'); // round 11: live at once
        expect(d.name).toBe('Hailifu customer');
        expect(d.phone || '').toBe('');
        expect(d.rating).toBe(4);
        expect(d.likes).toContain('Clean finish');
        expect(d.services).toContain('CCTV installation');
        expect([d.used, d.price, d.speed]).toEqual(['service', 'fair', 'same-day']);
        expect(d.amount).toBeUndefined(); // round 11: never in the public row
        await expect.poll(() => (sb.db.review_private || []).length).toBe(1);
        expect(sb.db.review_private[0]).toMatchObject({ id: d.id, data: { id: d.id, amount: '500-2k' } });
        expect(d.media.length).toBe(2);
        for (const m of d.media) {
            expect(m.path.startsWith(`reviews/${d.id}/`)).toBe(true);
            expect(sb.storage.has(m.path)).toBe(true);
        }
    });

    test('stars alone are enough; no stars is blocked; more than 5 photos are refused', async ({ page }) => {
        const sb = await mockSupabase(page);
        await openForm(page);
        await submit(page);
        await expect(page.locator('#formSuccess')).toContainText('star');
        expect(sb.db.reviews.length).toBe(0);
        await page.setInputFiles('#reviewMediaInput', [1, 2, 3, 4, 5, 6].map(png));
        await expect(page.locator('#reviewMediaList .hm-rv-thumb')).toHaveCount(5);
        await expect(page.locator('#reviewMediaNote')).toContainText('5 photos');
        await page.locator('#reviewMediaList .hm-rv-thumb [data-rv-remove]').first().click();
        await expect(page.locator('#reviewMediaList .hm-rv-thumb')).toHaveCount(4);
        await page.click('#googleStarRating .google-star[data-rating="5"]');
        await submit(page);
        await expect(page.locator('#formSuccess')).toContainText('Thank you');
        await expect.poll(() => sb.db.reviews.length).toBe(1);
        expect(sb.db.reviews[0].data.comment).toBe('');
    });

    test('if photos cannot be uploaded nothing is posted and the visitor is told', async ({ page }) => {
        const sb = await mockSupabase(page);
        sb.refuseUploads = true;
        await openForm(page);
        await page.click('#googleStarRating .google-star[data-rating="5"]');
        await page.setInputFiles('#reviewMediaInput', [png(1)]);
        await submit(page);
        await expect(page.locator('#formSuccess')).toContainText("didn't upload"); // round 19 wording
        expect(sb.db.reviews.length).toBe(0);
        await expect(page.locator('#reviewMediaList .hm-rv-thumb')).toHaveCount(1);
    });

    test('an approved review shows its photos and tags, never the amount paid', async ({ page }) => {
        await mockSupabase(page, { reviews: [siteRow()] });
        await page.route(/\/storage\/v1\/object\/public\//, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));
        await page.goto('/', { waitUntil: 'load' });
        const card = page.locator('.featured-reviews-track .featured-review-card', { hasText: 'Neat CCTV job.' }).first();
        await expect(card).toBeVisible();
        await expect(card).toContainText('Hailifu customer');
        await expect(card.locator('.hm-rv-media img')).toHaveAttribute('src', /reviews\/r_photo1\/1-a\.webp/);
        await expect(card.locator('.hm-rv-tags')).toContainText('CCTV installation');
        await expect(card.locator('.hm-rv-tags')).toContainText('Responded the same day');
        await expect(card).not.toContainText('5,000');
    });

    test('a star-only approved review still shows on the site', async ({ page }) => {
        await mockSupabase(page, { reviews: [siteRow({ id: 'r_stars', comment: '', media: [], services: ['Solar energy'] })] });
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('.featured-reviews-track')).toContainText('Solar energy');
    });

    test('admin sees every answer and photo; deleting removes the photos too', async ({ page }) => {
        const sb = await mockSupabase(page, { reviews: [siteRow({ status: 'pending' })] });
        sb.storage.set('reviews/r_photo1/1-a.webp', { size: 10, type: 'image/webp' });
        await loginAdmin(page);
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="reviews"]');
        const card = page.locator('#rvAdmin .rv-list[data-rv-list="pending"] .rv-card').first();
        for (const t of ['Hailifu customer', 'Got a service', 'Fair', '₵2,000 to ₵5,000', 'Responded the same day', 'Clean finish', 'CCTV installation']) {
            await expect(card, t).toContainText(t);
        }
        await expect(card.locator('.rv-media img')).toHaveCount(1);
        await card.locator('[data-rv-action="delete"]').click();
        await page.locator('#rvAdmin [data-rv-action="delete-yes"]').click();
        await expect.poll(() => sb.db.reviews.length).toBe(0);
        await expect.poll(() => sb.storage.has('reviews/r_photo1/1-a.webp')).toBe(false);
    });
});

test.describe('Admin login and switches redesign', () => {
    async function openLogin(page) {
        await page.goto('/hailifu=access', { waitUntil: 'load' });
        await expect(page.locator('#hmLoginEmail')).toBeVisible({ timeout: 15000 });
    }

    test('login: welcome copy, show/hide password and Caps Lock warning', async ({ page }) => {
        await mockSupabase(page);
        await openLogin(page);
        await expect(page.locator('#hmAdminLogin')).toContainText('Welcome back');
        await expect(page.locator('#hmAdminLogin .hm-login-cancel')).toContainText('Back to website');
        await page.fill('#hmLoginPassword', 'secret-1');
        const toggle = page.locator('#hmLoginPwToggle');
        await expect(toggle).toHaveAttribute('aria-label', 'Show password');
        await toggle.click();
        await expect(page.locator('#hmLoginPassword')).toHaveAttribute('type', 'text');
        await expect(toggle).toHaveAttribute('aria-pressed', 'true');
        await expect(toggle).toHaveAttribute('aria-label', 'Hide password');
        await toggle.click();
        await expect(page.locator('#hmLoginPassword')).toHaveAttribute('type', 'password');
        await expect(page.locator('#hmLoginCaps')).toBeHidden();
        await page.locator('#hmLoginPassword').evaluate((el) => el.dispatchEvent(new KeyboardEvent('keydown', { key: 'A', modifierCapsLock: true, bubbles: true })));
        await expect(page.locator('#hmLoginCaps')).toBeVisible();
        await expect(page.locator('#hmLoginCaps')).toContainText('Caps Lock is on');
        await page.locator('#hmLoginPassword').evaluate((el) => el.dispatchEvent(new KeyboardEvent('keydown', { key: 'a', bubbles: true })));
        await expect(page.locator('#hmLoginCaps')).toBeHidden();
    });

    test('login: busy spinner while signing in, shake and message on a wrong password', async ({ page }) => {
        await mockSupabase(page);
        await page.route('**/auth/v1/token**', async (route) => { await new Promise((r) => setTimeout(r, 900)); await route.fallback(); });
        await openLogin(page);
        await page.fill('#hmLoginEmail', 'owner@example.com');
        await page.fill('#hmLoginPassword', 'wrong-pass');
        await page.click('.hm-login-submit');
        await expect(page.locator('.hm-login-submit')).toHaveAttribute('aria-busy', 'true');
        await expect(page.locator('.hm-login-submit .hm-login-spin')).toBeVisible();
        await expect(page.locator('.hm-login-error')).toContainText('Wrong email or password');
        await expect(page.locator('.hm-login-card')).toHaveClass(/is-shake/);
        await expect(page.locator('.hm-login-submit')).not.toHaveAttribute('aria-busy', 'true');
    });

    test('every on/off control is the same switch: big target, keyboard, on/off state', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 900 });
        await mockSupabase(page);
        await loginAdmin(page);
        await page.click('#adminPanel .nav-item[data-admin-tab="adverts"]');
        await page.waitForSelector('#hmAdsBannerSwitch', { state: 'attached' });
        for (const id of ['#hmAdsBannerSwitch', '#r7TbEnabled', '#hmAdActive']) {
            const input = page.locator(id);
            const sw = page.locator(`.hm-switch:has(${id})`);
            await expect(sw, id).toHaveCount(1);
            await expect(sw.locator('.hm-switch-track'), id).toBeVisible();
            const box = await sw.boundingBox();
            expect(box.height, id).toBeGreaterThanOrEqual(44);
            const before = await input.isChecked();
            await input.focus();
            await page.keyboard.press('Space');
            await expect.poll(() => input.isChecked(), { message: id }).toBe(!before);
        }
        await page.click('#adminPanel .nav-item[data-admin-tab="site-control"]');
        await page.waitForSelector('#scCard input[data-sc-action="show"]', { state: 'attached' });
        const loose = await page.evaluate(() => [...document.querySelectorAll('#scCard input[data-sc-action="show"]')].filter((i) => !i.closest('.hm-switch')).length);
        expect(loose).toBe(0);
    });
});

module.exports = {};
