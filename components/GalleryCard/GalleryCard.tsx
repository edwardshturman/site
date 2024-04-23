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
    title: string,
    description?: React.ReactElement,
    link?: Route,
    cta?: string,
    src?: string,
    alt?: string
  }
) {
  return (
    <>
      <div className={styles["image-card"]}>
        <figure>
        {
          src &&
            <Image
              unoptimized
              src={src}
              alt={alt || title}
              fill={true}
            />
        }
          <figcaption>{title}</figcaption>
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
