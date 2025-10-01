import { ContactHero } from '@/components/contact/contact-hero'
import { ContactInfoSection } from '@/components/contact/contact-info-section'
import { EnhancedContactForm } from '@/components/contact/enhanced-contact-form'
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
      <div className="relative overflow-hidden py-8 lg:py-16">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Contact Information */}
          <div className="w-full max-w-[600px] px-4 lg:flex-1 lg:min-w-0 lg:max-w-none lg:px-0 lg:ml-4">
            <ContactInfoSection />
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-[600px] px-4 lg:flex-shrink-0 lg:px-0 lg:pr-12">
            <EnhancedContactForm />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}
