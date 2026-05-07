import * as React from "react"
import { cn } from "@/lib/utils"

interface HexagonProps extends React.SVGAttributes<SVGElement> {
  size?: number
  variant?: "outline" | "filled"
  strokeWidth?: number
}

/**
 * Hexagon SVG component — assinatura visual da Workless.
 * Usado em: ícones de seção (outline) + background pattern (filled translúcido).
 */
export function Hexagon({
  size = 64,
  variant = "outline",
  strokeWidth = 1.5,
  className,
  ...props
}: HexagonProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
      aria-hidden="true"
      {...props}
    >
      <polygon
        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
        stroke={variant === "outline" ? "currentColor" : "none"}
        strokeWidth={strokeWidth}
        fill={variant === "filled" ? "currentColor" : "none"}
      />
    </svg>
  )
}

/**
 * HexagonPattern — background sutil pra Hero e CTA Final.
 * Distribui hexágonos translúcidos em grid pseudo-aleatório.
 */
export function HexagonPattern({ density = "low" }: { density?: "low" | "medium" }) {
  const opacity = density === "low" ? 0.04 : 0.06
  const size = density === "low" ? 80 : 64

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id="hex-bg"
            x="0"
            y="0"
            width={size}
            height={size * 0.866 * 2}
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points={`${size / 2},2 ${size - 2},${size * 0.25} ${size - 2},${size * 0.75} ${size / 2},${size - 2} 2,${size * 0.75} 2,${size * 0.25}`}
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
            <polygon
              points={`${size},${size * 0.866} ${size * 1.5 - 2},${size * 1.116} ${size * 1.5 - 2},${size * 1.616} ${size},${size * 1.866 - 2} ${size * 0.5 + 2},${size * 1.616} ${size * 0.5 + 2},${size * 1.116}`}
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#hex-bg)" />
      </svg>
    </div>
  )
}
