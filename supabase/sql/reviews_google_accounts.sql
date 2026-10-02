-- Website reviews with Google accounts (2026-10-02)
-- Run once in Supabase > SQL Editor, AFTER turning on Google sign-in
-- (steps in ADMIN_SETUP.md, "Reviews with Google accounts"). Safe to run again.
-- Works whether or not reviews_public_submit.sql / reviews_instant_publish.sql were run.
--
-- What it does
--   * A review can only be posted by a visitor signed in with Google, through the
--     function submit_google_review(). Nobody can add a review row directly any more.
--   * ONE review per Google account (per email address). If the owner deletes that
--     review in Admin > Reviews, the person may post again.
--   * The name and profile photo on the review come from the Google account itself
--     (auth.identities), so they cannot be faked. The email is NEVER in the public
--     review: it is kept in review_authors, which only the admin can read.
--   * Reviews go live at once; the owner can hide, reply or delete in Admin > Reviews.
--   * The amount paid stays in the admin-only table review_private.
--   * Spam guards: stars 1 to 5, no web links, size limits, at most 8 new reviews
--     per 10 minutes across the site.

-- 0. When each review was posted (set by the database) ----------------------------
alter table public.reviews add column if not exists created_at timestamptz;
alter table public.reviews alter column created_at set default now();
alter table public.reviews enable row level security;

-- 1. Admin-only tables ---------------------------------------------------------------
create table if not exists public.review_private (
    id text primary key references public.reviews(id) on delete cascade,
    data jsonb not null default '{}'::jsonb,
    updated_at timestamptz not null default now()
);
alter table public.review_private enable row level security;
drop policy if exists review_private_public_insert on public.review_private;
drop policy if exists review_private_admin_all on public.review_private;
create policy review_private_admin_all on public.review_private
    for all to authenticated
    using (public.is_hailifu_admin())
    with check (public.is_hailifu_admin());

-- who wrote which review (one row per email; deleting the review frees the email)
create table if not exists public.review_authors (
    email text primary key,
    review_id text not null references public.reviews(id) on delete cascade,
    user_id uuid,
    created_at timestamptz not null default now()
);
alter table public.review_authors enable row level security;
drop policy if exists review_authors_admin_all on public.review_authors;
create policy review_authors_admin_all on public.review_authors
    for all to authenticated
    using (public.is_hailifu_admin())
    with check (public.is_hailifu_admin());

-- 2. Reviews: everyone reads published ones; only the admin writes directly ----------
drop policy if exists reviews_public_insert on public.reviews;   -- no more direct inserts
drop policy if exists reviews_public_read on public.reviews;
create policy reviews_public_read on public.reviews
    for select using (coalesce(data->>'status', '') = 'published' or public.is_hailifu_admin());
drop policy if exists reviews_admin_write on public.reviews;
create policy reviews_admin_write on public.reviews
    for all to authenticated
    using (public.is_hailifu_admin())
    with check (public.is_hailifu_admin());

-- 3. Review photos/videos: only visitors signed in with Google, only in reviews/r_<id>/
drop policy if exists media_public_review_upload on storage.objects;
create policy media_public_review_upload on storage.objects
    for insert to authenticated
    with check (
        bucket_id = 'media'
        and coalesce(auth.jwt() -> 'app_metadata' ->> 'provider', '') = 'google'
        and name ~ '^reviews/r_[A-Za-z0-9]+/[A-Za-z0-9.-]+$'
        and lower(storage.extension(name)) in ('webp', 'jpg', 'jpeg', 'png', 'gif', 'heic', 'mp4', 'webm', 'mov', 'm4v')
    );

-- 4. Flood limit: at most 8 new reviews in any 10 minutes (the admin is never limited)
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

-- 5. The signed-in visitor's Google identity (name, photo, email) --------------------
--    Read from auth.identities: users cannot edit it themselves (unlike user_metadata).
create or replace function public.hailifu_google_identity()
returns jsonb
language sql
stable
security definer
set search_path = public, auth
as $$
    select jsonb_build_object(
        'email', lower(coalesce(i.identity_data ->> 'email', '')),
        'name', left(coalesce(nullif(i.identity_data ->> 'full_name', ''), nullif(i.identity_data ->> 'name', ''), 'Google user'), 60),
        'photo', coalesce(nullif(i.identity_data ->> 'avatar_url', ''), nullif(i.identity_data ->> 'picture', ''), '')
    )
    from auth.identities i
    where i.user_id = auth.uid() and i.provider = 'google'
    order by i.created_at
    limit 1;
$$;
revoke all on function public.hailifu_google_identity() from public, anon;

-- 6. Has this Google account already reviewed? (the form asks before showing itself)
create or replace function public.my_review_status()
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
    who jsonb := public.hailifu_google_identity();
