# Invoice Backend Setup (Supabase Edge Function)

## 1) Create table

Run:

`supabase/sql/client_invoices.sql`

in the Supabase SQL editor.

## 2) Set function secrets

In Supabase project secrets, set:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `INVOICE_API_TOKEN` (your own strong random token)

## 3) Deploy edge function

From this project root:

```bash
supabase functions deploy invoice-verify
```

## 4) Configure frontend

Before loading the website, define:

- `window.HAILIFU_INVOICE_API_URL` = your function URL  
  Example: `https://<project-ref>.supabase.co/functions/v1/invoice-verify`
- `window.HAILIFU_INVOICE_API_TOKEN` = same value as `INVOICE_API_TOKEN`

## 5) Result

When a client submits quote details:

- browser generates invoice preview
- request is posted to your edge function
- record is stored in `public.client_invoices`
- status is marked `server-verified` when endpoint succeeds

If the endpoint is unavailable, flow still works in local-draft mode (no data loss on client side).
