# Admin portal setup (Supabase login + media storage)

The admin portal now uses a real **email + password login** (Supabase Auth). Uploads, deletes and leads are protected on the server by the security rules in `supabase/sql/admin_setup.sql`, not by a hidden link.

> **Status (checked 2026-09-29):** the original project `qcyhxurhbvcgftyzlqdu.supabase.co` is online again, and the URL + key already in `index.html` work. **Skip steps 1–2** and start at step 3. Its `leads` and `installations` tables still use the old layout (no `data` column) and leads were readable by anyone. Step 3 fixes both: old tables are renamed to `leads_old` / `installations_old` (kept, readable only from the dashboard), and every old row is copied into the new tables.

## One-time setup (about 10 minutes)

1. **Create the project**
   Go to <https://supabase.com/dashboard>. If your old project is listed as *paused*, click **Restore** and skip to step 3 with its details. Otherwise click **New project**, name it `hailifu`, choose a region close to Ghana (e.g. *West EU* or *Frankfurt*), set a database password, and create it.

2. **Connect the website**
   In the project: **Project Settings → API**. Copy **Project URL** and the **publishable (anon) key**.
   Open `index.html`, search for `SUPABASE_URL`, and paste both values:
   ```js
   SUPABASE_URL: "https://YOUR-PROJECT.supabase.co",
   SUPABASE_ANON_KEY: "sb_publishable_..."
   ```
   The publishable/anon key is designed to be public. **Never** paste the `service_role` / secret key into the website.

3. **Create tables, storage and security rules**
   Open `supabase/sql/admin_setup.sql`, check the admin email inside `is_hailifu_admin()` (default `01hailifu@gmail.com`), then paste the whole file into **SQL Editor → New query → Run**.

4. **Create your admin account**
   **Authentication → Users → Add user → Create new user.** Enter your email (the same one as in step 3) and a strong password, tick **Auto Confirm User**, and save.

5. **Block strangers from signing up**
   **Authentication → Sign In / Providers**: keep **Email** enabled, turn **off** "Allow new users to sign up".

6. **Set the site address (needed for password reset)**
   **Authentication → URL Configuration**:
   - **Site URL**: `https://hailifugh.com`
   - **Redirect URLs**: add `https://hailifugh.com/?admin-reset=1` (and `https://www.hailifugh.com/?admin-reset=1` if you use www). Without this, reset links cannot bring you back to the site.

7. **Sign in**
   Visit **`https://hailifugh.com/?admin`** (or `/#admin`) and sign in. After that, the admin button in the menu bar opens the portal directly until you log out.

## Everyday use

- **Open the portal:** `hailifugh.com/?admin`
- **Upload:** Media Library → drag photos/videos onto the box, click **Upload**, or paste an image (Ctrl+V). Photos are resized and converted to WebP automatically. Videos up to 50 MB.
- **Delete:** trash icon → **Delete** (one click to confirm, no PIN). To delete many: tick the boxes, then **Delete selected**.
- **Copy a link:** the chain icon copies the public link of a file.
- **Adverts:** Admin → **Adverts**. Fill in a headline (and optionally text, button text, a button link and a photo), then **Publish advert**. It appears in the advert banner in the Reviews section of the homepage. **Pause** hides it without deleting, **Show** brings it back, **Remove** deletes it (one click to confirm). Leave "Button link" empty to make the button open the quote form. When no advert is live, the site shows 3 built-in adverts (CCTV, gates, electrical).
  > Already ran `admin_setup.sql` before adverts existed? Run it again once; it adds the `adverts` table and is safe to re-run.

## Galleries (photos and videos by service)

Admin → **Galleries** (this replaced the old Projects tab). Each service has its own gallery: CCTV, Electrical, Electric fence, Air conditioning, Solar, Gate automation, Blinds & curtains, Smart home. What you do here shows on the website for every visitor straight away.

- **First time:** press **Import site photos** once. It copies the photos your website shows today (including your Cloudinary links) into the right galleries. Pressing it again never makes duplicates. Do this on `hailifugh.com/?admin`.
- **Upload:** pick the service tab, then drop photos or videos on the box (or click it). Photos are resized automatically; videos up to 50 MB. Each file shows its own progress; a bad file (e.g. a PDF or a big video) is skipped with a message and the others still upload.
- **Cloudinary or YouTube:** paste links into **Paste links**, one per line, then **Add links**. Only `https://` links are accepted; links already in a gallery are skipped.
- **From the Media Library:** the gallery icon on a file → choose a service → **Add** (no re-upload).
- **On each item:** type a caption (saved when you click away) · ★ shows it in **Featured Work** · picture icon makes it the service's cover photo · arrows change the order · **Move to…** sends it to another service.
- **Delete:** trash icon → **Delete**. It disappears from the website for everyone. Files you uploaded here are deleted from storage too; Cloudinary files stay in your Cloudinary account.
- **Featured Work** shows the starred items. If nothing is starred, it shows each service's cover.
- If the galleries are empty (or storage can't be reached), the website keeps showing its built-in photos, so it is never blank.

No SQL needed: galleries use the existing `installations` table and `media` storage bucket.

## Bring all your Cloudinary photos into the Galleries

The website cannot list your Cloudinary account (that needs your secret key, which must never be in the site). A small helper does it **on your computer only**, read-only:

1. Cloudinary Dashboard → **Settings → API Keys**: copy the **API Key** and **API Secret**.
2. Open **PowerShell on your computer** (not the chat) and run:
   ```powershell
   cd "C:\Users\01hai\OneDrive\Desktop\Hailifu_Website-main\Hailifu_Website-main"
   $env:CLOUDINARY_API_KEY="paste-your-api-key"
   $env:CLOUDINARY_API_SECRET="paste-your-api-secret"
   node tools/cloudinary-to-galleries.js
   ```
   The keys only live in that PowerShell window; close it when done. The account is `daovfi3i5` (set `$env:CLOUDINARY_CLOUD_NAME` for another).
3. It writes **cloudinary-links.html** in the project folder. Open it: one box per service (sorted by your Cloudinary **folder names**, e.g. `cctv`, `electrical`, `electric-fence`, `ac`, `solar`, `gates`, `blinds`, `smart-home`), plus **Unsorted** for folders it could not match.
4. For each box: **Copy links** → Admin → **Galleries** → same service → **Paste links** → **Add links**. Links already in a gallery are skipped, so repeating is safe.

## Forgot or want to change the password?

- **Forgot it:** open `hailifugh.com/?admin`, click **Forgot password?**, enter your admin email, and click **Send reset link**. Open the email, click the link, and you land on **Set a new password**. After saving, the portal opens.
- **Change it (signed in):** click your email at the top right of the portal → **Change password**.
- New passwords need at least 8 characters with letters and a number.
- Backup option: Supabase Dashboard → **Authentication → Users** → your user → **Send password recovery** or set a new password there.

## Advert banner on/off

Admin → **Adverts** → the switch at the top right (**Banner is on / off**) shows or hides the whole advert section for every visitor, without deleting any adverts.

## Old access methods (retired)

- `?dev=hailifu_access` no longer opens the portal; it now shows the login screen.
- Access saved in a browser from the old link is revoked automatically unless that browser is signed in.
- The 4-digit Admin PIN still guards some older delete buttons in other tabs (leads, reviews). Change it in **Site Control**.
