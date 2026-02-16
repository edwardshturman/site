"use client"

import Link from "next/link"
import { useSyncExternalStore } from "react"
import { usePathname } from "next/navigation"

import styles from "./Breadcrumbs.module.css"

const emptySubscribe = () => () => {}

export function Breadcrumbs() {
  const isWindows = useSyncExternalStore(
    emptySubscribe,
    () => navigator.userAgent.includes("Win"),
    () => false
  )

  const path = usePathname()
  if (path === "/") return null
  const crumbs = path.split("/").filter(Boolean)
  crumbs.pop()

  return (
    <nav
      id={styles.breadcrumbs}
      aria-label="Breadcrumb"
      className={`${isWindows ? styles.windows : ""}`}
    >
      <ol>
        <Crumb key="/" href="/">
          Edward Shturman
        </Crumb>
        {crumbs.map((text, i) => (
          <Crumb key={i} href={`/${crumbs.slice(0, i + 1).join("/")}`}>
            {text}
          </Crumb>
        ))}
      </ol>
    </nav>
  )
}

function Crumb({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  )
}
