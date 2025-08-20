import { ContactInfo } from '@/components/contact/contact-info'
import { ContactForm } from '@/components/contact/contact-form'

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}
