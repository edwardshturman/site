"use client"

import { addTransitionType, startTransition, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { Tooltip } from "@/components/Tooltip"

import { WORKSHOP_TRANSITION } from "./transition"

import styles from "./Workshop.module.css"

// An icon-only link, labeled by a tooltip, that navigates within Workshop
// with a view transition (see ./transitions.css)
export function IconLink({
  href,
  label,
  className,
  children
}: {
  href: string
  label: string
  className?: string
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [navigating, setNavigating] = useState(false)
  // Arrived: done navigating, in case this stays mounted
  if (navigating && pathname === href) setNavigating(false)

  return (
    <Tooltip
      content={label}
      disabled={navigating}
      // The tooltip re-renders as it opens and closes, which would skip the
      // view transition, so navigate once it has settled
      onSettled={() =>
        startTransition(() => {
          addTransitionType(WORKSHOP_TRANSITION)
          router.push(href)
        })
      }
    >
      <Link
        href={href}
        aria-label={label}
        className={`${styles["icon-button"]} ${className ?? ""}`}
        onNavigate={(event) => {
          event.preventDefault()
          setNavigating(true)
        }}
      >
        {children}
      </Link>
    </Tooltip>
  )
}
