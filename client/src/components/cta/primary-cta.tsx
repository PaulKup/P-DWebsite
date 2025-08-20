import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'

export function PrimaryCta() {
  return (
    <Section padded bg="dark">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold">Ready to elevate your web presence?</h2>
        <p className="max-w-2xl text-white/80">
          Tell us about your project. We’ll recommend a practical plan and timeline that fits your
          goals.
        </p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </Container>
    </Section>
  )
}
