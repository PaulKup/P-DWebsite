'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navbarLogoSrc = '/images/navbarLogo.svg'

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu()
    }
  }

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
        <ul className="hidden items-center gap-6 font-mono text-[25px] min-[900px]:flex">
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
        <button
          className="rounded-md p-2 transition-colors min-[900px]:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="transition-transform duration-200"
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-sand-background border-ink-dark animate-in slide-in-from-top-2 fade-in-0 border-t duration-200 min-[900px]:hidden">
          <div className="px-4 py-2 sm:px-6">
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-brand-700 focus-visible:ring-brand-700 block py-2 font-mono text-[20px] underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  href="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-700 focus-visible:ring-brand-700 block py-2 font-mono text-[20px] underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  href="/services"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-700 focus-visible:ring-brand-700 block py-2 font-mono text-[20px] underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  href="/about"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-700 focus-visible:ring-brand-700 block py-2 font-mono text-[20px] underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  href="/contact"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
