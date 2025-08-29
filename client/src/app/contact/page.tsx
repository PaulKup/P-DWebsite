import { ContactHero } from '@/components/contact/contact-hero'
import { ContactSection } from '@/components/contact/contact-section'
import { FAQSection } from '@/components/contact/faq-section'

export default function ContactPage() {
  return (
    <div className="relative w-full bg-[#f5efe8]">
      {/* Skip Links */}
      <div className="sr-only focus-within:not-sr-only">
        <a
          href="#contact-info"
          className="bg-brand-primary focus:ring-brand-primary absolute left-4 top-4 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skip to contact information
        </a>
        <a
          href="#contact-form"
          className="bg-brand-primary focus:ring-brand-primary absolute left-40 top-4 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skip to contact form
        </a>
        <a
          href="#faq"
          className="bg-brand-primary focus:ring-brand-primary absolute left-72 top-4 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skip to FAQ
        </a>
      </div>

      {/* Hero Section */}
      <ContactHero />

      {/* Contact Information & Form Section */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}
