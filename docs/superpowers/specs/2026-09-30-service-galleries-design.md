# Service galleries — design

Date: 2026-09-30 · Status: approved in chat, awaiting spec review

## Goal

When the owner uploads a photo or video in the admin and picks a service (CCTV,
Electrical, Electric fence, AC, Solar, Gates, Blinds & curtains, Smart home), it
appears in that service's gallery on the public website for every visitor.
Existing Cloudinary assets can be added to galleries by link. Deleting an item in
the admin removes it from the website for every visitor.

## Decisions (from the owner)

- **One gallery per service**, not named projects.
- **New uploads go to Supabase Storage** (bucket `media`, admin-only write, already
  set up). **Cloudinary assets are added by pasting links.** No Cloudinary upload
  preset is used (an unsigned preset lets anyone upload to the account).
- **No SQL to run.** Reuse existing tables and policies.

## Current state (why it does not work today)

- Media Library uploads land in Storage but are not linked to anything.
- The public Work Showcase builds from `getProjects()` (built-in
  `DEFAULT_SHOWCASE_PROJECTS` + the visitor's own localStorage + old remote
  config/Firebase). It never reads Supabase, so admin changes only show on the
  owner's device.

## Data model

Table `public.installations` (`id text`, `data jsonb`, `updated_at`), policies
already: public read, admin-only write. Gallery items are rows whose
`data.kind === 'gallery'`:

| field | meaning |
|---|---|
| `id` | `g_<time><rand>` (row id, same in `data.id`) |
| `kind` | `'gallery'` (other/legacy rows are ignored by the new code except import) |
| `category` | one of `cctv, electrical, fencing, airconditioning, solar, gates, blindcurtain, smarthome` (existing `SHOWCASE_CATEGORY_LABELS` keys) |
| `mediaType` | `image` \| `video` \| `youtube` |
| `src` | public URL (Supabase public URL, Cloudinary URL or YouTube URL) |
| `thumb` | optional poster/thumbnail URL |
| `source` | `supabase` \| `cloudinary` \| `youtube` \| `link` |
| `storagePath` | Storage object path when `source === 'supabase'` (e.g. `gallery/cctv/<name>.webp`), used to delete the file |
| `caption` | optional short text |
| `featured` | boolean, shown in Featured Work |
| `cover` | boolean, the service card image (at most one per category; else first item) |
| `order` | number, ascending within a category |
| `createdAt` | ISO time |

Uploaded files go to Storage path `gallery/<category>/<name>` (existing
`buildMediaObjectName`, `optimizeImageForUpload`, `uploadWithProgress`,
50 MB video limit).

## Admin: "Galleries" tab (replaces Projects)

- Sidebar item "Projects" becomes **Galleries** (same `data-admin-tab="projects"`
  key so existing navigation keeps working).
- **Service tabs** with item counts; the selected service shows:
  - **Drop zone / file picker** (photos + videos, multiple). Each file shows a
    progress row; on success a row is inserted and the tile appears. Failures
    say why (too big, not a photo/video, not allowed, offline) and do not
    insert a row.
  - **Add by link**: textarea, one URL per line (Cloudinary, YouTube, any https
    image/video URL). Type detected from URL; invalid lines reported.
  - **Tiles**: preview, caption (inline edit, saved on blur), star = featured,
    "set as cover", move left/right, "move to service" select, delete.
- **Delete**: inline Delete/Keep (same pattern as leads/projects). Deletes the row
  first (`.select()` to confirm a row was removed; refused → item stays + message),
  then removes the Storage file if `source === 'supabase'` (failure only logged:
  the item is already gone from the site). Cloudinary files are left in Cloudinary.
- **Import current photos** (shown when no gallery rows exist, and in a menu):
  converts what the site shows today (`getProjects()` media incl. Cloudinary links
  and legacy `installations` project rows) into gallery rows by category,
  skipping duplicate URLs. Idempotent.
- **Media Library**: each tile gets "Add to gallery" → choose service → inserts a
  row (source `supabase`, same `storagePath`), no re-upload.
- All writes are optimistic only after the server confirms; every mutation
  refreshes the in-memory list and the public render in the same page.

## Public website

- On load, fetch gallery rows (`installations` where `data->>kind = gallery`,
  public read) with a timeout.
- **Work Showcase**: one card per service that has items, using the existing
  masonry styles: cover image, service name, "N photos · M videos". Card opens
  the existing gallery viewer with that service's items in `order`. Chips/search
  keep working (chip = service, search matches the service name). Deep
  link `#project=<category>` opens a service gallery.
- **Featured Work**: items with `featured` (fallback: each service's cover).
- **Fallback**: if the fetch fails or returns no gallery rows, keep today's
  behaviour (`getProjects()` + built-in projects) so the site is never empty.
- Services with no items are not shown.

## Error handling

- Supabase offline in admin → state panel "Storage can't be reached" + retry.
- Not signed in / RLS refusal → "Not allowed. Sign in again as admin." and no
  local change.
- Upload over limit / wrong type → per-file message, others continue.

## Testing (simulated Supabase, Playwright)

Upload photo+video into CCTV → rows + Storage objects created, tiles show,
public Showcase shows CCTV card with count; add Cloudinary + YouTube links;
caption, feature, cover, reorder, move to another service; delete (row + file
removed, gone from public page after reload, refused delete keeps item); import
from current projects (idempotent); Media Library "Add to gallery"; public
fallback when Supabase is unreachable; phone + desktop screenshots; existing
smoke tests 7/7; earlier suites (nav, top bar, chat, motion) still pass.

## Out of scope

- Uploading to Cloudinary, deleting Cloudinary files (needs a server function
  with the API secret; can be added later).
- Named projects inside services.
