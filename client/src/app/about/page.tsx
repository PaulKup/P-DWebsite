import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { OurProcessCarousel } from '@/components/about/our-process-carousel'
import { MeetOurFounders } from '@/components/about/meet-our-founders'
import { PrimaryCta } from '@/components/cta/primary-cta'

export const metadata: Metadata = {
  title: 'About Us — P&D Web Development',
  description: 'We build clean, functional websites for small businesses.',
  openGraph: {
    title: 'About Us — P&D Web Development',
    description: 'We build clean, functional websites for small businesses.',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section
        padded
        bg="background"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"
      >
        <div className="grid w-full items-end gap-4 px-4 py-4 sm:px-6 sm:py-6 md:py-8 md:[grid-template-columns:minmax(0,1fr)_max-content] lg:px-2">
          <div className="relative z-10 mr-0 space-y-3 self-end md:mr-[-80px]">
            <h1 className="text-ink-dark font-heading1 text-[32px] font-normal leading-[1.1] tracking-normal sm:text-[48px] md:text-[60px] lg:text-[95px]">
              Our Vision
            </h1>
            <p className="text-brand-accentDeep text-[18px] leading-snug sm:text-[24px] md:text-[28px] lg:text-[35px]">
              We started this business with one goal: to make affordable, high-quality website
              design accessible to small businesses who don't have time to DIY or the budget for a
              big agency.
            </p>
            <p className="text-ink-dark text-[18px] leading-snug sm:text-[24px] md:text-[28px] lg:text-[35px]">
              We know how important it is to have a website that looks great, loads fast, and helps
              customers take action, whether that's booking a table, placing an order, or reaching
              out for services. We handle the design and tech, so you can focus on what you do best.
            </p>
            <div className="mt-0 flex flex-wrap justify-center gap-3 overflow-visible">
              <Button
                asChild
                variant="primary"
                size="lg"
                className="z-10 flex min-w-[240px] items-center px-3 py-4 leading-none shadow-[3px_5px_5px_0_#2D2A26] hover:shadow-[3px_5px_5px_0_#2D2A26] sm:min-w-[280px] sm:px-4 sm:py-5 md:min-w-[340px] md:px-5 md:py-6"
              >
                <Link href="/contact">
                  <span className="font-mono text-[24px] sm:text-[28px] md:text-[33px]">
                    Get Started!
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden w-full md:justify-self-end lg:block">
            <div
              id="about-hero-image"
              className="relative mx-auto w-full max-w-2xl -translate-y-[30px] translate-x-[69px] overflow-hidden rounded-[30px] md:max-w-xl md:-translate-y-[50px] md:translate-x-[55px] lg:max-w-2xl lg:-translate-y-[70px] xl:-translate-y-[70px]"
            >
              <Image
                src="/images/ourVision.png"
                alt="Our vision - team working together"
                width={1280}
                height={650}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            {/* Single partial line break under image (full-bleed, right-aligned) */}
            <div className="relative left-1/2 -ml-[50vw] mt-0 w-screen">
              <div className="bg-ink-dark ml-auto h-[2px] w-[60vw] -translate-y-[60px] md:w-[90vw] md:-translate-y-[104px] lg:w-[80vw] lg:-translate-y-[116px] xl:-translate-y-[124px]" />
            </div>
          </div>
        </div>
      </Section>

      {/* Our Process Section */}
      <Section padded bg="background">
        <OurProcessCarousel />
      </Section>

      {/* Meet Our Founders Section */}
      <Section padded bg="background">
        <Container>
          <MeetOurFounders />
        </Container>
      </Section>

      {/* Primary CTA Section */}
      <PrimaryCta
        title="Ready to Get Started?"
        description="Let's discuss your project requirements and find the perfect solution for your business."
        buttonText="Contact Us Now!"
      />
    </>
  )
}
