// @ts-check
// Round 11 (approved in chat 2026-10-01): featured work on phones, photos in full,
// PIN removed, aftercare without built-in photo, paper-note top bar, coloured switches,
// reviews live at once, account menu reliability.
const { test, expect, webkit, devices } = require('@playwright/test');
const { mockSupabase, loginAdmin, galleryRow } = require('./helpers/mock-supabase');

const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
const starred = () => [1, 2, 3].map((i) => galleryRow({ id: `f${i}`, category: ['cctv', 'solar', 'electrical'][i - 1], featured: true, order: i, src: `https://res.cloudinary.com/daovfi3i5/image/upload/v1/feat-${i}.jpg` }));
// Index of the slide whose box covers the middle of the featured frame (what the visitor sees).
const visibleSlide = (page) => page.evaluate(() => {
    const vp = document.querySelector('#featuredLoop .featured-loop-viewport') || document.getElementById('featuredLoop');
    const r = vp.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const slides = Array.from(document.querySelectorAll('#featuredLoop .featured-loop-slide'));
    const hit = slides.find((s) => { const b = s.getBoundingClientRect(); return b.left <= cx && b.right >= cx && b.width > 0; });
    return hit ? hit.getAttribute('data-featured-index') : null;
});
const servePhotos = (page) => page.route(/res\.cloudinary\.com/, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));

test.describe('Featured Work on a phone', () => {
    test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

    test('the featured photo changes by itself after the galleries load', async ({ page }) => {
        await mockSupabase(page, { installations: starred() });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        const loop = page.locator('#featuredLoop');
        await loop.scrollIntoViewIfNeeded();
        await expect(page.locator('#featuredLoop .featured-loop-slide')).toHaveCount(3, { timeout: 10000 });
        const active = () => page.locator('#featuredLoop .featured-loop-slide.is-active').getAttribute('data-featured-index');
        const first = await active();
        await expect.poll(active, { timeout: 7000 }).not.toBe(first);
        // The class alone is not enough: the slide the visitor SEES must change too.
        await expect.poll(() => visibleSlide(page), { timeout: 7000 }).not.toBe(first);
    });

    test('the photo on screen matches the active slide after the next arrow', async ({ page }) => {
        await mockSupabase(page, { installations: starred() });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('#featuredLoop').scrollIntoViewIfNeeded();
        await expect(page.locator('#featuredLoop .featured-loop-slide')).toHaveCount(3, { timeout: 10000 });
        await expect(page.locator('#featuredLoop .featured-loop-slide.is-active')).toHaveAttribute('data-featured-index', '0');
        await page.locator('#featuredLoopNext').tap();
        await expect.poll(() => visibleSlide(page), { timeout: 4000 }).toBe('1');
    });

    test('round 16: no dots under Featured Work; the arrows still move it', async ({ page }) => {
        await mockSupabase(page, { installations: starred() });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('#featuredLoop').scrollIntoViewIfNeeded();
        await expect(page.locator('#featuredLoop .featured-loop-slide')).toHaveCount(3, { timeout: 10000 });
        await expect(page.locator('#featured-work .featured-loop-dots, #featured-work .featured-loop-dot')).toHaveCount(0);
        await page.locator('#featuredLoopPrev').tap();
        await expect(page.locator('#featuredLoop .featured-loop-slide.is-active')).toHaveAttribute('data-featured-index', '2');
    });
});

