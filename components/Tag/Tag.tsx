'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Tag.module.css'

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

export function Tag({ text, ...props }: TagProps) {
  const pathname = usePathname()
  const routes = pathname.split('/').filter(Boolean)
  const selected = routes.includes(text)
  let destination = `${pathname}/${text}`
  if (selected)
    destination = routes.filter((route) => route !== text).join('/')

  return (
    <span {...props}>
      <Link href={destination} className={`${styles.tag} ${selected ? styles.selected : ''}`}>
        {text}
      </Link>
    </span>
  )
}
