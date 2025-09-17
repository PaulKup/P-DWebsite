import { z } from 'zod'
import { emailService } from '../services/email.service.js'
import { sanitizeInput, clampLength } from '../utils/sanitize.js'
import type { Request, Response } from 'express'

/**
 * Zod validation schema for contact form submissions
 * Validates and sanitizes incoming form data before processing
 */
const ContactSchema = z.object({
  name: z.string().trim().min(2), // Required: minimum 2 characters after trimming
  email: z.string().trim().email(), // Required: valid email format after trimming
  company: z.string().trim().optional(), // Optional: company name
  website: z.string().trim().optional(), // Optional: current website URL
  message: z.string().trim().min(10), // Required: minimum 10 characters after trimming
  newsletter: z.boolean().optional(), // Optional: newsletter subscription preference
})

/**
 * Contact form controller
 * Handles POST requests to the contact endpoint from the website's contact form
 */
export const contactController = {
  /**
   * Processes contact form submissions
   *
   * Flow:
   * 1. Validates incoming request data against schema
   * 2. Sanitizes and clamps input lengths for security
   * 3. Sends emails to both business owner and customer
   * 4. Returns appropriate success/error responses
   *
   * @param req - Express request object containing form data in body
   * @param res - Express response object for sending JSON responses
   */
  async handle(req: Request, res: Response) {
    // Validate request body against our contact schema
    const parsed = ContactSchema.safeParse(req.body)

    // If validation fails, return detailed error information
    if (!parsed.success) {
      // Build field-specific error details for frontend display
      const details: Record<string, string> = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as string
        // Only store the first error per field to avoid duplicates
        if (!details[key]) details[key] = issue.message
      }
      return res.status(400).json({ success: false, error: 'Invalid input', details })
    }

    try {
      // Sanitize and clamp input lengths to prevent XSS and data overflow
      const name = clampLength(sanitizeInput(parsed.data.name), 100) // Max 100 chars
      const email = clampLength(sanitizeInput(parsed.data.email), 200) // Max 200 chars
      const company = parsed.data.company
        ? clampLength(sanitizeInput(parsed.data.company), 100)
        : undefined // Max 100 chars
      const website = parsed.data.website
        ? clampLength(sanitizeInput(parsed.data.website), 200)
        : undefined // Max 200 chars
      const message = clampLength(sanitizeInput(parsed.data.message), 2000) // Max 2000 chars
      const newsletter = parsed.data.newsletter ?? false // Default to false if not provided

      // Send notification emails to both business owner and customer
      await emailService.sendOwnerAndCustomer({
        name,
        email,
        company,
        website,
        message,
        newsletter,
      })

      // Return success response
      return res.status(200).json({ success: true })
    } catch (e) {
      // Handle email service failures gracefully
      return res.status(500).json({ success: false, error: 'Email failed' })
    }
  },
}
