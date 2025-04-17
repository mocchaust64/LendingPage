import { ReactNode } from "react"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
}

export default function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  const gradientMap = {
    purple: "from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30",
    blue: "from-blue-500/20 to-blue-700/20 hover:from-blue-500/30 hover:to-blue-700/30",
    cyan: "from-cyan-500/20 to-cyan-700/20 hover:from-cyan-500/30 hover:to-cyan-700/30",
    amber: "from-amber-500/20 to-amber-700/20 hover:from-amber-500/30 hover:to-amber-700/30",
    pink: "from-pink-500/20 to-pink-700/20 hover:from-pink-500/30 hover:to-pink-700/30",
    teal: "from-teal-500/20 to-teal-700/20 hover:from-teal-500/30 hover:to-teal-700/30",
    orange: "from-orange-500/20 to-orange-700/20 hover:from-orange-500/30 hover:to-orange-700/30",
    red: "from-red-500/20 to-red-700/20 hover:from-red-500/30 hover:to-red-700/30",
    indigo: "from-indigo-500/20 to-indigo-700/20 hover:from-indigo-500/30 hover:to-indigo-700/30",
  }

  const iconColorMap = {
    purple: "text-purple-500",
    blue: "text-blue-500",
    cyan: "text-cyan-500",
    amber: "text-amber-500",
    pink: "text-pink-500",
    teal: "text-teal-500",
    orange: "text-orange-500",
    red: "text-red-500",
    indigo: "text-indigo-500",
  }

  const borderGlowMap = {
    purple: "before:shadow-purple-500/40",
    blue: "before:shadow-blue-500/40",
    cyan: "before:shadow-cyan-500/40",
    amber: "before:shadow-amber-500/40", 
    pink: "before:shadow-pink-500/40",
    teal: "before:shadow-teal-500/40",
    orange: "before:shadow-orange-500/40",
    red: "before:shadow-red-500/40",
    indigo: "before:shadow-indigo-500/40",
  }

  const gradient = gradientMap[color as keyof typeof gradientMap] || gradientMap.blue
  const iconColor = iconColorMap[color as keyof typeof iconColorMap] || iconColorMap.blue
  const borderGlow = borderGlowMap[color as keyof typeof borderGlowMap] || borderGlowMap.blue

  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl before:absolute before:inset-0 before:z-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100 ${borderGlow}`}>
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${gradient} transition-colors duration-300`}></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 blur-sm group-hover:animate-shine"></div>
      
      <div className="relative z-10">
        <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${iconColor} bg-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600 transition-colors duration-300 group-hover:text-gray-700">{description}</p>
        <div className="flex items-center text-gray-600 transition-colors duration-300 group-hover:text-gray-900">
          <span className="mr-2 text-sm font-medium">Learn more</span>
          <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  )
}
