import Link from "next/link"
import { type Route } from "next"
import fs from "node:fs/promises"
import { LazyVideo } from "./LazyVideo"
import { getPlaiceholder } from "plaiceholder"
import Image, { type ImageProps } from "next/image"

import styles from "./Media.module.css"

export interface MediaProps extends Omit<ImageProps, "alt" | "src"> {
  // An image or video path, or pass children to show something live instead
  src?: ImageProps["src"]
  children?: React.ReactNode
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
  src,
  children,
  ...props
}: MediaProps) {
  async function processImage(src: string) {
    const file = await fs.readFile(src)
    const { base64, metadata } = await getPlaiceholder(file)
    return { base64, metadata }
  }
  let imageData
  const video = src?.toString().endsWith(".mp4") ?? false
  if (src && !video) imageData = await processImage(`public${src}`)
  const isGif = src?.toString().endsWith(".gif") ?? false

  const ImageWrapper = (
    <>
      {src && !video && (
        <Image
          unoptimized={isGif}
          alt={alt || ""}
          placeholder={`${isGif ? "empty" : "blur"}`}
          blurDataURL={imageData?.base64}
          sizes="(max-width: 700px) 100vw - 80px, 650px"
          width={imageData?.metadata.width}
          height={imageData?.metadata.height}
          {...props}
          src={src}
        />
      )}
    </>
  )

  const VideoWrapper = <>{video && <LazyVideo src={src as string} />}</>

  return (
    <>
      <div className={styles["media-container"]} style={props.style}>
        <figure>
          {link ? (
            <Link href={link}>
              {children}
              {ImageWrapper}
              {VideoWrapper}
              {title && <figcaption>{title}</figcaption>}
            </Link>
          ) : (
            <>
              {children}
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
