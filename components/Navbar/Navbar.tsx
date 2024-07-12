'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import styles from './Navbar.module.css'

export function Navbar() {
  const [isWindows, setIsWindows] = useState(false)
  useEffect(() => {
    setIsWindows(navigator.userAgent.includes('Win'))
  }, [])

  return (
    <>
      <nav id={styles.navbar} className={`${isWindows ? styles.windows : ''}`}>
        <ul>
          <li>
            <Link href={"/notes"}>Notes</Link>
          </li>
          <li>
            <Link href={"/people"}>People</Link>
          </li>
          <li>
            <Link href={"/toolbox"}>Toolbox</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/workshop"}>Workshop</Link>
          </li>
          <li>
            <Link href={"/artifacts"}>Artifacts</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
