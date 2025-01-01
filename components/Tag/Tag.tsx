'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import styles from './Tag.module.css'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

function TagContent({ text, ...props }: TagProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const tagsParam = searchParams.get('tags') || ''
  const tags = tagsParam.split(',').filter(Boolean)
  const selected = tags.includes(text)
  let destination = tags.length > 0
    ? `${pathname}?tags=${searchParams.get('tags')},${text}`
    : `${pathname}?tags=${text}`
  if (selected)
    destination = `${pathname}?tags=${tags.filter(tag => tag !== text).join(',')}`
  if (selected && tags.length === 1)
    destination = pathname

  return (
    <span {...props}>
      <Link href={destination} scroll={false} className={`${styles.tag} ${selected ? styles.selected : ''}`}>
        {text}
      </Link>
    </span>
  )
}

export function Tag({ text, ...props }: TagProps) {
  return (
    <Suspense>
      <TagContent text={text} {...props} />
    </Suspense>
  )
}
