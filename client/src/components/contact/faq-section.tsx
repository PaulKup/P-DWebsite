import { OptimizedImage } from '@/components/ui/optimized-image'

interface FAQCardProps {
  question: string
  answer: string
  icon: string
  className?: string
}

function FAQCard({ question, answer, icon, className = '' }: FAQCardProps) {
  return (
    <div
      className={`flex flex-col rounded-[30px] border-[3px] border-[#984d37] bg-[#f5efe8] p-4 shadow-[3px_8px_8px_0px_#2d2a26] lg:p-8 ${className}`}
    >
      {/* Icon */}
      <div className="mb-4 flex justify-center lg:mb-6">
        <div className="h-[80px] w-[80px] lg:h-[147px] lg:w-[147px]">
          <OptimizedImage src={icon} alt="" width={147} height={147} className="h-full w-full" />
        </div>
      </div>

      {/* Question */}
      <h3 className="mb-4 text-center font-['Open_Sans'] text-[20px] font-bold leading-tight text-[#984d37] sm:text-[28px] lg:mb-6 lg:text-[35px] lg:leading-normal">
        {question}
      </h3>

      {/* Answer */}
      <p className="flex-grow px-2 text-center font-['Open_Sans'] text-[16px] font-normal leading-tight text-[#2d2a26] sm:text-[20px] lg:px-4 lg:text-[30px] lg:leading-normal">
        {answer}
      </p>
    </div>
  )
}

export function FAQSection() {
  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer:
        'Project timelines vary depending on complexity. A simple 5-page website typically takes 2-3 weeks, while more complex projects can take 6-8 weeks or longer.',
      icon: '/figma-assets/27f241474127f90914540227d65f303b3799d567.svg',
    },
    {
      question: 'Can you redesign my existing website?',
      answer:
        'Absolutely! We can redesign and modernize your existing website while preserving your content and improving functionality and user experience.',
      icon: '/figma-assets/27f241474127f90914540227d65f303b3799d567.svg',
    },
    {
      question: 'Do you integrate third-party tools (like booking systems, CRMs, etc.)?',
      answer:
        'Yes! We can integrate third-party tools like booking systems, online reservation systems, ordering platforms, and email marketing tools for promotions and newsletters.',
      icon: '/figma-assets/cf4b56252be5b1d9742a60bf0398af3f2a13095f.svg',
    },
    {
      question: 'Do you work with clients remotely?',
      answer:
        'Yes, we can work with clients worldwide. We use video calls, screen sharing, and project management tools to ensure smooth collaboration regardless of location.',
      icon: '/figma-assets/27f241474127f90914540227d65f303b3799d567.svg',
    },
  ]

  return (
    <section id="faq" className="px-4 py-12 lg:px-12 lg:py-20">
      {/* Section Title */}
      <h2 className="mb-8 text-center font-['Open_Sans'] text-[32px] font-light leading-none tracking-[-2px] text-[#2d2a26] sm:text-[48px] lg:mb-16 lg:text-[95px] lg:tracking-[-4.75px]">
        Frequently Asked Questions
      </h2>

      {/* FAQ Grid */}
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {faqs.map((faq, index) => (
          <FAQCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            icon={faq.icon}
            className="min-h-[400px] lg:min-h-[600px]"
          />
        ))}
      </div>

      {/* Bottom Line Break */}
      {/* <div className="mt-12 lg:mt-20 h-0 relative">
        <div className="absolute -bottom-[1.5px] left-0 right-0 top-[1.5px]">
          <OptimizedImage
            src="/figma-assets/ea727a2feb4c8597d902b565cb1f04b2fb3afc48.svg"
            alt=""
            width={1281}
            height={3}
            className="block w-full max-w-none"
          />
        </div>
      </div> */}
    </section>
  )
}
