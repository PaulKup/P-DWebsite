import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const button = cva(
  'inline-flex items-center justify-center rounded-full font-medium focus-visible:outline-none focus-visible:ring-2',
  {
    variants: {
      variant: {
        primary: 'bg-brand-700 text-white hover:bg-brand-800 focus-visible:ring-brand-500',
        secondary: 'bg-white text-ink-900 border border-ink-700/20 hover:bg-sand-100',
        ghost: 'text-ink-900 hover:bg-sand-100'
      },
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2.5',
        lg: 'px-6 py-3',
        xl: 'px-8 py-4 text-lg'
      }
    },
    defaultVariants: { variant: 'primary', size: 'md' }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  asChild?: boolean
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(button({ variant, size }), className)} {...props} />
}
