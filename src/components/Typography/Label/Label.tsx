import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/utils/cn"

import { colorVar } from "../colorMap"
import type { LabelVariant, TextColor } from "../types"
import styles from "./Label.module.sass"

export interface LabelProps extends ComponentPropsWithoutRef<"span"> {
  variant?: LabelVariant
  color?: TextColor
}

export function Label({
  variant = "default",
  color = "default",
  className,
  style,
  ...rest
}: LabelProps) {
  const variantClass = variant === "pill" ? styles.variantPill : undefined
  return (
    <span
      className={cn(styles.label, variantClass, className)}
      style={{ color: colorVar[color], ...style }}
      {...rest}
    />
  )
}
