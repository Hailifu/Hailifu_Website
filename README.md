# Hailifu Website — Project Context (for humans and AI assistants)

Paste this file (or its sections) into an AI when you want it to **understand the whole project and where development has reached**, without re-scanning the repo.

---

## Changelog

Every change to the site is logged here, newest first. Originals from before the premium rebuild are kept in `_backup-original-2026-09-28/`.

### 2026-10-01 (round 11): Featured Work on phones, … (in progress)

Backup of the files before this round: `_backup-before-round11-2026-10-01/`. Progress log (survives a PC shutdown): `.superpowers/sdd/2026-10-01-round11/progress.md`.

| File | Change |
|---|---|
| (project) | **Crash safety:** the project folder is now a local **git** repository. A checkpoint commit is made after every finished step, so a sudden shutdown loses at most the step in progress. Nothing is uploaded anywhere. To see checkpoints: `git log --oneline`. |
| `script.js`, `premium.css` (11.1) | **Featured Work changes by itself on phones again.** On iPhone it moved once and then froze; on Android it jumped. Phones now use the same sliding track as desktop (swipe with a finger, arrows, dots). Also fixed: after the galleries loaded, the slider was rebuilt but the "is it on screen" watcher kept watching the old copy and could stop the slider for good. |
| `premium.js` (`initFullMedia`), `premium.css` (11.2) | **Photos and videos are shown in full, never cropped**, across the public site: Featured Work, Services, Work Showcase, the Aftercare photo and review photos. The space around a photo is filled with a soft blurred copy of the same photo (videos: their first frame from Cloudinary or their poster). Works for galleries that load later too. The hero background video, logos and admin thumbnails are unchanged. Also fixed: on Featured Work the "Project" label sat on top of the title; it now sits above it. |
| `script.js`, `ADMIN_SETUP.md` | **Admin PIN removed.** The "Admin Security → Destructive Action PIN / Save Admin PIN" card asked for a PIN before some deletes (latest upload, leads, media library). It gave no real protection: the PIN lived only in one browser, defaulted to `2026`, and the box showed it pre-filled. Your Supabase login + database rules are the real protection, and every delete still asks "Are you sure?". The card, the prompts and the stored PIN are gone. |
| `script.js`, `premium.css` (11.4), `ADMIN_SETUP.md` | **Aftercare: no built-in photo.** With nothing saved, the "Looked after after we leave" card shows without a photo (heading and facts only). In Site Control, "Reset to default photo" is now **Remove photo**, and the preview says "No photo yet". A saved photo still shows for every visitor. |
| `script.js`, `premium.css` (11.5) | **Top advert is now a small square paper note** (admin description updated too) that drops gently from the top, with a strip of tape, under the menu on the right. Calmer rhythm: it stays 12 s, lifts, and comes back only every 45 s (it was every 5 s), never while you point at it; × closes it for the visit. It floats, so the menu no longer moves down. Tones: orange = cream paper with orange tape, dark = charcoal paper, light = white paper. The admin preview shows the note. |
| `premium.css` (11.6) | **Switches in colour:** every switch (admin and site) is **green with a ✓ when on** and **red with a ✕ when off**. The tick/cross means on/off is clear even for colour-blind visitors. |
| `script.js`, `index.html`, `premium.css` (11.7), `supabase/sql/reviews_instant_publish.sql` (new), `ADMIN_SETUP.md` | **Reviews go live as soon as a customer sends them**, no approval step, and the visitor sees theirs on the site at once. **You keep full control** in Admin → Reviews: **On the website** (live, first) and **Hidden**; Hide / Show on website / Save reply / Delete. The menu badge now counts reviews from the last 2 days; Site health no longer warns about hidden reviews. **Amount paid stays private:** it is now stored in a separate admin-only table `review_private` and never in the public review (saving a reply also strips it; the SQL moves amounts already stored). **Spam guards:** web links refused; a hidden trap field and a 3-second minimum quietly ignore robots; one review per browser per 10 minutes; the database allows at most 8 new reviews per 10 minutes site-wide and checks stars 1–5 and size. **Owner step:** run `reviews_instant_publish.sql` in Supabase. Until then, reviews still arrive but wait in Hidden. |
| `script.js` | **Admin email (account) menu made reliable.** Its clicks are now handled before any other admin code, so a feature that stops clicks can no longer block it. Found and fixed: **Escape closed the whole admin portal** instead of just the menu. Added keyboard use: Enter opens it and focuses the first item, arrow keys move, Tab/Escape close. Tested on all 9 admin pages, desktop and phone, opening and closing repeatedly. A plain click failure did not show up in testing; if it still happens, note which page you were on. |
| `script.js`, `premium.css` (11.9), `ADMIN_SETUP.md` | **Media Library ↔ Galleries, both ways.** It was already possible one file at a time from the Media Library (gallery icon on a file → pick a service → Add). Now also from the gallery side: in Admin → Galleries, **From Media Library** opens your uploaded photos and videos: tick some, then **Add N to <service>**. Files already in that gallery are marked "In this gallery". Removing a gallery item never deletes the file from the Media Library. |
| `premium.js` (`initPullToClose`) | **Pull down to close:** every popup with an ✕ (quote form, review form, project details, photo grid, gallery viewer, media viewer, both chats, phone menu) can be closed by pulling it down with a finger. It follows the finger; past about 110 px or with a quick flick it closes the normal way; a short pull springs back. It never starts while the content is scrolled down, on a text field, on a zoomed photo, or on a sideways swipe (gallery swiping still works). |
| `index.html`, `script.js`, `premium.css` (11.11) | **Theme follows the device unless the visitor chooses.** With no choice made, the site (and admin) uses the phone or computer's light/dark setting and switches live when it changes. The theme button cycles: first the opposite of the device, then the other, then **Auto** (half-circle icon); a short message says which. A choice is remembered on that device. A tiny script in `<head>` sets the theme before the page draws, so light-mode phones don't see a dark flash. |
| `script.js`, `premium.css` (11.13) | **Review design check: cards fixed.** (1) Cards were a fixed 220 px tall, so the comment shrank to nothing and photos were cut off. Cards now grow with their content and a row shares one height. (2) **Your replies were never shown on the site**: an old style rule hid them, although Admin says "shown under the review". They now show under the review as "Reply from Hailifu". (3) The internal word "Native" no longer appears; built-in reviews say "Customer review". (4) Cleaner header: avatar, name in normal letters, source and date in small grey text. The review form itself was checked on phone and desktop, light and dark, and needed no change. |
| `e2e/round9.spec.js`, `e2e/round10.spec.js`, `e2e/helpers/mock-supabase.js` | Review tests follow the live-at-once flow (status `published`, amount only in `review_private`); the mock can imitate a database rule (`insertGuard`). |
| `e2e/topbar.spec.js` | Rewritten for the note: 12 s / 45 s rhythm, hover keeps it, close stops it, small note and the menu stays put. |
| `e2e/round10.spec.js` | Aftercare test updated: after removing, the preview shows "No photo yet" instead of the old built-in photo. |
| `e2e/round11.spec.js` | Featured Work tests check the photo actually **on screen**, including on the iPhone engine (WebKit) with 9 photos (fails on the old code, passes now). |

### 2026-10-01 (round 10): New admin address, Google-style reviews, smooth gallery swipe, still page behind popups, Aftercare photo, login + switches

Approved in chat as a bounded design (no spec file). Backup of the files before this round: `_backup-before-round10-2026-10-01/`.

