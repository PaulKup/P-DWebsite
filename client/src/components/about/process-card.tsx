interface ProcessCardProps {
  step: number
  title: string
  description: string
  className?: string
}

export function ProcessCard({ step, title, description, className = '' }: ProcessCardProps) {
  return (
    <div
      className={`bg-background relative h-[380px] w-[280px] flex-shrink-0 rounded-[20px] border-2 border-[#984D37] shadow-[2px_4px_6px_0px_#2d2a26] sm:h-[440px] sm:w-[320px] sm:rounded-[25px] sm:border-[3px] sm:shadow-[3px_6px_8px_0px_#2d2a26] lg:h-[501px] lg:w-[346px] lg:rounded-[30px] lg:shadow-[3px_8px_8px_0px_#2d2a26] ${className}`}
    >
      {/* Step Number Circle */}
      <div className="absolute left-1/2 top-[8px] flex h-[60px] w-[60px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#984D37] bg-transparent sm:top-[10px] sm:h-[74px] sm:w-[74px] lg:h-[94px] lg:w-[94px]">
        <span className="text-ink-dark font-mono text-[40px] leading-none sm:text-[60px] lg:text-[80px]">
          {step}
        </span>
      </div>

      {/* Title */}
      <div className="absolute left-1/2 top-[78px] w-[260px] -translate-x-1/2 text-center sm:top-[94px] sm:w-[300px] lg:top-[112px] lg:w-[291px]">
        <h3 className="text-[18px] font-bold leading-tight text-[#984D37] sm:text-[22px] lg:text-[27px]">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="absolute left-1/2 top-[120px] w-[260px] -translate-x-1/2 text-center sm:top-[138px] sm:w-[300px] lg:top-[156px] lg:w-[291px]">
        <p className="text-ink-dark text-[14px] leading-normal sm:text-[18px] lg:text-[22px]">
          {description}
        </p>
      </div>
    </div>
  )
}
