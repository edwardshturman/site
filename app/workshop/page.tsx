import type { Metadata } from "next"

import { WorkshopHeader } from "./WorkshopHeader"

// The entries themselves are rendered by the Workshop layout; see ./entries.tsx

export const metadata: Metadata = {
  title: "Workshop",
  description: "Everything from design experiments to side projects",
  openGraph: {
    siteName: "Edward Shturman's personal website"
  }
}

export default function Workshop() {
  return (
    <WorkshopHeader
      title="Workshop"
      description="Everything from design experiments to side projects"
    />
  )
}
