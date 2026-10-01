-- Website reviews: visitors can send a review, the owner approves it (2026-10-01)
-- Run once in Supabase > SQL Editor (after admin_setup.sql). Safe to run again.
--
-- What it does
--   * Visitors (not signed in) may ADD a review, but only as "pending" (waiting).
--   * Visitors can only SEE reviews the owner approved ("published").
--     Waiting reviews, and any phone number in them, are visible to the admin only.
--   * Only the admin can approve, hide, reply to or delete reviews.

alter table public.reviews enable row level security;

-- Visitors may add a waiting review (small, no owner reply, id starts with r_)
drop policy if exists reviews_public_insert on public.reviews;
create policy reviews_public_insert on public.reviews
    for insert to anon, authenticated
    with check (
        id like 'r\_%'
        and coalesce(data->>'status', '') = 'pending'
        and coalesce(data->>'ownerReply', '') = ''
        and pg_column_size(data) < 8000
    );

-- Everyone sees approved reviews; the admin sees all of them
drop policy if exists reviews_public_read on public.reviews;
create policy reviews_public_read on public.reviews
    for select using (
        coalesce(data->>'status', '') = 'published'
        or public.is_hailifu_admin()
    );

-- Admin can change and delete (unchanged from admin_setup.sql)
drop policy if exists reviews_admin_write on public.reviews;
create policy reviews_admin_write on public.reviews
    for all to authenticated
    using (public.is_hailifu_admin())
    with check (public.is_hailifu_admin());

-- Round 10 (2026-10-01): photos and videos with a review.
-- Visitors (not signed in) may ADD files only inside media/reviews/r_<id>/ and only
-- photo/video file types. They cannot change, list or delete anything. The files
-- show on the site only after the owner approves the review; deleting the review
-- in Admin also deletes its files. Size: the website limits photos (resized) and
-- one video of 30 MB; the bucket's own size limit still applies.
drop policy if exists media_public_review_upload on storage.objects;
create policy media_public_review_upload on storage.objects
    for insert to anon, authenticated
    with check (
        bucket_id = 'media'
        and name ~ '^reviews/r_[A-Za-z0-9]+/[A-Za-z0-9.-]+$'
        and lower(storage.extension(name)) in ('webp', 'jpg', 'jpeg', 'png', 'gif', 'heic', 'mp4', 'webm', 'mov', 'm4v')
    );
