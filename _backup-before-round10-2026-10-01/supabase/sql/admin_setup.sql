-- ============================================================================
-- Hailifu website: database, storage and admin security setup
-- Run ONCE in Supabase Dashboard > SQL Editor > New query > Run.
-- Safe to run again (it replaces its own policies).
--
-- BEFORE RUNNING: change the email in is_hailifu_admin() below to the email
-- of the admin user you create in Authentication > Users.
-- Only that account can upload, delete, or read leads.
-- ============================================================================

-- Who is admin -----------------------------------------------------------------
create or replace function public.is_hailifu_admin()
returns boolean
language sql
stable
as $$
    select coalesce(auth.jwt() ->> 'email', '') = any (array[
        '01hailifu@gmail.com'          -- <- your admin email (add more, comma-separated)
    ]);
$$;

-- Upgrade tables from the old layout ------------------------------------------------
-- If leads / installations / reviews already exist WITHOUT a `data` column (the
-- layout used before 2026-09-28), the old table is renamed to <name>_old (nothing is
-- deleted), its old policies are removed so only the dashboard can read it, and
-- every old row is copied into the new layout with all its fields inside `data`.
do $$
declare
    t text;
    r record;
begin
    foreach t in array array['leads', 'installations', 'reviews'] loop
        if to_regclass('public.' || t) is not null
           and not exists (select 1 from information_schema.columns
                           where table_schema = 'public' and table_name = t and column_name = 'data') then
            if to_regclass('public.' || t || '_old') is not null then
                raise exception 'public.%_old already exists. Rename or remove it, then run this script again.', t;
            end if;
            execute format('alter table public.%I rename to %I', t, t || '_old');
            -- free index names such as leads_pkey for the new table
            for r in select indexname from pg_indexes
                     where schemaname = 'public' and tablename = t || '_old' loop
                execute format('alter index public.%I rename to %I', r.indexname, left(r.indexname, 58) || '_old');
            end loop;
            for r in select policyname from pg_policies
                     where schemaname = 'public' and tablename = t || '_old' loop
                execute format('drop policy %I on public.%I', r.policyname, t || '_old');
            end loop;
            execute format('alter table public.%I enable row level security', t || '_old');
            execute format('create table public.%I (id text primary key, data jsonb not null default ''{}''::jsonb, updated_at timestamptz not null default now())', t);
            execute format('insert into public.%I (id, data) select o.id::text, to_jsonb(o) from public.%I o', t, t || '_old');
        end if;
    end loop;
end $$;

-- Tables -------------------------------------------------------------------------
-- Each row keeps the full record in `data` (jsonb), so new form fields never
-- break the table. The website reads/writes this shape (see script.js toRemoteRow).
create table if not exists public.leads (
    id text primary key,
    data jsonb not null default '{}'::jsonb,
    updated_at timestamptz not null default now()
);
create table if not exists public.installations (
    id text primary key,
    data jsonb not null default '{}'::jsonb,
    updated_at timestamptz not null default now()
);
create table if not exists public.reviews (
    id text primary key,
    data jsonb not null default '{}'::jsonb,
    updated_at timestamptz not null default now()
);

alter table public.leads enable row level security;
alter table public.installations enable row level security;
alter table public.reviews enable row level security;

-- Leads: website visitors can SEND a quote request; only admin can see/change them.
drop policy if exists leads_public_insert on public.leads;
create policy leads_public_insert on public.leads
    for insert to anon, authenticated
    with check (true);

drop policy if exists leads_admin_all on public.leads;
create policy leads_admin_all on public.leads
    for all to authenticated
    using (public.is_hailifu_admin())
    with check (public.is_hailifu_admin());

-- Projects (installations): everyone can view; only admin can change.
drop policy if exists installations_public_read on public.installations;
create policy installations_public_read on public.installations
    for select using (true);

drop policy if exists installations_admin_write on public.installations;
create policy installations_admin_write on public.installations
    for all to authenticated
    using (public.is_hailifu_admin())
    with check (public.is_hailifu_admin());

-- Reviews: everyone sees APPROVED reviews; visitors may add a waiting one
-- (see reviews_public_submit.sql); only admin can change.
drop policy if exists reviews_public_read on public.reviews;
create policy reviews_public_read on public.reviews
    for select using (coalesce(data->>'status', '') = 'published' or public.is_hailifu_admin());

drop policy if exists reviews_public_insert on public.reviews;
create policy reviews_public_insert on public.reviews
    for insert to anon, authenticated
    with check (
        id like 'r\_%'
        and coalesce(data->>'status', '') = 'pending'
        and coalesce(data->>'ownerReply', '') = ''
        and pg_column_size(data) < 8000
    );

drop policy if exists reviews_admin_write on public.reviews;
create policy reviews_admin_write on public.reviews
    for all to authenticated
    using (public.is_hailifu_admin())
    with check (public.is_hailifu_admin());

-- Adverts (homepage offer banner, managed in Admin > Adverts) ---------------------
create table if not exists public.adverts (
    id text primary key,
    data jsonb not null default '{}'::jsonb,
    updated_at timestamptz not null default now()
);
alter table public.adverts enable row level security;

drop policy if exists adverts_public_read on public.adverts;
create policy adverts_public_read on public.adverts
    for select using (true);

drop policy if exists adverts_admin_write on public.adverts;
create policy adverts_admin_write on public.adverts
    for all to authenticated
    using (public.is_hailifu_admin())
    with check (public.is_hailifu_admin());

-- Media storage bucket -------------------------------------------------------------
-- Public read (so photos show on the website), 50 MB per file, photos/videos only.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('media', 'media', true, 52428800, array['image/*', 'video/*'])
on conflict (id) do update
    set public = true,
        file_size_limit = excluded.file_size_limit,
        allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists media_public_read on storage.objects;
create policy media_public_read on storage.objects
    for select using (bucket_id = 'media');

drop policy if exists media_admin_insert on storage.objects;
create policy media_admin_insert on storage.objects
    for insert to authenticated
    with check (bucket_id = 'media' and public.is_hailifu_admin());

drop policy if exists media_admin_update on storage.objects;
create policy media_admin_update on storage.objects
    for update to authenticated
    using (bucket_id = 'media' and public.is_hailifu_admin())
    with check (bucket_id = 'media' and public.is_hailifu_admin());

drop policy if exists media_admin_delete on storage.objects;
create policy media_admin_delete on storage.objects
    for delete to authenticated
    using (bucket_id = 'media' and public.is_hailifu_admin());
