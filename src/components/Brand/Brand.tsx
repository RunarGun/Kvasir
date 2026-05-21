import { Asterisk } from "@/components/Asterisk/Asterisk"

import styles from "./Brand.module.sass"

export interface BrandProps {
  name: string
  tagline?: string
  size?: "md" | "lg"
}

export function Brand({ name, tagline, size = "lg" }: BrandProps) {
  const markSize = size === "lg" ? 44 : 28
  return (
    <div className={size === "lg" ? styles.brandLg : styles.brandMd}>
      <Asterisk size={markSize} />
      <span className={styles.title}>
        {name}
        {tagline ? <span className={styles.tagline}> {tagline}</span> : null}
      </span>
    </div>
  )
}
