'use client'

import Link from 'next/link'

import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <>
      <nav id={styles.navbar} className={`${navigator.userAgent.includes('Win') ? styles.windows : ''}`}>
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
