import Link from 'next/link'
import { Grid } from '@/components/ui/grid'
import { loadServices } from '@/lib/services'

export async function ServicesList() {
  const services = await loadServices()
  return (
    <Grid cols={{ base: 1, md: 2, lg: 3 }}>
      {services.map((s) => (
        <article key={s.slug} className="border-sand-dark/40 rounded-lg border bg-white p-6">
          <h3 className="text-ink-dark text-lg font-semibold">{s.title}</h3>
          <p className="text-ink-medium mt-2">{s.summary}</p>
          <div className="mt-4">
            <Link className="text-brand-700 underline" href={`/services/${s.slug}`}>
              Learn more
            </Link>
          </div>
        </article>
      ))}
    </Grid>
  )
}
