import Link from 'next/link'
import type { Metadata, Route } from 'next'

import { Comment } from '@/components/Comment'
import { GalleryCard } from '@/components/GalleryCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Notable work I've done and am doing",
  openGraph: {
    siteName: "Edward Shturman's personal website",
  }
}

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <Comment type="block">
        More coming soon. In the meantime, check out <Link href="https://read.cv/edwardshturman">my read.cv</Link>.
      </Comment>
      <GalleryCard
        title="compsigh"
        description={
          <>
            <p>My computer science club at the University of San Francisco</p>
          </>
        }
        src="/assets/compsigh-banner.png"
        alt="compsigh banner"
        link={"/projects/compsigh" as Route}
        cta="View project"
      />
    </>
  )
}
