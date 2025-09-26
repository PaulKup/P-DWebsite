import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { loadServices } from '@/lib/services'

export async function generateStaticParams() {
  const services = await loadServices()
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const services = await loadServices()
  const svc = services.find((s) => s.slug === slug)
  if (!svc) return { title: 'Service — P&D Web Development' }
  return {
    title: `${svc.title} — P&D Web Development`,
    description: svc.summary,
    openGraph: { title: `${svc.title} — P&D Web Development`, description: svc.summary },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const services = await loadServices()
  const svc = services.find((s) => s.slug === slug)
  if (!svc) return notFound()

  return (
    <Section padded>
      <Container>
        <h1 className="text-ink-dark text-3xl font-bold">{svc.title}</h1>
        <p className="text-ink-medium mt-4">{svc.summary}</p>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: svc.title,
              description: svc.summary,
              provider: { '@type': 'Organization', name: 'P&D Web Development' },
            }),
          }}
        />
      </Container>
    </Section>
  )
}
