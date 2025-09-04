import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    if (!process.env.CONTACT_FORM_URL) {
      console.error("CONTACT_FORM_URL is missing")
      return NextResponse.json({ error: "Server not configured" }, { status: 500 })
    }

    const res = await fetch(process.env.CONTACT_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      console.error("Apps Script returned error:", await res.text())
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
    }

    const json = await res.json()
    return NextResponse.json(json)
  } catch (err) {
    console.error("API error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