// iPhone engine (WebKit): the old phone mode froze after the first slide here.
test('Featured Work keeps changing on an iPhone (WebKit)', async ({ baseURL }) => {
    const browser = await webkit.launch();
    try {
        const ctx = await browser.newContext({ ...devices['iPhone 13'], baseURL });
        const page = await ctx.newPage();
        const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => galleryRow({ id: `w${i}`, category: 'cctv', featured: true, order: i, src: `https://res.cloudinary.com/daovfi3i5/image/upload/v1/w-${i}.jpg` }));
        await mockSupabase(page, { installations: rows });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('#featuredLoop .featured-loop-slide')).toHaveCount(9, { timeout: 10000 });
        // Re-scroll on every check: on slow CI machines late layout shifts can push the loop off screen
        // (the loop rightly pauses then). Two changes in a row = it did not freeze after the first slide.
        const seen = async () => { await page.locator('#featuredLoop').scrollIntoViewIfNeeded(); return visibleSlide(page); };
        const first = await seen();
        try {
            await expect.poll(seen, { timeout: 20000 }).not.toBe(first);
            const second = await seen();
            await expect.poll(seen, { timeout: 20000 }).not.toBe(second);
        } catch (err) {
            // GitHub-only failure (2026-10-01): print why the loop is not moving
            const state = await page.evaluate(() => {
                const loop = document.getElementById('featuredLoop');
                const track = loop && loop.querySelector('.featured-loop-track');
                const r = loop ? loop.getBoundingClientRect() : null;
                return {
                    hidden: document.hidden, visibility: document.visibilityState, focus: document.hasFocus(),
                    io: typeof IntersectionObserver, innerHeight, scrollY: Math.round(scrollY),
                    loopRect: r && [Math.round(r.top), Math.round(r.bottom)],
                    track: track && { transform: getComputedStyle(track).transform, inline: track.style.transform, transition: getComputedStyle(track).transition },
                    active: loop && (loop.querySelector('.is-active') || {}).outerHTML?.slice(0, 120),
                    gallery: !!document.querySelector('#hmGallery.is-open'), locked: document.documentElement.className
                };
            });
            console.log('[featured diag]', JSON.stringify(state));
            throw err;
        }
    } finally { await browser.close(); }
});

// A wide 3:1 picture: cropping would cut its ends off.
const WIDE = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400"><rect width="1200" height="400" fill="#2a6"/><rect width="100" height="400" fill="#e33"/><rect x="1100" width="100" height="400" fill="#33e"/></svg>`;
const serveWide = (page) => page.route(/res\.cloudinary\.com/, (route) => route.fulfill({ status: 200, contentType: 'image/svg+xml', body: WIDE }));

test.describe('Photos and videos in full', () => {
    for (const vp of [{ name: 'desktop', size: { width: 1280, height: 860 } }, { name: 'phone', size: { width: 390, height: 844 } }]) {
        test(`work photos are never cropped and have a blurred fill (${vp.name})`, async ({ page }) => {
            await page.setViewportSize(vp.size);
            const rows = ['cctv', 'solar', 'electrical'].map((c, i) => galleryRow({ id: `p${i}`, category: c, featured: true, cover: true, order: i }));
            await mockSupabase(page, { installations: rows });
            await serveWide(page);
            await page.goto('/', { waitUntil: 'load' });
            await expect(page.locator('#featuredLoop .featured-loop-slide')).toHaveCount(3, { timeout: 10000 });
            for (const sel of ['#featured-work .featured-card-media img', '#showcase .hm-sc-media img']) {
                const img = page.locator(sel).first();
                await img.scrollIntoViewIfNeeded();
                await expect(img).toHaveCSS('object-fit', 'contain');
                const info = await img.evaluate((el) => {
                    const fill = el.parentElement.querySelector(':scope > .r11-fill');
                    const host = getComputedStyle(el.parentElement).position;
                    return { fill: fill ? getComputedStyle(fill).backgroundImage : '', host };
                });
                expect(info.fill, sel).toContain('cloudinary');
                expect(info.host, `${sel} frame must be positioned`).not.toBe('static');
            }
        });
    }

    test('the hero background video still fills the screen (not a work photo)', async ({ page }) => {
        await mockSupabase(page, {});
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('.hero-video-container video').first()).toHaveCSS('object-fit', 'cover');
    });
});

