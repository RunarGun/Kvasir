import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/utils/cn"

import { colorVar } from "../colorMap"
import type { HeadingVariant, TextColor } from "../types"
import styles from "./H4.module.sass"

export interface H4Props extends ComponentPropsWithoutRef<"h4"> {
  variant?: HeadingVariant
  color?: TextColor
}

export function H4({ variant = "default", color = "default", className, style, ...rest }: H4Props) {
  const variantClass = variant === "display" ? styles.variantDisplay : undefined
  return (
    <h4
      className={cn(styles.h4, variantClass, className)}
      style={{ color: colorVar[color], ...style }}
      {...rest}
    />
  )
}
