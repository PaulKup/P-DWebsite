import { cn } from '@/lib/cn'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  padded?: boolean
  bg?: 'none' | 'light' | 'dark'
}

export function Section({ className, padded = true, bg = 'none', ...props }: SectionProps) {
  const bgClass = bg === 'light' ? 'bg-sand-light' : bg === 'dark' ? 'bg-ink-dark text-white' : ''
  return (
    <section className={cn(bgClass, padded && 'py-12 sm:py-16 lg:py-20', className)} {...props} />
  )
}