test.describe('Admin PIN removed', () => {
    test('Site Control has no PIN card and the old stored PIN is cleared', async ({ page }) => {
        await page.addInitScript(() => { try { if (!sessionStorage.getItem('pinSeeded')) { localStorage.setItem('hailifu_admin_control_pin', '9999'); sessionStorage.setItem('pinSeeded', '1'); } } catch {} });
        await mockSupabase(page, {});
        await loginAdmin(page);
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="site-control"]');
        await page.waitForSelector('#afCard');
        await expect(page.locator('#adminControlPinInput')).toHaveCount(0);
        await expect(page.locator('#saveAdminPinBtn')).toHaveCount(0);
        await expect(page.getByText('Destructive Action PIN')).toHaveCount(0);
        expect(await page.evaluate(() => localStorage.getItem('hailifu_admin_control_pin'))).toBeNull();
    });
});

test.describe('Aftercare without a built-in photo', () => {
    test('with nothing saved the Aftercare card shows no photo', async ({ page }) => {
        await mockSupabase(page, {});
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('#integrityPanel').scrollIntoViewIfNeeded();
        await page.waitForTimeout(1500);
        await expect(page.locator('#integrityContainer')).toBeHidden();
        expect(await page.locator('#integrityImage').getAttribute('src') || '').not.toContain('field-technician');
    });

    test('a saved Aftercare photo still shows', async ({ page }) => {
        const row = { id: '__aftercare_settings', data: { id: '__aftercare_settings', type: 'settings', imageUrl: 'https://res.cloudinary.com/daovfi3i5/image/upload/v1/af.jpg' }, updated_at: '' };
        await mockSupabase(page, { adverts: [row] });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('#integrityPanel').scrollIntoViewIfNeeded();
        await expect(page.locator('#integrityImage')).toBeVisible();
        await expect(page.locator('#integrityContainer')).toBeVisible();
    });
});

test.describe('Switches in colour', () => {
    test('a switch is green with a tick when on and red with a cross when off', async ({ page }) => {
        await mockSupabase(page, {});
        await loginAdmin(page);
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="adverts"]');
        const sw = page.locator('label.hm-switch:has(#hmAdActive)');
        await sw.scrollIntoViewIfNeeded();
        const look = () => sw.evaluate((el) => ({
            track: getComputedStyle(el.querySelector('.hm-switch-track')).backgroundColor,
            mark: getComputedStyle(el.querySelector('.hm-switch-thumb'), '::after').content
        }));
        await expect(page.locator('#hmAdActive')).toBeChecked();
        await expect.poll(look).toEqual({ track: 'rgb(34, 165, 91)', mark: '"✓"' });
        await sw.click();
        await page.mouse.move(5, 5);
        await expect(page.locator('#hmAdActive')).not.toBeChecked();
        await expect.poll(look).toEqual({ track: 'rgb(208, 69, 60)', mark: '"✕"' });
    });
});

