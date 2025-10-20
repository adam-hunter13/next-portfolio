"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from "@heroicons/react/24/outline"

type Slide = {
  image: string
  alt: string
  title?: string
  location?: string
}

type CarouselProps = {
  slides: Slide[]
  showArrows?: boolean
  showOverlay?: boolean
  autoPlay?: boolean
  interval?: number
  className?: string
}

export default function Carousel({
  slides,
  showArrows = false,
  showOverlay = false,
  autoPlay = true,
  interval = 4000,
  className = "relative w-full max-w-3xl mx-auto h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg"
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1))
  const nextSlide = () => setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1))

  // Auto-play
  useEffect(() => {
    if (autoPlay && !isPaused) {
      intervalRef.current = setInterval(nextSlide, interval)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [autoPlay, isPaused, interval])

  return (
    <div
      className={`${className} group bg-white dark:bg-gray-900 transition-colors duration-300`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative h-full">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* Overlay */}
            {showOverlay && (slide.title || slide.location) && (
              <div className="absolute top-0 sm:bottom-0 sm:top-auto left-0 w-full bg-black/40 text-white p-3 text-base md:text-lg font-medium flex justify-between rounded-b-xl">
                <span>{slide.title}</span>
                {slide.location && (
                  <span className="flex flex-row gap-2 items-center">
                    <MapPinIcon className="w-6 h-6" />
                    {slide.location}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Prev / Next Buttons */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 dark:bg-white/20 p-2 rounded-full text-white dark:text-gray-900 hover:bg-black/70 dark:hover:bg-white/40 transition"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 dark:bg-white/20 p-2 rounded-full text-white dark:text-gray-900 hover:bg-black/70 dark:hover:bg-white/40 transition"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-blue-600 dark:bg-blue-400"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
