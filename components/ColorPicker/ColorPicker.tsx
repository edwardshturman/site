"use client"

import { useState } from "react"
import { type Season } from "@/lib/seasons"
import { useTheme } from "@/components/ThemeProvider"

import styles from "./ColorPicker.module.css"

function colorFor(hue: number, alpha = 1) {
  const h = String(hue).padStart(3, "0")
  const a = alpha.toFixed(1)
  return `hsla(${h}deg, 100%, 050%, ${a})`
}

export function ColorPicker() {
  const { season: active, seasons, setSeason } = useTheme()
  const [dismissed, setDismissed] = useState(false)

  function pick(season: Season) {
    setSeason(season)
    setDismissed(true)
  }

  const previous = seasons
    .filter((s) => s.order < active.order)
    .sort((a, b) => a.order - b.order)
  const later = seasons
    .filter((s) => s.order > active.order)
    .sort((a, b) => a.order - b.order)

  function renderOption(s: Season) {
    return (
      <button
        key={s.label}
        type="button"
        role="listitem"
        className={styles.option}
        onClick={() => pick(s)}
      >
        <span
          className={styles.swatch}
          style={{ background: colorFor(s.hue) }}
        />
        <span className={styles.label}>{s.label}</span>
      </button>
    )
  }

  return (
    <div
      className={`${styles.picker}${dismissed ? ` ${styles.dismissed}` : ""}`}
      onMouseLeave={() => setDismissed(false)}
      onBlur={() => setDismissed(false)}
    >
      {previous.length > 0 && (
        <div
          className={styles.previous}
          role="list"
          aria-label="Previous seasons"
        >
          {previous.map(renderOption)}
        </div>
      )}
      <button
        type="button"
        aria-label={`Current accent color: ${active.label}`}
        className={styles.dot}
      />
      <span className={styles.activeLabel} aria-hidden="true">
        {active.label}
      </span>
      {later.length > 0 && (
        <div className={styles.later} role="list" aria-label="Later seasons">
          {later.map(renderOption)}
        </div>
      )}
    </div>
  )
}
