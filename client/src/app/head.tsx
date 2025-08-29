export default function Head() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  return (
    <>
      {domain ? (
        <>
          <link rel="preconnect" href="https://plausible.io" />
          <link rel="dns-prefetch" href="https://plausible.io" />
        </>
      ) : null}
      <meta name="theme-color" content="#0055FF" />
    </>
  )
}
