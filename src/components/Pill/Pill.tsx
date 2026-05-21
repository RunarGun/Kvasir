import { type ComponentPropsWithoutRef } from "react"

import type { AccentColor } from "@/types"
import { cn } from "@/utils/cn"

import styles from "./Pill.module.sass"

export type PillVariant = "outline" | "solid"

export interface PillProps extends ComponentPropsWithoutRef<"span"> {
  variant?: PillVariant
  color?: AccentColor
}

const colorClass: Record<AccentColor, string> = {
  beige: styles.colorBeige,
  blue: styles.colorBlue,
  green: styles.colorGreen,
  orange: styles.colorOrange,
  red: styles.colorRed,
}

export function Pill({
  variant = "outline",
  color = "beige",
  className,
  ...rest
}: PillProps) {
  const variantClass = variant === "solid" ? styles.variantSolid : styles.variantOutline
  return (
    <span
      className={cn(styles.pill, variantClass, colorClass[color], className)}
      {...rest}
    />
  )
}
