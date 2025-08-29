import Image from 'next/image'
import type { ComponentProps } from 'react'

export interface OptimizedImageProps
  extends Omit<ComponentProps<typeof Image>, 'placeholder' | 'blurDataURL'> {}

export function OptimizedImage({
  alt,
  width,
  height,
  sizes,
  priority,
  ...rest
}: OptimizedImageProps) {
  return (
    <Image
      alt={alt}
      width={width}
      height={height}
      sizes={sizes ?? '(min-width: 1024px) 800px, 100vw'}
      priority={priority}
      {...rest}
    />
  )
}
