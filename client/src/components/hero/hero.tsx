import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button, buttonVariants } from '@/components/ui/button'
import { loadHomeCopy } from '@/lib/copy'

export async function Hero() {
  const copy = await loadHomeCopy()
  return (
    <Section padded bg="light">
      <Container className="grid items-center gap-8 py-12 md:grid-cols-2">
        <div>
          <h1 className="text-ink-dark text-4xl font-light tracking-tight md:text-5xl">
            {copy.hero?.headline ?? 'Clean, functional websites that convert'}
          </h1>
          <p className="brand-accent-deep font-bold">Lorem ipsum dolor sit amet</p>
          <p className="text-ink-medium mt-4">
            {copy.hero?.body ??
              'We design and build fast, accessible sites that help small businesses grow.'}
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/contact" className={buttonVariants({ variant: 'default', size: 'md' })}>
              Start a project
            </Link>
            <Link href="/services" className={buttonVariants({ variant: 'secondary', size: 'md' })}>
              Our services
            </Link>
          </div>
        </div>
        <div className="aspect-video w-full">
          {/* Replace placeholder with optimized image when asset is available */}
          <div className="bg-sand-medium/50 h-full w-full rounded-lg" aria-hidden />
        </div>
      </Container>
    </Section>
  )
}
