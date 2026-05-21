import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/utils/cn"

import { colorVar } from "../colorMap"
import type { HeadingVariant, TextColor } from "../types"
import styles from "./H2.module.sass"

export interface H2Props extends ComponentPropsWithoutRef<"h2"> {
  variant?: HeadingVariant
  color?: TextColor
}

export function H2({ variant = "default", color = "default", className, style, ...rest }: H2Props) {
  const variantClass = variant === "display" ? styles.variantDisplay : undefined
  return (
    <h2
      className={cn(styles.h2, variantClass, className)}
      style={{ color: colorVar[color], ...style }}
      {...rest}
    />
  )
}
