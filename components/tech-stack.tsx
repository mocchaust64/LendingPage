"use client"

import { useEffect, useRef } from "react"

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null)

  const technologies = [
    {
      name: "Solana",
      logo: "/Solana_logo.png",
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverBorderColor: "group-hover:border-purple-400",
    },
    {
      name: "WebAuthn",
      logo: "/webauthn.png",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverBorderColor: "group-hover:border-blue-400",
    },
    {
      name: "React",
      logo: "/react.svg",
      color: "from-cyan-500 to-cyan-600",
      textColor: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      hoverBorderColor: "group-hover:border-cyan-400",
    },
    {
      name: "Next.js",
      logo: "/nextjs.jpeg",
      color: "from-gray-700 to-gray-800",
      textColor: "text-gray-700",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      hoverBorderColor: "group-hover:border-gray-400",
    },
    {
      name: "Firebase",
      logo: "/logo-firebase.png",
      color: "from-amber-500 to-orange-600",
      textColor: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      hoverBorderColor: "group-hover:border-amber-400",
    },
    {
      name: "TypeScript",
      logo: "/ts.png",
      color: "from-blue-600 to-blue-700",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverBorderColor: "group-hover:border-blue-400",
    },
    {
      name: "TailwindCSS",
      logo: "/Tailwind_CSS_Logo.svg.png",
      color: "from-teal-500 to-teal-600",
      textColor: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      hoverBorderColor: "group-hover:border-teal-400",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const techItems = containerRef.current?.querySelectorAll(".tech-item")
    techItems?.forEach((item) => observer.observe(item))

    return () => {
      techItems?.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7" ref={containerRef}>
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="tech-item flex flex-col items-center opacity-0 transition-all duration-500"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div
            className={`group relative h-24 w-24 overflow-hidden rounded-2xl border-2 ${tech.borderColor} ${tech.bgColor} p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${tech.hoverBorderColor}`}
          >
            <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${tech.color} opacity-0 scale-75 transition-all duration-500 group-hover:opacity-10 group-hover:scale-100`}></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 blur-xl group-hover:animate-shine"></div>
            <div className="relative h-full w-full flex items-center justify-center">
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="h-auto w-full object-contain transition-all duration-500 grayscale group-hover:grayscale-0 transform group-hover:scale-110" 
              />
            </div>
          </div>
          <span className={`mt-3 font-medium transition-colors duration-300 ${tech.textColor}`}>{tech.name}</span>
        </div>
      ))}
    </div>
  )
}
