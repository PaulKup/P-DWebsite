import fs from 'fs/promises'
import path from 'path'

export interface ServiceItem {
  slug: string
  title: string
  summary: string
}

export async function loadServices(): Promise<ServiceItem[]> {
  try {
    const filePath = path.join(process.cwd(), 'docs', 'copy', 'services.md')
    const raw = await fs.readFile(filePath, 'utf8')
    return parseServices(raw)
  } catch {
    return defaultServices
  }
}

function parseServices(md: string): ServiceItem[] {
  // Very simple parser: sections starting with ## Title and next line as summary
  const lines = md.split(/\r?\n/)
  const items: ServiceItem[] = []
  for (let i = 0; i < lines.length; i++) {
    const m = /^##\s+(.*)$/.exec(lines[i])
    if (m) {
      const title = m[1].trim()
      const summary = (lines[i + 1] ?? '').trim()
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      items.push({ slug, title, summary })
    }
  }
  return items.length ? items : defaultServices
}

const defaultServices: ServiceItem[] = [
  { slug: 'web-design', title: 'Web Design', summary: 'Clean, modern UI tailored to your brand.' },
  {
    slug: 'web-development',
    title: 'Web Development',
    summary: 'Reliable, maintainable Next.js builds.',
  },
  { slug: 'seo', title: 'SEO & Performance', summary: 'Technical SEO and speed optimizations.' },
]
