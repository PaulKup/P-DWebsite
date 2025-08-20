import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'

export function AboutContent() {
  return (
    <Section padded>
      <Container className="prose max-w-none">
        <h2>Our Story</h2>
        <p>
          P&amp;D Web Development helps small businesses build clean, functional websites that
          convert visitors into customers. We focus on practical outcomes, reliable delivery, and
          clear communication.
        </p>
      </Container>
    </Section>
  )
}
