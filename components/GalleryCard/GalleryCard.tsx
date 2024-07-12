import Link from 'next/link'
import { type Route } from 'next'
import fs from 'node:fs/promises'
import { getPlaiceholder } from 'plaiceholder'
import Image, { type ImageProps } from 'next/image'

import { Spacer } from '@/components/Spacer'

import styles from './GalleryCard.module.css'

export interface GalleryCardProps extends Omit<ImageProps, 'alt'> {
  title?: string
  description?: React.ReactElement
  link?: Route
  cta?: string
  alt?: string
  video?: boolean
}

export async function GalleryCard(
  { title, description, link, cta, alt, video, ...props }:
  GalleryCardProps
) {
  const file = await fs.readFile(`public/${props.src}`)
  const { base64, metadata } = await getPlaiceholder(file)
  const isGif = props.src.toString().endsWith('.gif')

  const ImageWrapper = (
    <>
      { !video &&
        <Image
          unoptimized={isGif}
          alt={alt || title || ''}
          placeholder={`${isGif ? 'empty' : 'blur'}`}
          blurDataURL={base64}
          sizes='(max-width: 700px) 100vw - 80px, 650px'
          width={metadata.width}
          height={metadata.height}
          {...props}
        />
      }
    </>
  )

  const VideoWrapper = (
    <>
      {
        video &&
          <video
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={props.src as string} type="video/mp4" />
          </video>
      }
    </>
  )

  return (
    <>
      <div className={styles.card}>
        <figure>
          {link ? <Link href={link}>{ImageWrapper}</Link> : ImageWrapper}
          {link ? <Link href={link}>{VideoWrapper}</Link> : VideoWrapper}
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
