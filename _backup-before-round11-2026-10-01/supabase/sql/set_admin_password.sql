-- Set (or reset) the admin password.
-- 1. Change CHANGE-ME below to the password you want (keep the ' quote marks).
-- 2. Supabase Dashboard > SQL Editor > + New query > paste this whole file > Run.
-- 3. Afterwards, change it again from the admin portal (your email at top right >
--    Change password), because the SQL Editor keeps a history of what you ran.
update auth.users
set encrypted_password = extensions.crypt('CHANGE-ME', extensions.gen_salt('bf')),
    email_confirmed_at = coalesce(email_confirmed_at, now())
where email = '01hailifu@gmail.com';
