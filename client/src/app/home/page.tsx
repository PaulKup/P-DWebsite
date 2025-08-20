import type { Metadata } from 'next'
import { Hero } from '@/components/hero/hero'
import { WhyChooseUs } from '@/components/why-choose-us/why-choose-us'
import { FeaturesGrid } from '@/components/features/features-grid'
import { PrimaryCta } from '@/components/cta/primary-cta'

export const metadata: Metadata = {
  title: 'P&D Web Development — Clean, functional websites that convert',
  description: 'We design and build fast, accessible sites that help small businesses grow.',
  openGraph: {
    title: 'P&D Web Development',
    description: 'Clean, functional websites that convert',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'P&D Web Development',
            url: 'https://example.com',
          }),
        }}
      />
      <Hero />
      <WhyChooseUs />
      <FeaturesGrid />
      <PrimaryCta />
    </>
  )
}
