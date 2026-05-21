import { type ComponentPropsWithoutRef, forwardRef } from "react"

import type { AccentColor, Size } from "@/types"
import { cn } from "@/utils/cn"

import styles from "./Button.module.sass"

type ButtonVariant = "solid" | "outline" | "ghost"

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant
  color?: AccentColor
  size?: Size
}

const variantClass: Record<ButtonVariant, string> = {
  solid: styles.variantSolid,
  outline: styles.variantOutline,
  ghost: styles.variantGhost,
}

const colorClass: Record<AccentColor, string> = {
  beige: styles.colorBeige,
  blue: styles.colorBlue,
  green: styles.colorGreen,
  orange: styles.colorOrange,
  red: styles.colorRed,
}

const sizeClass: Record<Size, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "solid", color = "beige", size = "md", className, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(styles.button, variantClass[variant], colorClass[color], sizeClass[size], className)}
      {...rest}
    />
  )
})
