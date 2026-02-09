import type { Metadata } from "next"

import { Spacer } from "@/components/Spacer"
import { Comment } from "@/components/Comment"
import { TagGroup } from "@/components/TagGroup"

import { artifacts } from "./artifacts"
import { ArtifactsList } from "./ArtifactsList"

export const metadata: Metadata = {
  title: "Artifacts",
  description: "Wisdom that resonates with me from the Internet & literature",
  openGraph: {
    siteName: "Edward Shturman's personal website"
  }
}

export default function Artifacts() {
  return (
    <>
      <h1>Artifacts</h1>
      <Comment type="block">
        Wisdom that resonates with me from the Internet & literature
      </Comment>
      <Spacer size={8} />
      <TagGroup
        tags={Array.from(
          new Set(artifacts.flatMap((artifact) => artifact.tags))
        ).map((tag) => ({ text: tag }))}
      />
      <Spacer size={8} />
      <ArtifactsList />
    </>
  )
}
