import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT ?? 587),
  secure: false,
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
})

export interface EmailPayload { name: string; email: string; message: string }

export const emailService = {
  async sendOwnerAndCustomer({ name, email, message }: EmailPayload) {
    const ownerTo = process.env.MAIL_TO
    if (!ownerTo) throw new Error('MAIL_TO missing')

    await transporter.sendMail({
      from: process.env.MAIL_FROM ?? process.env.MAIL_USER,
      to: ownerTo,
      subject: `New inquiry from ${name}`,
      text: `${name} <${email}>\n\n${message}`
    })

    await transporter.sendMail({
      from: process.env.MAIL_FROM ?? process.env.MAIL_USER,
      to: email,
      subject: 'Thanks for contacting P&D Web Development',
      text: `Hi ${name},\n\nWe received your message and will get back to you shortly.\n\n— P&D`
    })
  }
}
