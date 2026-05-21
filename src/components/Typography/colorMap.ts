import type { TextColor } from "./types"

export const colorVar: Record<TextColor, string> = {
  default: "var(--color-text)",
  muted: "var(--color-text-muted)",
  subtle: "var(--color-text-subtle)",
  beige: "var(--color-accent-beige)",
  blue: "var(--color-accent-blue)",
  green: "var(--color-accent-green)",
  orange: "var(--color-accent-orange)",
  red: "var(--color-accent-red)",
}