test.describe('Reviews go live at once', () => {
    async function openForm(page) {
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('.hm-cta-review [data-review-modal-open]').click();
        await expect(page.locator('#reviewModal')).toHaveClass(/active/);
    }
    const backdate = (page) => page.evaluate(() => { document.getElementById('reviewForm').dataset.openedAt = String(Date.now() - 60000); });
    const send = (page) => page.locator('#reviewForm .submit-btn').click();

    test('a posted review shows on the website straight away', async ({ page }) => {
        const sb = await mockSupabase(page);
        await openForm(page);
        await page.click('#googleStarRating .google-star[data-rating="5"]');
        await page.fill('#reviewComment', 'Fast gate motor repair, thank you.');
        await backdate(page);
        await send(page);
        await expect(page.locator('#formSuccess')).toContainText('now on the website');
        await expect.poll(() => sb.db.reviews.length).toBe(1);
        expect(sb.db.reviews[0].data.status).toBe('published');
        await expect(page.locator('.featured-reviews-track')).toContainText('Fast gate motor repair');
    });

    test('robots are ignored: the hidden trap field, or sending within a second', async ({ page }) => {
        const sb = await mockSupabase(page);
        await openForm(page);
        await page.click('#googleStarRating .google-star[data-rating="5"]');
        await page.evaluate(() => { document.getElementById('reviewWebsite').value = 'http://spam.example'; });
        await backdate(page);
        await send(page);
        await expect(page.locator('#formSuccess')).toContainText('Thank you');
        await page.waitForTimeout(800);
        expect(sb.db.reviews.length).toBe(0);

        await openForm(page);
        await page.click('#googleStarRating .google-star[data-rating="5"]');
        await page.evaluate(() => { document.getElementById('reviewForm').dataset.openedAt = String(Date.now()); });
        await send(page); // straight after opening, faster than a person
        await expect(page.locator('#formSuccess')).toContainText('Thank you');
        await page.waitForTimeout(800);
        expect(sb.db.reviews.length).toBe(0);
    });

    test('web links in the text are refused; one review per browser every 10 minutes', async ({ page }) => {
        const sb = await mockSupabase(page);
        await openForm(page);
        await page.click('#googleStarRating .google-star[data-rating="4"]');
        await page.fill('#reviewComment', 'Cheap pills at www.spam.example');
        await backdate(page);
        await send(page);
        await expect(page.locator('#formSuccess')).toContainText('remove web links');
        await page.fill('#reviewComment', 'Good work on our solar.');
        await send(page);
        await expect(page.locator('#formSuccess')).toContainText('now on the website');
        expect(sb.db.reviews.length).toBe(1);

        await openForm(page);
        await page.click('#googleStarRating .google-star[data-rating="5"]');
        await backdate(page);
        await send(page);
        await expect(page.locator('#formSuccess')).toContainText('few minutes');
        expect(sb.db.reviews.length).toBe(1);
    });

    test('before the new SQL is run, a review is still saved (as waiting)', async ({ page }) => {
        const sb = await mockSupabase(page);
        sb.insertGuard = (table, row) => table !== 'reviews' || row.data.status === 'pending';
        await openForm(page);
        await page.click('#googleStarRating .google-star[data-rating="5"]');
        await backdate(page);
        await send(page);
        await expect(page.locator('#formSuccess')).toContainText('shortly');
        await expect.poll(() => sb.db.reviews.length).toBe(1);
        expect(sb.db.reviews[0].data.status).toBe('pending');
    });

    test('admin: live reviews first, Hide / Show on website, and saving never puts the amount back', async ({ page }) => {
        const data = { id: 'r_old1', name: 'Hailifu customer', rating: 5, comment: 'Old review with amount inside.', status: 'published', amount: '2k-5k', source: 'website', createdAt: new Date().toISOString() };
        const sb = await mockSupabase(page, { reviews: [{ id: data.id, data, updated_at: data.createdAt }], review_private: [] });
        await loginAdmin(page);
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="reviews"]');
        const groups = page.locator('#rvAdmin .rv-group h3');
        await expect(groups.first()).toContainText('On the website');
        await expect(groups.nth(1)).toContainText('Hidden');
        const card = page.locator('#rvAdmin .rv-list[data-rv-list="published"] .rv-card').first();
        await expect(card).toContainText('only you see this');
        await card.locator('[data-rv-reply]').fill('Thank you!');
        await card.locator('[data-rv-action="reply-save"]').click();
        await expect.poll(() => sb.db.reviews[0].data.ownerReply).toBe('Thank you!');
        expect(sb.db.reviews[0].data.amount).toBeUndefined();
        await page.locator('#rvAdmin .rv-list[data-rv-list="published"] [data-rv-action="unpublish"]').click();
        await expect.poll(() => sb.db.reviews[0].data.status).toBe('pending');
        await page.locator('#rvAdmin .rv-list[data-rv-list="pending"] [data-rv-action="approve"]').click();
        await expect.poll(() => sb.db.reviews[0].data.status).toBe('published');
    });
});

