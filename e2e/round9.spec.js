// @ts-check
// Round 9 (docs/superpowers/specs/2026-10-01-round9-design.md)
const { test, expect } = require('@playwright/test');
const { mockSupabase, loginAdmin, galleryRow } = require('./helpers/mock-supabase');

async function openGalleriesTab(page) {
    const menuBtn = page.locator('#hmAdminMenuBtn');
    if (await menuBtn.isVisible()) await menuBtn.click();
    await page.click('#adminPanel .nav-item[data-admin-tab="projects"]');
    await page.waitForSelector('#sgAdmin', { timeout: 15000 });
}

test.describe('Networking service', () => {
    test('networking is a service everywhere on the public site', async ({ page }) => {
        const errors = [];
        page.on('pageerror', (e) => errors.push(e.message));
        test.info().annotations.push({ type: 'guard', description: 'gallery cover on a service card must not crash the page' });
        await mockSupabase(page, { installations: [galleryRow({ category: 'networking' }), galleryRow({ category: 'cctv', cover: true })] });
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('#service-networking h3')).toHaveText('Networking');
        // showcase card for the networking gallery
        await expect(page.locator('#hmScGrid .hm-sc-card[data-sc-open="networking"] h3')).toHaveText('Networking');
        // quote form chip
        await page.locator('#service-networking .request-quote-btn').click();
        await expect(page.locator('#hmQuoteChips .hm-chip[data-service="networking"]')).toHaveClass(/is-selected/);
        await page.locator('#popupClose').click();
        // review form service option
        await expect(page.locator('#reviewServiceGrid input[value="Networking"]')).toHaveCount(1);
        // chatbot offers it
        await page.click('#chatbotToggle');
        await expect(page.locator('#r7ChatReplies [data-reply="networking"]')).toBeVisible({ timeout: 8000 });
        // the services card uses the networking gallery photo
        await expect(page.locator('#service-networking .service-media img')).toHaveAttribute('src', /res\.cloudinary\.com/);
        expect(errors).toEqual([]);
    });

    test('networking has a gallery tab in admin', async ({ page }) => {
        await mockSupabase(page, { installations: [galleryRow({ category: 'networking' })] });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await expect(page.locator('.sg-tab[data-sg-cat="networking"]')).toContainText('Networking');
        await expect(page.locator('.sg-tab[data-sg-cat="networking"] span')).toHaveText('1');
    });
});

