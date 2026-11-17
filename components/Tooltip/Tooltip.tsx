"use client"

import { useEffect, useEffectEvent, useState } from "react"
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip"

import styles from "./Tooltip.module.css"

export interface TooltipProps {
  content: React.ReactNode
  // The trigger; rendered as-is, so it should be focusable (a link or button)
  children: React.ReactElement
  side?: "top" | "right" | "bottom" | "left"
  // Closes the tooltip instantly and keeps it closed
  disabled?: boolean
  // Called once a disabled tooltip has fully closed, after which it won't
  // re-render on its own. Start view transitions from here: any render while
  // one is starting makes React skip it.
  onSettled?: () => void
}

// The tooltip is visual only: give the trigger its own accessible name
export function Tooltip({
  content,
  children,
  side = "top",
  disabled = false,
  onSettled
}: TooltipProps) {
  // Whether the popup is on screen, including while it animates out
  const [mounted, setMounted] = useState(false)

  const settle = useEffectEvent(() => onSettled?.())
  useEffect(() => {
    if (disabled && !mounted) settle()
  }, [disabled, mounted])

  return (
    <BaseTooltip.Root
      disabled={disabled}
      onOpenChange={(open) => open && setMounted(true)}
      onOpenChangeComplete={(open) => !open && setMounted(false)}
    >
      <BaseTooltip.Trigger render={children} delay={0} />
      <BaseTooltip.Portal>
        <BaseTooltip.Positioner side={side} sideOffset={6}>
          <BaseTooltip.Popup
            className={`${styles.popup} ${disabled ? styles.instant : ""}`}
          >
            {content}
          </BaseTooltip.Popup>
        </BaseTooltip.Positioner>
      </BaseTooltip.Portal>
    </BaseTooltip.Root>
  )
}
