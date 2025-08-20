import { z } from 'zod'
import { emailService } from '../services/email.service.js'
import { sanitizeInput, clampLength } from '../utils/sanitize.js'
import type { Request, Response } from 'express'

const ContactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  message: z.string().trim().min(10),
})

export const contactController = {
  async handle(req: Request, res: Response) {
    const parsed = ContactSchema.safeParse(req.body)
    if (!parsed.success) {
      const details: Record<string, string> = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as string
        if (!details[key]) details[key] = issue.message
      }
      return res.status(400).json({ success: false, error: 'Invalid input', details })
    }

    try {
      const name = clampLength(sanitizeInput(parsed.data.name), 100)
      const email = clampLength(sanitizeInput(parsed.data.email), 200)
      const message = clampLength(sanitizeInput(parsed.data.message), 2000)
      await emailService.sendOwnerAndCustomer({ name, email, message })
      return res.status(200).json({ success: true })
    } catch (e) {
      return res.status(500).json({ success: false, error: 'Email failed' })
    }
  },
}