| File | Change |
|---|---|
| `hailifu=access.html` (new), `script.js` | **Admin address is now `hailifugh.com/hailifu=access`.** The page marks the tab as an admin visit and opens the site with the login. `/?admin` and `/#admin` no longer open it. Password-reset links (`/?admin-reset=1`) are unchanged. Top bar and chat still stay out of the way on admin visits. |
| `premium.js`, `premium.css` (7.22) | **Page stays still behind popups**, also on iPhone (where hiding the scrollbar alone does nothing): quote form, review form, gallery viewer, photo grid, phone menu, admin login, admin portal, and chat on phones. The page is held in place and returned to the same spot on close. Scrolling inside a popup never carries over to the page. |
| `script.js`, `premium.css` (7.23) | **Aftercare photo:** new Site Control card: upload a photo or video, pick from the Media Library, or paste an https link; preview; Reset to default photo. Saved for every visitor (adverts row `__aftercare_settings`). Replaces the old per-browser / Firebase image. |
| `script.js`, `premium.css` (7.24) | **Gallery swipe:** the photo follows the finger, the next/previous photo slides in beside it, release past about a fifth of the width or a quick flick changes photo, a short drag springs back. A drag never zooms or closes. One-photo galleries stretch and spring back. Keys, arrows, thumbnails and zoom unchanged; "reduce motion" switches without sliding. |
| `index.html`, `script.js`, `premium.css` (7.25), `supabase/sql/reviews_public_submit.sql` | **Review form like Google:** no name, no phone. Header "Hailifu Brilliant Installation · Posting publicly on hailifugh.com". Stars (required), experience text (optional), **photos & videos** (up to 5 photos, 1 video of 30 MB), what they liked, did they use the business, services, price description, amount paid, response speed. Thank-you adds **Also post it on Google**. Approved reviews show as "Hailifu customer" with photos and tags; star-only reviews show too; **amount paid is admin-only**. Admin Reviews shows every answer and photo; deleting a review deletes its photos. **Owner step:** run `reviews_public_submit.sql` again (adds the photo upload rule: visitors may only add photo/video files under `media/reviews/r_<id>/`). |
| `script.js`, `premium.css` (7.26, 7.27) | **Admin login redesigned** (using the installed design skills: Emil Kowalski design engineering, impeccable, taste-skill): glass card over a blurred site photo, "Welcome back", icons in the fields, labels above inputs, show/hide password, "Caps Lock is on" warning, spinner while signing in, gentle shake on a wrong password, "Back to website"; light + dark; solid card for "reduce transparency". **One switch everywhere:** springy thumb that squashes while pressed, 44 px tap target, keyboard Space, focus ring, light + dark; "Show on the website now" (Adverts) and section "Visible" (Site Control) are now switches too. |
| `index.html` | `premium.css?v=20261001r10`, `script.js?v=7.2`, `premium.js?v=20261001r10`. |
| `ADMIN_SETUP.md` | New admin address everywhere; Website reviews section rewritten; new Aftercare photo section. |
| `e2e/round10.spec.js` (new), `e2e/round9.spec.js`, `e2e/galleries.spec.js`, `e2e/helpers/mock-supabase.js` | 23 round 10 tests; the round 9 review tests now follow the no-name/no-phone form; test login uses the new address. |

**Verified:** full suite 101/103 on the first run; the 2 failures were sign-in/click timeouts while a second test run was using the same local server at the same time, and both pass 6/6 when run alone. Own review after the run found 2 more issues, fixed with a failing test first: a mouse drag on a gallery photo started the browser's image drag (cancelling the swipe), and the "Set a new password" screen did not freeze the page. Swipe + page-freeze tests 8/8. Screenshots checked: login (dark/light, desktop/phone), review form on a phone, admin Adverts switches, Aftercare card.

**To do on the live site:** (1) run `supabase/sql/reviews_public_submit.sql` again in Supabase; (2) open the admin at `hailifugh.com/hailifu=access` (bookmark it); (3) send yourself a test review with a photo, approve it, and check it on the site.

### 2026-10-01 (round 9): Reviews that work, Google feed, Networking, gallery tools, brand colour, Site health, motion

Spec: `docs/superpowers/specs/2026-10-01-round9-design.md` · Plan: `docs/superpowers/plans/2026-10-01-round9.md`. Backup of the files before this round: `_backup-before-round9-2026-10-01/`.

