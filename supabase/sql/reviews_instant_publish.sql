-- Website reviews go live at once (round 11, 2026-10-01)
-- Run once in Supabase > SQL Editor, AFTER reviews_public_submit.sql. Safe to run again.
--
-- What it does
--   * Visitors may post a review that is LIVE straight away (no approval step).
--     The owner keeps full control in Admin > Reviews: hide, reply, delete.
--   * The "amount paid" answer moves to a separate table, review_private, that only
--     the admin can read. Public reviews never contain it (old ones are cleaned below).
--   * Spam guards in the database itself:
--       - stars must be 1 to 5, no web links in the text, small size, no owner reply
--       - at most 8 new reviews per 10 minutes across the whole site
--   * Until this file is run, the website falls back to sending reviews as "waiting".

-- 0. When each review was posted, set by the database (visitors cannot fake it).
--    Older reviews keep it empty, so they never count towards the flood limit.
alter table public.reviews add column if not exists created_at timestamptz;
alter table public.reviews alter column created_at set default now();

-- 1. Private answers (amount paid), admin-only reading ---------------------------
create table if not exists public.review_private (
    id text primary key references public.reviews(id) on delete cascade,
    data jsonb not null default '{}'::jsonb,
    updated_at timestamptz not null default now()
);
alter table public.review_private enable row level security;

-- visitors may add the private answer for a review posted in the last 10 minutes
drop policy if exists review_private_public_insert on public.review_private;
create policy review_private_public_insert on public.review_private
    for insert to anon, authenticated
    with check (
        id like 'r\_%'
        and pg_column_size(data) < 600
        and exists (select 1 from public.reviews r where r.id = review_private.id and r.created_at > now() - interval '10 minutes')
    );

drop policy if exists review_private_admin_all on public.review_private;
create policy review_private_admin_all on public.review_private
    for all to authenticated
    using (public.is_hailifu_admin())
    with check (public.is_hailifu_admin());

-- move amounts already stored inside reviews into the private table, then remove them
insert into public.review_private (id, data)
    select id, jsonb_build_object('id', id, 'amount', data->'amount')
    from public.reviews
    where coalesce(data->>'amount', '') <> ''
on conflict (id) do nothing;
update public.reviews set data = data - 'amount' where data ? 'amount';

-- 2. Visitors may post a live review (with the spam rules) ------------------------
drop policy if exists reviews_public_insert on public.reviews;
create policy reviews_public_insert on public.reviews
    for insert to anon, authenticated
    with check (
        id like 'r\_%'
        and coalesce(data->>'status', '') in ('published', 'pending')
        and coalesce(data->>'ownerReply', '') = ''
        and not (data ? 'amount')
        and coalesce(data->>'phone', '') = ''
        and (data->>'rating') ~ '^[1-5]$'
        and coalesce(data->>'comment', '') !~* '(https?://|www\.)'
        and pg_column_size(data) < 8000
    );

-- 3. Flood limit: at most 8 new reviews in any 10 minutes (the admin is never limited)
create or replace function public.reviews_flood_guard()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    new.created_at := now();
    if public.is_hailifu_admin() then
        return new;
    end if;
    if (select count(*) from public.reviews where created_at > now() - interval '10 minutes') >= 8 then
        raise exception 'Too many reviews right now, try again later' using errcode = 'P0001';
    end if;
    return new;
end;
$$;

drop trigger if exists reviews_flood_guard on public.reviews;
create trigger reviews_flood_guard
    before insert on public.reviews
    for each row execute function public.reviews_flood_guard();
