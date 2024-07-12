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
  async function processImage(src: string) {
    const file = await fs.readFile(src)
    const { base64, metadata } = await getPlaiceholder(file)
    return { base64, metadata }
  }
  let imageData
  if (!video) imageData = await processImage(`public${props.src}`)
  const isGif = props.src.toString().endsWith('.gif')

  const ImageWrapper = (
    <>
      { !video &&
        <Image
          unoptimized={isGif}
          alt={alt || title || ''}
          placeholder={`${isGif ? 'empty' : 'blur'}`}
          blurDataURL={imageData?.base64}
          sizes='(max-width: 700px) 100vw - 80px, 650px'
          width={imageData?.metadata.width}
          height={imageData?.metadata.height}
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
