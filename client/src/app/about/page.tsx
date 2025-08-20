import type { Metadata } from 'next'
import { AboutContent } from '@/components/about/about-content'
import { TeamSection } from '@/components/about/team-section'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'

export const metadata: Metadata = {
  title: 'About Us — P&D Web Development',
  description: 'We build clean, functional websites for small businesses.',
  openGraph: {
    title: 'About Us — P&D Web Development',
    description: 'We build clean, functional websites for small businesses.',
  },
}

export default function AboutPage() {
  return (
    <>
      <Section padded>
        <Container>
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-ink-700 mt-4">
            We’re a small studio focused on practical, effective web design and development.
          </p>
        </Container>
      </Section>
      <AboutContent />
      <TeamSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'P&D Web Development',
            url: 'https://example.com',
            sameAs: ['https://www.linkedin.com'],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                email: 'pdwebdev.studio@gmail.com',
                contactType: 'customer service',
              },
            ],
          }),
        }}
      />
    </>
  )
}
