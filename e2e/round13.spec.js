// @ts-check
// Round 13 (owner request 2026-10-01): link previews (WhatsApp, Facebook, X) show the current logo.
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { mockSupabase, loginAdmin } = require('./helpers/mock-supabase');

const CARD = 'site/share-card.png';
const CARD_URL = 'https://qcyhxurhbvcgftyzlqdu.supabase.co/storage/v1/object/public/media/site/share-card.png';

async function openSiteControl(page) {
    const menuBtn = page.locator('#hmAdminMenuBtn');
    if (await menuBtn.isVisible()) await menuBtn.click();
    await page.click('#adminPanel .nav-item[data-admin-tab="site-control"]');
    await page.waitForSelector('#lgCard');
}

// public storage: the real logo file stands in for uploaded logos; the share card exists only once uploaded
function servePublic(page, sb) {
    return page.route(/\/storage\/v1\/object\/public\//, (route) => {
        const p = decodeURIComponent(new URL(route.request().url()).pathname.split('/object/public/media/')[1] || '');
        if (p === CARD) return route.fulfill(sb.storage.has(CARD) ? { status: 200, contentType: 'image/png', body: '' } : { status: 400, body: '{"error":"not_found"}' });
        return route.fulfill({ status: 200, contentType: 'image/webp', headers: { 'access-control-allow-origin': '*' }, body: fs.readFileSync(path.join(__dirname, '..', 'logo.webp')) });
    });
}

// supabase-js sends the file inside a multipart form: cut the PNG out of it
function pngFrom(buf) {
    const start = buf.indexOf(Buffer.from([0x89, 0x50, 0x4e, 0x47]));
    const end = buf.indexOf(Buffer.from('IEND'));
    return start >= 0 && end > start ? buf.subarray(start, end + 8) : Buffer.alloc(0);
}

// keep the uploaded card's bytes (the shared mock only keeps the size)
function captureCards(page) {
    const bodies = [];
    page.on('request', (r) => { if (r.method() === 'POST' && r.url().includes(`/storage/v1/object/media/${CARD}`)) bodies.push(pngFrom(r.postDataBuffer() || Buffer.alloc(0))); });
    return bodies;
}

test.describe('Link preview picture follows the logo', () => {
    test('share tags point at the one fixed picture address; the home-screen icon is a real picture', async ({ page, request }) => {
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        for (const sel of ['meta[property="og:image"]', 'meta[property="og:image:secure_url"]', 'meta[name="twitter:image"]']) {
            await expect(page.locator(sel)).toHaveAttribute('content', CARD_URL);
        }
        const icon = await request.get('/apple-touch-icon.png');
        const buf = await icon.body();
        expect(buf.readUInt32BE(16)).toBe(180); // was a 1x1 placeholder
    });

    test('Site Control creates the missing picture, and redraws it when the logo changes or resets', async ({ page }) => {
        const sb = await mockSupabase(page);
        await servePublic(page, sb);
        const bodies = captureCards(page);
        await loginAdmin(page);
        await openSiteControl(page);

        // first visit: the picture did not exist yet, so it is made from the current (original) logo
        await expect.poll(() => bodies.length).toBe(1);
        const first = bodies[0];
        expect(first.subarray(1, 4).toString()).toBe('PNG');
        expect(first.readUInt32BE(16)).toBe(1200);
        expect(first.readUInt32BE(20)).toBe(630);
        fs.writeFileSync(test.info().outputPath('share-card-original.png'), first);

        // opening Site Control again does not redraw it needlessly
        await openSiteControl(page);
        await page.waitForTimeout(800);
        expect(bodies.length).toBe(1);

        await page.setInputFiles('#lgFile', { name: 'my-logo.png', mimeType: 'image/png', buffer: fs.readFileSync(path.join(__dirname, '..', 'apple-touch-icon.png')) });
        await expect(page.locator('#lgStatus')).toContainText('shared links show it too');
        expect(bodies.length).toBe(2);
        expect(sb.storage.has(CARD)).toBe(true);

        await page.click('[data-lg-action="reset"]');
        await expect(page.locator('#lgStatus')).toContainText('original Hailifu logo is back');
        expect(bodies.length).toBe(3);
        expect(sb.storage.has(CARD)).toBe(true); // reset never deletes the share picture
    });

    test('if the picture cannot be saved the owner is told', async ({ page }) => {
        const sb = await mockSupabase(page);
        await servePublic(page, sb);
        await loginAdmin(page);
        await openSiteControl(page);
        sb.refuseUploads = true;
        await page.click('[data-lg-action="reset"]');
        await expect(page.locator('#lgStatus')).toContainText('could not be updated');
    });
});

module.exports = {};
