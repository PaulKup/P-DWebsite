import { z } from 'zod'
import { emailService } from '../services/email.service.js'
import type { Request, Response } from 'express'

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
})

export const contactController = {
  async handle(req: Request, res: Response) {
    const parsed = ContactSchema.safeParse(req.body)
    if (!parsed.success) return res.status(400).json({ success: false, error: 'Invalid input' })

    try {
      const { name, email, message } = parsed.data
      await emailService.sendOwnerAndCustomer({ name, email, message })
      return res.json({ success: true, data: { ok: true } })
    } catch (e) {
      return res.status(500).json({ success: false, error: 'Email failed' })
    }
  }
}
