import Link from "next/link"
import { type Route } from "next"
import fs from "node:fs/promises"
import { getPlaiceholder } from "plaiceholder"
import Image, { type ImageProps } from "next/image"

import styles from "./Media.module.css"

export interface MediaProps extends Omit<ImageProps, "alt"> {
  title?: string
  description?: React.ReactElement | string
  link?: Route
  cta?: string
  alt?: string
}

export async function Media({
  title,
  description,
  link,
  cta,
  alt,
  ...props
}: MediaProps) {
  async function processImage(src: string) {
    const file = await fs.readFile(src)
    const { base64, metadata } = await getPlaiceholder(file)
    return { base64, metadata }
  }
  let imageData
  const video = props.src.toString().endsWith(".mp4")
  if (!video) imageData = await processImage(`public${props.src}`)
  const isGif = props.src.toString().endsWith(".gif")

  const ImageWrapper = (
    <>
      {!video && (
        <Image
          unoptimized={isGif}
          alt={alt || ""}
          placeholder={`${isGif ? "empty" : "blur"}`}
          blurDataURL={imageData?.base64}
          sizes="(max-width: 700px) 100vw - 80px, 650px"
          width={imageData?.metadata.width}
          height={imageData?.metadata.height}
          {...props}
        />
      )}
    </>
  )

  const VideoWrapper = (
    <>
      {video && (
        <video autoPlay loop muted playsInline>
          <source src={props.src as string} type="video/mp4" />
        </video>
      )}
    </>
  )

  return (
    <>
      <div className={styles["media-container"]} style={props.style}>
        <figure>
          {link ? (
            <Link href={link}>
              {ImageWrapper}
              {VideoWrapper}
              {title && <figcaption>{title}</figcaption>}
            </Link>
          ) : (
            <>
              {ImageWrapper}
              {VideoWrapper}
              {title && <figcaption>{title}</figcaption>}
            </>
          )}
          {description && (
            <div className={styles.description}>{description}</div>
          )}
          {cta && (
            <p className={styles.cta}>
              {link ? <Link href={link}>{cta}</Link> : cta}
            </p>
          )}
        </figure>
      </div>
    </>
  )
}
