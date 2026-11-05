"use client"

import { useState } from "react"
import styles from "./Playground.module.css"

type Hint = { input: string; action: string }

export type PlaygroundProps = {
  children: React.ReactNode
  /** Lets visitors edit the demo's text in place */
  editable?: boolean
  /** Shown above the demo; defaults to "Playground" */
  label?: string
  /** What to try, e.g. { input: "Click", action: "Toggle" } */
  hints?: Hint[]
  /** Shows a reset button that puts the demo back to how it started. Leave it
   * off for demos with nothing to reset, or that keep state outside the box
   * (like tags, which live in the URL). */
  resettable?: boolean
}

// A spec sheet: registration marks around a pixel dot grid, with a status LED
export function Playground({
  children,
  editable = false,
  label = "Playground",
  hints = [],
  resettable = false
}: PlaygroundProps) {
  // Changing the key remounts the demo, putting its state back to the start
  const [key, setKey] = useState(0)

  return (
    <figure className={styles.playground}>
      <header className={styles.bar}>
        <span className={styles.label}>
          <i className={styles.led} aria-hidden="true" />
          {label}
        </span>
      </header>
      <div className={styles.stage}>
        <span className={`${styles.mark} ${styles.tl}`} aria-hidden="true" />
        <span className={`${styles.mark} ${styles.tr}`} aria-hidden="true" />
        <span className={`${styles.mark} ${styles.bl}`} aria-hidden="true" />
        <span className={`${styles.mark} ${styles.br}`} aria-hidden="true" />
        <div
          key={key}
          className={styles.content}
          contentEditable={editable}
          suppressContentEditableWarning
        >
          {children}
        </div>
      </div>
      {(hints.length > 0 || resettable) && (
        <footer className={styles.bar}>
          {hints.length > 0 && (
            <ul className={styles.hints}>
              {hints.map(({ input, action }) => (
                <li key={input}>
                  <kbd>{input}</kbd>
                  {action}
                </li>
              ))}
            </ul>
          )}
          {resettable && (
            <button
              type="button"
              className={styles.reset}
              onClick={() => setKey((k) => k + 1)}
            >
              Reset
            </button>
          )}
        </footer>
      )}
    </figure>
  )
}
