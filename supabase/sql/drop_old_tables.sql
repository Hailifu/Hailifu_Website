-- Remove the backup tables left by the 2026-09-29 upgrade (leads_old, installations_old,
-- reviews_old). Run only after the new admin portal shows your old leads correctly.
-- Supabase Dashboard > SQL Editor > + New query > paste this whole file > Run.
--
-- Safety: before dropping a table, every row id in <name>_old must exist in <name>.
-- If even one is missing, the script stops with an error and NOTHING is deleted.
-- Safe to run more than once (tables already gone are skipped).
do $$
declare
    t text;
    missing bigint;
begin
    foreach t in array array['leads', 'installations', 'reviews'] loop
        if to_regclass('public.' || t || '_old') is null then
            raise notice '%_old: not found, skipped', t;
            continue;
        end if;
        if to_regclass('public.' || t) is null then
            raise exception 'public.% is missing, so %_old was NOT dropped. Nothing was deleted.', t, t;
        end if;
        execute format(
            'select count(*) from public.%I o where not exists (select 1 from public.%I n where n.id = o.id::text)',
            t || '_old', t)
        into missing;
        if missing > 0 then
            raise exception '% row(s) in %_old are not in %. Nothing was deleted.', missing, t, t;
        end if;
        execute format('drop table public.%I', t || '_old');
        raise notice '%_old: dropped', t;
    end loop;
end $$;
