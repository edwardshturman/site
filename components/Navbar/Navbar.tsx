"use client"

import Link from "next/link"
import { useSyncExternalStore } from "react"

import styles from "./Navbar.module.css"

const emptySubscribe = () => () => {}

export function Navbar() {
  const isWindows = useSyncExternalStore(
    emptySubscribe,
    () => navigator.userAgent.includes("Win"),
    () => false
  )

  return (
    <>
      <nav id={styles.navbar} className={`${isWindows ? styles.windows : ""}`}>
        <ul>
          {/*<li>
            <Link href={"/people"}>People</Link>
          </li>*/}
          {/*<li>
            <Link href={"/toolbox"}>Toolbox</Link>
          </li>*/}
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/workshop"}>Workshop</Link>
          </li>
          <li>
            <Link href={"/notes"}>Notes</Link>
          </li>
          {/*<li>
            <Link href={"/artifacts"}>Artifacts</Link>
          </li>*/}
          <li>
            <Link href="https://twitter.com/edwardshturman">Twitter</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
