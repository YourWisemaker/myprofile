"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface SlideInProps {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right"
  delay?: number
}

export function SlideIn({ children, className, direction = "left", delay = 0 }: SlideInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000",
        isVisible
          ? "opacity-100 translate-x-0"
          : direction === "left"
            ? "opacity-0 -translate-x-16"
            : "opacity-0 translate-x-16",
        className,
      )}
    >
      {children}
    </div>
  )
}

