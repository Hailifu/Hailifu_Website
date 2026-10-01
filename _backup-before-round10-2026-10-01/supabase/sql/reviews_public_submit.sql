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
