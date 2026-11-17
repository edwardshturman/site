"use client"

import { useSelectedLayoutSegment } from "next/navigation"

// An entry's title, swapped for a shorter one on its project's timeline. The
// feed stays mounted across both pages, so this is decided here, not on the
// server
export function EntryTitle({
  title,
  timelineTitle
}: {
  title: React.ReactNode
  timelineTitle: string
}) {
  // The project slug on /workshop/[project], null on /workshop
  const selectedProject = useSelectedLayoutSegment()
  return selectedProject ? timelineTitle : title
}
