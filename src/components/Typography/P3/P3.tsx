import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/utils/cn"

import { colorVar } from "../colorMap"
import type { ParagraphVariant, TextColor } from "../types"
import styles from "./P3.module.sass"

export interface P3Props extends ComponentPropsWithoutRef<"p"> {
  variant?: ParagraphVariant
  color?: TextColor
}

export function P3({ variant = "default", color = "default", className, style, ...rest }: P3Props) {
  const variantClass = variant === "lead" ? styles.variantLead : undefined
  return (
    <p
      className={cn(styles.p3, variantClass, className)}
      style={{ color: colorVar[color], ...style }}
      {...rest}
    />
  )
}