test.describe('Galleries: select several, clear Move button', () => {
    const tile = (page, id) => page.locator(`#sgGrid .sg-tile[data-sg-id="${id}"]`);
    const rows = (sb) => sb.db.installations.filter((r) => r.data && r.data.kind === 'gallery');
    function three() {
        return [
            galleryRow({ id: 'g_1', category: 'cctv', order: 1, source: 'supabase', storagePath: 'gallery/cctv/one.webp', src: 'https://example.supabase.co/storage/v1/object/public/media/gallery/cctv/one.webp' }),
            galleryRow({ id: 'g_2', category: 'cctv', order: 2 }),
            galleryRow({ id: 'g_3', category: 'cctv', order: 3 }),
            galleryRow({ id: 'g_s', category: 'solar', order: 1 })
        ];
    }

    test('select several and delete them together', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: three() });
        sb.storage.set('gallery/cctv/one.webp', { size: 1, type: 'image/webp' });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await expect(page.locator('#sgBulk')).toContainText('Select all');
        await tile(page, 'g_1').locator('.sg-select').check();
        await tile(page, 'g_3').locator('.sg-select').check();
        await expect(page.locator('#sgBulk')).toContainText('2 selected');
        await page.click('[data-sg-action="bulk-delete"]');
        await page.click('[data-sg-action="bulk-confirm"]');
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(1);
        expect(rows(sb).map((r) => r.id).sort()).toEqual(['g_2', 'g_s']);
        await expect.poll(() => sb.storage.has('gallery/cctv/one.webp')).toBe(false);
        await expect(page.locator('#adminMediaToast')).toContainText('2 deleted');
    });

    test('select all picks every item in the service only; changing service clears it', async ({ page }) => {
        await mockSupabase(page, { installations: three() });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await page.click('[data-sg-action="select-all"]');
        await expect(page.locator('#sgBulk')).toContainText('3 selected');
        await expect(page.locator('#sgGrid .sg-select:checked')).toHaveCount(3);
        await page.click('.sg-tab[data-sg-cat="solar"]');
        await expect(page.locator('#sgBulk')).not.toContainText('selected');
    });

    test('a refused delete keeps that item selected and says so', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: three() });
        sb.refuseDeleteIds.add('g_2');
        await loginAdmin(page);
        await openGalleriesTab(page);
        await page.click('[data-sg-action="select-all"]');
        await page.click('[data-sg-action="bulk-delete"]');
        await page.click('[data-sg-action="bulk-confirm"]');
        await expect(page.locator('#sgGrid .sg-tile')).toHaveCount(1);
        await expect(tile(page, 'g_2').locator('.sg-select')).toBeChecked();
        await expect(page.locator('#adminMediaToast')).toContainText('1 could not be deleted');
    });

    test('Move button opens a list of services and moves the item', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: three() });
        await loginAdmin(page);
        await openGalleriesTab(page);
        const moveBtn = tile(page, 'g_2').locator('[data-sg-action="move-open"]');
        await expect(moveBtn).toContainText('Move');
        await moveBtn.click();
        const menu = tile(page, 'g_2').locator('.sg-move-menu');
        await expect(menu).toBeVisible();
        await expect(menu.locator('[data-sg-move-to]')).toHaveCount(8); // every service except CCTV
        await menu.locator('[data-sg-move-to="solar"]').click();
        await expect.poll(() => rows(sb).find((r) => r.id === 'g_2').data.category).toBe('solar');
        await expect(tile(page, 'g_2')).toHaveCount(0);
    });

    test('selected items can be moved together', async ({ page }) => {
        const sb = await mockSupabase(page, { installations: three() });
        await loginAdmin(page);
        await openGalleriesTab(page);
        await tile(page, 'g_2').locator('.sg-select').check();
        await tile(page, 'g_3').locator('.sg-select').check();
        await page.selectOption('#sgBulkMove', 'networking');
        await expect.poll(() => rows(sb).filter((r) => r.data.category === 'networking').map((r) => r.id).sort()).toEqual(['g_2', 'g_3']);
        await expect(page.locator('.sg-tab[data-sg-cat="networking"] span')).toHaveText('2');
    });
});

