"use client"

import { useId, useMemo, useState } from "react"
import styles from "./Picture.module.css"

function mix(n: number): number {
  n |= 0
  n ^= n >>> 16
  n = Math.imul(n, 0x85ebca6b)
  n ^= n >>> 13
  n = Math.imul(n, 0xc2b2ae35)
  n ^= n >>> 16
  return n
}

type Block = { col: number; row: number; order: number }

function buildBlocks(cols: number, rows: number): Block[] {
  const cells = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push({ col: c, row: r, h: mix(c + r * cols + 1) })
    }
  }
  cells.sort((a, b) => a.h - b.h)
  return cells.map((b, i) => ({ col: b.col, row: b.row, order: i }))
}

export function Picture({
  children,
  hover,
  cols = 16,
  rows = 16,
  className
}: {
  children: React.ReactNode
  hover: string
  cols?: number
  rows?: number
  className?: string
}) {
  const [revealed, setRevealed] = useState(false)
  const blocks = useMemo(() => buildBlocks(cols, rows), [cols, rows])
  const filterId = `tint-${useId().replace(/:/g, "")}`

  return (
    <div
      className={`${styles.picture} ${revealed ? styles.revealed : ""} ${className || ""}`}
      onClick={() => setRevealed(true)}
      style={{ "--tint": `url(#${filterId})` } as React.CSSProperties}
    >
      <svg
        className={styles.filter}
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feFlood result="flood" />
          <feBlend
            in="SourceGraphic"
            in2="flood"
            mode="luminosity"
            result="blended"
          />
          <feComposite in="blended" in2="SourceAlpha" operator="in" />
        </filter>
      </svg>
      <div
        className={styles.image}
        style={
          {
            "--cols": cols,
            "--rows": rows,
            "--total": cols * rows
          } as React.CSSProperties
        }
      >
        {children}
        <div className={styles.shimmer} aria-hidden="true">
          {blocks.map(({ col, row, order }) => (
            <div
              key={`s-${col}-${row}`}
              className={styles.glow}
              style={
                {
                  "--col": col,
                  "--row": row,
                  "--order": order
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        <div
          className={styles.hover}
          style={{ "--hover-src": `url(${hover})` } as React.CSSProperties}
        >
          {blocks.map(({ col, row, order }) => (
            <div
              key={`${col}-${row}`}
              className={styles.block}
              style={
                {
                  "--col": col,
                  "--row": row,
                  "--order": order
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
