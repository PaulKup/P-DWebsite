import fs from 'fs'
import path from 'path'

type ColorTokens = Record<string, Record<string, string>>

function getColors(): ColorTokens {
  const filePath = path.join(process.cwd(), 'design', 'tokens', 'colors.json')
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw)
}

export const dynamic = 'force-dynamic'

export default function SwatchesPage() {
  const colors = getColors()
  const groups = Object.keys(colors)

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-6">
      <h1 className="text-2xl font-bold">Design Token Swatches</h1>
      {groups.map((group) => (
        <section key={group} className="space-y-4">
          <h2 className="text-xl font-semibold capitalize">{group}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Object.entries(colors[group]).map(([name, value]) => (
              <div key={name} className="overflow-hidden rounded border shadow-sm">
                <div className="h-20" style={{ backgroundColor: value }} />
                <div className="p-3 text-sm">
                  <div className="font-medium">{name}</div>
                  <div className="text-ink-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
