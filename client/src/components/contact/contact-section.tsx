import { ContactInfoSection } from './contact-info-section'
import { EnhancedContactForm } from './enhanced-contact-form'

export function ContactSection() {
  return (
    <div className="relative overflow-hidden py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Contact Information */}
        <div className="flex-1 px-4 lg:px-0">
          <ContactInfoSection />
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-shrink-0 px-4 lg:px-0">
          <EnhancedContactForm />
        </div>
      </div>
    </div>
  )
}
