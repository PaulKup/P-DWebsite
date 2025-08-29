import * as React from 'react'
import { cn } from '@/lib/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
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
Textarea.displayName = 'Textarea'
