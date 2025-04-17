"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

export default function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay * 1000)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [delay])

  const getInitialStyles = () => {
    switch (direction) {
      case "up":
        return "translate-y-10"
      case "down":
        return "translate-y-[-10px]"
      case "left":
        return "translate-x-10"
      case "right":
        return "translate-x-[-10px]"
      default:
        return "translate-y-10"
    }
  }

  return (
    <div
      ref={sectionRef}
      className={`${className} ${getInitialStyles()} opacity-0 transition-all duration-700`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
