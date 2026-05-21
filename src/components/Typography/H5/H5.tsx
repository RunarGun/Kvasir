import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/utils/cn"

import { colorVar } from "../colorMap"
import type { HeadingVariant, TextColor } from "../types"
import styles from "./H5.module.sass"

export interface H5Props extends ComponentPropsWithoutRef<"h5"> {
  variant?: HeadingVariant
  color?: TextColor
}

export function H5({ variant = "default", color = "default", className, style, ...rest }: H5Props) {
  const variantClass = variant === "display" ? styles.variantDisplay : undefined
  return (
    <h5
      className={cn(styles.h5, variantClass, className)}
      style={{ color: colorVar[color], ...style }}
      {...rest}
    />
  )
}
