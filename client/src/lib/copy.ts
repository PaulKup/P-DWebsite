import fs from 'fs/promises'
import path from 'path'

export interface HomeCopy {
  hero?: { headline?: string; body?: string; cta?: string }
}

export async function loadHomeCopy(): Promise<HomeCopy> {
  try {
    const filePath = path.join(process.cwd(), 'docs', 'copy', 'home.md')
    const raw = await fs.readFile(filePath, 'utf8')
    return parseHome(raw)
  } catch {
    return {}
  }
}

function parseHome(md: string): HomeCopy {
  const hero: HomeCopy['hero'] = {}
  const headlineMatch = md.match(/\*\*Headline:\s*(.*?)\*\*/)
  if (headlineMatch) hero.headline = headlineMatch[1].trim()

  const bodyMatch = md.match(/\*\*Body:\*\*\s*(.*)/)
  if (bodyMatch) hero.body = bodyMatch[1].trim()

  const ctaMatch = md.match(/\*\*CTA Button\*\*:?\s*(.*)/)
  if (ctaMatch) hero.cta = ctaMatch[1].trim()

  return { hero }
}
