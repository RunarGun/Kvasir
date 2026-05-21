import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/utils/cn"

import { colorVar } from "../colorMap"
import type { HeadingVariant, TextColor } from "../types"
import styles from "./H6.module.sass"

export interface H6Props extends ComponentPropsWithoutRef<"h6"> {
  variant?: HeadingVariant
  color?: TextColor
}

export function H6({ variant = "default", color = "default", className, style, ...rest }: H6Props) {
  const variantClass = variant === "display" ? styles.variantDisplay : undefined
  return (
    <h6
      className={cn(styles.h6, variantClass, className)}
      style={{ color: colorVar[color], ...style }}
      {...rest}
    />
  )
}
