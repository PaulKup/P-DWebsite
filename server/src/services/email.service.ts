import nodemailer from 'nodemailer'

// Looking to send emails in production? Check out our Email API/SMTP product!
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
})

export interface EmailPayload {
  name: string
  email: string
  company?: string
  website?: string
  message: string
  newsletter?: boolean
}

export const emailService = {
  async sendOwnerAndCustomer({ name, email, company, website, message, newsletter }: EmailPayload) {
    const ownerTo = process.env.MAIL_USER
    if (!ownerTo) throw new Error('MAIL_TO missing')

    // Build additional info for owner email
    const additionalInfo = []
    if (company) additionalInfo.push(`Company: ${company}`)
    if (website) additionalInfo.push(`Website: ${website}`)
    if (newsletter !== undefined) additionalInfo.push(`Newsletter: ${newsletter ? 'Yes' : 'No'}`)

    const additionalText = additionalInfo.length > 0 ? `\n\n${additionalInfo.join('\n')}` : ''
    const additionalHtml =
      additionalInfo.length > 0
        ? `<br><br>${additionalInfo.map((info) => `<p><em>${escapeHtml(info)}</em></p>`).join('')}`
        : ''

    // Send notification to business owner with all details
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: ownerTo,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
      text: `${name} <${email}>${additionalText}\n\n${message}`,
      html: `<p><strong>${escapeHtml(name)}</strong> &lt;${email}&gt;</p>${additionalHtml}<br><p>${escapeHtml(message)}</p>`,
    })

    // Send confirmation to customer
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Thanks for contacting P&D Web Development',
      text: `Hi ${name},\n\nWe received your message and will get back to you shortly.\n\n— P&D Web Development`,
      html: `<p>Hi ${escapeHtml(name)},</p><p>We received your message and will get back to you shortly.</p><p>— P&amp;D Web Development</p>`,
    })
  },
}

function escapeHtml(input?: string) {
  return (input ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
