import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

type InvoicePayload = {
  client?: {
    name?: string;
    phone?: string;
    email?: string;
    location?: string;
  };
  request?: {
    serviceKey?: string;
    serviceLabel?: string;
    timeline?: string;
    message?: string;
    budget?: number;
  };
  invoice?: {
    verificationCode?: string;
    total?: number;
    fraudRisk?: string;
    createdAt?: string;
    validUntil?: string;
  };
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const invoiceApiToken = Deno.env.get("INVOICE_API_TOKEN") || "";

if (!supabaseUrl || !supabaseServiceRole) {
  throw new Error("Missing Supabase envs: SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY");
}

const admin = createClient(supabaseUrl, supabaseServiceRole, {
  auth: { persistSession: false },
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    if (invoiceApiToken) {
      const authHeader = req.headers.get("authorization") || "";
      const provided = authHeader.replace(/^Bearer\s+/i, "").trim();
      if (!provided || provided !== invoiceApiToken) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const body = (await req.json()) as InvoicePayload;
    const clientName = String(body?.client?.name || "").trim();
    const phone = String(body?.client?.phone || "").trim();
    const serviceLabel = String(body?.request?.serviceLabel || "").trim();
    const message = String(body?.request?.message || "").trim();
    const verificationCode = String(body?.invoice?.verificationCode || "").trim();
    const total = Number(body?.invoice?.total || 0);
    const fraudRisk = String(body?.invoice?.fraudRisk || "Low").trim();
    const createdAt = String(body?.invoice?.createdAt || new Date().toISOString()).trim();
    const validUntil = String(body?.invoice?.validUntil || "").trim() || null;

    if (!clientName || !phone || !serviceLabel || !message || !verificationCode || total <= 0) {
      return new Response(JSON.stringify({ error: "Invalid invoice payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data, error } = await admin
      .from("client_invoices")
      .insert({
        verification_code: verificationCode,
        client_name: clientName,
        client_phone: phone,
        client_email: String(body?.client?.email || "").trim() || null,
        client_location: String(body?.client?.location || "").trim() || null,
        service_key: String(body?.request?.serviceKey || "").trim() || null,
        service_label: serviceLabel,
        timeline: String(body?.request?.timeline || "").trim() || null,
        message,
        budget: Number(body?.request?.budget || 0) || null,
        invoice_total: total,
        fraud_risk: fraudRisk,
        created_at_client: createdAt,
        valid_until_client: validUntil,
      })
      .select("id, verification_code, created_at")
      .single();

    if (error) throw error;

    return new Response(
      JSON.stringify({
        ok: true,
        invoiceId: data.id,
        verificationCode: data.verification_code,
        storedAt: data.created_at,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: String((error as Error)?.message || "Unexpected failure"),
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

type InvoicePayload = {
  client?: {
    name?: string;
    phone?: string;
    email?: string;
    location?: string;
  };
  request?: {
    serviceKey?: string;
    serviceLabel?: string;
    timeline?: string;
    message?: string;
    budget?: number;
  };
  invoice?: {
    verificationCode?: string;
    total?: number;
    fraudRisk?: string;
    createdAt?: string;
    validUntil?: string;
  };
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const invoiceApiToken = Deno.env.get("INVOICE_API_TOKEN") || "";

if (!supabaseUrl || !supabaseServiceRole) {
  throw new Error("Missing Supabase envs: SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY");
}

const admin = createClient(supabaseUrl, supabaseServiceRole, {
  auth: { persistSession: false },
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    if (invoiceApiToken) {
      const authHeader = req.headers.get("authorization") || "";
      const provided = authHeader.replace(/^Bearer\s+/i, "").trim();
      if (!provided || provided !== invoiceApiToken) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const body = (await req.json()) as InvoicePayload;
    const clientName = String(body?.client?.name || "").trim();
    const phone = String(body?.client?.phone || "").trim();
    const serviceLabel = String(body?.request?.serviceLabel || "").trim();
    const message = String(body?.request?.message || "").trim();
    const verificationCode = String(body?.invoice?.verificationCode || "").trim();
    const total = Number(body?.invoice?.total || 0);
    const fraudRisk = String(body?.invoice?.fraudRisk || "Low").trim();
    const createdAt = String(body?.invoice?.createdAt || new Date().toISOString()).trim();
    const validUntil = String(body?.invoice?.validUntil || "").trim() || null;

    if (!clientName || !phone || !serviceLabel || !message || !verificationCode || total <= 0) {
      return new Response(JSON.stringify({ error: "Invalid invoice payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data, error } = await admin
      .from("client_invoices")
      .insert({
        verification_code: verificationCode,
        client_name: clientName,
        client_phone: phone,
        client_email: String(body?.client?.email || "").trim() || null,
        client_location: String(body?.client?.location || "").trim() || null,
        service_key: String(body?.request?.serviceKey || "").trim() || null,
        service_label: serviceLabel,
        timeline: String(body?.request?.timeline || "").trim() || null,
        message,
        budget: Number(body?.request?.budget || 0) || null,
        invoice_total: total,
        fraud_risk: fraudRisk,
        created_at_client: createdAt,
        valid_until_client: validUntil,
      })
      .select("id, verification_code, created_at")
      .single();

    if (error) throw error;

    return new Response(
      JSON.stringify({
        ok: true,
        invoiceId: data.id,
        verificationCode: data.verification_code,
        storedAt: data.created_at,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: String((error as Error)?.message || "Unexpected failure"),
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