test.describe('Admin account menu', () => {
    const TABS = ['overview', 'leads', 'projects', 'media', 'reviews', 'adverts', 'site-control', 'control-center', 'notifications'];
    for (const vp of [{ name: 'desktop', size: { width: 1366, height: 860 } }, { name: 'phone', size: { width: 390, height: 844 } }]) {
        test(`opens and closes on every tab, every time (${vp.name})`, async ({ page }) => {
            test.setTimeout(120000);
            await page.setViewportSize(vp.size);
            await mockSupabase(page, {});
            await loginAdmin(page);
            const btn = page.locator('#hmAccountBtn');
            const menu = page.locator('#hmAccountMenu');
            for (const tab of TABS) {
                const navBtn = page.locator('#hmAdminMenuBtn');
                if (await navBtn.isVisible()) await navBtn.click();
                await page.click(`#adminPanel .nav-item[data-admin-tab="${tab}"]`);
                await page.waitForTimeout(400);
                for (let round = 0; round < 2; round++) {
                    await btn.click();
                    await expect(menu, `${tab}: opens (round ${round + 1})`).toBeVisible();
                    await expect(btn).toHaveAttribute('aria-expanded', 'true');
                    await btn.click();
                    await expect(menu, `${tab}: closes with the same button`).toBeHidden();
                }
                await btn.click();
                await expect(menu).toBeVisible();
                await page.keyboard.press('Escape');
                await expect(menu, `${tab}: Escape closes`).toBeHidden();
                await expect(page.locator('#adminPanel'), `${tab}: Escape keeps the portal open`).toHaveClass(/active/);
                await btn.click();
                await page.locator('#hmAdminPageTitle').click();
                await expect(menu, `${tab}: clicking outside closes`).toBeHidden();
            }
        });
    }
});

test.describe('Media Library linked to the galleries', () => {
    test('owner adds Media Library files to a service gallery', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: [galleryRow({ id: 'g_exist', category: 'cctv' })] });
        sb.storage.set('lib-camera.jpg', { size: 100, type: 'image/jpeg' });
        sb.storage.set('lib-walkthrough.mp4', { size: 100, type: 'video/mp4' });
        await page.route(/\/storage\/v1\/object\/public\//, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));
        await loginAdmin(page);
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="projects"]');
        await page.waitForSelector('#sgAdmin [data-sg-lib="toggle"]');
        await page.click('#sgAdmin .sg-tab[data-sg-cat="cctv"]');
        await page.click('#sgAdmin [data-sg-lib="toggle"]');
        const panel = page.locator('#sgLibPanel');
        await expect(panel.locator('.sg-lib-item')).toHaveCount(2);
        const add = panel.locator('[data-sg-lib="add"]');
        await expect(add).toBeDisabled();
        await panel.locator('.sg-lib-item:has(img) input').check();
        await panel.locator('.sg-lib-item:has(video) input').check();
        await expect(add).toContainText('Add 2 to');
        await add.click();
        await expect.poll(() => sb.db.installations.length).toBe(3);
        const added = sb.db.installations.filter((r) => r.id !== 'g_exist').map((r) => r.data);
        expect(added.every((d) => d.kind === 'gallery' && d.category === 'cctv' && d.source === 'supabase')).toBe(true);
        expect(added.map((d) => d.mediaType).sort()).toEqual(['image', 'video']);
        expect(added.map((d) => d.storagePath).sort()).toEqual(['lib-camera.jpg', 'lib-walkthrough.mp4']);
        await expect(panel.locator('.sg-lib-item.is-added')).toHaveCount(2); // marked "In this gallery"
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(3);
    });
});