| File | Change |
|---|---|
| `index.html`, `script.js`, `premium.js`, `tools/cloudinary-to-galleries.js` | **Networking is a service everywhere:** services card (with its own photo), quote form, gallery tab, showcase filter, chatbot, review form, Cloudinary helper (folders like `network`, `lan`, `wifi`, `cabling`). Service cards now use each gallery's cover photo. Fixed a page crash that the new service exposed in old project code. |
| `script.js`, `premium.css` (7.16) | **Galleries:** tick several items (or **Select all**) to **Delete** or **Move to…** together; a refused delete leaves that item ticked with a message. The unclear select before Delete is now a labelled **Move** button that opens a list of services; every tile button has a label. |
| `script.js`, `index.html`, `premium.css` (7.17), `supabase/sql/reviews_public_submit.sql` (new), `supabase/sql/admin_setup.sql` | **Review form fixed:** it needed a Google (Firebase) sign-in that was never set up, so every review failed. Now: name, stars, text, optional phone, services; saved as **waiting**; thank-you message. Admin → Reviews has a **Waiting** list with Approve / Delete (count on the menu). Approved reviews show on the site; the phone is removed on approval. "Add photos" in the form is hidden (photos were never actually uploaded). **Owner step:** run `reviews_public_submit.sql` once. |
| `script.js`, `index.html` | **Google reviews feed fixed:** the old Maps PlacesService was blocked (`ApiTargetBlockedMapError`); the site now asks the **Places API (New)** directly. Rating, review count and up to 5 Google reviews; copy kept 12 h per visitor; Google text always shown as plain text. Admin → Site Control → **Google reviews** card (key, Place ID, **Test**, **Save**). The made-up "5.0 / 100+" fallback numbers are gone. Site Control now always loads fresh (its buttons stopped working on a second visit). **Owner step:** enable Places API (New) on the key (see ADMIN_SETUP). |
| `script.js`, `premium.css` (7.19 + colour swap) | **Brand colour is site-wide and readable:** saved for every visitor (adverts row `__brand_settings`) and applied on every visit. Text on the colour turns **dark or white** automatically (WCAG contrast); all buttons/chips/badges on the colour use it, including hovers. New Site Control card: live preview, readability note, **Save for everyone**, **Reset to Hailifu orange**. The second "Accent colour" picker (it darkened the whole site) and the old per-browser colour are retired. |
| `script.js`, `premium.css` (7.20) | **Control Center → Site health:** 10 live checks with green/amber/red, a plain reason and a button to the page that fixes it: storage, your sign-in, galleries, leads, reviews (waiting count), top bar, offer banner, Google feed (shows Google's refusal reason), brand colour readability, uploaded files. **Check again** button. |
| `index.html`, `script.js`, `premium.css` (7.21) | **"System Integrity / SECURE" card → Aftercare:** real photo, "Looked after after we leave", three true facts (24/7 support, 30-minute call-back, certified technicians). Fake 99.9% / < 15 min / 360° removed. |
| `script.js`, `premium.css` | **Admin account menu:** shows "Signed in as <email>" on every screen size, and it now opens **on top** of the page (it was drawn behind the cards, which hid the email and buttons). |
| `index.html`, `premium.css` (7.21), `premium.js` | **Look and motion:** "HAILIFU BRILLIANT" wordmark in **Unbounded**; light-mode menu glass clearer with a brighter rim; Work Showcase cards get the Services entrance, 3D tilt and pointer light; spring pop on hover and squash-and-bounce on press/tap for buttons, chips and stars site-wide. All motion off with "reduce motion"; glass has a solid fallback. |
| `index.html` | `premium.css?v=20261001r9`, `script.js?v=7.1`, `premium.js?v=20261001r9` so browsers fetch the new files. |
| `ADMIN_SETUP.md` | New sections: Website reviews, Google reviews, Brand colour, Site health; Galleries updated (Networking, several at once, Move button, Google Business photos). |
| `e2e/round9.spec.js` (new), `e2e/galleries.spec.js`, `tools/cloudinary-to-galleries.test.js` | 31 round 9 tests (networking, multi-select, reviews, Google feed, brand colour, Site health, aftercare, account menu, showcase tilt, wordmark); gallery test updated for the Move button; tool test for the networking folder. |

**Verified:** full Playwright suite 80/80 (galleries, round 9, smoke, top bar); Cloudinary helper 13/13. Screenshots checked: menu, Aftercare card and showcase in light/dark on desktop and phone; Site health, Brand colour card and account menu in admin.

**To do on the live site:** (1) run `supabase/sql/reviews_public_submit.sql` in Supabase; (2) enable **Places API (New)** on the Google key (ADMIN_SETUP → Google reviews); (3) open Admin → **Site health** and fix anything red.

### 2026-09-30 (round 8): Liquid glass menu, top bar every 5 s, contact card, clarity

| File | Change |
|---|---|
| `premium.css` (7.15) | **Menu bar = liquid glass in both themes:** very translucent tint, strong blur with saturation/brightness boost, bright top rim, inner edge ring, soft light that follows the mouse (dark: smoky clear glass; light: clear frosted white glass with darker text). Glass buttons and phone menu sheet match; solid fallback for "reduce transparency". **More motion:** springy active-section pill, links lift on hover, logo pops in on load, a shine sweeps across "Request a Quote" on hover, top bar drops with a soft bounce, Call icon rings on hover, WhatsApp button gently breathes, contact buttons lift. **Clarity:** the offer banner no longer scales up/down (scaled text looked soft), orange brand word sharp on light glass, softer footer logo/status shadows in light mode. `premium.css?v=20260930r8`. |
| `premium.js` | Pointer-following light on the menu glass (desktop only, off with "reduce motion"). `premium.js?v=20260930r8`. |
| `script.js` | **Top advert bar drops every 5 seconds:** slides down, stays 5 s, lifts, drops again 5 s later, until the visitor closes it; never lifts while the mouse or keyboard focus is on it; the menu moves with it. `script.js?v=7.0`. |
| `index.html` | **"Contact Us" removed** from "Ready to start your project?"; **Call** is now the main (solid) button next to WhatsApp. |
| `e2e/topbar.spec.js` (new), `e2e/smoke.spec.js` | 4 top bar tests (5 s cycle, pause on hover, close stops it, menu follows); smoke test now checks the contact card has Call + WhatsApp and no Contact Us. |

### 2026-09-30 (later): Cloudinary to Galleries helper

| File | Change |
|---|---|
| `tools/cloudinary-to-galleries.js` (new) | Runs on the owner's computer only. Reads every image and video in the Cloudinary account (read-only Admin API, all pages), sorts them by folder name into the 8 services (deepest folder that names a service wins; unknown folders go to "Unsorted"), and writes `cloudinary-links.html` with thumbnails and a **Copy links** box per service to paste into Galleries. Keys only from environment variables (`CLOUDINARY_API_KEY`/`CLOUDINARY_API_SECRET` or `CLOUDINARY_URL`); nothing secret is written anywhere; wrong keys give a plain message. No site code changed. |
| `tools/cloudinary-to-galleries.js` (update, same day) | After the first real run: stray spaces in pasted keys are ignored; clearer "refused keys" message (check key/cloud name); `--check` mode (read-only: file count, top-level folders, what the key can list; showed a Media Library User key sees nothing, a temporary Master Admin key sees all 133 files); sorting also uses Cloudinary tags and the file name when folders are not service names; Cloudinary's built-in `samples` are left out; Unsorted files get one copy box per folder. **Used successfully:** all Cloudinary photos were added to the galleries. |
| `tools/cloudinary-to-galleries.test.js` (new) | 12 tests (folder/tag/file-name sorting, samples skipped, per-folder Unsorted, pagination + auth + tags, wrong keys, spaces in keys, check mode, page output/escaping, no secret in output). Run: `node --test tools/cloudinary-to-galleries.test.js`. |
| `ADMIN_SETUP.md`, `.gitignore` | Step-by-step guide; the generated page is not committed. |

### 2026-09-30 (later): Gallery review minors fixed

| File | Change |
|---|---|
| `script.js` | **Upload clean-up:** if a file uploads but saving its gallery item is refused, the file is removed again (no invisible leftovers in storage). **Positions:** files uploaded together get distinct positions. **Links:** only links to a photo/video file, a Cloudinary image/video, or a YouTube *video* are accepted (web pages and YouTube channels/playlists are refused with a message); the same YouTube video written as `youtu.be/...` or `youtube.com/watch?v=...` counts as a duplicate. **Order:** the public gallery now follows the order you set in admin; the cover only chooses the card photo. `script.js?v=6.9`. |
| `e2e/galleries.spec.js`, `e2e/helpers/mock-supabase.js` | 6 new tests (the 4 fixes above, plus refused caption/star/cover saves change nothing, and deleting every item brings the built-in photos back). The simulated Supabase can now refuse saves. |

Already fixed in the review pass: single fetch of the galleries per page, delete fade off under "reduce motion", http links upgraded to https on import. **Verified:** full suite 45/45 (38 galleries + 7 smoke).

### 2026-09-30 (later): Dashboard gallery count

| File | Change |
|---|---|
| `script.js` | Dashboard card **Projects** (it counted the old built-in/local projects) is now **Gallery**: number of gallery items, note "across N services" (or "none yet: import in Galleries"), gallery icon. Quick action **Manage projects** is now **Manage galleries**. The Dashboard loads the galleries before drawing and updates after uploads. `script.js?v=6.8`. |
| `e2e/galleries.spec.js` | 3 new tests (counts gallery items, empty state, updates after upload). |

### 2026-09-30: Service galleries (upload goes straight to its service gallery)

Spec: `docs/superpowers/specs/2026-09-30-service-galleries-design.md` · Plan: `docs/superpowers/plans/2026-09-30-service-galleries.md`. Backup of the files before this work: `_backup-before-galleries-2026-09-30/`.

| File | Change |
|---|---|
| `script.js` (new section "SERVICE GALLERIES") | Gallery items are rows in `installations` with `data.kind = 'gallery'` (public read, admin write, **no SQL**). The website now reads them from Supabase: **Work Showcase = one card per service** (cover, "N photos · M videos", opens the gallery viewer; `#project=<service>` deep link), **Featured Work = starred items** (else each service's cover). Once gallery rows exist, old local/built-in projects are ignored, so deleted items cannot come back; with no rows or no connection the built-in photos still show. Wording switches to "All services / N services". |
| `script.js` admin | **Projects tab → Galleries**: service tabs with counts; drop/choose photos and videos (resized, 50 MB video limit, per-file progress, bad files skipped with a reason, "Not allowed" message if the session expired); paste Cloudinary/YouTube links (https only, duplicates skipped, counts reported); caption, star (Featured), cover, move earlier/later, move to another service; delete with Delete/Keep (row first, then the Supabase file; Cloudinary files untouched; refused deletes keep the item); **Import site photos** (copies today's photos incl. Cloudinary links, site photos stored as `/assets/...` paths, safe to press twice); Media Library **Add to gallery**. |
| `script.js` fix | **Admin jumped back to the Dashboard** about a second after sign-in (retry timers re-ran "open portal" and reset the tab). Now only the first open picks the Dashboard. |
| `premium.css` (7.14) | Galleries admin (tabs, drop zone, queue with progress bars, tiles with tools, confirm bar), Media Library picker, service-card wording (duplicate label hidden). `premium.css?v=20260930g`, `script.js?v=6.7`. |
| `e2e/galleries.spec.js`, `e2e/helpers/mock-supabase.js` (new) | 29 automated tests with a simulated Supabase (public, admin, links, delete, import, featured, phone). Run: `npx playwright test e2e/galleries.spec.js --workers=1` (with the site served, see `playwright.config.js`). |
| `ADMIN_SETUP.md` | New "Galleries" section (how to import, upload, add links, arrange, delete). |

**Verified:** galleries 29/29; smoke 7/7; earlier suites re-run (menu, top bar, chat, motion, admin motion). The old Projects-tab delete test is retired with the Projects tab.

**To do on the live site:** open `hailifugh.com/?admin` → Galleries → **Import site photos** once, then check the website.

**Independent review + fix pass (same day):** a fresh reviewer found 0 critical and 5 important issues, all fixed with a failing test first: (1) captions with quotes were cut off and unsafe links could reach the page: `escapeHTML` now also escapes quotes site-wide and gallery links must be https or site paths; (2) deleting a gallery item that came from the Media Library deleted the library file: now only files the Galleries tab uploaded itself are removed, and adding the same file twice is refused; (3) a caption being typed was wiped when another saved: fixed; (4) visitors briefly saw old/deleted photos before the galleries loaded: the showcase now shows placeholder cards for up to 2.5 s instead; (5) captions now show under each photo in the public gallery. Galleries tests 29/29, smoke 7/7.

**Important:** once any gallery item exists, the website shows only the galleries (the built-in photos disappear for visitors). Press **Import site photos** first so nothing goes missing.

### 2026-09-29 (part 7): Project delete fixed, admin motion

**Bug (owner):** "from project side the deleting is not working". **Root causes (reproduced):** (1) delete opened a browser confirm and then a hidden **"Admin PIN" prompt** (default `2026`, left over from the old secret-link login); Cancel or any other answer blocked it with a brief "Incorrect PIN". (2) With the right PIN the row *was* deleted in Supabase, but the Projects tab then re-showed a **cached copy**, so the card stayed on screen and it looked like nothing happened. Errors from Supabase were also ignored (a refused delete still said "Project deleted").

| File | Change |
|---|---|
| `script.js` | Project delete now uses an inline **Delete / Keep** bar on the card (no browser pop-ups, no PIN: you are already signed in with Supabase, which decides who may delete). Deletes from Supabase **first** and checks a row was really removed (`.select()`); if Supabase refuses, the card stays and a clear error shows. Then removes it from local storage (with a tombstone so it cannot come back from other copies), the admin list and the public showcase. Card fades out. Projects tab is never served from the cache. Toasts stay longer for errors/warnings (4.5 s vs 2.4 s). The old PIN prompt only remains for delete buttons used outside the signed-in admin. `script.js?v=6.6`. |
| `premium.js` | Admin motion hooks: opening entrance when the portal opens, page-title animation on every tab change, tap the dimmed area to close the phone sidebar. `premium.js?v=20260929r7b`. |
| `premium.css` (7.13) | **Admin animation:** sidebar slides in and menu items cascade on open; title rises on tab change; active menu icon pops, icons nudge on hover; cards/rows rise in with a short stagger on every tab; cards lift and photos zoom on hover; press feedback on every button; springy switches; KPI accent line draws under each number; account menu grows from its button; lead/project confirm bars slide in; deleted items fade out; toasts slide in bottom-right with an icon and a countdown bar; login card rises in, wrong password shakes; phone sidebar gets a dimmed backdrop. Quick (150-450 ms) and off with "reduce motion". **Project cards** restyled (category label, stacked Location/Service fields, actions row). `premium.css?v=20260929r7b`. |

**Verified (simulated Supabase):** project delete 8/8 (inline confirm, Keep, Delete removes card + row, no pop-ups, stays gone after tab switch and reload, refused delete keeps card with message); admin motion 5/5; admin tabs render with no errors; blink check still 1 render per click; smoke tests 7/7.

### 2026-09-29 (part 6 / round 7): Liquid-glass menu, top advert bar, new chat, motion, admin redesign

Owner's list: glass menu + animation + fonts; review-feed card colours; rebuild the chatbot; fit every screen; admin-controlled top advert dropdown; Work Showcase different from Services; more popup open/close animation; Featured Work flip; more scroll animation; light mode looks blurry; Adverts tab blinks in admin; admin still looks old.

| File | Change |
|---|---|
| `script.js`: admin tabs | **Adverts blinking fixed.** Several sidebar listeners each re-rendered the tab, so one click loaded it 4 times (skeleton → content → skeleton...). `setAdminTab` now ignores repeat calls for a tab that is still loading and drops out-of-date renders: 1 load per click (measured). **Dashboard showed 0 leads** on login (drawn before leads loaded, then cached): it now loads leads first, and Dashboard/Leads are never served from the cache. |
| `script.js`: menu | Hide-on-scroll was reversed (hid when scrolling **up**). Now hides while reading down (after 240px) and returns on the first scroll up. |
| `script.js`: top bar | **New top advert bar.** Slides down above the menu ~2 s after the page opens; message + button (link or quote form); close button (stays closed for that visit; a new message shows again). Admin → Adverts → **Top bar** panel: on/off, message (110 chars), button text, link, colour (orange/dark/light), show from/until dates, live preview, validation. Stored as settings row `__topbar_settings` in the existing `adverts` table: **no SQL to run**. |
| `script.js`: chat | **Chat assistant rebuilt** (same lead flow: service → detail → name → phone → area → saved to Admin → Leads with `source: 'chat'` → WhatsApp). New: tap-to-answer chips per step, typing dots, progress bar, Back button, 3 quick answers (areas Accra/Tema, 30-min call-back, how pricing works: all taken from existing site copy), Ghana phone check, summary card, WhatsApp message pre-filled with the details, one-time "Need a quote? Ask me" nudge after 14 s. **Security fix:** the old bot inserted the visitor's typed name as HTML; everything typed is now inserted as text. |
| `index.html` | Menu: sliding active-section pill, phone/tablet menu button + glass menu sheet (links, Request a Quote, Call, Share). New chat window markup (same IDs). New display font **Bricolage Grotesque** (brand, menu, section titles). Versions: `premium.css?v=20260929r7`, `script.js?v=6.5`, `premium.js?v=20260929r7`. |
| `premium.js` | Active-section pill, phone menu sheet (Esc/outside tap closes, focus kept inside), popup exit animation helper, word-by-word section titles, 3D tilt now only on Services tiles. |
| `premium.css` (section ROUND 7) | **Light mode crisp:** removed grain, orange glow halos, blurry text/star shadows; solid orange buttons; darker body text. **Review feed:** cards now use the main card surface/border (were black with orange borders). **Liquid-glass menu:** translucent tinted glass, blur + saturation, light edge, one-time sheen, shrinks on scroll, drops in on load. **Popups** (quote, review, project, gallery): rise + scale in from a light blur with staggered content, and now **animate out** instead of vanishing. **Featured Work:** 3D cube flip between projects (desktop; phones keep swipe with a softer depth effect). **Work Showcase:** editorial masonry (photo on top, solid info panel below, full-width lead project) vs Services' full-bleed photo tiles. **Scroll:** titles reveal word by word, orange rule draws in, subtitles follow, photos drift slower than the page (parallax). **Admin portal redesign:** full-screen operations console, calm sidebar with thin orange active bar, display font for titles/numbers, tighter hairline cards, solid primary buttons, one consistent style for every input/select/checkbox/file picker (incl. Site Control, Notifications, Control Center). **Screens:** menu fits 320–430 px phones (the menu button was pushed off-screen at 430 px), bigger tap areas for advert dots. Everything respects "reduce motion". |

**Verified (simulated Supabase where needed):** admin blink 4 → 1 render per click; menu 12/12 (hide/show, active pill, phone sheet open/close/Esc/quote); top bar 19/19 (shows, pushes menu down, closes and stays closed, expired/scheduled/off hidden, admin preview, date and link validation, saved row); chat 31/31 (both themes, FAQ, Back, bad phone, escaping, lead saved with all fields, WhatsApp text, phone full screen); motion 9/9 (popups exit then hide, 3D flip, titles, masonry, filters, gallery); screen sizes 320/360/390/430/768/1024/1280/1920 × dark/light: no sideways scroll; admin at 360/768/1280: no sideways scroll, dashboard lead count correct; project smoke tests 7/7; no page errors.

**Performance note:** the menu's glass sheen first looped forever and made the page repaint the blurred menu constantly (tests slowed down); it now plays once on load and once on hover.

### 2026-09-29 (part 5): Live checks passed, clean-up script

| File | Change |
|---|---|
| `supabase/sql/drop_old_tables.sql` | **New.** Removes the backup tables `leads_old` / `installations_old` (and `reviews_old` if it exists). Before dropping each one it checks that every old row id is in the new table; if any is missing it stops with an error and **nothing is deleted**. Safe to re-run. |

**Checked by the owner on the live Supabase project (via `localhost:3000`):** "Forgot password?" end to end (email → `/?admin-reset=1` → new password → login) ✅; old lead shows in Admin → Leads with WhatsApp `233…` ✅; Media Library upload + delete ✅; test advert published, shown on the homepage banner, removed again ✅; banner switch ✅. **Verified:** `drop_old_tables.sql` on a local Postgres (PGlite): missing row → error and nothing dropped; all rows present → old tables dropped, new rows kept; re-run is fine (5/5).

**Still to do:** run `drop_old_tables.sql` in the Supabase SQL Editor (optional; download `leads_old` as CSV first if you want an extra copy).

### 2026-09-29 (part 4): Supabase project back online, table upgrade

| File | Change |
|---|---|
| `supabase/sql/admin_setup.sql` | **New upgrade step** (runs before the table section). If `leads` / `installations` / `reviews` exist in the old layout (no `data` column), the old table is renamed to `<name>_old` (nothing deleted), its old policies are dropped so only the dashboard can read it, and every old row is copied into the new `{ id, data, updated_at }` table with all its fields inside `data`. Still safe to re-run. |
| `supabase/sql/set_admin_password.sql` | **New.** Sets the password of the existing admin account `01hailifu@gmail.com` (the account already existed, so "Add user" failed). Replace `CHANGE-ME`, run in SQL Editor. |
| `ADMIN_SETUP.md` | Status note: the original project `qcyhxurhbvcgftyzlqdu` is online again and the key in `index.html` works, so setup starts at step 3. |

**Found:** the project's `leads` table was readable by anyone with the public key (customer names/phones exposed); `installations` used the old layout; `reviews`, `adverts` and the `media` bucket did not exist. **Verified:** the script run twice against a local Postgres (PGlite) with an old-layout `leads` table + public-read policy: rows copied, public policy gone, new policies in place, re-run changes nothing.

**Done on the live project (2026-09-29):** `admin_setup.sql` run; admin password set with `set_admin_password.sql`; admin login at `/?admin` works; sign-ups turned off; Site URL + redirect URLs (`https://hailifugh.com/?admin-reset=1`, `http://localhost:3000/?admin-reset=1`) added. Checked from outside: sign-up disabled, 0 leads visible to the public, all tables and the `media` bucket exist.

**Still to do next session** (all done in part 5 except the clean-up): test "Forgot password?" end to end; confirm the old lead shows in Admin → Leads; upload + delete a test photo in Media Library; publish a test advert; later, remove `leads_old` / `installations_old` once everything is confirmed.

### 2026-09-29 (part 3): Showcase + gallery, review popup, admin portal rebuilt, password reset, banner switch

| File | Change |
|------|--------|
| `index.html` | **Work Showcase rebuilt:** new container (`#hmShowcase`) with category chips, search, count line, grid and "Show more"; old grid and filter buttons removed. **Write a Review popup rebuilt** (same 27 IDs/hooks): brand header, big stars with a word ("Terrible" → "Excellent"), text box, like/used chips, **your 8 real services** (was unrelated: "Electric car charger", "Remodeling", ...), add photos, glass "Post review". **Removed the rotating review box** under the advert banner. Added a scroll-progress bar element. Versions: `script.js?v=6.4`, `premium.css?v=20260929i`, `premium.js?v=20260929b`. |
| `script.js`: showcase | `renderShowcase()` rewritten (same name, so every existing refresh still works). Same project data. Cards show cover, category, photo count, title, description; hover shows **View gallery** and **Get a quote**. **Gallery viewer:** full screen, thumbnails, arrows + keyboard (← → Esc), swipe, click-to-zoom, share (phone share sheet or copy link), deep link `#project=<id>`, "Get a quote for this" (opens quote form with that service). Focus stays inside while open. |
| `script.js`: admin portal | **New layout:** grouped sidebar (Overview / Business / Content / System) with a sliding active highlight, page title + subtitle per tab, account menu (**Change password**, Log out), "View website" link, slide-in menu on phones. **Dashboard rebuilt:** live numbers that count up (leads, waiting for reply, projects, reviews, live adverts), latest 5 leads with WhatsApp, quick actions, recent activity. **Leads rebuilt:** search, status filters with counts, WhatsApp (auto Ghana +233 format) and Call buttons, status picker, inline delete confirm. Other tabs (Projects, Reviews, Site Control, Notifications, Control Center) keep their features and get the new design. |
| `script.js`: login | **Forgot password?** on the login screen emails a Supabase reset link (same message whether or not the email exists). The link returns to `/?admin-reset=1` → **Set a new password** (strength meter, show/hide, rules: 8+ chars, letters + number, must match). **Change password** from the account menu. |
| `script.js`: adverts | **Banner on/off switch** in Admin → Adverts (stored as a settings row in the `adverts` table; no new table). Off hides the whole section for visitors. "Request a Quote" in the old project popup now opens the quote form (`window.hailifuOpenQuote`). |
| `premium.css` | Styles for all of the above. **Animations:** every popup animates in (quote, review, gallery, project, login, password, chat, admin); Featured Work slides zoom in and their text rises in, dots fill as a timer; scroll progress bar; hero drifts up and fades as you scroll; more sections fade up on scroll; showcase cards pop in when filtering; admin pages/cards rise in, KPI numbers count up. All off with "reduce motion". Website floating buttons hide while the admin is open. |
| `premium.js` | Tile tilt/entrance now targets the new showcase cards; review star words. |
| `ADMIN_SETUP.md` | Redirect URL needed for password reset; how to reset/change password; banner switch. |

**Verified (simulated Supabase where needed):** showcase + gallery 17/17 plus a multi-photo gallery run (next, arrows, thumbnails, wrap-around, zoom, swipe); admin portal 24/24 (forgot password, reset link return, change password rules, dashboard numbers, leads search/filter/status/delete, banner switch hides the section for visitors); adverts 15/15; media/login 15/15; smoke tests 7/7; no page errors; no horizontal scroll on phone.

### 2026-09-29 (part 2): Simple quote form, adverts (public + admin), glass buttons, tile animation

| File | Change |
|------|--------|
| `index.html` | **Quote form rebuilt simple:** "Get a free quote" with 8 tappable service chips, name, phone/WhatsApp, location, optional details, one **Send request** button (opens WhatsApp as before). Email, timeline and budget are now hidden defaults; the invoice code is still generated and shown in the success message. All IDs `script.js` uses are kept. **Advert banner** container `#hmAds` added between the Google reviews box and the rotating review. Loads new `premium.js`. Versions: `script.js?v=6.2`, `premium.css?v=20260929e`, `premium.js?v=20260929a`. |
| `premium.js` (new) | Service chips for the quote form (drive the hidden `#popupService`; a service is required; pre-selected when a service card's "Request a Quote" is clicked). Tile animation: staggered entrance as tiles scroll in, 3D tilt + soft light following the mouse (desktop only), "pop" when a Work Showcase filter is clicked. Off for "reduce motion". |
| `script.js` | **Adverts:** public banner (rotates every 6s, dots, pauses on hover/when tab hidden; button opens the quote form or a link), and a new **Admin → Adverts** tab to publish (headline, text, button text/link, optional photo uploaded to the media bucket, live or paused), **Pause/Show** and **Remove** (inline confirm, instant, rolled back if the server refuses). Stored in Supabase table `adverts`. When no advert is live, 3 built-in adverts using the site's existing service copy and photos are shown. Links are sanitised and all text is escaped. |
| `premium.css` | Styles for the new quote form, advert banner (gently grows and shrinks, photo slowly zooms, cross-fades between adverts) and Adverts admin tab. **Every orange button is now glassmorphism** (84% translucent orange, backdrop blur, light top edge, dark text for contrast, solid fallback for "reduce transparency"). **Tiles:** hover lift, icon pop, category/title motion, pointer light. |
| `supabase/sql/admin_setup.sql` | New `adverts` table (public read, admin-only write). Re-run once if you ran it before. |
| `ADMIN_SETUP.md` | How to use the Adverts tab. |
| `e2e/smoke.spec.js` | The "service card opens popup" test now checks the pre-selected service chip (the old `#serviceContext` header is hidden in the new form). |

**Verified:** quote form in dark/light on desktop and phone; missing service is blocked with a message; complete form opens WhatsApp and shows the invoice code; adverts admin 15/15 checks against a simulated Supabase (publish with photo, paused adverts hidden, show/pause, remove, refusal rolled back with message, HTML escaped, links made safe); media/login 15/15; smoke tests 7/7 (run one at a time; running two in parallel on this 4-core PC pushed CPU to 100% and caused timing failures, not site errors).

### 2026-09-29: Bigger animated hero, review/contact block rebuilt

| File | Change |
|------|--------|
| `index.html` | **Rebuilt from scratch** the old "Stats Dashboard + Write a Review / Contact Us" block (end of `#reviews`) as `#reviewCta`: a review card (5 pulsing stars, "Had Hailifu install for you?", **Write a Review**), a solid orange contact card ("Ready to start your project?", **Contact Us**, **Call** 055 099 7270, **WhatsApp**), and a full-width stats strip (Systems installed, Average rating, Support). Kept the hooks `script.js` relies on: `data-review-modal-open` (opens the review form), `data-quote-open` (opens the quote form), `.stats-dashboard-grid` + `.stats-value[data-counter]` (count-up) and `#statsOperationalExcellence` (live average rating). |
| `premium.css` | **Hero text bigger:** title up to ~102px (was ~76px), slogan and sub-line larger, taller buttons; phones scale down. **Hero animation:** lines rise into place one after another while coming into focus from a slight blur (tagline → title → slogan → sub-line → buttons), a short orange line draws itself under the slogan, the role strip fades in, the background video slowly zooms (24s loop), buttons lift on hover. **New block styles:** matte cards, arrow slides on hover, cards lift, stats in large numbers, scroll fade-in; light-mode footer now uses the stone background (was pure white). Everything turns off for visitors with "reduce motion" enabled. Cache version `premium.css?v=20260929b`. |

**Verified:** screenshots desktop + phone in dark and light; Contact Us opens the quote form, Write a Review opens the review form, counters finish at 100+ / 5.0 / 24/7; 7/7 smoke tests; no horizontal scroll; no page errors.

### 2026-09-28 (part 4): Hover fix, one uniform orange, softer light mode

| File | Change |
|------|--------|
| `style.css` | **Removed the old "Global Brand Hover Styles"** block (`a:hover, button:hover, ... { color/background: orange !important }`). It made hovered buttons orange-on-orange, which hid labels such as the Work Showcase filters, and overrode hover on every button site-wide. **One uniform orange:** all ~600 hard-coded old oranges (`#FF8C00`, `rgba(255,140,0,…)`, brown `#994020`, `#C86A00`) now use `var(--brand-primary)` (the matte `#E8741E`), so Admin > Site Control's colour picker recolours the whole site. Cache version `style.css?v=20260928v`. |
| `index.html` | Same colour conversion in the inline `<style>` blocks. |
| `script.js` | Review avatar fallbacks (ui-avatars URLs and the SVG initial badge) and the Google fallback icon use the new orange. |
| `premium.css` | **Light mode:** soft stone grey palette instead of near-white (`#E7E5E1` page, `#F2F1EE` cards), and the page body is no longer forced to pure white. **Light-mode hero:** back to the crisp video with the dark overlay and white text (the white veil looked blurred). **Hover:** filter buttons get a light orange tint with readable text; the active filter is solid orange with dark text; "View Project" and service "Request a Quote" hovers use dark text on orange for contrast. Cache version `premium.css?v=20260928i`. |

**Backup of this step:** `_backup-before-colour-unify/` (style.css, index.html, script.js, premium.css before the change).
**Verified:** hover checked on all 43 buttons/links in dark (all readable) and light (the only real low-contrast cases, "View Project" and service "Request a Quote", were fixed; the other flags were measurement false positives over the video); colour scan shows no old orange left on the page; 7/7 smoke tests; 15/15 admin checks.

### 2026-09-28 (part 3): Centered headers, animated stars, light/dark everywhere

| File | Change |
|------|--------|
| `index.html` | Review stars are now 5 separate `.hm-star` elements (with `role="img"` + "Rated 5 out of 5 stars" for screen readers) so each can animate. The "Why Choose Hailifu" heading moved out of the right-hand column into a new `.about-header` above both columns so it can be centered like the others. Cache version `premium.css?v=20260928g`. |
| `premium.css` | **Centered** hero and every section title + intro text, with a short orange rule under each title; filters, review stats and trust cards centered (bullet lists and footer stay left-aligned for readability). **Stars:** large (up to ~54px), each pulses big/small and blinks, staggered one after another; they stay still for visitors who turn on "reduce motion". **Light/dark on every section:** hero gets a light veil with dark text in light mode (same video), removed old peach/beige section gradients, every section uses the theme background, review cards/rotating review/stats/"view on Google" box use theme colours (the rotating review's name and text were white-on-white in light mode), project titles stay white over photos in both modes. **Motion:** sections and cards fade up gently as they scroll into view (Chrome/Edge; other browsers just show them), press feedback on pill buttons. |

**Verified:** screenshots of hero, showcase, about, services and reviews in dark + light on desktop (1440px) and phone (390px); 7/7 smoke tests; 15/15 admin checks; no horizontal scroll; no page errors. During this pass a placeholder fix hid the project photos; caught in the check and fixed before finishing.

### 2026-09-28 (part 2): Matte brand colour, admin login, rebuilt media manager

**Found while testing:** the Supabase project in `index.html` (`qcyhxurhbvcgftyzlqdu.supabase.co`) no longer exists (DNS "name does not exist" via Google DNS too). That is why uploads/deletes could not work. **Action needed from the owner:** follow `ADMIN_SETUP.md` to create/restore a project and paste its URL + key.

| File | Change |
|------|--------|
| `premium.css` | **Matte dark + orange** brand: burnt orange `#E8741E` on charcoal `#111112`, flat solid buttons (removed the glossy gradient the old `#heroQuoteBtn` rule still applied), solid nav instead of glass, no glows, a faint fixed matte-grain texture. New styles for the **admin login screen** and **media manager**, and a matte admin shell (sidebar, header, flat orange active tab). |
| `script.js`: **admin login** | Real **email + password** sign-in (Supabase Auth). Open with `hailifugh.com/?admin` or `/#admin`. The old public secret `?dev=hailifu_access` was removed from the code; that link now shows the login screen. Browsers that got access through the old link lose it unless signed in. Logout also signs out of Supabase. Clear messages for wrong password and for "login server unreachable". |
| `script.js`: **media manager (rebuilt)** | Fixed root causes: upload/delete handlers were attached to a throw-away copy of the tab (so **Browse did nothing** and delete could fail silently), and the Dashboard/Media tabs stacked a new click listener on every visit (so one delete fired **several confirm + PIN pop-ups**). New: drag & drop, Browse, or **paste** (Ctrl+V); photos auto-resized to max 2400px and converted to WebP in the browser before upload (test: 34 MB photo became 8 KB); **3 uploads at once with real progress bars**; safe file names; per-file error messages (e.g. "Video over 50 MB"); real video previews; filter All/Photos/Videos; **one-click delete** with an inline Delete/Keep choice (no browser pop-ups, no PIN) that removes the tile instantly and restores it if the server refuses; **select several + Delete selected**; copy link / open buttons; clear "Storage is offline" and empty states instead of endless loading boxes. |
| `script.js`: data layer | 10-second timeouts on leads/projects/reviews/media loading (tabs can no longer hang). Leads/projects/reviews are stored as `{ id, data (jsonb), updated_at }` so new form fields never break the table. Visitors' quote requests use insert-only; edits need the admin session. Admin colour picker defaults changed to `#E8741E`. |
| `supabase/sql/admin_setup.sql` (new) | Creates `leads`, `installations`, `reviews` tables and the public `media` bucket (50 MB/file, photos+videos only), with Row Level Security: visitors can send leads and view projects/photos; **only the admin email can upload, delete, or read leads**. |
| `ADMIN_SETUP.md` (new) | Step-by-step: create/restore Supabase project, paste URL + key, run the SQL, create the admin user, disable public sign-ups, sign in, reset a forgotten password. |
| `index.html` | Pointer to `ADMIN_SETUP.md` next to the Supabase config (with a note that the current project is gone). Cache-busting versions bumped (`script.js?v=6.0`, `premium.css?v=20260928c`). |

**Verified:** 15/15 admin checks against a simulated Supabase (login wrong/right password, old link blocked, list, video preview, single delete, bulk delete, photo compression, safe names, token sent, non-media rejected, exactly one delete request after repeated tab switches), real offline login shows the right message and does not open the portal, and the 7 Playwright smoke tests still pass. **Not yet tested against a live Supabase project**, since none exists yet.

### 2026-09-28: Premium rebuild (visual layer + fixes)

**Approach:** the new design is a separate stylesheet, `premium.css`, loaded last in `<head>`. It overrides `style.css` without rewriting it. All IDs, classes and `data-*` hooks used by `script.js` (admin portal, quote/invoice popup, reviews, chat) are unchanged. The accent colour follows `--brand-primary`, so **Admin > Site Control > branding colours still work**.

| File | Change |
|------|--------|
| `premium.css` (new) | Premium design system: Geist typeface, charcoal neutrals + brand orange, one radius scale (16px cards, pill buttons), floating pill nav, left-aligned full-bleed video hero, hairline trust strip, 4-column project grid, 7-tile services bento (CCTV as the large tile, project photos as tile backgrounds), 2-column "Why Hailifu" list, cleaner reviews stats (removed the pixel "terminal" font), restyled footer and quote popup, calmer floating buttons. Light and dark themes both supported. Honours reduced-motion settings. |
| `index.html` | Loads Geist fonts + `premium.css`. **Nav:** added section links (Our Work, Services, Why Hailifu, Reviews) and a "Request a Quote" button (`data-quote-open`, opens the existing popup). **Hero:** reorganised to eyebrow + title + slogan + one sentence + two buttons ("Request a Quote", "See Our Work"); the role chips became a strip along the bottom of the hero. Removed the "Certified Security Engineering" tag and the long paragraph (its services are listed in the Services section). `.brand-tagline`, `h1`, `.hero-slogan`, `.hero-slogan-sub` are kept so Site Control hero editing still works. **Fixes:** the project popup said "+27 78 456 1234 / Johannesburg, South Africa", now 055 099 7270 / Accra, Ghana. Footer year now updates itself (was 2024). Removed the pulsing star animation. Fixed "Installtion" typo in the share-preview description. |
| `script.js` | **Bug fix:** `toSafeAverageRating` turned a *missing* rating into 0 and clamped it to 1, so the site publicly showed "1.0" whenever Google reviews didn't load. Missing/zero now means "no data" and falls back to the real review average (5.0). Default projects now point to the optimised images in `assets/img/` (filename swaps only). |
| `assets/img/` (new) | WebP copies of the project photos, max 1600px wide: ~14 MB of PNG/JPG reduced to ~1.9 MB. Original files are still in the root. |

**Verified:** all 7 Playwright smoke tests pass; nav, hero and service buttons open the quote popup; no JavaScript errors; no horizontal scrolling at 390px (phone) or 1440px (desktop); checked in dark and light themes.

**Not changed yet (suggested next steps):**
- `cover-video.mp4` is 9 MB and loads on every visit. A compressed 720p version (~2 MB) plus a poster image would make the hero much faster on mobile data.
- The Google Maps API key and Supabase keys are visible in `index.html`. Restrict the Maps key to `hailifugh.com` in Google Cloud Console.
- The "Why Hailifu" panel still shows Uptime 99.9% / Latency < 15 min / Coverage 360°. Replace them with figures you can back up, or hide the row.
- `style.css` (13k lines) has many duplicate rules. It can be trimmed later now that `premium.css` controls the look.

---

## What this project is

- **Static, client-heavy website** for **Hailifu Brilliant Installation** (CCTV, electrical, gates, solar, AC, etc.).
- Single-page style public experience in **`index.html`** with large supporting logic in **`script.js`** and styles in **`style.css`**.
- **No build step** required to run locally (open `index.html` via a local server, or deploy as static hosting).
- **Supabase** is the primary “real backend” path for: **Postgres tables** (leads, installations/projects, optional reviews) and **Storage** (a `media` bucket for the admin “Global Media Bucket” tab).
- **Optional / legacy**: Firebase Realtime Database, Firestore reviews, Cloudinary uploads appear in code paths for older “media library” and project upload flows; behaviour depends on what is configured at runtime.

---

## Repository layout (important files)

| Path | Role |
|------|------|
| `index.html` | Public page structure, theme toggle, hero, trust strip, showcase, about, services, reviews, quote/invoice popup markup, inline **Supabase URL/key** bootstrap (`window.SUPABASE_URL`, `window.SUPABASE_ANON_KEY`), script includes. |
| `script.js` | **All behaviour**: public UI, quote/invoice draft, admin portal (injected HTML + tab system), Supabase reads/writes, localStorage for many admin and content settings, notifications, site control (section order/visibility, hero/service copy), PIN for destructive actions. |
| `style.css` | Original visual system, light/dark (`data-theme`), responsive admin layout. |
| `premium.css` | 2026 premium design layer, loaded last; overrides public-site styles only (see Changelog). Edit this file for visual changes. |
| `assets/img/` | Optimised WebP project photos used by the default projects. |
| `ADMIN_SETUP.md` | How to connect Supabase, create the admin login, and use the media manager. |
| `supabase/sql/admin_setup.sql` | Tables, `media` bucket and security rules (run once in Supabase SQL Editor). |
| `_backup-original-2026-09-28/` | Untouched copies of `index.html`, `style.css`, `script.js`, `404.html`, `README.md` from before the rebuild. |
| `supabase/sql/client_invoices.sql` | DDL for `public.client_invoices` (server-side invoice verification storage). |
| `supabase/functions/invoice-verify/index.ts` | Edge function: validate + insert verified invoice rows (see `supabase/INVOICE_BACKEND_SETUP.md`). |
| `supabase/INVOICE_BACKEND_SETUP.md` | Step-by-step Supabase setup for invoice verification. |
| `404.html`, `robots.txt`, `sitemap.xml`, `CNAME` | Hosting / SEO plumbing. |
| `script.min.js` | Minified bundle (if used in production; development often uses `script.js` with a version query param). |
| `package.json`, `playwright.config.js`, `e2e/` | **Playwright** browser smoke tests (see **Automated UI tests** below). |

---

## Automated UI tests (Playwright)

**Prerequisite:** Install [Node.js](https://nodejs.org/) **LTS (18+)** so `node` and `npm` are on your PATH globally (outside Cursor’s bundled helper Node).

From the repo root:

1. **`npm install`** — installs `@playwright/test`, `serve`, and runs **`postinstall`** to download Chromium for tests.
2. **`npm run test:e2e`** — starts a static server on **`127.0.0.1:4173`** (see `PLAYWRIGHT_PORT` below), loads `index.html`, and runs `e2e/smoke.spec.js`.

Optional:

- **`npm run test:e2e:headed`** — watch the browser.
- **`npm run test:e2e:ui`** — Playwright UI mode.

Environment overrides:

| Variable | Purpose |
|----------|---------|
| `PLAYWRIGHT_PORT` | Port for the static server (default **`4173`**). |
| `PLAYWRIGHT_BASE_URL` | Full base URL if you skip `webServer` and host manually. |
| `CI` | When set (e.g. GitHub Actions), enables retries and `reuseExistingServer: false`. |

Artifacts: HTML report under `playwright-report/` after a run; ignored by `.gitignore`.

Commit **`package-lock.json`** after your first successful `npm install` so installs are reproducible; GitHub Actions (`.github/workflows/e2e.yml`) can then use `npm ci` if you prefer to switch the workflow to that command.

---

## Public site — main sections (DOM order is controllable)

Stable section IDs (used for **drag/reorder + visibility** from admin **Site Control**):

- `#hero` — hero + background video container.
- `#trust-strip` — “Verified Work Orders / Client & Technician Protection / Premium Delivery Standard” style messaging.
- `#featured-work`
- `#showcase`
- `#about`
- `#services`
- `#reviews` — includes a **Review Terminal** UI block (restored after an earlier regression).

**Reorder implementation** must always keep the **footer** after main content (this was fixed when section ordering previously moved the footer above the hero).

---

## Client quote flow — “verified invoice” preview

- Popup form collects client reason for contact plus fields like phone, email, timeline, budget (see `index.html` popup area).
- **`script.js`** estimates an amount, builds a **draft invoice** with a **verification code**, does light **fraud-risk** flagging, and shows a **preview** in the popup.
- Optional **server verification**: if `window.HAILIFU_INVOICE_API_URL` and `window.HAILIFU_INVOICE_API_TOKEN` are set, the client can POST to the **Supabase Edge Function** (`invoice-verify`) so rows land in **`client_invoices`**. If the endpoint is down, the UI can still work in a **client-side / local-draft** mode (no data loss on the form side — exact behaviour is in `script.js`).

Setup reference: `supabase/INVOICE_BACKEND_SETUP.md`.

---

## Admin portal — how it works

The admin UI is **not** a separate app. `script.js` **injects** a full-screen panel `#adminPanel` (class `premium-admin-v3`) into the document when the gated admin entry flow succeeds.

### Tabs (`data-admin-tab`)

- **overview** — dashboard cards, quick ops (upload/delete latest media shortcuts), logs widget, live alerts snippet.
- **leads** — inbox from **Supabase `leads`** when available; falls back to **localStorage**. Actions (WhatsApp, view, delete, status) use **delegated handlers** so they survive DOM replacement.
- **projects** — gallery manager; metadata edits; Supabase **`installations`** when configured. **Delete** is **PIN-protected** (`deleteProjectById` also checks PIN when admin is active). **Event bubbling** fixes prevent double handlers that used to re-prompt PIN.
- **media** — **“Global Media Bucket”**: Supabase Storage bucket **`media`**; upload + list + delete. **Tab content is cached** (`adminState.cache`); after upload/list refresh, **`media` cache is invalidated** so new files show. Listing maps file names to **public URLs** via `getPublicUrl` for thumbnails; if the bucket is **private**, previews may need **signed URLs** (a known follow-up).
- **site-control** — SEO fields, branding colours, **homepage section order & visibility**, hero + service card text editors, admin PIN storage.
- **reviews** — moderation UI (edit/reply/publish/pending/delete) backed mainly by **localStorage** + optional remote paths depending on Firebase availability.
- **notifications** — admin notification list; visit/lead events can push entries; optional browser alert enablement.
- **control-center** — operational / trust copy surfaced in admin (moved from public for internal reference in this build).

### Critical implementation detail: tab DOM caching

- `setAdminTab(tabKey)` uses `adminState.cache` (a `Map`) to **clone cached DOM** for speed.
- **Gotcha**: dynamic data (leads, projects, media) can look “stuck” unless cache is cleared after mutations.
- **Pattern used**: global **delegated** `click` on `#adminPanel` for `data-action="..."` plus **explicit `adminState.cache.delete('media')`** after `loadMediaFromSupabase()` updates `adminState.data.media`.

### Destructive action PIN

- Stored in **`localStorage`** under a dedicated key (`adminControlPinStorageKey`; default `'2026'` if unset).
- `verifyAdminControlPin()` prompts; includes a short **reuse window** (~2 minutes) so duplicate handlers don’t repeatedly prompt within the same action burst.
- Used for deletes in older admin paths (leads, reviews admin, dashboard “delete latest”, legacy media library). The rebuilt Media Library tab does not use the PIN; it relies on the admin login + storage security rules (see `ADMIN_SETUP.md`).

---

## Two different “media” concepts (do not confuse them)

1. **Global Media Bucket (Supabase Storage, bucket `media`)**  
   - Rendered by `renderAdminMedia` in **`script.js`**.  
   - Upload: `uploadMediaToSupabase`, list: `loadMediaFromSupabase`.  
   - This is what the **`media`** admin tab refers to after the premium rebuild.

2. **Legacy / parallel “Media Library” (often Cloudinary + `hailifu_media_library` in localStorage, optional Firebase RTDB)**  
   - Functions like `uploadMediaLibraryFiles`, `renderMediaLibraryAndSections`, `removeMediaLibraryRecord`.  
   - UI nodes like `mediaLibraryGrid` / `mediaLibraryUploadBtn` are wired inside `initDataSync()` **when those DOM elements exist** in the admin HTML. Some builds inject only the newer premium tabs — if those IDs aren’t present, **Browse/Upload won’t attach** until markup exists or handlers are consolidated.

When debugging “browse does nothing” or “upload doesn’t show”, **first identify which of the two UIs** the user clicked.

---

## Data storage map (mental model)

- **Supabase (when client initialised)**  
  - Tables: at least **`leads`**, **`installations`** (projects), optional **`reviews`**, **`client_invoices`** (via edge function).  
  - Storage: **`media`** bucket objects for the admin bucket tab.

- **localStorage (always important)**  
  - Admin settings, site control JSON, branding, PIN, notifications, uploaded-media **history** (for “delete latest”), review data (non-Firestore path), legacy keys for projects/media library.

---

## Configuration (minimal)

Configured in **`index.html`** (search `CONFIG` / `SUPABASE_`):

- `window.SUPABASE_URL`
- `window.SUPABASE_ANON_KEY`

**Security note:** If this repo is public or shared, **rotate keys** that were committed and prefer env injection for production.

Invoice verification (optional):

- `window.HAILIFU_INVOICE_API_URL`
- `window.HAILIFU_INVOICE_API_TOKEN`

Cloudinary unsigned uploads (legacy media library path):

- Preset stored in **`localStorage`** key `hailifu_cloudinary_upload_preset`  
- Upload code references cloud name **`daovfi3i5`** in `script.js` (adjust if wrong for your tenant).

---

## Local development

- Prefer a **local static server** (VS Code Live Server, `npx serve`, or a tiny Node static server).  
  Using `http://127.0.0.1:PORT/` avoids quirks with modules and avoids `ERR_CONNECTION_REFUSED` when nothing is listening.
- Quick syntax check available:  
  `node --check script.js`

---

## Current maturity / known follow-ups

**Working / recently hardened**

- Premium public UI + unified brand variables.
- Admin v3 tabs with **delegated actions** resilient to caching.
- Leads inbox actions aligned with Supabase + local fallback.
- Project tab actions; **PIN loop fixed** via propagation control + PIN grace window + `deleteProjectById` checks.
- Media bucket tab: **refresh after upload/delete** via cache bust + richer list mapping (**public URLs for thumbnails**).
- Media Library **record delete** wired to `[data-media-delete]` → `removeMediaLibraryRecord` (when UI exists).

**Depends on backend policy / config**

- If Storage bucket **`media`** is **private**, **signed URLs** may be needed instead of **public URLs** for grid thumbnails while keeping deletes working.

**Structural debt**

- Admin contains **multiple generations** of listeners (`initDataSync`, `seedOpsLayer`, document-level fallbacks). New features should prefer **one** delegated path where possible.

---

## How to onboard an AI in one paste

Include:

1. This README  
2. The symptom + which admin tab/button  
3. Whether you mean **Media bucket** or **Media library / Cloudinary**  
4. Whether Supabase credentials are configured and browser console errors (if any)

That is usually enough for an AI to grep the correct handler (`data-action`, `data-media-delete`, Supabase paths) without hallucinating framework details.
