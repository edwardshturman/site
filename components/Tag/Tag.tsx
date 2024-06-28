'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Tag.module.css'

export function Tag({ text }: { text: string }) {
  const pathname = usePathname()
  const routes = pathname.split('/').filter(Boolean)
  const selected = routes.includes(text)

  function Contents() {
    return (
      <>
        <span className={`${styles.tag} ${selected ? styles.selected : ''}`}>
          {text}
        </span>
      </>
    )
  }

  if (selected) return <Contents />
  return (
    <>
      <Link href={`${pathname}/${text}`}>
        <Contents />
      </Link>
    </>
  )
}
