import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Grid } from '@/components/ui/grid'

const team = [
  {
    name: 'Paul',
    role: 'Developer',
    bio: 'Full-stack dev focused on clean UX and reliable delivery.',
  },
  { name: 'D', role: 'Designer', bio: 'Design systems and accessible interfaces that convert.' },
]

export function TeamSection() {
  return (
    <Section padded bg="light">
      <Container>
        <h2 className="text-ink-dark text-2xl font-semibold">Our Team</h2>
        <Grid className="mt-6" cols={{ base: 1, md: 2 }}>
          {team.map((m) => (
            <article key={m.name} className="border-sand-dark/40 rounded-lg border bg-white p-6">
              <h3 className="text-ink-dark text-lg font-semibold">{m.name}</h3>
              <p className="text-ink-medium">{m.role}</p>
              <p className="text-ink-medium mt-2">{m.bio}</p>
            </article>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
