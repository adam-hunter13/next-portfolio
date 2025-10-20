'use client'

import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export type Recommendation = {
  id: number
  author: string
  authorTitle: string
  company: string
  relationship?: string
  recommendationPartOne?: string
  recommendationPartTwo?: string
  recommendationPartThree?: string
}

type TextCarouselProps = {
  data: Recommendation[]
  interval?: number // seconds
}

export default function TextCarousel({ data, interval = 10 }: TextCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % data.length)
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1))

  // Auto rotate
  useEffect(() => {
    if (isPaused) return
    const id = setInterval(nextSlide, interval * 1000)
    return () => clearInterval(id)
  }, [isPaused, interval, data.length])

  const currentRec = data[current]
  const paragraphs = [
    currentRec.recommendationPartOne,
    currentRec.recommendationPartTwo,
    currentRec.recommendationPartThree,
  ].filter(Boolean)

  return (
    <div
      className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 text-left group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Text content */}
      <div className="space-y-5 pt-8 text-gray-700 dark:text-gray-300">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-base sm:text-lg leading-relaxed break-words">
            {p}
          </p>
        ))}
      </div>

      {/* Author info */}
      <div className="mt-6 text-sm sm:text-base">
        <p className="font-semibold text-gray-900 dark:text-gray-100">{currentRec.author}</p>
        <p className="text-gray-600 dark:text-gray-400">
          {currentRec.authorTitle} • {currentRec.company}
        </p>
        {currentRec.relationship && (
          <p className="text-xs text-gray-500 mt-1">{currentRec.relationship}</p>
        )}
      </div>

      {/* Bottom controls: arrows + dots */}
      <div className="flex flex-row items-center justify-center mt-8 space-y-2 sm:space-y-0 sm:space-x-4">
        {/* Navigation arrows */}
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

        {/* Dots */}
        <div className="flex gap-2 mt-2 sm:mt-0">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 cursor-pointer'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

          <button
            onClick={nextSlide}
            aria-label="Next"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

      </div>
    </div>
  )
}
