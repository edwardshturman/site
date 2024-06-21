import Link from 'next/link'
import Image from 'next/image'
import type { Route } from 'next'

import styles from './Author.module.css'

export function Author(
{
  name,
  avatar,
  link
}:
{
  name: string,
  avatar: string,
  link: string
}
) {
  return (
    <>
      <Link href={link as Route}>
        <span className={styles.container}>
          <Image
            id={styles.avatar}
            src={avatar}
            alt={name}
            width={20}
            height={20}
          />
          <span className={styles.name}>
            {name}
          </span>
        </span>
      </Link>
    </>
  )
}
