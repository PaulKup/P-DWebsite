import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary button uses brand accent from Figma palette
        default: 'bg-brand-accentDeep text-ink-inverse hover:bg-brand-accentDeep/90',
        // Secondary on light background: white surface with ink text and subtle border
        secondary: 'bg-sand-surface text-ink-dark border border-sand-light hover:bg-sand-light',
        // Outline: transparent with ink text and brand border on hover
        outline: 'border border-brand-accentDeep text-ink-dark hover:bg-brand-accentDeep/10',
        // Ghost: minimal; uses sand hover to indicate affordance
        ghost: 'text-ink-dark hover:bg-sand-light',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-11 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
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
