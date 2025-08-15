import { Hero } from '@/components/hero/hero'
import { WhyChooseUs } from '@/components/why-choose-us/why-choose-us'
import { FeaturesGrid } from '@/components/features/features-grid'
import { PrimaryCta } from '@/components/cta/primary-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturesGrid />
      <PrimaryCta />
    </>
  )
}
