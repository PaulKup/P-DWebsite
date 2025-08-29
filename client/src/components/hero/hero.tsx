import Link from 'next/link'
import Image from 'next/image'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <Section
      padded
      bg="background"
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"
    >
      <div className="grid w-full items-end gap-4 px-2 py-8 sm:px-4 md:[grid-template-columns:minmax(0,1fr)_max-content]">
        <div className="relative z-10 mr-[-40px] space-y-3 self-end md:mr-[-80px]">
          <h1 className="text-ink-dark font-heading1 text-[36px] font-normal leading-[1.1] tracking-normal sm:text-[48px] lg:text-[60px]">
            Let’s Get You a Website That Brings in Customers.
          </h1>
          <p className="text-brand-accentDeep text-[35px] leading-snug">
            Your website should be working just as hard as you are.
          </p>
          <p className="text-ink-dark text-[35px] leading-snug">
            Whether you run a restaurant, a small business, or an e-commerce store, we deliver
            professional, SEO-optimized web design without confusing tech or pushy upsells, just
            practical solutions, delivered on time.
          </p>
          <div className="mt-0 flex flex-wrap justify-center gap-3 overflow-visible">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="z-10 flex min-w-[280px] flex-col items-center px-4 py-5 leading-none shadow-[3px_5px_5px_0_#2D2A26] hover:shadow-[3px_5px_5px_0_#2D2A26] md:min-w-[420px] md:px-5 md:py-6"
            >
              <Link href="/contact">
                <span className="font-mono text-[18px]">Don’t know where to start?</span>
                <span className="font-mono text-[33px]">Let’s chat</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full md:justify-self-end">
          <div
            id="hero-image"
            className="relative mx-auto w-full max-w-xl -translate-x-6 -translate-y-[60px] overflow-hidden rounded-[30px] md:max-w-lg md:-translate-x-20 md:-translate-y-[99px] lg:max-w-xl"
          >
            <Image
              src="/images/heroIMG.png"
              alt="Hero graphic"
              width={1280}
              height={640}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          {/* Single partial line break under image (full-bleed, right-aligned) */}
          <div className="relative left-1/2 -ml-[50vw] mt-0 w-screen">
            <div className="bg-ink-dark ml-auto h-[2px] w-[60vw] -translate-y-[60px] md:w-[90vw] md:-translate-y-[112px] lg:w-[80vw]" />
          </div>
        </div>
      </div>
    </Section>
  )
}
