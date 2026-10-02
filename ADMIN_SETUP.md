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
   Visit **`https://hailifugh.com/hailifu=access`** and sign in (the old `/?admin` and `/#admin` addresses no longer open it). After that, the admin button in the menu bar opens the portal directly until you log out.

## Everyday use

- **Open the portal:** `hailifugh.com/hailifu=access`
- **Upload:** Media Library → drag photos/videos onto the box, click **Upload**, or paste an image (Ctrl+V). Photos are resized and converted to WebP automatically. Videos up to 50 MB.
- **Delete:** trash icon → **Delete** (one click to confirm, no PIN). To delete many: tick the boxes, then **Delete selected**.
- **Copy a link:** the chain icon copies the public link of a file.
- **Adverts:** Admin → **Adverts**. Fill in a headline (and optionally text, button text, a button link and a photo), then **Publish advert**. It appears in the advert banner in the Reviews section of the homepage. **Pause** hides it without deleting, **Show** brings it back, **Remove** deletes it (one click to confirm). Leave "Button link" empty to make the button open the quote form. When no advert is live, the site shows 3 built-in adverts (CCTV, gates, electrical).
  > Already ran `admin_setup.sql` before adverts existed? Run it again once; it adds the `adverts` table and is safe to re-run.

## Galleries (photos and videos by service)

Admin → **Galleries** (this replaced the old Projects tab). Each service has its own gallery: CCTV, Electrical, Networking, Electric fence, Air conditioning, Solar, Gate automation, Blinds & curtains, Smart home. What you do here shows on the website for every visitor straight away.

- **First time:** press **Import site photos** once. It copies the photos your website shows today (including your Cloudinary links) into the right galleries. Pressing it again never makes duplicates. Do this on `hailifugh.com/hailifu=access`.
- **Upload:** pick the service tab, then drop photos or videos on the box (or click it). Photos are resized automatically; videos up to 50 MB. Each file shows its own progress; a bad file (e.g. a PDF or a big video) is skipped with a message and the others still upload.
- **Cloudinary or YouTube:** paste links into **Paste links**, one per line, then **Add links**. Only `https://` links are accepted; links already in a gallery are skipped.
- **From the Media Library:** in a gallery, press **From Media Library**, tick the photos/videos you want and press **Add N to <service>** (files already there are marked "In this gallery"). Or, in Admin → Media Library, the gallery icon on a file → choose a service → **Add**. No re-upload either way, and removing a gallery item never deletes the library file.
- **What the Media Library is for:** one place for your own uploaded photos and videos, so you can reuse them in galleries and for the Aftercare photo without uploading again.
- **On each item:** type a caption (saved when you click away) · ★ shows it in **Featured Work** · picture icon makes it the service's cover photo · arrows change the order · **Move** opens a list of services and sends it there. Hover (or long-press) any button to see what it does.
- **Delete:** trash icon → **Delete**. It disappears from the website for everyone. Files you uploaded here are deleted from storage too; Cloudinary files stay in your Cloudinary account.
- **Several at once:** tick the box on each item (or **Select all**, which picks every item in the service you are on). A bar shows "N selected" with **Move to…** and **Delete**. If one item can't be deleted, the others still go and that one stays ticked with a message.
- **Photos from your Google Business Profile:** Google doesn't let websites copy profile photos (its API gives at most 10). Instead: open your profile on Google Maps → **Photos**, download the ones you want, then drop them into the right gallery here.
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

## Website reviews (live at once, you stay in control)

The form works like Google's: **no name and no phone**. Visitors tap stars (the only required answer) and can add: their experience in words, up to 5 photos and 1 video (max 30 MB), what they liked, whether they got a service, which services, how they'd describe the price, how much they paid, and how quickly you responded. **No Google sign-in needed.** Since 2026-10-01 (round 11) a review **goes live as soon as it is sent**.

1. **One-time:** Supabase Dashboard → **SQL Editor** → run `supabase/sql/reviews_public_submit.sql` (if you have not yet run the round 10 version), then run `supabase/sql/reviews_instant_publish.sql`. Both are safe to run again. Until the second one is run, new reviews still arrive but wait in **Hidden** until you press **Show on website**.
2. Admin → **Reviews**: **On the website** lists live reviews (newest first), **Hidden** lists ones you took off. **Hide** takes a review off the site, **Show on website** brings it back, **Save reply** adds your answer under it, **Delete** removes it and its photos. The Reviews menu item shows how many came in during the last 2 days.
3. On the website a review shows as "Hailifu customer" with the stars, text, photos and tags (services, what they liked, response speed, price). **The amount paid is only ever shown to you:** it is stored in a separate table (`review_private`) that only your login can read.
4. **Spam protection:** web links in the text are refused; robots that fill a hidden field or send within 3 seconds are ignored; one review per browser every 10 minutes; and the database accepts at most 8 new reviews in any 10 minutes across the whole site.
5. After posting, visitors get an **Also post it on Google** button.
6. Photos visitors upload go to the `media` bucket under `reviews/` (not into your Media Library list). They can only add files there, never change or delete anything.

## Reviews with Google accounts (one review per person, name and photo shown)

