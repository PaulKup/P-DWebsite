import Link from 'next/link'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export function ServiceCTA() {
  return (
    <Section padded bg="light">
      <Container className="flex items-center justify-between gap-4 rounded-lg bg-white p-6 shadow-sm">
        <div>
          <h2 className="text-ink-dark text-xl font-semibold">Have a project in mind?</h2>
          <p className="text-ink-medium">
            Let’s talk about timelines and a plan that fits your goals.
          </p>
        </div>
        <Button asChild>
          <Link href="/contact">Contact us</Link>
        </Button>
      </Container>
    </Section>
  )
}
