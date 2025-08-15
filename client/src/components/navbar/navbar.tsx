import Link from 'next/link'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200">
            <span className="font-bold text-gray-700">P&amp;D</span>
          </div>
          <div className="leading-3">
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Web Development</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Design Studio</div>
          </div>
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          <li><Link className="hover:text-brand-700" href="/">Home</Link></li>
          <li><Link className="hover:text-brand-700" href="/services">Services</Link></li>
          <li><Link className="hover:text-brand-700" href="/about">About Us</Link></li>
          <li><Link className="rounded-full bg-brand-700 px-4 py-2 text-white hover:bg-brand-800" href="/contact">Contact Us</Link></li>
        </ul>
        <button className="md:hidden rounded-md p-2 hover:bg-gray-100" aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2"/></svg>
        </button>
      </nav>
    </header>
  )
}
