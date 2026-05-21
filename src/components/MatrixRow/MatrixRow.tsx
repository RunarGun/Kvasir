import { type ReactNode } from "react"

import { Pill, type PillVariant } from "@/components/Pill/Pill"
import { H4 } from "@/components/Typography/H4/H4"
import { H5 } from "@/components/Typography/H5/H5"
import { P2 } from "@/components/Typography/P2/P2"
import { P3 } from "@/components/Typography/P3/P3"
import type { AccentColor } from "@/types"
import { cn } from "@/utils/cn"

import styles from "./MatrixRow.module.sass"

export interface MatrixPill {
  label: string
  variant?: PillVariant
  color?: AccentColor
}

export interface MatrixCell {
  title: string
  description: string
  icon?: ReactNode
  pills?: MatrixPill[]
}

export interface MatrixRowProps {
  category: string
  categoryDescription: string
  categoryColor: AccentColor
  cells: [MatrixCell, MatrixCell, MatrixCell]
}

const categoryClass: Record<AccentColor, string> = {
  beige: styles.catBeige,
  blue: styles.catBlue,
  green: styles.catGreen,
  orange: styles.catOrange,
  red: styles.catRed,
}

export function MatrixRow({
  category,
  categoryDescription,
  categoryColor,
  cells,
}: MatrixRowProps) {
  const isInverse = categoryColor === "red"
  return (
    <div className={styles.row}>
      <aside className={cn(styles.category, categoryClass[categoryColor])}>
        <H4 color={isInverse ? "inverse" : "default"}>{category}</H4>
        <P3 color={isInverse ? "inverseMuted" : "muted"}>{categoryDescription}</P3>
      </aside>
      <div className={styles.cells}>
        {cells.map((cell, i) => (
          <div key={i} className={styles.cell}>
            <div className={styles.cellHeader}>
              {cell.icon}
              <H5>{cell.title}</H5>
            </div>
            <P2 color="muted">{cell.description}</P2>
            {cell.pills && cell.pills.length > 0 && (
              <div className={styles.pills}>
                {cell.pills.map((p, j) => (
                  <Pill key={j} variant={p.variant} color={p.color}>
                    {p.label}
                  </Pill>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
