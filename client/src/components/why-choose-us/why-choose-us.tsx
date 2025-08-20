import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Grid } from '@/components/ui/grid'

const items = [
  { title: 'Results-focused', desc: 'We build to drive leads and conversions.' },
  { title: 'Fast delivery', desc: 'Tight feedback loops and on-time launches.' },
  { title: 'SEO friendly', desc: 'Technical best practices baked in from day one.' },
  { title: 'Accessible', desc: 'WCAG-minded design and development.' },
]

export function WhyChooseUs() {
  return (
    <Section padded>
      <Container>
        <h2 className="text-ink-dark text-2xl font-semibold">Why choose us</h2>
        <p className="text-ink-medium mt-2">Practical web design for small businesses.</p>
        <Grid className="mt-8" cols={{ base: 1, md: 2, lg: 4 }}>
          {items.map((i) => (
            <div key={i.title} className="border-sand-dark/40 rounded-lg border bg-white p-6">
              <div className="text-ink-dark text-lg font-medium">{i.title}</div>
              <div className="text-ink-medium mt-2">{i.desc}</div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