begin
    if who is null or coalesce(who ->> 'email', '') = '' then
        return jsonb_build_object('google', false, 'reviewed', false);
    end if;
    return jsonb_build_object(
        'google', true,
        'name', who ->> 'name',
        'photo', who ->> 'photo',
        'reviewed', exists (select 1 from public.review_authors a where a.email = who ->> 'email')
    );
end;
$$;
revoke all on function public.my_review_status() from public, anon;
grant execute on function public.my_review_status() to authenticated;

-- 7. Post a review (the only way visitors can add one) --------------------------------
create or replace function public.submit_google_review(p_id text, p_data jsonb, p_amount text default '')
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
    who jsonb := public.hailifu_google_identity();
    v_email text;
    v_photo text;
    v_comment text := left(coalesce(p_data ->> 'comment', ''), 1500);
    v_now text := to_char(now() at time zone 'utc', 'YYYY-MM-DD"T"HH24:MI:SS"Z"');
    v_list jsonb;
    v_services jsonb;
    v_media jsonb;
    v_data jsonb;
begin
    if who is null or coalesce(who ->> 'email', '') = '' then
        raise exception 'Sign in with Google to post a review' using errcode = 'P0003';
    end if;
    v_email := who ->> 'email';
    if p_id !~ '^r_[A-Za-z0-9]{6,40}$' then
        raise exception 'Bad review id' using errcode = '22023';
    end if;
    if coalesce(p_data ->> 'rating', '') !~ '^[1-5]$' then
        raise exception 'Choose 1 to 5 stars' using errcode = '22023';
    end if;
    if v_comment ~* '(https?://|www\.)' then
        raise exception 'Links are not allowed in reviews' using errcode = '22023';
    end if;

    -- one review per Google account (lock so two quick taps cannot both pass)
    perform pg_advisory_xact_lock(hashtext('hailifu-review:' || v_email));
    if exists (select 1 from public.review_authors a where a.email = v_email) then
        raise exception 'This Google account has already posted a review' using errcode = 'P0002';
    end if;

    v_photo := who ->> 'photo';
    if v_photo !~ '^https://' then v_photo := ''; end if;
    select coalesce(jsonb_agg(left(x, 60)), '[]'::jsonb) into v_list
        from (select jsonb_array_elements_text(case when jsonb_typeof(p_data -> 'likes') = 'array' then p_data -> 'likes' else '[]'::jsonb end) x limit 12) s;
    select coalesce(jsonb_agg(left(x, 60)), '[]'::jsonb) into v_services
        from (select jsonb_array_elements_text(case when jsonb_typeof(p_data -> 'services') = 'array' then p_data -> 'services' else '[]'::jsonb end) x limit 12) s;
    select coalesce(jsonb_agg(jsonb_build_object('path', m ->> 'path', 'type', case when m ->> 'type' = 'video' then 'video' else 'image' end)), '[]'::jsonb) into v_media
        from (select m from jsonb_array_elements(case when jsonb_typeof(p_data -> 'media') = 'array' then p_data -> 'media' else '[]'::jsonb end) m
              where (m ->> 'path') ~ ('^reviews/' || p_id || '/[A-Za-z0-9.-]+$') limit 6) s;

    v_data := jsonb_build_object(
        'id', p_id,
        'name', who ->> 'name',
        'authorImage', v_photo,
        'identityProvider', 'google',
        'verified', true,
        'rating', (p_data ->> 'rating')::int,
        'comment', v_comment,
        'likes', v_list,
        'services', v_services,
        'used', case when p_data ->> 'used' in ('service', 'quote') then p_data ->> 'used' else '' end,
        'price', case when p_data ->> 'price' in ('inexpensive', 'fair', 'expensive') then p_data ->> 'price' else '' end,
        'speed', case when p_data ->> 'speed' in ('same-day', 'few-days', 'longer') then p_data ->> 'speed' else '' end,
        'media', v_media,
        'status', 'published',
        'source', 'website',
        'ownerReply', '',
        'createdAt', v_now,
        'publishedAt', v_now
    );

    insert into public.reviews (id, data, updated_at) values (p_id, v_data, now());
    insert into public.review_authors (email, review_id, user_id) values (v_email, p_id, auth.uid());
    if coalesce(p_amount, '') in ('u500', '500-2k', '2k-5k', '5k-10k', '10k+') then
        insert into public.review_private (id, data) values (p_id, jsonb_build_object('id', p_id, 'amount', p_amount))
        on conflict (id) do update set data = excluded.data, updated_at = now();
    end if;
    return jsonb_build_object('ok', true, 'id', p_id);
end;
$$;
revoke all on function public.submit_google_review(text, jsonb, text) from public, anon;
grant execute on function public.submit_google_review(text, jsonb, text) to authenticated;
