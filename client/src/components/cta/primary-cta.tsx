import Link from 'next/link'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'

export interface PrimaryCtaProps {
  title?: string
  description?: string
  buttonText?: string
}

export function PrimaryCta({
  title = 'Ready to Transform Your Online Presence?',
  description = "Let's discuss your project and create something amazing together.",
  buttonText = 'Get Started!',
}: PrimaryCtaProps) {
  return (
    <Section
      padded
      bg="background"
      className="relative w-full"
    >
      <div className="flex w-full flex-col items-center gap-3 px-4 text-center sm:gap-4 sm:px-6 lg:gap-3 lg:px-8">
        <h2 className="text-ink-dark font-OpenSans text-[32px] font-light sm:text-[48px] md:text-[56px] lg:text-7xl">
          {title}
        </h2>
        <p className="text-ink-dark max-w-4xl font-mono text-[18px] sm:text-[20px] md:text-[23px] lg:text-[30px]">
          {description}
        </p>
        <Button
          asChild
          size="xl"
          className="whitespace-nowrap rounded-full px-4 text-[20px] text-[#f5efe8] shadow-[3px_5px_5px_0_#2D2A26] hover:shadow-[3px_5px_5px_0_#2D2A26] sm:px-6 sm:text-[24px] lg:text-3xl/none"
        >
          <Link href="/contact">{buttonText}</Link>
        </Button>
      </div>
    </Section>
  )
}
