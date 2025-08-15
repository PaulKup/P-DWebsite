export function Footer() {
    return (
      <footer className="bg-brand-800 py-12 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Get in Touch</h3>
            <p className="text-brand-200">Email: pdwebstudio@gmail.com</p>
            <p className="text-brand-200">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick links</h3>
            <ul className="space-y-2">
              <li><a className="text-brand-200 hover:text-white" href="/">Home</a></li>
              <li><a className="text-brand-200 hover:text-white" href="/about">About Us</a></li>
              <li><a className="text-brand-200 hover:text-white" href="/services">Services</a></li>
              <li><a className="text-brand-200 hover:text-white" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-wide text-brand-200">Web Development</div>
            <div className="text-2xl font-bold">P&amp;D</div>
            <div className="text-xs uppercase tracking-wide text-brand-200">Design Studio</div>
          </div>
        </div>
        <div className="mx-auto mt-8 border-t border-brand-700 px-4 pt-8 text-center text-sm text-brand-200 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} P&amp;D Web Development. All rights reserved.
        </div>
      </footer>
    )
  }
  