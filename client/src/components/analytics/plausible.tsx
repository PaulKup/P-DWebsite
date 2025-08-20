'use client'
import Script from 'next/script'

export function Plausible() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  if (!domain) return null
  return (
    <Script src="https://plausible.io/js/script.js" data-domain={domain} strategy="lazyOnload" />
  )
}
