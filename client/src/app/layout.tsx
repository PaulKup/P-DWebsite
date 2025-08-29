import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'
import { Open_Sans, Roboto_Mono, Meow_Script } from 'next/font/google'
import { Plausible } from '@/components/analytics/plausible'

export const metadata: Metadata = {
  title: 'P&D Web Development — Web Design & Development',
  description: 'Clean, functional websites that convert visitors into customers.',
}

const openSans = Open_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })
const meowScript = Meow_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading2',
  weight: '400',
})
const robotoMono = Roboto_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${meowScript.variable} ${robotoMono.variable}`}
    >
      <body className="font-body flex min-h-screen flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <Plausible />
      </body>
    </html>
  )
}