test.describe('Pull down to close', () => {
    test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

    // A real finger drag (Chrome touch events), from the middle-top of an element.
    async function pull(page, selector, distance, { steps = 12, stepMs = 16 } = {}) {
        const box = await page.locator(selector).first().boundingBox();
        const x = box.x + box.width / 2;
        const y = box.y + Math.min(60, box.height / 4);
        const cdp = await page.context().newCDPSession(page);
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
        for (let i = 1; i <= steps; i++) {
            await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y + (distance * i) / steps }] });
            await page.waitForTimeout(stepMs);
        }
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    }

    test('quote form: a long pull closes it, a short slow pull springs back', async ({ page }) => {
        await mockSupabase(page, {});
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('#heroQuoteBtn').click();
        await expect(page.locator('#popupOverlay')).toHaveClass(/active/);
        await page.waitForTimeout(500);
        await pull(page, '#popupOverlay .hm-quote', 50, { steps: 10, stepMs: 60 });
        await page.waitForTimeout(500);
        await expect(page.locator('#popupOverlay')).toHaveClass(/active/);
        expect(await page.locator('#popupOverlay .hm-quote').evaluate((el) => el.style.translate)).toBe('');
        await pull(page, '#popupOverlay .hm-quote', 220);
        await expect(page.locator('#popupOverlay')).not.toHaveClass(/active/);
    });

    test('review form closes with a pull', async ({ page }) => {
        await mockSupabase(page, {});
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('.hm-cta-review [data-review-modal-open]').click();
        await expect(page.locator('#reviewModal')).toHaveClass(/active/);
        await page.waitForTimeout(500);
        await pull(page, '#reviewModal .review-modal-dialog', 220);
        await expect(page.locator('#reviewModal')).not.toHaveClass(/active/);
    });

    test('gallery viewer closes with a pull, but not while zoomed', async ({ page }) => {
        await mockSupabase(page, { installations: [1, 2].map((i) => galleryRow({ id: `v${i}`, category: 'cctv', order: i, cover: i === 1 })) });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        const card = page.locator('#showcase [data-gallery-open], #showcase .hm-sc-card').first();
        await card.scrollIntoViewIfNeeded();
        await card.click();
        await expect(page.locator('#hmGallery')).toBeVisible();
        await page.locator('#hmGalGrid [data-gal-tile="0"]').click(); // cards open the photo grid first (2026-10-02)
        await page.waitForTimeout(500);
        await page.evaluate(() => document.getElementById('hmGalFigure').classList.add('is-zoomed'));
        await pull(page, '#hmGallery .hm-gal-stage', 220);
        await page.waitForTimeout(400);
        await expect(page.locator('#hmGallery')).toBeVisible();
        await page.evaluate(() => document.getElementById('hmGalFigure').classList.remove('is-zoomed'));
        await pull(page, '#hmGallery .hm-gal-stage', 220);
        await expect(page.locator('#hmGallery')).toBeHidden();
    });

    test('a sideways swipe in the gallery does not close it', async ({ page }) => {
        await mockSupabase(page, { installations: [1, 2].map((i) => galleryRow({ id: `s${i}`, category: 'cctv', order: i, cover: i === 1 })) });
        await servePhotos(page);
        await page.goto('/', { waitUntil: 'load' });
        const card = page.locator('#showcase [data-gallery-open], #showcase .hm-sc-card').first();
        await card.scrollIntoViewIfNeeded();
        await card.click();
        await expect(page.locator('#hmGallery')).toBeVisible();
        await page.locator('#hmGalGrid [data-gal-tile="0"]').click(); // cards open the photo grid first (2026-10-02)
        await page.waitForTimeout(500);
        const box = await page.locator('#hmGallery .hm-gal-stage').boundingBox();
        const cdp = await page.context().newCDPSession(page);
        const y = box.y + box.height / 2;
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: box.x + box.width - 40, y }] });
        for (let i = 1; i <= 10; i++) {
            await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: box.x + box.width - 40 - i * 20, y: y + i * 4 }] });
            await page.waitForTimeout(16);
        }
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
        await page.waitForTimeout(500);
        await expect(page.locator('#hmGallery')).toBeVisible();
    });
});

