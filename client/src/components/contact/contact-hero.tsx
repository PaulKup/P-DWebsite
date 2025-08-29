import { OptimizedImage } from '@/components/ui/optimized-image'

export function ContactHero() {
  return (
    <div className="relative h-[200px] w-full overflow-hidden sm:h-[250px] lg:h-[324px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="/figma-assets/722a26703a866fc9a348891c553e75a869526b60.png"
          alt="Contact page hero background"
          width={1280}
          height={324}
          className="h-full w-full object-cover object-[16.87%_56.88%]"
          priority
        />
      </div>

      {/* Hero Title */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1
          className="text-center font-['Meow_Script'] text-[80px] leading-none text-[#f5efe8] sm:text-[120px] lg:text-[200px]"
          style={{
            textShadow: '#2d2a26 3px 8px 8px',
            fontStyle: 'normal',
          }}
        >
          Contact Us
        </h1>
      </div>

      {/* Bottom Line Break */}
      <div className="absolute bottom-0 left-0 right-0 h-0">
        <div className="absolute -bottom-[1.5px] left-0 right-0 top-[1.5px]">
          <OptimizedImage
            src="/figma-assets/ea727a2feb4c8597d902b565cb1f04b2fb3afc48.svg"
            alt=""
            width={1281}
            height={3}
            className="block w-full max-w-none"
          />
        </div>
      </div>
    </div>
  )
}
