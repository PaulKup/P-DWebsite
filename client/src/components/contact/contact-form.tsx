'use client'
import { useState } from 'react'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const ContactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Tell us a bit more'),
})

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'ok' | 'error' | 'loading'>('idle')
  const [apiMessage, setApiMessage] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrors({})
    const fd = new FormData(e.currentTarget)
    const raw = Object.fromEntries(fd.entries())
    const parsed = ContactSchema.safeParse(raw)
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as string
        if (!fieldErrors[key]) fieldErrors[key] = issue.message
      }
      setErrors(fieldErrors)
      setStatus('idle')
      return
    }

    try {
      const res = await fetch(`/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })
      const data = await res.json().catch(() => undefined)
      if (res.ok) {
        setStatus('ok')
        setApiMessage('Thanks! Please check your email.')
        ;(e.currentTarget as HTMLFormElement).reset()
      } else {
        setStatus('error')
        setApiMessage(
          typeof data?.error === 'string'
            ? data.error
            : 'Submission failed. Please try again later.'
        )
      }
    } catch {
      setStatus('error')
      setApiMessage('Network error. Please try again.')
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate aria-describedby="form-status">
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          required
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-700">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          required
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-700">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help?"
          className="h-32"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>
      <Button disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send'}</Button>
      <p
        id="form-status"
        role="status"
        aria-live="polite"
        className={
          status === 'ok'
            ? 'text-green-700'
            : status === 'error'
              ? 'text-red-700'
              : 'text-ink-medium'
        }
      >
        {status === 'ok' || status === 'error' ? apiMessage : ''}
      </p>
    </form>
  )
}
