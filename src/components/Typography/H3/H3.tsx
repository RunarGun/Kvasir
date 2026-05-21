import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/utils/cn"

import { colorVar } from "../colorMap"
import type { HeadingVariant, TextColor } from "../types"
import styles from "./H3.module.sass"

export interface H3Props extends ComponentPropsWithoutRef<"h3"> {
  variant?: HeadingVariant
  color?: TextColor
}

export function H3({ variant = "default", color = "default", className, style, ...rest }: H3Props) {
  const variantClass = variant === "display" ? styles.variantDisplay : undefined
  return (
    <h3
      className={cn(styles.h3, variantClass, className)}
      style={{ color: colorVar[color], ...style }}
      {...rest}
    />
  )
}