test.describe('Reviews: simple form + owner approval', () => {
    const reviewRow = (partial = {}) => {
        const data = { id: 'r_1', name: 'Ama Mensah', rating: 5, comment: 'Clean CCTV install, very neat.', status: 'pending', source: 'website', createdAt: new Date().toISOString(), ...partial };
        return { id: data.id, data, updated_at: data.createdAt };
    };
    async function openForm(page) {
        await page.goto('/', { waitUntil: 'load' });
        await page.locator('.hm-cta-review [data-review-modal-open]').click();
        await expect(page.locator('#reviewModal')).toHaveClass(/active/);
    }
    async function fillForm(page, { stars = 5, text = 'They fixed our Wi-Fi in one visit.' } = {}) {
        if (stars) await page.click(`#googleStarRating .google-star[data-rating="${stars}"]`);
        if (text) await page.fill('#reviewComment', text);
    }
    // round 11 spam guard ignores forms sent within 3 s of opening: tests act faster than people
    const submit = async (page) => {
        await page.evaluate(() => { const f = document.getElementById('reviewForm'); if (f) f.dataset.openedAt = String(Date.now() - 60000); });
        await page.locator('#reviewForm .submit-btn').click();
    };

    test('visitor posts a review: live at once (round 11), thank-you shown', async ({ page }) => {
        const sb = await mockSupabase(page);
        await openForm(page);
        await fillForm(page);
        await submit(page);
        await expect(page.locator('#formSuccess')).toContainText('Thank you');
        await expect.poll(() => sb.db.reviews.length).toBe(1);
        const row = sb.db.reviews[0];
        expect(row.data.status).toBe('published'); // round 11: no approval step
        expect(row.data.name).toBe('Hailifu customer'); // round 10: no name field
        expect(row.data.rating).toBe(5);
        expect(row.data.comment).toBe('They fixed our Wi-Fi in one visit.');
        expect(row.data.phone || '').toBe(''); // round 10: no phone field
        expect(row.id).toMatch(/^r_/);
    });

    test('missing stars is blocked with a message (round 10: text optional, no name)', async ({ page }) => {
        const sb = await mockSupabase(page);
        await openForm(page);
        await fillForm(page, { stars: 0 });
        await submit(page);
        await expect(page.locator('#formSuccess')).toContainText('star');
        expect(sb.db.reviews.length).toBe(0);
    });

    test('a refused save shows a friendly message and keeps the text', async ({ page }) => {
        const sb = await mockSupabase(page);
        sb.refuseWrites = true;
        await openForm(page);
        await fillForm(page);
        await submit(page);
        await expect(page.locator('#formSuccess')).toContainText('could not be sent');
        await expect(page.locator('#reviewComment')).toHaveValue('They fixed our Wi-Fi in one visit.');
    });

    test('owner shows a hidden review again and it shows on the site', async ({ page }) => {
        const sb = await mockSupabase(page, { reviews: [reviewRow({ phone: '0240000000' })] });
        await loginAdmin(page);
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="reviews"]');
        const waiting = page.locator('#rvAdmin .rv-list[data-rv-list="pending"]');
        await expect(waiting).toContainText('Ama Mensah');
        await waiting.locator('[data-rv-action="approve"]').click();
        await expect.poll(() => sb.db.reviews[0].data.status).toBe('published');
        expect(sb.db.reviews[0].data.phone).toBe(''); // approved rows are public: phone removed
        await expect(page.locator('#rvAdmin .rv-list[data-rv-list="published"]')).toContainText('Ama Mensah');
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('.featured-reviews-track')).toContainText('Ama Mensah');
    });

    test('waiting reviews never show on the public site', async ({ page }) => {
        await mockSupabase(page, { reviews: [reviewRow({ name: 'Hidden Person' })] });
        await page.goto('/', { waitUntil: 'load' });
        await page.waitForTimeout(1500);
        await expect(page.locator('.featured-reviews-track')).not.toContainText('Hidden Person');
    });

    test('script in a review is shown as text, never run', async ({ page }) => {
        await mockSupabase(page, { reviews: [reviewRow({ status: 'published', name: '<b id="xssName">Bad</b>', comment: '<img src=x onerror="window.__xss=1">', authorImage: 'x" onerror="window.__xss=2' })] });
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('.featured-reviews-track')).toContainText('<b id="xssName">Bad</b>');
        await page.waitForTimeout(500);
        expect(await page.evaluate(() => window.__xss)).toBeUndefined();
        await expect(page.locator('#xssName')).toHaveCount(0);
    });
});

