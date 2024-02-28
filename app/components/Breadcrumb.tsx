'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import type { Route } from 'next'
import styles from './Breadcrumb.module.css'

export function Breadcrumb () {
  const path = usePathname()
  if (path === '/') return null
  const parts = path.split('/').filter(Boolean)

  let breadcrumbs = []
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i]
    const href = '/' + parts.slice(0, i + 1).join('/')
    breadcrumbs.push(<Link key={i} href={`${href}` as Route}>{part}</Link>)

    if (i < parts.length - 1)
      breadcrumbs.push(' / ')
  }

  return (
    <p id={styles.breadcrumb}>
      <Link href='/'>Edward Shturman</Link> / {breadcrumbs}
    </p>
  )
}
