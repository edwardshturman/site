import { ViewTransition } from "react"

import { Spacer } from "@/components/Spacer"
import { Comment } from "@/components/Comment"
import { BackIcon } from "@/components/Icon"

import { IconLink } from "./IconLink"
import { onlyInWorkshop } from "./transition"

import styles from "./Workshop.module.css"

// Its own view transition, so the old header fades out and the new one in,
// rather than the new one appearing under a fading snapshot of the old
export function WorkshopHeader({
  title,
  description,
  back = false
}: {
  title: string
  description: string
  // Show a button back to Workshop, hanging left of the title
  back?: boolean
}) {
  return (
    <>
      <ViewTransition
        default="none"
        enter={onlyInWorkshop("workshop-header-enter")}
        exit={onlyInWorkshop("workshop-header-exit")}
      >
        <div>
          <div className={styles.heading}>
            {back && (
              <IconLink
                href="/workshop"
                label="Back to Workshop"
                className={styles.back}
              >
                <BackIcon aria-hidden />
              </IconLink>
            )}
            <h1>{title}</h1>
          </div>
          <Comment type="block">{description}</Comment>
        </div>
      </ViewTransition>
      <Spacer size={16} />
    </>
  )
}
