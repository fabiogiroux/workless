import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass"
  hover?: boolean
}

export function Card({
  variant = "default",
  hover = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 md:p-8",
        variant === "glass" ? "glass" : "bg-surface-2 border border-border",
        hover && "glass-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
