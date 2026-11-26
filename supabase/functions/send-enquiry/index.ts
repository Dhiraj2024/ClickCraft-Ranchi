// Deno edge function: saves the enquiry to the `enquiries` table and
// emails the details to the owner via Resend (requires RESEND_API_KEY
// and ENQUIRY_TO_EMAIL secrets, both optional at runtime).

import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
}

const OWNER_EMAIL = Deno.env.get('ENQUIRY_TO_EMAIL') ?? 'skp2242008@gmail.com'

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders })
  }

  try {
    const body = await req.json()
    const { name, email, project_type, features, description, budget } = body ?? {}

    if (
      typeof name !== 'string' || !name.trim() ||
      typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof project_type !== 'string' || !project_type.trim() ||
      typeof features !== 'string' || !features.trim() ||
      typeof budget !== 'string' || !budget.trim()
    ) {
      return new Response(
        JSON.stringify({ error: 'Name, email, project type, features and budget are required.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    const enquiry = {
      name: name.trim().slice(0, 120),
      email: email.trim().slice(0, 200),
      project_type: project_type.trim().slice(0, 120),
      features: features.trim().slice(0, 3000),
      description: (description ?? '').toString().trim().slice(0, 3000),
      budget: budget.trim().slice(0, 120),
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    )

    const { error: insertError } = await supabase
      .from('enquiries')
      .insert(enquiry)
    if (insertError) throw insertError

    let emailSent = false
    const resendKey = Deno.env.get('RESEND_API_KEY')
    if (resendKey) {
      const rows = [
        ['Name', enquiry.name],
        ['Email', enquiry.email],
        ['Project Type', enquiry.project_type],
        ['Features', enquiry.features],
        ['Description', enquiry.description || '-'],
        ['Budget', enquiry.budget],
      ]
      const html = `
        <h2>New Website Enquiry</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          ${rows.map(([k, v]) => `<tr><td><strong>${escapeHtml(k)}:</strong></td><td>${escapeHtml(v)}</td></tr>`).join('')}
        </table>`
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Website Enquiry <onboarding@resend.dev>',
          to: [OWNER_EMAIL],
          reply_to: enquiry.email,
          subject: `New Website Enquiry from ${enquiry.name} (${enquiry.budget})`,
          html,
        }),
      })
      emailSent = res.ok
    }

    return new Response(JSON.stringify({ ok: true, emailSent }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err?.message ?? 'Something went wrong.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  }
})
