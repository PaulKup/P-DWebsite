import Image from 'next/image'

interface FounderCardProps {
  name: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  className?: string
}

export function FounderCard({
  name,
  title,
  description,
  imageSrc,
  imageAlt,
  className = '',
}: FounderCardProps) {
  return (
    <div
      className={`bg-background relative h-[480px] w-[320px] rounded-[20px] border-[3px] border-[#984D37] shadow-[2px_6px_8px_0px_#2d2a26] sm:h-[580px] sm:w-[400px] sm:rounded-[25px] sm:border-[4px] sm:shadow-[3px_8px_10px_0px_#2d2a26] lg:h-[757px] lg:w-[501px] lg:rounded-[30px] lg:border-[5px] lg:shadow-[4px_10px_10px_0px_#2d2a26] ${className}`}
    >
      {/* Founder Image */}
      <div className="absolute left-1/2 top-[15px] h-[100px] w-[100px] -translate-x-1/2 overflow-hidden rounded-full sm:top-[18px] sm:h-[130px] sm:w-[130px] lg:top-[20px] lg:h-[170px] lg:w-[170px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={170}
          height={170}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Founder Name */}
      <div className="absolute left-1/2 top-[125px] w-[300px] -translate-x-1/2 text-center sm:top-[158px] sm:w-[380px] lg:top-[190px] lg:w-[350px]">
        <h3 className="text-[20px] font-bold leading-normal text-[#984D37] sm:text-[26px] lg:text-[33px]">
          {name}
        </h3>
      </div>

      {/* Founder Title */}
      <div className="absolute left-1/2 top-[160px] w-[300px] -translate-x-1/2 text-center sm:top-[200px] sm:w-[380px] lg:top-[251px] lg:w-[415px]">
        <p className="text-[18px] font-semibold leading-normal text-[#984D37] sm:text-[24px] lg:text-[33px]">
          {title}
        </p>
      </div>

      {/* Founder Description */}
      <div className="absolute left-1/2 top-[210px] w-[300px] -translate-x-1/2 text-center sm:top-[260px] sm:w-[380px] lg:top-[320px] lg:w-[402px]">
        <p className="text-ink-dark text-[14px] leading-normal sm:text-[20px] lg:text-[28px]">
          {description}
        </p>
      </div>
    </div>
  )
}
