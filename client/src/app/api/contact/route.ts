import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const baseUrl = process.env.NEXT_PUBLIC_API_URL

    if (!baseUrl) {
      return NextResponse.json({ success: true, data: { ok: true, note: 'dev stub' } })
    }

    const res = await fetch(`${baseUrl}/contact`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
    const body = await res.json().catch(() => undefined)
    return NextResponse.json(body ?? { success: res.ok }, { status: res.status })
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Failed to submit' }, { status: 500 })
  }
}
