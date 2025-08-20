import { cn } from '@/lib/cn'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: { base?: number; sm?: number; md?: number; lg?: number }
  gap?: string
}

export function Grid({ className, cols = { base: 1, md: 2 }, gap = 'gap-6', ...props }: GridProps) {
  const colClasses = [
    cols.base ? `grid-cols-${cols.base}` : '',
    cols.sm ? `sm:grid-cols-${cols.sm}` : '',
    cols.md ? `md:grid-cols-${cols.md}` : '',
    cols.lg ? `lg:grid-cols-${cols.lg}` : '',
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={cn('grid', gap, colClasses, className)} {...props} />
}
