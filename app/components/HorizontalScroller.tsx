'use client'

import { useRef, useEffect, useState } from 'react'

type HorizontalScrollerProps = {
  items: string[]
  speed?: number // pixels per second
}

export default function HorizontalScroller({ items, speed = 50 }: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [shouldScroll, setShouldScroll] = useState(false)

  // Measure scroll width and decide if scrolling is needed
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const contentWidth = contentRef.current.scrollWidth

    if (contentWidth > containerWidth) {
      setShouldScroll(true)
      setScrollWidth(contentWidth)
    } else {
      setShouldScroll(false)
      setOffset(0)
    }
  }, [items])

  // Animation loop
  useEffect(() => {
    if (!shouldScroll) return
    let animationFrame: number

    const step = () => {
      if (!isPaused) {
        setOffset((prev) => {
          const next = prev + speed / 60
          return next >= scrollWidth ? 0 : next
        })
      }
      animationFrame = requestAnimationFrame(step)
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused, speed, scrollWidth, shouldScroll])

  // Duplicate items for seamless scroll only if needed
  const scrollerItems = shouldScroll ? [...items, ...items] : items

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden whitespace-nowrap mt-6 ${
        !shouldScroll ? 'flex justify-center' : ''
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={contentRef}
        className="flex gap-4"
        style={{
          transform: shouldScroll ? `translateX(-${offset}px)` : 'none',
          transition: shouldScroll ? 'transform 0.016s linear' : 'none',
        }}
      >
        {scrollerItems.map((item, i) => (
          <span
            key={i}
            className="rounded-full px-3 py-1 border border-blue-100 bg-blue-50 text-blue-700 dark:bg-gray-800 dark:text-blue-400 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-200 flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
