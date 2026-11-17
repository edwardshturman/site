"use client"

import { ViewTransition } from "react"
import { useSelectedLayoutSegment } from "next/navigation"

import { Spacer } from "@/components/Spacer"

import { onlyInWorkshop } from "./transition"

export interface WorkshopFeedItem {
  id: string
  project?: string
  media: React.ReactNode
}

export function WorkshopFeed({ items }: { items: WorkshopFeedItem[] }) {
  // The project slug on /workshop/[project], null on /workshop
  const selectedProject = useSelectedLayoutSegment()
  const visible = selectedProject
    ? items.filter((item) => item.project === selectedProject)
    : items

  return visible.map((item) => (
    <ViewTransition
      key={item.id}
      default="none"
      enter={onlyInWorkshop("workshop-enter")}
      exit={onlyInWorkshop("workshop-exit")}
      update={onlyInWorkshop("workshop-move")}
    >
      <div>
        {item.media}
        <Spacer size={16} />
      </div>
    </ViewTransition>
  ))
}
