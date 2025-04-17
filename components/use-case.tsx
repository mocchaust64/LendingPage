import { Wallet, Building2, Users2, LucideIcon } from "lucide-react"
import Image from "next/image"

interface UseCaseProps {
  title: string
  description: string
  icon: string | React.ReactNode
  color?: "purple" | "blue" | "orange" | "teal" | "pink" | "indigo"
}

export default function UseCase({ title, description, icon, color = "blue" }: UseCaseProps) {
  // Color maps for different elements
  const colorMap = {
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      hoverBorder: "group-hover:border-purple-300",
      titleColor: "text-purple-800", 
      iconBg: "bg-purple-100",
      iconGlow: "shadow-purple-200",
      gradientFrom: "from-purple-500/5",
      gradientTo: "to-purple-500/10",
      hoverShadow: "group-hover:shadow-purple-100/40",
      iconColor: "text-purple-600"
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      hoverBorder: "group-hover:border-blue-300",
      titleColor: "text-blue-800",
      iconBg: "bg-blue-100", 
      iconGlow: "shadow-blue-200",
      gradientFrom: "from-blue-500/5",
      gradientTo: "to-blue-500/10",
      hoverShadow: "group-hover:shadow-blue-100/40",
      iconColor: "text-blue-600"
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      hoverBorder: "group-hover:border-orange-300",
      titleColor: "text-orange-800",
      iconBg: "bg-orange-100",
      iconGlow: "shadow-orange-200",
      gradientFrom: "from-orange-500/5",
      gradientTo: "to-orange-500/10",
      hoverShadow: "group-hover:shadow-orange-100/40",
      iconColor: "text-orange-600"
    },
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      hoverBorder: "group-hover:border-teal-300",
      titleColor: "text-teal-800",
      iconBg: "bg-teal-100",
      iconGlow: "shadow-teal-200",
      gradientFrom: "from-teal-500/5",
      gradientTo: "to-teal-500/10",
      hoverShadow: "group-hover:shadow-teal-100/40",
      iconColor: "text-teal-600"
    },
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      hoverBorder: "group-hover:border-pink-300",
      titleColor: "text-pink-800",
      iconBg: "bg-pink-100",
      iconGlow: "shadow-pink-200",
      gradientFrom: "from-pink-500/5",
      gradientTo: "to-pink-500/10",
      hoverShadow: "group-hover:shadow-pink-100/40",
      iconColor: "text-pink-600"
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      hoverBorder: "group-hover:border-indigo-300",
      titleColor: "text-indigo-800",
      iconBg: "bg-indigo-100",
      iconGlow: "shadow-indigo-200",
      gradientFrom: "from-indigo-500/5",
      gradientTo: "to-indigo-500/10",
      hoverShadow: "group-hover:shadow-indigo-100/40",
      iconColor: "text-indigo-600"
    }
  }

  const styles = colorMap[color]

  return (
    <div className={`group relative rounded-2xl border ${styles.border} ${styles.bg} p-6 transition-all duration-300 hover:shadow-xl ${styles.hoverShadow} hover:-translate-y-1 ${styles.hoverBorder}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradientFrom} ${styles.gradientTo} rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 blur-sm group-hover:animate-shine"></div>
      
      <div className="relative mb-6 flex items-center justify-center">
        <div className={`h-20 w-20 overflow-hidden rounded-2xl ${styles.iconBg} p-2 shadow-lg ${styles.iconGlow} transition-transform duration-300 group-hover:scale-110 flex items-center justify-center`}>
          {typeof icon === 'string' ? (
            <div className="relative h-full w-full">
              <Image
                src={icon}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className={`h-12 w-12 ${styles.iconColor}`}>
              {icon}
            </div>
          )}
        </div>
      </div>

      <h3 className={`mb-3 text-center text-xl font-bold ${styles.titleColor}`}>{title}</h3>
      <p className="text-center text-gray-700">{description}</p>
    </div>
  )
}
