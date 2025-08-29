import { OptimizedImage } from '@/components/ui/optimized-image'

export function ContactInfoSection() {
  return (
    <section id="contact-info" className="px-4 py-8 lg:px-12 lg:py-16">
      <div className="max-w-[701px]">
        {/* Main Heading */}
        <h2 className="mb-10 font-['Open_Sans'] text-[32px] font-light leading-tight text-[#2d2a26] sm:text-[48px] lg:mb-20 lg:text-[60px] lg:leading-[65px]">
          Ready to Get Started?
        </h2>

        {/* Email Section */}
        <div className="mb-8 lg:mb-16">
          <div className="mb-6 flex items-start gap-4 lg:gap-6">
            <div className="mt-2 h-[32px] w-[32px] flex-shrink-0 lg:mt-4 lg:h-[42px] lg:w-[42px]">
              <OptimizedImage
                src="/figma-assets/857737a4f71b7f4be83891fa12c8c2a9263b0bed.svg"
                alt="Email icon"
                width={42}
                height={42}
              />
            </div>
            <div>
              <h3 className="mb-3 font-['Open_Sans'] text-[28px] font-light leading-tight text-[#984d37] sm:text-[36px] lg:mb-6 lg:text-[50px] lg:leading-[65px]">
                Email Us
              </h3>
              <p className="mb-2 font-['Open_Sans'] text-[18px] font-semibold leading-tight text-[#2d2a26] sm:text-[24px] lg:mb-4 lg:text-[30px] lg:leading-[65px]">
                <a href="mailto:pdwebdev.studio@gmail.com" className="break-all hover:underline">
                  pdwebdev.studio@gmail.com
                </a>
              </p>
              <p className="font-['Open_Sans'] text-[16px] font-light leading-tight text-[#2d2a26] sm:text-[20px] lg:text-[30px] lg:leading-[65px]">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Phone Section */}
        <div>
          <div className="flex items-start gap-4 lg:gap-6">
            <div className="mt-1 h-[36px] w-[36px] flex-shrink-0 lg:mt-2 lg:h-[49px] lg:w-[49px]">
              <OptimizedImage
                src="/figma-assets/10270d323bbf56a75981403e161278f7ae5a229b.svg"
                alt="Phone icon"
                width={49}
                height={49}
              />
            </div>
            <div>
              <h3 className="mb-3 font-['Open_Sans'] text-[28px] font-light leading-tight text-[#984d37] sm:text-[36px] lg:mb-6 lg:text-[50px] lg:leading-[65px]">
                Call Us
              </h3>
              <p className="mb-2 font-['Open_Sans'] text-[18px] font-semibold leading-tight text-[#2d2a26] sm:text-[24px] lg:mb-4 lg:text-[30px] lg:leading-[65px]">
                <a href="tel:+14078019652" className="hover:underline">
                  (407) 801-9652‬
                </a>
              </p>
              <p className="font-['Open_Sans'] text-[16px] font-light leading-tight text-[#2d2a26] sm:text-[20px] lg:text-[30px] lg:leading-[65px]">
                Monday - Friday, 9AM - 6PM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
