'use client'
import { useState } from 'react'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  company: z.string().optional(),
  website: z.string().optional(),
  message: z.string().min(10, 'Tell us a bit more'),
  newsletter: z.boolean().optional(),
})

export function EnhancedContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'ok' | 'error' | 'loading'>('idle')
  const [apiMessage, setApiMessage] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrors({})

    const fd = new FormData(e.currentTarget)
    const raw = Object.fromEntries(fd.entries())

    // Convert checkbox to boolean
    const formData = {
      ...raw,
      newsletter: fd.has('newsletter'),
    }

    const parsed = ContactSchema.safeParse(formData)
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
    <section id="contact-form" className="relative mx-auto w-full max-w-[547px]">
      {/* Form Container */}
      <div className="ml-0 mt-0 rounded-[30px] border-[3px] border-[#984d37] bg-[#f5efe8] p-6 lg:ml-4 lg:mt-6 lg:p-16">
        <form onSubmit={onSubmit} noValidate className="space-y-8" aria-label="Contact form">
          {/* Form Title */}
          <h3 className="mb-6 font-['Open_Sans'] text-[28px] font-light leading-tight text-[#2d2a26] sm:text-[36px] lg:mb-12 lg:text-[50px] lg:leading-[65px]">
            Send us a Message
          </h3>

          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-['Open_Sans'] text-[18px] font-light leading-tight text-[#2d2a26] sm:text-[24px] lg:mb-4 lg:text-[30px] lg:leading-[65px]"
            >
              Name*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="h-12 w-full border border-black bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#984d37] lg:h-14"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-700">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-['Open_Sans'] text-[18px] font-light leading-tight text-[#2d2a26] sm:text-[24px] lg:mb-4 lg:text-[30px] lg:leading-[65px]"
            >
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="h-12 w-full border border-black bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#984d37] lg:h-14"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-700">
                {errors.email}
              </p>
            )}
          </div>

          {/* Company Name Field */}
          <div>
            <label
              htmlFor="company"
              className="mb-2 block font-['Open_Sans'] text-[18px] font-light leading-tight text-[#2d2a26] sm:text-[24px] lg:mb-4 lg:text-[30px] lg:leading-[65px]"
            >
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="h-12 w-full border border-black bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#984d37] lg:h-14"
            />
          </div>

          {/* Current Website Field */}
          <div>
            <label
              htmlFor="website"
              className="mb-2 block font-['Open_Sans'] text-[18px] font-light leading-tight text-[#2d2a26] sm:text-[24px] lg:mb-4 lg:text-[30px] lg:leading-[65px]"
            >
              Current Website
            </label>
            <input
              id="website"
              name="website"
              type="url"
              className="h-12 w-full border border-black bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#984d37] lg:h-14"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-['Open_Sans'] text-[18px] font-light leading-tight text-[#2d2a26] sm:text-[24px] lg:mb-4 lg:text-[30px] lg:leading-[65px]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us a little about your business, goals, and needs..."
              className="w-full resize-none border border-black bg-white px-3 py-2 font-['Open_Sans'] text-[18px] font-light leading-[25px] text-[rgba(45,42,38,0.75)] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#984d37] lg:text-[25px] lg:leading-[35px]"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-sm text-red-700">
                {errors.message}
              </p>
            )}
          </div>

          {/* Newsletter Checkbox */}
          <div className="flex items-start gap-4">
            <input
              id="newsletter"
              name="newsletter"
              type="checkbox"
              className="mt-2 h-[34px] w-9 border border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#984d37]"
            />
            <label
              htmlFor="newsletter"
              className="max-w-[390px] cursor-pointer font-['Open_Sans'] text-[16px] font-light leading-[20px] text-[#2d2a26] lg:text-[20px]"
            >
              Subscribe to our newsletter for web design tips and updates
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-[40px] border-[3px] border-[#984d37] bg-[#f5efe8] px-8 py-3 shadow-[5px_5px_8px_0px_#2d2a26] transition-shadow duration-200 hover:shadow-[3px_3px_6px_0px_#2d2a26] disabled:opacity-50"
            >
              <span className="font-['Roboto_Mono'] text-[33px] font-normal text-[#984d37]">
                {status === 'loading' ? 'Sending...' : 'Contact Us'}
              </span>
            </button>
          </div>

          {/* Status Message */}
          {(status === 'ok' || status === 'error') && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-4 text-center ${status === 'ok' ? 'text-green-700' : 'text-red-700'}`}
            >
              {apiMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
