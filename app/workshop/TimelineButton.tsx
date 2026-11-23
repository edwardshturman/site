"use client"

import { useSelectedLayoutSegment } from "next/navigation"

import { SeeMoreIcon } from "@/components/Icon"

import { IconLink } from "./IconLink"

import styles from "./Workshop.module.css"

// Sits beside an entry's title; hidden once you're on that project's timeline
export function TimelineButton({ slug, name }: { slug: string; name: string }) {
  const selectedProject = useSelectedLayoutSegment()
  if (selectedProject === slug) return null

  return (
    <IconLink href={`/workshop/${slug}`} label={`See more work on ${name}`}>
      <SeeMoreIcon aria-hidden className={styles["timeline-icon"]} />
    </IconLink>
  )
}
