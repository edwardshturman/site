import Link from 'next/link'
import { Route } from 'next'
import Image from 'next/image'

import { Spacer } from '@/components/Spacer'

import styles from './GalleryCard.module.css'

export function GalleryCard(
  {
    title,
    description,
    link,
    cta,
    src,
    alt
  }:
  {
    title?: string,
    description?: React.ReactElement,
    link?: Route,
    cta?: string,
    alt?: string
    src: string,
  }
) {
  return (
    <>
      <div className={styles["image-card"]}>
        <figure>
          <Image
            unoptimized
            src={src}
            alt={alt || title || ''}
            fill={true}
          />
          { title && <figcaption>{title}</figcaption> }
          { description && <div>{description}</div> }
          {
            link &&
              <>
                <Spacer size={10} />
                <Link href={link}>{cta}</Link>
              </>
            }
        </figure>
      </div>
    </>
  )
}
