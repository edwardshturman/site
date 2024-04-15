import Link from 'next/link'
import { Route } from 'next'
import type { LinkProps } from 'next/link'
import type { RouteType } from 'next/dist/lib/load-custom-routes'

import styles from './GalleryCard.module.css'

export function GalleryCard(
  {
    title,
    description,
    link,
    children
  }:
  {
    title: string,
    description?: React.ReactElement,
    link?: Route,
    children: React.ReactElement
  }
) {
  return (
    <>
      <div className={styles["image-card"]}>
        <LinkWrapper href={link as Route}>
          <figure>
            <>{children}</>
            <figcaption>{title}</figcaption>
            { description && <div style={{maxWidth: children.props.width}}>{description}</div> }
          </figure>
        </LinkWrapper>
      </div>
    </>
  )
}

function LinkWrapper({href, children}: LinkProps<RouteType>) {
  if (!href)
    return <>{children}</>
  return <Link href={href}>{children}</Link>
}
