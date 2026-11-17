import { Media } from "@/components/Media"

import { EntryTitle } from "./EntryTitle"
import { entries, projects } from "./entries"
import { WorkshopFeed } from "./WorkshopFeed"
import { TimelineButton } from "./TimelineButton"

import "./transitions.css"

// The feed lives in the layout so it survives navigating between /workshop
// and a project's timeline: entries stay mounted (videos keep playing) and
// view-transition into their new positions instead of reloading
export default function WorkshopLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <WorkshopFeed
        items={entries.map(({ project, timelineTitle, ...entry }, index) => ({
          id: String(index),
          project,
          media: (
            <Media
              {...entry}
              title={
                timelineTitle ? (
                  <EntryTitle
                    title={entry.title}
                    timelineTitle={timelineTitle}
                  />
                ) : (
                  entry.title
                )
              }
              titleAccessory={
                project && (
                  <TimelineButton
                    slug={project}
                    name={projects[project].name}
                  />
                )
              }
            />
          )
        }))}
      />
    </>
  )
}
