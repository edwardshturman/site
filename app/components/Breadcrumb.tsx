'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Breadcrumb.module.css'

export function Breadcrumb () {
  const path = usePathname()
  if (path === '/notes')
    return (
      <p id={styles.breadcrumb}><Link href='/'>Edward Shturman</Link> / Notes</p>
    )

  if (path.startsWith('/notes/'))
    return (
      <p id={styles.breadcrumb}><Link href='/'>Edward Shturman</Link> / <Link href='/notes'>Notes</Link> /</p>
    )

  return <></>
}
