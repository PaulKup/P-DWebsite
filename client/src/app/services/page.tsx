import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ServicesList } from '@/components/services/services-list'
import { ServiceCTA } from '@/components/services/service-cta'

export const metadata: Metadata = {
  title: 'Services — P&D Web Development',
  description: 'Web design, development, and technical SEO for small businesses.',
  openGraph: {
    title: 'Services — P&D Web Development',
    description: 'Web design, development, and technical SEO for small businesses.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <Section padded>
        <Container>
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-ink-700 mt-4">
            We offer practical, high-quality web design and development for small businesses.
          </p>
          <div className="mt-8">
            {/* @ts-expect-error Async Server Component */}
            <ServicesList />
          </div>
        </Container>
      </Section>
      <ServiceCTA />
    </>
  )
}
