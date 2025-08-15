'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'ok'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-xl px-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <form className="mt-8 space-y-4" onSubmit={onSubmit}>
          <input name="name" required placeholder="Your name" className="w-full rounded-lg border p-3" />
          <input name="email" required type="email" placeholder="Your email" className="w-full rounded-lg border p-3" />
          <textarea name="message" required placeholder="How can we help?" className="h-32 w-full rounded-lg border p-3" />
          <button className="rounded-full bg-brand-700 px-6 py-3 font-medium text-white hover:bg-brand-800">
            Send
          </button>
        </form>
        {status === 'ok' && <p className="mt-4 text-green-700">Thanks! Please check your email.</p>}
        {status === 'error' && <p className="mt-4 text-red-700">Sorry, something went wrong.</p>}
      </div>
    </section>
  )
}
