import { cn } from "@/utils/cn"

import styles from "./Asterisk.module.sass"

export interface AsteriskProps {
  size?: number
  className?: string
}

export function Asterisk({ size = 24, className }: AsteriskProps) {
  return (
    <span
      className={cn(styles.asterisk, className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" width={size} height={size}>
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={i}
            x1="12"
            y1="12"
            x2="12"
            y2="2.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            transform={`rotate(${i * 36} 12 12)`}
          />
        ))}
      </svg>
    </span>
  )
}
