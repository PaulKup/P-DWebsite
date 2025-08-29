import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  const navbarLogoSrc = '/images/navbarLogo.svg'
  return (
    <header className="bg-sand-background/90 border-ink-dark sticky top-0 z-50 border-b shadow-sm backdrop-blur">
      <nav
        aria-label="Primary"
        className="flex h-[60px] w-full items-stretch justify-between px-4 py-0 sm:h-[64px] sm:px-6 lg:h-[72px] lg:px-8"
      >
        <Link href="/" className="-ml-2 flex h-full items-center gap-3 sm:-ml-3 lg:-ml-4">
          <Image
            src={navbarLogoSrc}
            alt="P&D Web Studio logo"
            width={240}
            height={72}
            className="h-full w-auto"
            priority
          />
        </Link>
        <ul className="hidden items-center gap-6 font-mono text-[25px] md:flex">
          <li>
            <Link
              className="hover:text-brand-700 focus-visible:ring-brand-700 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-brand-700 focus-visible:ring-brand-700 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-brand-700 focus-visible:ring-brand-700 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              href="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-brand-700 focus-visible:ring-brand-700 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              href="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button className="rounded-md p-2 hover:bg-gray-100 md:hidden" aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
