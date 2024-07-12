import Link from 'next/link'
import { Route } from 'next'
import Image from 'next/image'

import { Spacer } from '@/components/Spacer'

import styles from './GalleryCard.module.css'

export type GalleryCardProps = {
  title?: string,
  description?: React.ReactElement,
  link?: Route,
  cta?: string,
  src: string,
  alt?: string,
  maxWidth?: number,
}

export function GalleryCard(
  { title, description, link, cta, src, alt, maxWidth }:
  GalleryCardProps
) {
  const image = (
    <>
      {
        !src.endsWith('.mp4') &&
        <Image
          unoptimized
          src={src}
          alt={alt || title || ''}
          fill={true}
        />
      }
    </>
  )

  const video = (
    <>
      {
        src.endsWith('.mp4') &&
        <video
          autoPlay
          loop
          muted
          playsInline
          width={maxWidth || 650}
        >
          <source src={src} type="video/mp4" />
        </video>
      }
    </>
  )

  return (
    <>
      <div
        className={styles.card}
        style={{ maxWidth: maxWidth || '650px' }}
      >
        <figure>
          {link ? <Link href={link}>{image}</Link> : image}
          {link ? <Link href={link}>{video}</Link> : video}
          {title && <figcaption>{title}</figcaption>}
          {description && <div>{description}</div>}
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
