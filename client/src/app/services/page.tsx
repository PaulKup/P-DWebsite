import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
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
      {/* Header */}
      <Section padded>
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="text-ink-dark text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="text-ink-medium mt-3 max-w-2xl">
              Practical, high-quality web design and development tailored for small businesses.
            </p>
          </div>
          <Button asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
        </Container>
      </Section>

      {/* Three service cards */}
      <Section padded bg="light">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="border-sand-light bg-sand-surface rounded-lg border p-6">
              <h3 className="text-ink-dark text-xl font-semibold">Web Design</h3>
              <p className="text-ink-medium mt-2">
                Clean, modern UI tailored to your brand and audience.
              </p>
            </article>
            <article className="border-sand-light bg-sand-surface rounded-lg border p-6">
              <h3 className="text-ink-dark text-xl font-semibold">Web Development</h3>
              <p className="text-ink-medium mt-2">
                Reliable, maintainable Next.js builds with best practices.
              </p>
            </article>
            <article className="border-sand-light bg-sand-surface rounded-lg border p-6">
              <h3 className="text-ink-dark text-xl font-semibold">SEO & Performance</h3>
              <p className="text-ink-medium mt-2">
                Technical SEO and speed optimizations to grow organic traffic.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      {/* Packages (no e-commerce) */}
      <Section padded>
        <Container>
          <h2 className="text-ink-dark text-2xl font-semibold">Packages</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="border-sand-light bg-sand-surface rounded-lg border p-6">
              <h3 className="text-ink-dark text-xl font-semibold">Starter</h3>
              <div className="text-ink-dark mt-2 text-3xl font-bold">$800</div>
              <ul className="text-ink-medium mt-4 space-y-1 text-sm">
                <li>Up to 5 pages</li>
                <li>Modern, responsive design</li>
                <li>Contact form</li>
                <li>Basic SEO setup</li>
              </ul>
              <Button asChild className="mt-5 w-full">
                <Link href="/contact">Request quote</Link>
              </Button>
            </article>
            <article className="border-sand-light bg-sand-surface rounded-lg border p-6">
              <h3 className="text-ink-dark text-xl font-semibold">Growth</h3>
              <div className="text-ink-dark mt-2 text-3xl font-bold">$1200</div>
              <ul className="text-ink-medium mt-4 space-y-1 text-sm">
                <li>Up to 10 pages</li>
                <li>Online ordering or reservations</li>
                <li>Common integrations</li>
                <li>3 revisions</li>
              </ul>
              <Button asChild className="mt-5 w-full">
                <Link href="/contact">Request quote</Link>
              </Button>
            </article>
            <article className="border-sand-light bg-sand-surface rounded-lg border p-6">
              <h3 className="text-ink-dark text-xl font-semibold">Custom</h3>
              <div className="text-ink-dark mt-2 text-3xl font-bold">Custom</div>
              <ul className="text-ink-medium mt-4 space-y-1 text-sm">
                <li>Unlimited pages</li>
                <li>Advanced integrations</li>
                <li>Priority support</li>
                <li>Scope and pricing vary by project</li>
              </ul>
              <Button asChild className="mt-5 w-full">
                <Link href="/contact">Request quote</Link>
              </Button>
            </article>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <ServiceCTA />
    </>
  )
}
