import { FounderCard } from './founder-card'

const founders = [
  {
    name: 'Paul Kupiszewski',
    title: 'Co-Founder & Developer',
    description:
      "With five years of web development experience, he specializes in building fast, reliable websites with clean code and intuitive user experiences. He's the one behind the scenes making sure every project runs smoothly and functions flawlessly.",
    imageSrc: '/images/paulHeadshot.png',
    imageAlt: 'Paul Kupiszewski headshot',
  },
  {
    name: 'Damia Bridges',
    title: 'Co-Founder & Designer',
    description:
      'With a background in fine arts and design, she brings a sharp eye for aesthetics and a deep understanding of what makes a brand stand out. Damia focuses on creating websites that not only look beautiful but are built to attract, engage, and convert.',
    imageSrc: '/images/damiaHeadshot.png',
    imageAlt: 'Damia Bridges headshot',
  },
]

export function MeetOurFounders() {
  return (
    <div className="relative w-full">
      {/* Section Title */}
      <div className="mb-8 px-4 text-center sm:mb-10 lg:mb-12">
        <h2 className="text-ink-dark text-[32px] font-light leading-[1.1] tracking-[-2px] sm:text-[48px] sm:tracking-[-3px] md:text-[60px] lg:text-[95px] lg:tracking-[-4.75px]">
          Meet Our Founders
        </h2>
      </div>

      {/* Founder Cards Container */}
      <div className="flex flex-col items-center justify-center gap-6 px-4 sm:gap-8 sm:px-6 lg:flex-row lg:gap-12 lg:px-8">
        {founders.map((founder, index) => (
          <FounderCard
            key={founder.name}
            name={founder.name}
            title={founder.title}
            description={founder.description}
            imageSrc={founder.imageSrc}
            imageAlt={founder.imageAlt}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </div>
  )
}
