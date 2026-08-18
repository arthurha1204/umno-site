import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  whatsapp: string;
  email: string;
  company?: string;
  message?: string;
  services?: string[];
};

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  if (!body.name || !body.whatsapp || !body.email) {
    return NextResponse.json(
      { error: "Nome, WhatsApp e e-mail são obrigatórios" },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn(
      "LEAD_WEBHOOK_URL não configurada — lead recebido mas não repassado:",
      body
    );
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        source: "um-no-site",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!webhookRes.ok) {
      throw new Error(`Webhook respondeu ${webhookRes.status}`);
    }

    return NextResponse.json({ ok: true, forwarded: true });
  } catch (error) {
    console.error("Falha ao repassar lead para o webhook:", error);
    return NextResponse.json(
      { error: "Não foi possível repassar o lead" },
      { status: 502 }
    );
  }
}
