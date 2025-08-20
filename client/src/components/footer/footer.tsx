export function Footer() {
  return (
    <footer className="bg-brand-accentTan text-ink-inverse py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Get in Touch</h3>
          <p className="text-ink-inverse/80">Email: pdwebstudio@gmail.com</p>
          <p className="text-ink-inverse/80">Phone: (555) 123-4567</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick links</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="text-ink-inverse/80 hover:text-ink-inverse focus-visible:ring-ink-inverse focus-visible:ring-offset-brand-accentTan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-ink-inverse/80 hover:text-ink-inverse focus-visible:ring-ink-inverse focus-visible:ring-offset-brand-accentTan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                href="/about"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-ink-inverse/80 hover:text-ink-inverse focus-visible:ring-ink-inverse focus-visible:ring-offset-brand-accentTan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                href="/services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-ink-inverse/80 hover:text-ink-inverse focus-visible:ring-ink-inverse focus-visible:ring-offset-brand-accentTan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-right">
          <div className="text-ink-inverse/80 text-xs uppercase tracking-wide">Web Development</div>
          <div className="text-2xl font-bold">P&amp;D</div>
          <div className="text-ink-inverse/80 text-xs uppercase tracking-wide">Design Studio</div>
        </div>
      </div>
      <div className="text-ink-inverse/80 border-ink-inverse/20 mx-auto mt-8 border-t px-4 pt-8 text-center text-sm sm:px-6 lg:px-8">
        © {new Date().getFullYear()} P&amp;D Web Development. All rights reserved.
      </div>
    </footer>
  )
}
