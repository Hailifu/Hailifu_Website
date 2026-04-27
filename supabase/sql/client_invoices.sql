create table if not exists public.client_invoices (
    id bigserial primary key,
    verification_code text not null unique,
    client_name text not null,
    client_phone text not null,
    client_email text,
    client_location text,
    service_key text,
    service_label text not null,
    timeline text,
    message text not null,
    budget numeric(12,2),
    invoice_total numeric(12,2) not null,
    fraud_risk text not null default 'Low',
    created_at_client timestamptz,
    valid_until_client timestamptz,
    created_at timestamptz not null default now()
);

create index if not exists client_invoices_created_at_idx on public.client_invoices (created_at desc);
create index if not exists client_invoices_phone_idx on public.client_invoices (client_phone);
create index if not exists client_invoices_service_idx on public.client_invoices (service_key);

alter table public.client_invoices enable row level security;

do $$
begin
    if not exists (
        select 1
        from pg_policies
        where schemaname = 'public'
          and tablename = 'client_invoices'
          and policyname = 'deny_anonymous_client_invoices_access'
    ) then
        create policy deny_anonymous_client_invoices_access
            on public.client_invoices
            for all
            using (false)
            with check (false);
    end if;
end $$;
