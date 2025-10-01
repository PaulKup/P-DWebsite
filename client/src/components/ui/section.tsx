import { cn } from '@/lib/cn'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  padded?: boolean | 'tight' | 'normal' | 'loose'
  bg?: 'none' | 'light' | 'dark' | 'background'
}

export function Section({ className, padded = true, bg = 'none', ...props }: SectionProps) {
  const bgClass = bg === 'light' ? 'bg-sand-light' : bg === 'dark' ? 'bg-ink-dark text-white' : ''
  
  const getPaddingClass = () => {
    if (!padded) return ''
    if (padded === 'tight') return 'py-6 sm:py-8 lg:py-8'
    if (padded === 'loose') return 'py-12 sm:py-16 lg:py-20'
    // padded === true or 'normal'
    return 'py-8 sm:py-10 lg:py-12'
  }
  
  return (
    <section className={cn(bgClass, getPaddingClass(), className)} {...props} />
  )
}
