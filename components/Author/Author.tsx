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
      <span className={styles.container}>
        <Link href={link as Route}>
          <span className={styles.author}>
            <Image
              src={avatar}
              alt={name}
              width={20}
              height={20}
            />
            {name}
          </span>
        </Link>
      </span>
    </>
  )
}
