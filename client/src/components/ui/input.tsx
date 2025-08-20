import * as React from 'react'
import { cn } from '@/lib/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'border-sand-dark/50 text-ink-dark placeholder:text-ink-light w-full rounded-lg border bg-white p-3',
          'focus-visible:ring-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'
