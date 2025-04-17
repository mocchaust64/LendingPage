"use client"

import { useEffect, useRef, useState } from "react"

export default function RoadmapTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const milestones = [
    {
      period: "Q2 2025",
      title: "MVP Launch",
      items: [
        "Finalize multisig wallet with WebAuthn and Guardian model",
        "Support transactions on Solana devnet",
        "Launch Web2-friendly interface with English and Vietnamese support",
        "Open early access sign-ups for beta testers",
      ],
    },
    {
      period: "Q3 2025",
      title: "Mainnet and Enterprise Integration",
      items: [
        "Deploy wallet on Solana mainnet",
        "Introduce API for enterprise asset management integration",
        "Enhance Guardian management (add/remove Guardians seamlessly)",
        "Enable multi-device sync with Firebase",
      ],
    },
    {
      period: "Q4 2025",
      title: "Feature Expansion",
      items: [
        "Integrate with Solana DeFi protocols (e.g., Serum, Raydium)",
        "Launch portfolio tracking for enterprise asset management",
        "Add support for additional languages (Japanese, Korean, Spanish)",
      ],
    },
    {
      period: "Q1 2026",
      title: "Enhanced Security and Customization",
      items: [
        "Implement multi-factor authentication",
        "Support customizable signature thresholds and Guardian roles for large enterprises",
        "Conduct third-party security audits",
      ],
    },
    {
      period: "Q2 2026",
      title: "Global Expansion",
      items: [
        "Expand support for other blockchains (Ethereum, Polygon)",
        "Launch official iOS and Android apps",
        "Partner with DeFi businesses and investment funds for Gokei Wallet integration",
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5 },
    )

    const milestoneElements = timelineRef.current?.querySelectorAll(".milestone-item")
    milestoneElements?.forEach((el) => observer.observe(el))

    return () => {
      milestoneElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="relative mx-auto max-w-4xl" ref={timelineRef}>
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500 to-blue-500 opacity-50"></div>
      <div className="space-y-16">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`milestone-item relative transition-all duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-50"
            }`}
            data-index={index}
          >
            <div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center md:gap-8`}>
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="mb-3 inline-block rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 text-sm font-semibold text-white">
                    {milestone.period}
                  </div>
                  <h3 className="mb-4 text-xl font-bold">{milestone.title}</h3>
                  <ul className="space-y-3">
                    {milestone.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="mr-2 mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md transition-all duration-300 ${
                  activeIndex === index ? "scale-125" : "scale-100"
                }`}
              >
                <span className="text-sm font-bold text-white">{index + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
