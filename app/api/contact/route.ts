
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { query, email } = await req.json();

    if (!query || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const n8nRes = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-secret": process.env.N8N_WEBHOOK_SECRET!,
      },
      body: JSON.stringify({ query, email }),
    });

    if (!n8nRes.ok) {
      return NextResponse.json({ error: "n8n failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}