Like Google Business reviews: the visitor taps **Continue with Google**, and their **Google name and profile photo** show on the review with "1 review · 1 photo", the stars, the time and the text. **One review per Google account.** Their **email stays private**: it is stored in `review_authors`, which only your admin login can read. Photos and videos work as before. Someone who already reviewed sees "You've already reviewed Hailifu" instead of the form. If you **Delete** their review in Admin → Reviews, they can post again.

Until steps 1 to 4 are done, the website keeps the current form (no Google step). Do them in this order:

1. **Google Cloud** (console.cloud.google.com, signed in as 01hailifu@gmail.com):
   - **APIs & Services → OAuth consent screen**: User type **External**, App name **Hailifu Brilliant Installation**, support email and developer email = your email. Save. Under **Audience/Publishing status** press **Publish app** (otherwise only test users can sign in).
   - **APIs & Services → Credentials → Create credentials → OAuth client ID**: Application type **Web application**, name "Hailifu website".
     - Authorized JavaScript origins: `https://hailifugh.com`
     - Authorized redirect URIs: `https://qcyhxurhbvcgftyzlqdu.supabase.co/auth/v1/callback`
   - **Create**, then copy the **Client ID** and **Client secret** (keep the secret private: paste it only into Supabase, never in a chat).
2. **Supabase → Authentication → Sign In / Providers → Google**: switch it **on**, paste the Client ID and Client secret, **Save**.
3. **Supabase → Authentication → Sign In / Providers** (or Settings): **Allow new users to sign up** must be **on** (each reviewer becomes a user). Keep **Confirm email** on. This does not give anyone admin rights: the admin is only your email (`is_hailifu_admin()`), and reviewers can only post through the review function.
4. **Supabase → Authentication → URL Configuration → Redirect URLs**: add `https://hailifugh.com/**` (and `http://localhost:3000/**` for testing on this PC).
5. **Supabase → SQL Editor**: run `supabase/sql/reviews_google_accounts.sql` (safe to run again). From then on, reviews can only be posted through Google, one per account.
6. Test: open hailifugh.com on your phone (not signed in to the admin), **Leave a review → Continue with Google**, post, and check the card shows your Google name and photo. Try again with the same account: you should see "You've already reviewed Hailifu".

## Aftercare photo

Admin → **Site Control** → **Aftercare photo**: **Upload photo or video**, pick one from the **Media Library**, or paste an `https://` link → **Use link**. It changes the photo in "Looked after after we leave" for every visitor. **Remove photo** takes it off: there is no built-in photo, so the card then shows without a photo. A photo you uploaded here is deleted from storage when you replace it.

## Google reviews on the website

The site shows your Google star rating and newest Google reviews (Google sends at most 5). Each visitor's browser keeps a copy for 12 hours.

1. Google Cloud Console → **APIs & Services → Library** → enable **Places API (New)** on the project that owns your key.
2. **Credentials** → your API key → **Application restrictions: Websites** → add `hailifugh.com/*`, `www.hailifugh.com/*` and `localhost:3000/*`. **API restrictions** → allow **Places API (New)**.
3. Your Place ID: search for your business in Google's **Place ID Finder** (developers.google.com/maps/documentation/places/web-service/place-id) and copy the `ChIJ...` code.
4. Admin → **Site Control** → **Google reviews**: paste the key and Place ID → **Test** (shows your rating and how many reviews will show) → **Save**.

The key that was already in the site is used until you save one, so step 1 alone may be enough. If Google refuses, visitors see a "View reviews on Google" box instead, and **Site health** shows the reason in red.

## Brand colour

Admin → **Site Control** → **Brand colour**. Pick a colour to preview it on the whole site (only you see the preview), then **Save for everyone**. Text on buttons switches to dark or white by itself so it stays readable; the card tells you how readable it is. **Reset to Hailifu orange** brings back the original for everyone.

## Site health

Admin → **Site health** (was "Control Center") checks the website every time you open it: storage, your sign-in, galleries, leads, reviews, top bar, offer banner, Google reviews feed, brand colour and uploaded files. Green is fine, amber needs a look, red is broken; each line has a button to the page that fixes it. **Check again** re-runs everything.

## Forgot or want to change the password?

- **Forgot it:** open `hailifugh.com/hailifu=access`, click **Forgot password?**, enter your admin email, and click **Send reset link**. Open the email, click the link, and you land on **Set a new password**. After saving, the portal opens.
- **Change it (signed in):** click your email at the top right of the portal → **Change password**.
- New passwords need at least 8 characters with letters and a number.
- Backup option: Supabase Dashboard → **Authentication → Users** → your user → **Send password recovery** or set a new password there.

## Advert banner on/off

Admin → **Adverts** → the switch at the top right (**Banner is on / off**) shows or hides the whole advert section for every visitor, without deleting any adverts.

## Old access methods (retired)

- `?dev=hailifu_access` no longer opens the portal; it now shows the login screen.
- Access saved in a browser from the old link is revoked automatically unless that browser is signed in.
- There is no Admin PIN any more (removed 2026-10-01): it was saved only in one browser and defaulted to 2026, so it gave no real protection. Deletes are protected by your Supabase login and database rules, and every delete still asks you to confirm.
