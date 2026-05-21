import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/utils/cn"

import { colorVar } from "../colorMap"
import type { ParagraphVariant, TextColor } from "../types"
import styles from "./P1.module.sass"

export interface P1Props extends ComponentPropsWithoutRef<"p"> {
  variant?: ParagraphVariant
  color?: TextColor
}

export function P1({ variant = "default", color = "default", className, style, ...rest }: P1Props) {
  const variantClass = variant === "lead" ? styles.variantLead : undefined
  return (
    <p
      className={cn(styles.p1, variantClass, className)}
      style={{ color: colorVar[color], ...style }}
      {...rest}
    />
  )
}
