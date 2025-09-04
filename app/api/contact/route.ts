import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // Calls Google Apps Script Web App
    const res = await fetch(process.env.CONTACT_FORM_URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    const json = await res.json()
    return NextResponse.json(json)
  } catch (err) {
    console.error("Error in /api/contact:", err)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }

}

console.log("Apps Script URL:", process.env.CONTACT_FORM_URL)
