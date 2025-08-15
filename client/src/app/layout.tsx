import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'

export const metadata: Metadata = {
  title: 'P&D Web Development — Web Design & Development',
  description: 'Clean, functional websites that convert visitors into customers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