test.describe('Google reviews feed (Places API New)', () => {
    const settingsRow = (partial = {}) => ({ id: '__google_settings', data: { id: '__google_settings', type: 'settings', apiKey: 'test-key', placeId: 'PLACE_TEST', ...partial }, updated_at: '' });
    const place = (reviews) => ({
        rating: 4.8,
        userRatingCount: 57,
        googleMapsUri: 'https://maps.google.com/?cid=1',
        reviews: reviews || [
            { rating: 5, relativePublishTimeDescription: '2 weeks ago', publishTime: '2026-09-10T10:00:00Z', text: { text: 'Excellent solar job, very tidy.' }, authorAttribution: { displayName: 'Esi Ofori', photoUri: 'https://lh3.googleusercontent.com/a/x' } },
            { rating: 4, relativePublishTimeDescription: 'a month ago', publishTime: '2026-08-20T10:00:00Z', text: { text: 'Good CCTV setup.' }, authorAttribution: { displayName: 'Kwame A.' } }
        ]
    });
    async function routePlaces(page, handler) {
        const calls = [];
        await page.route('https://places.googleapis.com/**', async (route) => {
            calls.push({ url: route.request().url(), key: route.request().headers()['x-goog-api-key'], mask: route.request().headers()['x-goog-fieldmask'] });
            return handler(route);
        });
        return calls;
    }

    test('shows Google reviews, rating and count', async ({ page }) => {
        await mockSupabase(page, { adverts: [settingsRow()] });
        const calls = await routePlaces(page, (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(place()) }));
        await page.goto('/', { waitUntil: 'load' });
        const grid = page.locator('#google-reviews-grid');
        await expect(grid).toContainText('Esi Ofori');
        await expect(grid).toContainText('Excellent solar job, very tidy.');
        await expect(grid.locator('.google-review-card')).toHaveCount(2);
        await expect(page.locator('#reviewAvgRating')).toHaveText('4.8');
        expect(calls[0].url).toContain('/v1/places/PLACE_TEST');
        expect(calls[0].key).toBe('test-key');
        expect(calls[0].mask).toContain('reviews');
    });

    test('a refused key shows the Google link box and warns once', async ({ page }) => {
        const warnings = [];
        page.on('console', (m) => { if (m.type() === 'warning' && /google/i.test(m.text())) warnings.push(m.text()); });
        await mockSupabase(page, { adverts: [settingsRow()] });
        await routePlaces(page, (route) => route.fulfill({ status: 403, contentType: 'application/json', body: JSON.stringify({ error: { code: 403, message: 'Requests from referer are blocked.', status: 'PERMISSION_DENIED' } }) }));
        await page.goto('/', { waitUntil: 'load' });
        const grid = page.locator('#google-reviews-grid');
        await expect(grid.locator('a[href*="g.page"]')).toBeVisible();
        await page.waitForTimeout(1000);
        expect(warnings.length).toBeLessThanOrEqual(1);
    });

    test('a fresh saved copy is used without asking Google again', async ({ page }) => {
        await page.addInitScript((data) => {
            localStorage.setItem('hailifu_google_place_v1', JSON.stringify({ at: Date.now(), placeId: 'PLACE_TEST', data }));
        }, place([{ rating: 5, text: { text: 'Cached review text' }, authorAttribution: { displayName: 'Cached Person' } }]));
        await mockSupabase(page, { adverts: [settingsRow()] });
        const calls = await routePlaces(page, (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(place()) }));
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('#google-reviews-grid')).toContainText('Cached Person');
        await page.waitForTimeout(800);
        expect(calls.length).toBe(0);
    });

    test('Google review text is shown as text, never run', async ({ page }) => {
        await mockSupabase(page, { adverts: [settingsRow()] });
        await routePlaces(page, (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(place([{ rating: 5, text: { text: '<img src=x onerror="window.__gx=1">' }, authorAttribution: { displayName: '<b id="gxName">X</b>', photoUri: 'x" onerror="window.__gx=2' } }])) }));
        await page.goto('/', { waitUntil: 'load' });
        await expect(page.locator('#google-reviews-grid')).toContainText('<b id="gxName">X</b>');
        await page.waitForTimeout(500);
        expect(await page.evaluate(() => window.__gx)).toBeUndefined();
        await expect(page.locator('#gxName')).toHaveCount(0);
    });

    test('owner saves the key and Place ID in Site Control and tests it', async ({ page }) => {
        const sb = await mockSupabase(page);
        await routePlaces(page, (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(place()) }));
        await loginAdmin(page);
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="site-control"]');
        await page.fill('#gpApiKey', 'AIza-owner-key');
        await page.fill('#gpPlaceId', 'ChIJ_owner_place');
        await page.click('[data-gp-action="test"]');
        await expect(page.locator('#gpStatus')).toContainText('4.8');
        await expect(page.locator('#gpStatus')).toContainText('57');
        await page.click('[data-gp-action="save"]');
        await expect.poll(() => (sb.db.adverts.find((r) => r.id === '__google_settings') || {}).data?.placeId).toBe('ChIJ_owner_place');
        expect(sb.db.adverts.find((r) => r.id === '__google_settings').data.apiKey).toBe('AIza-owner-key');
    });
});

