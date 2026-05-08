# Hailifu Website — Project Context (for humans and AI assistants)

Paste this file (or its sections) into an AI when you want it to **understand the whole project and where development has reached**, without re-scanning the repo.

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
| `style.css` | Premium visual system, light/dark (`data-theme`), responsive admin layout. |
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
- Used for deletes (leads, media bucket, reviews admin, dashboard “delete latest”, media library delete, etc.) depending on path.

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
