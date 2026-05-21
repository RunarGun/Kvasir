import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/utils/cn"

import { colorVar } from "../colorMap"
import type { HeadingVariant, TextColor } from "../types"
import styles from "./H1.module.sass"

export interface H1Props extends ComponentPropsWithoutRef<"h1"> {
  variant?: HeadingVariant
  color?: TextColor
}

export function H1({ variant = "default", color = "default", className, style, ...rest }: H1Props) {
  const variantClass = variant === "display" ? styles.variantDisplay : undefined
  return (
    <h1
      className={cn(styles.h1, variantClass, className)}
      style={{ color: colorVar[color], ...style }}
      {...rest}
    />
  )
}
