import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { PrimaryCta } from '@/components/cta/primary-cta'

export const metadata: Metadata = {
  title: 'Services — P&D Web Development',
  description: 'Web design, development, and technical SEO for small businesses.',
  openGraph: {
    title: 'Services — P&D Web Development',
    description: 'Web design, development, and technical SEO for small businesses.',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <header className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-px w-screen max-w-none overflow-hidden">
        <Image
          src="/images/ourServicesBackground.png"
          alt="decorative header image"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
        />
        <div className="mx-auto w-full max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <h1
            className="font-heading2 text-sand-background text-5xl leading-none sm:text-6xl lg:text-[200px]"
            style={{ textShadow: '3px 8px 8px #2D2A26' }}
          >
            Our Services
          </h1>
          <div className="mt-6">
            <Button
              asChild
              size="2xl"
              className="shadow-[3px_5px_5px_0_#2D2A26] hover:shadow-[3px_5px_5px_0_#2D2A26]"
            >
              <Link href="/contact">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Three service cards (image on top per Figma) */}
      <Section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 min-[840px]:grid-cols-2 min-[1390px]:grid-cols-3">
            <article className="bg-sand-background border-brand-accentDeep overflow-hidden rounded-[30px] border-[3px] shadow-[2px_5px_6px_0_#2D2A26] transition-all duration-300 hover:scale-[1.02] hover:shadow-[2px_5px_6px_0_#2D2A26]">
              <div className="relative h-24 w-full pt-3 sm:h-28">
                <Image
                  src="/images/servicesCard1.png"
                  alt="Custom Website Design"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-4 pt-2 text-center sm:px-6 sm:pb-5 sm:pt-2">
                <h3 className="text-brand-accentDeep mb-3 text-[26px] font-bold sm:text-[27px]">
                  Custom Website Design
                </h3>
                <p className="text-ink-dark text-[20px] leading-tight sm:text-[23px]">
                  A professional website that reflects your brand and gets customers through the
                  door, online and off.
                </p>
                <div className="-ml-5 mt-2 w-full text-left sm:-ml-6">
                  <ul className="text-ink-dark w-full list-outside list-disc space-y-1 pl-7 text-[16px] leading-tight sm:text-[18px] md:text-[20px] lg:text-[23px]">
                    <li>Modern, clean design</li>
                    <li>Mobile-first approach</li>
                    <li>SEO optimized</li>
                    <li>Fast loading times</li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="bg-sand-background border-brand-accentDeep overflow-hidden rounded-[30px] border-[3px] shadow-[2px_5px_6px_0_#2D2A26] transition-all duration-300 hover:scale-[1.02] hover:shadow-[2px_5px_6px_0_#2D2A26]">
              <div className="relative h-24 w-full pt-3 sm:h-28">
                <Image
                  src="/images/servicesCard2.svg"
                  alt="Menu & Online Ordering Integration"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-4 pt-2 text-center sm:px-6 sm:pb-5 sm:pt-2">
                <h3 className="text-brand-accentDeep mb-3 text-[26px] font-bold sm:text-[27px]">
                  Menu & Online Ordering Integration
                </h3>
                <p className="text-ink-dark text-[20px] leading-tight sm:text-[23px]">
                  Custom web applications to streamline your business processes and improve
                  efficiency.
                </p>
                <div className="-ml-5 mt-2 w-full text-left sm:-ml-6">
                  <ul className="text-ink-dark w-full list-outside list-disc space-y-1 pl-6 text-[16px] leading-tight sm:text-[18px] md:text-[20px] lg:text-[23px]">
                    <li className="whitespace-nowrap">Secure payment processing</li>
                    <li>Inventory management</li>
                    <li>Order tracking</li>
                    <li>Customer accounts</li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="bg-sand-background border-brand-accentDeep overflow-hidden rounded-[30px] border-[3px] shadow-[2px_5px_6px_0_#2D2A26] transition-all duration-300 hover:scale-[1.02] hover:shadow-[2px_5px_6px_0_#2D2A26]">
              <div className="relative h-20 w-full pt-3 sm:h-24">
                <Image
                  src="/images/servicesCard3.png"
                  alt="Web Applications"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-4 pt-2 text-center sm:px-6 sm:pb-5 sm:pt-2">
                <h3 className="text-brand-accentDeep mb-3 text-[26px] font-bold sm:text-[27px]">
                  Web Applications
                </h3>
                <p className="text-ink-dark text-[20px] leading-tight sm:text-[23px]">
                  Custom web applications to streamline your business processes and improve
                  efficiency.
                </p>
                <div className="-ml-5 mt-2 w-full text-left sm:-ml-6">
                  <ul className="text-ink-dark w-full list-outside list-disc space-y-1 pl-7 text-[16px] leading-tight sm:text-[18px] md:text-[20px] lg:text-[23px]">
                    <li>Custom functionality</li>
                    <li>User authentication</li>
                    <li>API development</li>
                    <li>Database Functionality</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Section>

      {/* Packages (no e-commerce) */}
      <Section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="font-openSans text-ink-dark text-center text-5xl leading-none tracking-[-0.03em] sm:text-6xl lg:text-[95px]">
            Pricing Plans
          </h2>
          <div className="mt-6" />
          <div className="grid grid-cols-1 items-center justify-items-center gap-6 min-[840px]:grid-cols-2 min-[1390px]:grid-cols-3">
            <article className="bg-sand-background border-brand-accentDeep overflow-hidden rounded-[30px] border-[3px] p-3 text-center shadow-[2px_5px_6px_0_#2D2A26] transition-all duration-300 hover:scale-[1.02] hover:shadow-[2px_5px_6px_0_#2D2A26] sm:p-4 lg:h-[632px] lg:w-[356px]">
              <h3 className="text-ink-dark mb-2 text-[26px] font-light sm:text-[27px] lg:text-[75px]">
                Starter
              </h3>
              <div className="text-brand-accentDeep mt-1 font-mono text-4xl font-normal tracking-[-2px] lg:text-[50px]">
                $800
              </div>
              <p className="text-ink-dark mx-auto mt-2 max-w-none text-[20px] font-bold leading-tight">
                Perfect for small businesses getting started online
              </p>
              <div className="-ml-5 mt-2 w-full text-left sm:-ml-6">
                <ul className="text-ink-dark w-full list-outside list-disc space-y-1 pl-6 text-[16px] leading-tight sm:text-[18px]">
                  <li>Up to 5-pages responsive website</li>
                  <li>SEO optimized</li>
                  <li>Fast loading times</li>
                  <li>Contact form</li>
                  <li>2 revisions</li>
                </ul>
              </div>
            </article>
            <article className="bg-sand-background border-brand-accentDeep overflow-hidden rounded-[30px] border-[3px] p-3 text-center shadow-[2px_5px_6px_0_#2D2A26] transition-all duration-300 hover:scale-[1.02] hover:shadow-[2px_5px_6px_0_#2D2A26] sm:p-4 lg:h-[754px] lg:w-[346px]">
              <h3 className="text-ink-dark mb-2 text-[26px] font-light sm:text-[27px] lg:text-[75px]">
                Growth
              </h3>
              <div className="text-brand-accentDeep mt-1 font-mono text-4xl font-normal tracking-[-2px] lg:text-[50px]">
                $1200
              </div>
              <p className="text-ink-dark mx-auto mt-2 max-w-none text-[20px] font-bold leading-tight">
                Ideal for growing businesses with more complex needs
              </p>
              <div className="-ml-5 mt-2 w-full text-left sm:-ml-6">
                <ul className="text-ink-dark w-full list-outside list-disc space-y-1 pl-6 text-[16px] leading-tight sm:text-[18px]">
                  <li>Up to 10-pages responsive website</li>
                  <li>SEO optimized</li>
                  <li>Fast loading times</li>
                  <li>
                    Common integrations to help your business run smoothly (Online Reservations,
                    Online Ordering, Secure Payment Processors, etc.)
                  </li>
                  <li>3 revisions</li>
                </ul>
              </div>
            </article>
            <article className="bg-sand-background border-brand-accentDeep overflow-hidden rounded-[30px] border-[3px] p-3 text-center shadow-[2px_5px_6px_0_#2D2A26] transition-all duration-300 hover:scale-[1.02] hover:shadow-[2px_5px_6px_0_#2D2A26] sm:p-4 lg:h-[632px] lg:w-[346px]">
              <h3 className="text-ink-dark mb-1 text-[26px] font-light sm:text-[27px] lg:text-[75px]">
                Custom
              </h3>
              <Button
                asChild
                variant="secondary"
                className="hover:text-sand-background mt-1 w-auto whitespace-nowrap rounded-[40px] border-[3px] border-[#984d37] px-2 text-[36px] leading-none tracking-tight shadow-[5px_5px_8px_0_#2D2A26] hover:bg-[#984d37]"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <p className="text-ink-dark mx-auto mt-3 max-w-none text-[20px] font-bold leading-tight">
                Custom solutions for businesses needing a site refresh or for larger organizations
                requiring more comprehensive services, such as:
              </p>
              <div className="-ml-5 mt-2 w-full text-left sm:-ml-6">
                <ul className="text-ink-dark w-full list-outside list-disc space-y-1 pl-6 text-[16px] leading-tight sm:text-[18px]">
                  <li>Unlimited pages</li>
                  <li>Custom functionality</li>
                  <li>Advanced integrations</li>
                  <li>Priority support</li>
                  <li>Pricing varies by project</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </Section>
      <PrimaryCta
        title="Ready to Get Started?"
        description="Let's discuss your project requirements and find the perfect solution for your business."
        buttonText="Let’s Do This!"
      />
    </>
  )
}
