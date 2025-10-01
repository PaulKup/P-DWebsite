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
        padded={false}
        bg="background"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] max-w-none"
      >
        <div className="w-full px-4 sm:px-6 py-2 lg:px-4">
          {/* Title and first paragraph - full width above image */}
          <div className="relative z-10 space-y-3 text-center lg:text-left">
            <h1 className="text-ink-dark font-heading1 text-[32px] font-normal leading-[1.1] tracking-normal sm:text-[48px] md:text-[60px] lg:text-[95px]">
              Our Vision
            </h1>
          </div>
          
          {/* First paragraph - full width with even padding */}
          <div className="w-full mt-3 mb-1">
            <p className="text-brand-accentDeep text-[18px] leading-snug sm:text-[24px] md:text-[28px] lg:text-[35px] text-center lg:text-left">
              We started this business with one goal: to make affordable, high-quality website
              design accessible to small businesses who don't have time to DIY or the budget for a
              big agency.
            </p>
          </div>

          {/* Second paragraph, button, and image - side by side layout */}
          <div className="grid w-full items-end gap-4 mt-1 lg:[grid-template-columns:minmax(0,1fr)_max-content]">
            <div className="relative z-10 mr-0 space-y-3 self-center text-center lg:mr-[-80px] lg:self-center lg:text-left">
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
            <div className="relative hidden w-full lg:block lg:justify-self-end">
              {/* Image positioned above the line break */}
              <div
                id="about-hero-image"
                className="relative mx-auto w-[600px] translate-x-[69px] overflow-hidden md:w-[700px] md:translate-x-[55px] lg:w-[600px] xl:w-[700px] -translate-y-[60px] pr-3"
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
              
             
            </div>
          </div>
        </div>
      </Section>

      {/* Our Process Section */}
      <Section padded="tight" bg="background" className="-mt-5">
        <OurProcessCarousel />
      </Section>

      {/* Meet Our Founders Section */}
      <Section padded="tight" bg="background" className="-mt-8">
        <Container>
          <MeetOurFounders />
        </Container>
      </Section>

      {/* Primary CTA Section */}
      <PrimaryCta
        title="Ready to Get Started?"
        description="Let's discuss your project requirements and find the perfect solution for your business."
        buttonText="Contact Us Now!"
        padded="tight"
      />
    </>
  )
}
