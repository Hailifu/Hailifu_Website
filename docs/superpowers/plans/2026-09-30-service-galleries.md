# Service Galleries Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Uploading a photo/video in the admin under a service puts it in that service's gallery on the public site for every visitor; Cloudinary/YouTube links can be added; deleting removes it everywhere.

**Architecture:** Gallery items are rows in the existing Supabase `installations` table with `data.kind = 'gallery'` (public read / admin write already). A new "SERVICE GALLERIES" section in `script.js` (it needs the file's private helpers) loads the rows, turns each service into a pseudo-project and feeds the existing `renderShowcase()` / gallery viewer / Featured Work. Admin "Projects" tab is replaced by a Galleries manager built on the same helpers the Media Library uses.

**Tech Stack:** Vanilla JS in `script.js`, supabase-js v2 (`window.SUPABASE_URL`, `ensureSupabaseClient()`), CSS in `premium.css`, Playwright (`@playwright/test`, `e2e/`) with Supabase mocked via `page.route`.

**Spec:** `docs/superpowers/specs/2026-09-30-service-galleries-design.md`

## Global Constraints

- No SQL for the owner to run; only table `installations` and bucket `media`.
- Category keys, in this display order: `cctv, electrical, fencing, airconditioning, solar, gates, blindcurtain, smarthome`; labels from existing `SHOWCASE_CATEGORY_LABELS`.
- Storage path for uploads: `gallery/<category>/<buildMediaObjectName(file)>`; photos through `optimizeImageForUpload`; videos over `MEDIA_MAX_VIDEO_BYTES` (50 MB) rejected per file.
- Row id format `g_<Date.now().toString(36)><4 random base36 chars>`, same value in `data.id`.
- Allowed link schemes: `https:` only (Cloudinary `res.cloudinary.com`, YouTube, any https image/video URL); everything else is reported invalid.
- Every visitor-typed or stored string rendered with `escapeHTML`.
- Delete order: row first with `.select('id')` (0 rows → refused, item stays), then Storage file if `source === 'supabase'` (file failure only logged).
- UI copy: admin tab label "Galleries"; delete confirm "Delete this item?" [Delete] [Keep]; refusal message "Not allowed. Sign in again as admin."; offline message "Storage can't be reached. Your Supabase project may be paused or deleted (see ADMIN_SETUP.md)."
- Motion follows premium.css round 7 conventions (`--r7-ease-out`, off under `prefers-reduced-motion`).
- Project is not a git repository: "commit" = add a README changelog line at the end (Task 6); keep `_backup-original-2026-09-28/` untouched.
- Bump `index.html` versions when done: `script.js?v=6.7`, `premium.css?v=20260930g`.

## Review Focus

1. A visitor whose browser still holds old projects in localStorage: once gallery rows exist, the public site must show only the rows (a deleted item must not come back from localStorage) → Task 1 test `legacy localStorage projects are ignored when gallery rows exist`.
2. Supabase reachable but zero gallery rows (fresh setup) → site shows today's photos, never empty → Task 1 test `falls back to built-in projects when no gallery rows`.
3. One bad file in a multi-file upload (61 MB video, or a PDF) → that file gets a message, the others still upload → Task 2 test `bad file does not stop the others`.
4. Deleting the item that is the service's cover → the next item becomes the card image; deleting the last item → the service card disappears → Task 4 test `deleting cover and last item`.
5. Pasted lines like `javascript:alert(1)`, `http://…`, blank lines, duplicates of existing URLs → rejected/skipped with a count, never inserted → Task 3 test `bad and duplicate links are reported`.

---

### Task 1: Gallery data + public Showcase from Supabase (with fallback) + test harness

**Files:**
- Create: `e2e/helpers/mock-supabase.js`
- Create: `e2e/galleries.spec.js`
- Modify: `script.js` — new section `// SERVICE GALLERIES` placed right after `renderShowcase()`; call site in `loadProjects()`.

**Interfaces:**
- Produces (script.js, same closure as `renderShowcase`):
  - `const SERVICE_GALLERY_CATEGORIES: string[]` (order above)
  - `const serviceGallery = { items: GalleryItem[], status: 'idle'|'ready'|'offline'|'error', message: string, loaded: boolean }`
  - `GalleryItem = { id, kind:'gallery', category, mediaType:'image'|'video'|'youtube', src, thumb, source:'supabase'|'cloudinary'|'youtube'|'link', storagePath, caption, featured:boolean, cover:boolean, order:number, createdAt }`
  - `normalizeServiceGalleryItem(raw: object): GalleryItem | null` (null when no `src` or unknown category after `normalizeShowcaseCategory`)
  - `async loadServiceGallery(): Promise<void>` — `supabase.from('installations').select('*').eq('data->>kind','gallery')`, 8 s `withTimeout`, sorts by category order then `order` then `createdAt`
  - `getServiceGalleryGroups(): Array<{ category, label, items: GalleryItem[], cover: GalleryItem }>` — only non-empty; cover = item with `cover:true` else first
  - `serviceGalleryToShowcaseProjects(): Array<{ id: category, title: label, description: string, category, mediaItems: Array<{mediaSrc, mediaType, thumbSrc}>, showInShowcase: true }>` — cover first; description `"N photos · M videos"` (omit zero parts; YouTube counts as video)
  - `renderPublicServiceGallery(): void` — if `serviceGallery.items.length` → `renderShowcase(serviceGalleryToShowcaseProjects())`, else leave legacy render
- Produces (`e2e/helpers/mock-supabase.js`): `mockSupabase(page, db?) → { db, calls, storage, refuseDeletes:boolean }`, `loginAdmin(page)`, `galleryRow(partial) → row`. Handles: auth token/user/logout; REST GET with `data->>kind=eq.gallery` filter, POST (insert/upsert, returns body), PATCH (`id=eq.`), DELETE (`id=eq.`, returns removed rows when `select=` present, `[]` when `refuseDeletes`); Storage list, POST upload (records path + size + content-type), DELETE `object/media` with `prefixes`. Port from the session's scratchpad `mock.js` + `proj-delete-test.js`.

- [ ] **Step 1: Write the failing tests** in `e2e/galleries.spec.js` (`test.describe('Service galleries — public')`):
  - `shows one card per service from gallery rows`: rows = 2 cctv images, 1 cctv video, 1 airconditioning image → `#hmScGrid .hm-sc-card` count 2; first card `h3` = `CCTV`, its `p` contains `2 photos · 1 video`; card `data-sc-open` = `cctv`.
  - `card opens the service gallery`: click CCTV card → `#hmGallery` not hidden, `#hmGalCounter` text `1 / 3`, `location.hash` = `#project=cctv`.
  - `falls back to built-in projects when no gallery rows`: rows = [] → card count > 0 and a card title equals a `DEFAULT_SHOWCASE_PROJECTS` title (e.g. `AI-Assisted Monitoring`).
  - `falls back when Supabase is unreachable`: route `**/rest/v1/installations*` → `route.abort()` → cards > 0, no page errors.
  - `legacy localStorage projects are ignored when gallery rows exist`: `addInitScript` sets `localStorage.hailifu_projects` to one project titled `Old Local Project`; rows = 1 cctv image → no card titled `Old Local Project`, exactly 1 card.
- [ ] **Step 2: Run to verify they fail**
  Run: `$env:PLAYWRIGHT_BASE_URL='http://localhost:3000'; npx playwright test e2e/galleries.spec.js --workers=1`
  Expected: FAIL (cards are the built-in projects, not services).
- [ ] **Step 3: Implement the Interfaces above in `script.js`**; in `loadProjects()` after the legacy `renderShowcase(showcaseProjects)` call `loadServiceGallery().then(renderPublicServiceGallery)` (no await, legacy shows first). When gallery rows exist, `renderShowcase` must receive only the gallery pseudo-projects (Review Focus 1).
- [ ] **Step 4: Run to verify they pass** (same command). Expected: 5 passed. Also run `npx playwright test e2e/smoke.spec.js --workers=1` → 7 passed.

### Task 2: Admin "Galleries" tab — service tabs, tiles, upload

**Files:**
- Modify: `script.js` — `setAdminTab` case `'projects'` → `await loadServiceGallery(); renderAdminServiceGalleries(tmp);`; `ADMIN_PAGE_META.projects` → `['Galleries', 'Photos and videos by service']`; sidebar label "Projects" → "Galleries" (icon `fa-images`) where the sidebar markup is built (~line 5760).
- Modify: `premium.css` — new block `/* 7.14 Service galleries (admin + public) */` at end.
- Test: `e2e/galleries.spec.js` (`test.describe('Service galleries — admin')`)

**Interfaces:**
- Consumes: Task 1 state/functions; existing `uploadWithProgress(path, blob, onProgress)`, `optimizeImageForUpload(file)`, `buildMediaObjectName(file)`, `getMediaKind(name, type)`, `getMediaPublicUrl(path)`, `showAdminMediaToast(msg, type)`, `toRemoteRow(record)`.
- Produces:
  - `const sgAdmin = { category: 'cctv', confirming: '', queue: Array<{ name, pct, status:'uploading'|'done'|'error', message }> }`
  - `renderAdminServiceGalleries(container): void` — markup root `#sgAdmin`; tabs `.sg-tab[data-sg-cat]` with count `<span>`; drop zone `#sgDrop` + `input#sgFile[type=file][multiple][accept="image/*,video/*"]`; queue `#sgQueue`; links form `#sgLinksForm` (`textarea#sgLinks`); grid `#sgGrid` of `.sg-tile[data-sg-id]`; offline/error → `.hm-state.is-offline` with retry `[data-sg-action="retry"]`.
  - `refreshAdminServiceGalleries(): void` — re-renders `#sgAdmin` inner parts from state (no refetch)
  - `async insertServiceGalleryItems(records: GalleryItem[]): Promise<{ ok, items: GalleryItem[], message }>` — `upsert(records.map(toRemoteRow)).select()`; on success pushes to `serviceGallery.items`, calls `renderPublicServiceGallery()`
  - `async uploadServiceGalleryFiles(category, files: File[]): Promise<void>` — max 3 concurrent (`MEDIA_UPLOAD_CONCURRENCY`); per file: type check (image/video only, else `Only photos and videos`), video size check (`Too big (max 50 MB)`), optimise, upload to `gallery/<category>/<name>`, then insert one row (`source:'supabase'`, `storagePath`, `order` = current max+1); errors per file, others continue
  - `bindAdminServiceGalleriesOnce(): void` — document-level delegated listeners (`window.__sgBound` guard), like `bindAdvertAdminOnce`
- [ ] **Step 1: Write the failing tests**:
  - `galleries tab lists items by service`: rows 2 cctv + 1 solar → `#adminPanel .nav-item[data-admin-tab="projects"]` text contains `Galleries`; `.sg-tab[data-sg-cat="cctv"] span` = `2`; `#sgGrid .sg-tile` count 2; click solar tab → 1 tile.
  - `upload photo and video into CCTV`: `setInputFiles('#sgFile', [png 1200x800, mp4 small])` → storage paths start with `gallery/cctv/`; 2 new rows with `kind:'gallery'`, `category:'cctv'`, `source:'supabase'`; tiles = 4; open public page in a new page with the same `db` → CCTV card text `3 photos · 1 video`.
  - `bad file does not stop the others`: files = [pdf, 61 MB `Buffer.alloc` video named `big.mp4` type `video/mp4`, png] → `#sgQueue` contains `Only photos and videos` and `Too big (max 50 MB)`; exactly 1 row added.
  - `not allowed upload leaves nothing behind`: mock returns 403 on storage POST → message `Not allowed. Sign in again as admin.`, 0 rows added.
  - `offline shows state with retry`: route `**/rest/v1/installations*` aborted → `#sgAdmin .hm-state.is-offline` contains `Storage can't be reached`; un-abort + click `[data-sg-action="retry"]` → tiles render.
- [ ] **Step 2: Run to verify they fail** (Task 1 command) → FAIL (tab still "Projects").
- [ ] **Step 3: Implement** the Interfaces; tile markup: thumb (`img` / `video#t=0.5 muted` / YouTube thumb), caption input `.sg-caption`, buttons with `data-sg-action` = `feature | cover | left | right | ask-delete` and select `.sg-move` (all wired in Task 3/4; render them now). Styles: reuse `#hmMedia` look (tiles 4-up desktop, 2-up ≤900px, 1-up ≤480px), drag-over state on `#sgDrop`, queue rows with progress bar, tiles enter with `r7-admin-page`.
- [ ] **Step 4: Run to verify they pass** → 5 admin + 5 public passed.

### Task 3: Links, caption, featured, cover, reorder, move

**Files:** Modify `script.js` (same section), `premium.css` (7.14); Test `e2e/galleries.spec.js`.

**Interfaces:**
- Consumes: Task 2 `insertServiceGalleryItems`, `refreshAdminServiceGalleries`, `bindAdminServiceGalleriesOnce`.
- Produces:
  - `parseServiceGalleryLinks(text: string, existing: GalleryItem[]): { items: Array<Pick<GalleryItem,'src'|'mediaType'|'source'|'thumb'>>, invalid: string[], duplicates: number }` — `mediaType`: YouTube host → `youtube` (thumb from `getYoutubeThumbUrl`), `/video/upload/` or ext `mp4|webm|mov` → `video`, else `image`; `source`: `cloudinary` for `res.cloudinary.com`, `youtube`, else `link`; `src` passed through `normalizeCloudinaryUrl`
  - `async updateServiceGalleryItem(id, patch: Partial<GalleryItem>): Promise<{ ok, message }>` — `upsert(toRemoteRow({...item, ...patch})).select()`; refresh admin + public on success; on failure no local change
  - `async setServiceGalleryCover(id)` — sets `cover:true` on id and `false` on the others in the same category (one upsert of the changed rows)
  - `async moveServiceGalleryItem(id, dir: -1|1)` — swaps `order` with neighbour in category; no-op at ends
- [ ] **Step 1: Write the failing tests**:
  - `add Cloudinary and YouTube links`: fill `#sgLinks` with `https://res.cloudinary.com/daovfi3i5/image/upload/v1/a.jpg\nhttps://youtu.be/dQw4w9WgXcQ\nhttps://res.cloudinary.com/daovfi3i5/video/upload/v1/b.mp4` → 3 rows with mediaType `image, youtube, video` and source `cloudinary, youtube, cloudinary`.
  - `bad and duplicate links are reported`: `javascript:alert(1)\nhttp://x.com/a.jpg\n\n` + a URL already in rows → message contains `2 not added` and `1 already in the gallery`; 0 rows added.
  - `caption, featured, cover, reorder, move`: caption `Villa, East Legon` + blur → row caption saved; `feature` → `featured:true`; `cover` on 2nd tile → public CCTV card image `src` = that item; `left` on 2nd tile → orders swapped; `.sg-move` → `solar` → row category `solar`, tile leaves CCTV tab.
- [ ] **Step 2: Run to verify they fail** → FAIL.
- [ ] **Step 3: Implement** the Interfaces and the delegated handlers (`input` debounce not needed: save on `change`/`blur` of `.sg-caption`).
- [ ] **Step 4: Run to verify they pass** → all galleries tests pass.

### Task 4: Delete everywhere

**Files:** Modify `script.js`, `premium.css`; Test `e2e/galleries.spec.js`.

**Interfaces:**
- Consumes: Task 2/3 functions; `supabase.storage.from(MEDIA_BUCKET).remove([path])`.
- Produces: `async deleteServiceGalleryItem(id): Promise<{ ok, message }>` (order per Global Constraints); UI: `ask-delete` → tile `.is-confirming` shows `.sg-confirm` "Delete this item?" [Delete `data-sg-action="confirm-delete"`] [Keep `data-sg-action="cancel-delete"`]; on success tile gets `.is-removed` (fade/scale 380 ms) then refresh; toast `Deleted from the website`.
- [ ] **Step 1: Write the failing tests**:
  - `delete removes row, file and public item`: supabase-sourced item → row gone, storage DELETE called with its `storagePath`; public page (new page, same db) CCTV count decreased.
  - `refused delete keeps the item`: `refuseDeletes = true` → tile still present, toast contains `Could not delete`.
  - `cloudinary item delete keeps the Cloudinary file`: row gone; no storage DELETE call.
  - `deleting cover and last item`: delete the cover → public card shows next item; delete remaining → no CCTV card, other services unaffected.
- [ ] **Step 2: Run to verify they fail** → FAIL.
- [ ] **Step 3: Implement** `deleteServiceGalleryItem` + confirm UI + styles (reuse `.r7-proj-confirm` look).
- [ ] **Step 4: Run to verify they pass.**

### Task 5: Import current photos + Media Library "Add to gallery"

**Files:** Modify `script.js` (gallery section + `buildMediaTile` + media click handler), `premium.css`; Test `e2e/galleries.spec.js`.

**Interfaces:**
- Consumes: `getProjects()`, `getShowcaseMedia(project)`, `normalizeShowcaseCategory`, legacy `installations` rows (no `kind`, have `category` + `mediaSrc`/`mediaItems`), Task 2 `insertServiceGalleryItems`.
- Produces:
  - `async importCurrentPhotosToServiceGallery(): Promise<{ ok, added: number, skipped: number, message }>` — collect media from `getProjects()` + legacy rows, category via `normalizeShowcaseCategory`, skip categories not in `SERVICE_GALLERY_CATEGORIES` and URLs already present; `source` by URL (`cloudinary`/`youtube`/`supabase` when URL contains `/storage/v1/object/public/media/`, else `link`); first item per category `cover:true`. Idempotent.
  - Admin UI: empty state (no gallery rows at all) shows button `[data-sg-action="import"]` "Import the photos your site shows now"; same action in a small "More" menu otherwise. Result toast `Imported N photos (M already there)`.
  - Media Library tile: new button `[data-hm-action="to-gallery"]` → inline select of services + Add → one row with `source:'supabase'`, `storagePath` = file name, no re-upload; toast `Added to <label> gallery`.
- [ ] **Step 1: Write the failing tests**:
  - `import copies current photos once`: rows = [] → click import → rows added > 0, every row `kind:'gallery'` with a category from the list; click import again → `0` added.
  - `media library add to gallery`: storage has `x.webp` → Media tab → `to-gallery` → choose `gates` → row with `src` = public URL of `x.webp`, `category:'gates'`, `storagePath:'x.webp'`.
- [ ] **Step 2: Run to verify they fail** → FAIL.
- [ ] **Step 3: Implement.**
- [ ] **Step 4: Run to verify they pass.**

### Task 6: Featured Work, phones, regression, docs

**Files:** Modify `script.js` (`renderPublicServiceGallery` → featured), `premium.css`, `index.html` (versions), `README.md` (changelog "2026-09-30: Service galleries"), `ADMIN_SETUP.md` (how to use Galleries); Test `e2e/galleries.spec.js`.

**Interfaces:**
- Consumes: `scheduleFeaturedRender(projects, force)` (existing), Task 1 groups.
- Produces: when gallery rows exist, Featured Work receives one pseudo-project per featured item (fallback: each service cover), `showInFeatured: true`.
- [ ] **Step 1: Write the failing tests**:
  - `featured items drive Featured Work`: 2 featured items → `#featured-work .featured-loop-slide` count 2 with their titles = service labels.
  - `phone layout`: viewport 390x844 → admin Galleries tab and public Showcase have `scrollWidth - innerWidth <= 0`; screenshot both to `test-results/`.
- [ ] **Step 2: Run to verify they fail** → FAIL (Featured Work still legacy).
- [ ] **Step 3: Implement**, bump versions, write README/ADMIN_SETUP entries (file-by-file table, as in earlier parts).
- [ ] **Step 4: Full verification**: `npx playwright test --workers=1` → all galleries tests + 7 smoke pass; session suites (nav, top bar, chat, motion, admin-motion, project delete*) pass (*project-delete suite is retired with the Projects tab; note it in README).
