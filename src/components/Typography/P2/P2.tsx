import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/utils/cn"

import { colorVar } from "../colorMap"
import type { ParagraphVariant, TextColor } from "../types"
import styles from "./P2.module.sass"

export interface P2Props extends ComponentPropsWithoutRef<"p"> {
  variant?: ParagraphVariant
  color?: TextColor
}

export function P2({ variant = "default", color = "default", className, style, ...rest }: P2Props) {
  const variantClass = variant === "lead" ? styles.variantLead : undefined
  return (
    <p
      className={cn(styles.p2, variantClass, className)}
      style={{ color: colorVar[color], ...style }}
      {...rest}
    />
  )
}
