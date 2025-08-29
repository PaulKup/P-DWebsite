import Image from 'next/image'

export function Footer() {
  const footerImageSrc = '/images/footerBackground.png'
  const footerLogoSrc = '/images/logo.png'

  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Top image section (above footer) */}
      <div className="relative bg-[#f5efe8]">
        <div className="bg-ink-dark absolute inset-x-0 top-0 h-[2px]" />
        <Image
          src={footerImageSrc}
          alt="Footer decorative image"
          width={1920}
          height={363}
          sizes="100vw"
          className="h-auto w-screen"
          priority
        />
      </div>

      {/* Footer content */}
      <div className="bg-[#ae7b60] text-white">
        {/* Divider between image and footer */}
        <div className="border-t border-[#f5efe8]" />

        <div className="flex h-[363px] w-full flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row lg:px-8">
          {/* Left column: contact + quick links */}
          <div className="w-full space-y-4 md:w-auto md:max-w-[60%]">
            <div>
              <h3 className="mb-2 text-3xl font-semibold">Get In Touch</h3>
              <p className="text-lg text-white/90">
                Email:
                <a
                  href="mailto:pdwebdev.studio@gmail.com"
                  className="text-white/90 underline-offset-2 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#ae7b60]"
                >
                  pdwebdev.studio@gmail.com
                </a>
              </p>
              <p className="text-lg text-white/90">Phone: (407) 801-9652‬</p>
            </div>

            <div>
              <h3 className="mb-2 text-3xl font-semibold">Quick Links</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                <li className="min-w-0">
                  <a
                    className="text-xl text-white/90 underline-offset-2 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#ae7b60]"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="min-w-0">
                  <a
                    className="text-xl text-white/90 underline-offset-2 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#ae7b60]"
                    href="/about"
                  >
                    About Us
                  </a>
                </li>
                <li className="min-w-0">
                  <a
                    className="text-xl text-white/90 underline-offset-2 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#ae7b60]"
                    href="/services"
                  >
                    Services
                  </a>
                </li>
                <li className="min-w-0">
                  <a
                    className="text-xl text-white/90 underline-offset-2 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#ae7b60]"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column: logo */}
          <div className="flex w-full items-center justify-center self-stretch md:w-auto md:justify-end">
            <Image
              src={footerLogoSrc}
              alt="P&D Web Studio logo"
              width={713}
              height={189}
              sizes="(min-width: 768px) 50vw, 90vw"
              className="h-auto max-h-full w-auto"
              priority
            />
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-[#f5efe8]" />
        <div className="mx-auto px-4 py-6 text-center text-sm text-[#ebd9c2] sm:px-6 lg:px-8">
          © {new Date().getFullYear()} P&amp;D Web Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