test.describe('Brand colour: site-wide and readable', () => {
    const brandRow = (primary) => ({ id: '__brand_settings', data: { id: '__brand_settings', type: 'settings', primary }, updated_at: '' });
    const cssVar = (page, name) => page.evaluate((n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim().toLowerCase(), name);
    async function openSiteControl(page) {
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        await page.click('#adminPanel .nav-item[data-admin-tab="site-control"]');
        await page.waitForSelector('#brCard');
    }

    test('a saved colour reaches a new visitor, with readable text on it', async ({ page }) => {
        await mockSupabase(page, { adverts: [brandRow('#1f3a8a')] });
        await page.goto('/', { waitUntil: 'load' });
        await expect.poll(() => cssVar(page, '--brand-primary')).toBe('#1f3a8a');
        expect(await cssVar(page, '--p-on-accent')).toBe('#ffffff'); // navy: white text
    });

    test('an old colour saved only in this browser is ignored', async ({ page }) => {
        await page.addInitScript(() => localStorage.setItem('hailifu_branding', JSON.stringify({ primary: '#00ff00', accent: '#ff0000' })));
        await mockSupabase(page);
        await page.goto('/', { waitUntil: 'load' });
        await page.waitForTimeout(800);
        expect(await cssVar(page, '--brand-primary')).not.toBe('#00ff00');
        expect(await cssVar(page, '--brand-dark')).not.toBe('#ff0000');
    });

    test('preview picks dark text on yellow and white text on navy, then saves for everyone', async ({ page }) => {
        const sb = await mockSupabase(page);
        await loginAdmin(page);
        await openSiteControl(page);
        await page.fill('#brandColor', '#ffd400');
        await expect.poll(() => cssVar(page, '--p-on-accent')).toBe('#140c05');
        await page.fill('#brandColor', '#0b1f4d');
        await expect.poll(() => cssVar(page, '--p-on-accent')).toBe('#ffffff');
        await page.click('[data-br-action="save"]');
        await expect.poll(() => (sb.db.adverts.find((r) => r.id === '__brand_settings') || {}).data?.primary).toBe('#0b1f4d');
    });

    test('reset brings back Hailifu orange for everyone', async ({ page }) => {
        const sb = await mockSupabase(page, { adverts: [brandRow('#0b1f4d')] });
        await loginAdmin(page);
        await openSiteControl(page);
        await page.click('[data-br-action="reset"]');
        await expect.poll(() => (sb.db.adverts.find((r) => r.id === '__brand_settings') || {}).data?.primary).toBe('#e8741e');
        expect(await cssVar(page, '--brand-primary')).toBe('#e8741e');
        expect(await cssVar(page, '--p-on-accent')).toBe('#140c05');
    });
});

test.describe('Site health (was Control Center)', () => {
    const googleRow = { id: '__google_settings', data: { id: '__google_settings', type: 'settings', apiKey: 'test-key', placeId: 'PLACE_TEST' }, updated_at: '' };
    const place = { rating: 4.8, userRatingCount: 57, reviews: [{ rating: 5, text: { text: 'Great' }, authorAttribution: { displayName: 'Esi' } }] };
    const review = (status) => ({ id: `r_${status}`, data: { id: `r_${status}`, name: 'Ama', rating: 5, comment: 'Neat work.', status, createdAt: new Date().toISOString() }, updated_at: '' });
    const lead = { id: 'lead_1', data: { id: 'lead_1', name: 'Kojo', phone: '0240000000', service: 'cctv', status: 'new', createdAt: new Date().toISOString() }, updated_at: new Date().toISOString() };
    async function openHealth(page) {
        const menuBtn = page.locator('#hmAdminMenuBtn');
        if (await menuBtn.isVisible()) await menuBtn.click();
        const nav = page.locator('#adminPanel .nav-item[data-admin-tab="control-center"]');
        await expect(nav).toContainText('Site health');
        await nav.click();
        await page.waitForSelector('#shList [data-sh="google"][data-state]:not([data-state="busy"])', { timeout: 20000 });
    }
    const check = (page, key) => page.locator(`#shList [data-sh="${key}"]`);

    test('everything working shows green checks with real numbers', async ({ page }) => {
        await mockSupabase(page, { adverts: [googleRow], reviews: [review('published')], leads: [lead], installations: [galleryRow({ id: 'g1', category: 'cctv' })] });
        await page.route('https://places.googleapis.com/**', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(place) }));
        await loginAdmin(page);
        await openHealth(page);
        for (const key of ['supabase', 'session', 'galleries', 'leads', 'reviews', 'google', 'brand']) {
            await expect(check(page, key), key).toHaveAttribute('data-state', 'ok');
        }
        await expect(check(page, 'galleries')).toContainText('1 item');
        await expect(check(page, 'leads')).toContainText('1 lead');
        await expect(check(page, 'google')).toContainText('4.8');
        await expect(check(page, 'session')).toContainText('@');
    });

    test('Google refusing the key is red with the reason and a fix link', async ({ page }) => {
        await mockSupabase(page, { adverts: [googleRow] });
        await page.route('https://places.googleapis.com/**', (route) => route.fulfill({ status: 403, contentType: 'application/json', body: JSON.stringify({ error: { code: 403, message: 'Requests from referer are blocked.', status: 'PERMISSION_DENIED' } }) }));
        await loginAdmin(page);
        await openHealth(page);
        await expect(check(page, 'google')).toHaveAttribute('data-state', 'bad');
        await expect(check(page, 'google')).toContainText('refused');
        await check(page, 'google').locator('[data-sh-fix]').click();
        await page.waitForSelector('#gpCard');
    });

    test('reviews are counted (hidden ones are not a warning, round 11) and the fix link opens Reviews', async ({ page }) => {
        await mockSupabase(page, { adverts: [googleRow], reviews: [review('pending'), review('published')] });
        await page.route('https://places.googleapis.com/**', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(place) }));
        await loginAdmin(page);
        await openHealth(page);
        await expect(check(page, 'reviews')).toHaveAttribute('data-state', 'ok');
        await expect(check(page, 'reviews')).toContainText('1 on the website, 1 hidden');
        await check(page, 'reviews').locator('[data-sh-fix]').click();
        await page.waitForSelector('#rvAdmin');
    });

    test('storage that cannot be reached is red', async ({ page }) => {
        const sb = await mockSupabase(page, { adverts: [googleRow] });
        await page.route('https://places.googleapis.com/**', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(place) }));
        await loginAdmin(page);
        sb.offlineTables.add('installations');
        await openHealth(page);
        await expect(check(page, 'galleries')).toHaveAttribute('data-state', 'bad');
    });
});