test.describe('Theme follows the device unless the visitor chose one', () => {
    const theme = (page) => page.evaluate(() => [document.documentElement.getAttribute('data-theme'), document.documentElement.getAttribute('data-theme-mode')]);

    test('no choice: light device shows light, dark device shows dark, and it follows changes', async ({ page }) => {
        await mockSupabase(page, {});
        await page.emulateMedia({ colorScheme: 'light' });
        await page.goto('/', { waitUntil: 'load' });
        expect(await theme(page)).toEqual(['light', 'system']);
        await page.emulateMedia({ colorScheme: 'dark' });
        await expect.poll(() => theme(page)).toEqual(['dark', 'system']);
    });

    test('the very first paint already has the right theme (no dark flash on a light phone)', async ({ page }) => {
        await mockSupabase(page, {});
        await page.emulateMedia({ colorScheme: 'light' });
        await page.goto('/', { waitUntil: 'commit' });
        await page.waitForSelector('html[data-theme]', { state: 'attached' });
        expect(await page.evaluate(() => document.documentElement.getAttribute('data-theme'))).toBe('light');
    });

    test('the button cycles: opposite of the device, the other, then Auto; a choice beats the device', async ({ page }) => {
        await mockSupabase(page, {});
        await page.emulateMedia({ colorScheme: 'dark' });
        await page.goto('/', { waitUntil: 'load' });
        const btn = page.locator('#themeToggle');
        await expect(btn).toHaveAttribute('title', /Auto/);
        await btn.click();
        expect(await theme(page)).toEqual(['light', 'light']);
        await expect(btn).toHaveAttribute('title', 'Theme: Light');
        await page.emulateMedia({ colorScheme: 'dark' });
        await page.reload({ waitUntil: 'load' });
        expect(await theme(page)).toEqual(['light', 'light']); // the choice is kept
        await btn.click();
        expect(await theme(page)).toEqual(['dark', 'dark']);
        await btn.click();
        expect(await theme(page)).toEqual(['dark', 'system']);
        expect(await page.evaluate(() => localStorage.getItem('hailifu_theme'))).toBeNull();
        await expect(page.locator('#themeToggle .theme-icon--auto')).toHaveCSS('opacity', '1');
    });
});

test.describe('Review cards show everything', () => {
    test('comment, photo and owner reply are visible (not squeezed away), no "Native" label', async ({ page }) => {
        const d = { id: 'r_full', name: 'Hailifu customer', rating: 5, comment: 'Neat CCTV job, the team explained everything.', status: 'published', services: ['CCTV installation'], likes: ['Clean finish'], media: [{ path: 'reviews/r_full/1-a.webp', type: 'image' }], ownerReply: 'Thank you for choosing Hailifu!', createdAt: new Date().toISOString() };
        await mockSupabase(page, { reviews: [{ id: d.id, data: d, updated_at: d.createdAt }] });
        await page.route(/\/storage\/v1\/object\/public\//, (route) => route.fulfill({ status: 200, contentType: 'image/png', body: PNG }));
        await page.goto('/', { waitUntil: 'load' });
        await page.evaluate(() => document.querySelector('.featured-reviews-track').scrollIntoView({ block: 'center' }));
        await page.waitForTimeout(1500);
        const sizes = await page.evaluate(() => {
            const card = Array.from(document.querySelectorAll('.featured-reviews-track .featured-review-card')).find((c) => c.textContent.includes('Neat CCTV job'));
            const h = (sel) => { const el = card.querySelector(sel); if (!el) return -1; const r = el.getBoundingClientRect(); const c = card.getBoundingClientRect(); return r.bottom <= c.bottom + 1 ? r.height : -2; };
            return { comment: h('p'), media: h('.hm-rv-media'), reply: h('.featured-review-response'), labels: Array.from(document.querySelectorAll('.featured-reviews-track .review-source')).map((s) => s.textContent.trim()) };
        });
        expect(sizes.comment).toBeGreaterThan(15);
        expect(sizes.media).toBeGreaterThan(40);
        expect(sizes.reply).toBeGreaterThan(20);
        expect(sizes.labels.some((l) => /^native$/i.test(l))).toBe(false);
    });
});

module.exports = {};
