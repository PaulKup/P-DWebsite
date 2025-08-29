import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-dark focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-accentDeep text-sand-background shadow-lg hover:shadow-lg hover:-translate-y-0.5 hover:bg-brand-accentDeep/90 active:translate-y-0',
        secondary:
          'bg-sand-background text-brand-accentDeep border border-ink-dark/20 hover:bg-sand-light/80',
        outline: 'border-2 border-brand-accentDeep text-ink-dark hover:bg-brand-accentDeep/10',
        ghost: 'text-ink-dark hover:bg-sand-light',
        link: 'text-brand-accentDeep underline underline-offset-4 rounded-none h-auto p-0 hover:no-underline',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-4 text-base',
        lg: 'h-12 px-6 text-[21px]',
        xl: 'h-16 px-6 text-[22px]',
        '2xl': 'h-20 px-8 text-[28px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export { buttonVariants }