test.describe('Aftercare card, account email, motion', () => {
    test('aftercare card shows real facts and no made-up numbers', async ({ page }) => {
        await mockSupabase(page);
        await page.goto('/', { waitUntil: 'load' });
        const card = page.locator('#integrityPanel');
        await expect(card).toContainText('Looked after after we leave');
        await expect(card).toContainText('24/7');
        await expect(card).toContainText('30 min');
        await expect(card).toContainText('Certified');
        const text = await card.innerText();
        for (const fake of ['99.9%', '< 15 min', '360', 'SECURE', 'Uptime', 'Latency', 'System Integrity']) {
            expect(text, fake).not.toContain(fake);
        }
        await expect(card.locator('#integrityImage')).toBeHidden(); // round 11: no built-in photo until the owner adds one
    });

    test('account menu shows the signed-in email on a phone', async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await mockSupabase(page);
        await loginAdmin(page);
        await page.click('#hmAccountBtn');
        const who = page.locator('#hmAccountMenu .hm-account-who');
        await expect(who).toBeVisible();
        await expect(who).toContainText('Signed in as');
        await expect(who).toContainText('owner@example.com');
    });

    test('account menu opens on top of the page content', async ({ page }) => {
        await page.setViewportSize({ width: 1366, height: 900 });
        await mockSupabase(page);
        await loginAdmin(page);
        await page.click('#adminPanel .nav-item[data-admin-tab="site-control"]');
        await page.waitForSelector('#brCard');
        await page.click('#hmAccountBtn');
        for (const sel of ['#hmAccountMenu .hm-account-who', '#hmAccountMenu [data-hm-account="password"]', '#hmAccountMenu [data-hm-account="logout"]']) {
            const onTop = await page.locator(sel).evaluate((el) => { const r = el.getBoundingClientRect(); const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return !!hit && (hit === el || el.contains(hit)); });
            expect(onTop, sel).toBe(true);
        }
    });

    test('showcase cards tilt with the pointer like the service cards', async ({ page }) => {
        await mockSupabase(page, { installations: [galleryRow({ id: 'g1', category: 'cctv' })] });
        await page.goto('/', { waitUntil: 'load' });
        const card = page.locator('#showcase .hm-sc-card').first();
        await card.scrollIntoViewIfNeeded();
        await expect(card).toBeVisible();
        const box = await card.boundingBox();
        await page.mouse.move(box.x + box.width * 0.85, box.y + box.height * 0.2);
        await page.mouse.move(box.x + box.width * 0.9, box.y + box.height * 0.15);
        await expect.poll(() => card.evaluate((el) => el.classList.contains('is-tilting'))).toBe(true);
    });

    test('the menu wordmark uses the premium display font', async ({ page }) => {
        await mockSupabase(page);
        await page.goto('/', { waitUntil: 'load' });
        const family = await page.locator('#headerLogo').evaluate((el) => getComputedStyle(el).fontFamily);
        expect(family).toMatch(/Unbounded/);
    });
});

module.exports = { openGalleriesTab };
