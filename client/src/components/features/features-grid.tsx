import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Grid } from '@/components/ui/grid'

const features = [
  { title: 'Design', desc: 'Deliberate, modern UI aligned to your brand.' },
  { title: 'Development', desc: 'Reliable, maintainable React/Next.js.' },
  { title: 'Performance', desc: 'Fast by default with smart optimizations.' },
  { title: 'Support', desc: 'Clear communication and continued care.' },
]

export function FeaturesGrid() {
  return (
    <Section padded>
      <Container>
        <h2 className="text-ink-dark text-2xl font-semibold">What we do</h2>
        <Grid className="mt-8" cols={{ base: 1, md: 2 }}>
          {features.map((f) => (
            <div key={f.title} className="bg-sand-light flex items-start gap-4 rounded-lg p-6">
              <div className="bg-brand-primary/15 h-10 w-10 rounded-full" />
              <div>
                <div className="text-ink-dark font-medium">{f.title}</div>
                <div className="text-ink-medium">{f.desc}</div>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
