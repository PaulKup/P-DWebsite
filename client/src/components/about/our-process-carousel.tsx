'use client'

import { useState, useRef, useEffect } from 'react'
import { ProcessCard } from './process-card'

const processSteps = [
  {
    step: 1,
    title: 'Discovery Call',
    description:
      "Our discovery call is designed to help us understand your business, brand personality, and what you want your website to achieve. We'll ask key questions and collaborate with you to create a plan that aligns with your goals.",
  },
  {
    step: 2,
    title: 'Proposal & Contract',
    description:
      "After our call, we'll send a recap and proposal with scope, timeline, and pricing. Once approved, we'll request your brand assets, logins, content, and example sites for design inspiration.",
  },
  {
    step: 3,
    title: 'Layout Planning',
    description:
      "We begin by creating flowcharts, wireframes, and mockups that map out your site's structure and user journey.",
  },
  {
    step: 4,
    title: 'Copy Writing',
    description:
      'We craft SEO optimized copy that embodies your brand voice and motivates visitors to take action.',
  },
  {
    step: 5,
    title: 'Design Creation',
    description:
      'We produce a polished mockup so you can review and approve the visual direction before development begins.',
  },
  {
    step: 6,
    title: 'Asset Preparation',
    description:
      'We compile all fonts, images, graphics, and other design elements for consistent branding, and outline the animations, transitions, and interactive features that will enhance the user experience.',
  },
  {
    step: 7,
    title: 'Development',
    description:
      'Our development team builds the site to match the approved design, while we continue collaborating to ensure accuracy and quality.',
  },
  {
    step: 8,
    title: 'Revisions',
    description:
      'We gather your feedback and make adjustments to ensure the final product aligns perfectly with your vision.',
  },
  {
    step: 9,
    title: 'Review & Launch',
    description:
      'We conduct a final walkthrough together, confirm all details, and prepare your site for a successful launch.',
  },
]

export function OurProcessCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Calculate cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth
      if (width >= 1536) {
        // 2xl breakpoint
        setCardsPerView(4)
      } else if (width >= 1024) {
        // lg breakpoint
        setCardsPerView(3)
      } else if (width >= 768) {
        // md breakpoint
        setCardsPerView(2)
      } else {
        setCardsPerView(1)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, processSteps.length - cardsPerView)

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    setScrollLeft(currentIndex)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return

    const x = clientX
    const walk = (startX - x) / 100 // Adjust sensitivity
    const newIndex = Math.round(scrollLeft + walk)

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex <= maxIndex) {
      setCurrentIndex(newIndex)
    }
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleEnd()
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleEnd()
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      }
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('keydown', handleKeyDown)
      return () => carousel.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, maxIndex])

  // Calculate transform for carousel - responsive card width
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width >= 1024) return 346 // lg breakpoint
      if (width >= 640) return 320 // sm breakpoint
      return 280 // mobile
    }
    return 346 // fallback for SSR
  }

  const getGap = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width >= 1024) return 45 // lg breakpoint
      if (width >= 640) return 30 // sm breakpoint
      return 20 // mobile
    }
    return 45 // fallback for SSR
  }

  const cardWidth = getCardWidth()
  const gap = getGap()
  const translateX = -(currentIndex * (cardWidth + gap))

  // Calculate total number of indicators needed
  const totalIndicators = maxIndex + 1

  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] max-w-none overflow-hidden">
      {/* Section Title */}
      <div className="mb-8 px-4 text-center sm:mb-10 lg:mb-12">
        <h2 className="text-ink-dark text-[32px] font-light leading-[1.1] tracking-[-2px] sm:text-[48px] sm:tracking-[-3px] md:text-[60px] lg:text-[95px] lg:tracking-[-4.75px]">
          Our Process
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex cursor-grab select-none gap-[20px] pl-[20px] transition-transform duration-500 ease-out active:cursor-grabbing sm:gap-[30px] sm:pl-[40px] lg:gap-[45px] lg:pl-[70px]"
          style={{ transform: `translateX(${translateX}px)` }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          tabIndex={0}
          role="region"
          aria-label="Our process carousel"
          aria-live="polite"
        >
          {processSteps.map((process) => (
            <ProcessCard
              key={process.step}
              step={process.step}
              title={process.title}
              description={process.description}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={goToPrev}
            className="bg-brand-accent text-background hover:bg-brand-accentDeep absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-colors"
            aria-label="Previous slides"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={goToNext}
            className="bg-brand-accent text-background hover:bg-brand-accentDeep absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-colors"
            aria-label="Next slides"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Indicators */}
      {totalIndicators > 1 && (
        <div className="mt-8 flex justify-center gap-3">
          {Array.from({ length: totalIndicators }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-[34px] w-[34px] rounded-full transition-colors ${
                index === currentIndex ? 'bg-brand-accent' : 'bg-sand-light hover:bg-sand-medium'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
