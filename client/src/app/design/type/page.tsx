import fs from 'fs'
import path from 'path'

type TypographyTokens = {
  fontFamily: { sans: string }
  sizes: Record<string, { fontSize: string; lineHeight: string }>
}

function getTypography(): TypographyTokens {
  const filePath = path.join(process.cwd(), 'design', 'tokens', 'typography.json')
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw)
}

export const dynamic = 'force-static'

export default function TypographyPage() {
  const type = getTypography()
  const entries = Object.entries(type.sizes)

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-6">
      <h1 className="text-2xl font-bold">Typography Specimen</h1>
      <section className="space-y-2">
        <div className="text-ink-dark/70 text-sm">Font family</div>
        <code className="bg-sand-surface rounded px-2 py-1 text-sm">{type.fontFamily.sans}</code>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="grid grid-cols-1 gap-4">
          {entries.map(([token, { fontSize, lineHeight }]) => (
            <div key={token} className="border-sand-light bg-sand-surface rounded-lg border p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="font-medium">{token}</div>
                <div className="text-ink-dark/70 text-sm">
                  {fontSize} / {lineHeight}
                </div>
              </div>
              <p
                className="text-ink-dark"
                style={{ fontSize, lineHeight, fontFamily: type.fontFamily.sans }}
              >
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
