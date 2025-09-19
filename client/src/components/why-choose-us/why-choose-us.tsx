import Image from 'next/image'
import { Section } from '@/components/ui/section'

const cards = [
  {
    kind: 'regular',
    title: 'A Personal Relationship',
    body: "You'll work directly with our dedicated team. We provide a hands-on, personal experience that you won’t find with a large corporation. We’re in this together.",
  },
  {
    kind: 'regular',
    title: 'Small Business Focused',
    body: 'We build websites that help you stand out in your community. Our designs are not only stunning but also optimized to help new customers discover you online and walk through your front door.',
  },
  {
    kind: 'regular',
    title: 'Your Vision, Brought to Life',
    body: 'We take the time to understand your story and your brand. Then, we craft a beautiful, custom website that captures the unique personality of your business and attracts the right customers.',
  },
]

export function WhyChooseUs() {
  return (
    <Section
      padded
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden"
    >
      {/* Background image (already semi-transparent in asset) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/whyChooseUse.png"
          alt="Decorative background for Why Choose Us section"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(245,239,232,0) 0%, #F5EFE8 70%)',
          }}
        />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="ml-auto flex flex-col items-center gap-6 md:w-1/2 lg:w-1/2">
          <h2
            className="font-heading2 text-brand-accentDeep text-center text-[96px] font-normal"
            style={{ textShadow: '1px 3px 4px rgba(45,42,38,0.55)' }}
          >
            Why Choose Us?
          </h2>
          <div className="flex w-full flex-col items-stretch gap-6">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className={
                  c.kind === 'featured'
                    ? 'bg-brand-accentTan/70 hover:border-brand-accentTan flex min-h-[120px] w-full items-center justify-center rounded-[30px] border border-transparent px-2 pb-3 pt-3 text-center shadow-[2px_5px_6px_0_#2D2A26] transition-all duration-300 hover:scale-[1.02] hover:shadow-[2px_5px_6px_0_#2D2A26]'
                    : 'bg-brand-accentTan/70 hover:border-brand-accentTan flex min-h-[96px] w-full items-center justify-center rounded-[30px] border border-transparent px-2 pb-4 pt-3 text-center shadow-[2px_5px_6px_0_#2D2A26] transition-all duration-300 hover:scale-[1.02] hover:shadow-[2px_5px_6px_0_#2D2A26]'
                }
              >
                <div className="space-y-1">
                  {c.kind === 'featured' ? (
                    <p className="text-ink-dark mx-auto max-w-3xl text-center text-[18px] opacity-100 sm:text-[20px] md:text-[22px]">
                      {c.body}
                    </p>
                  ) : (
                    <>
                      {c.title && (
                        <h3 className="text-sand-background text-[36px] font-semibold leading-tight">
                          {c.title}
                        </h3>
                      )}
                      <p className="text-ink-dark mx-auto max-w-3xl text-center text-[18px] opacity-100 sm:text-[20px] md:text-[22px]">
                        {c.body}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
