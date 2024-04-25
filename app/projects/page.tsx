import Link from 'next/link'
import type { Metadata, Route } from 'next'

import { Spacer } from '@/components/Spacer'
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
      <Spacer size={32} />
      <GalleryCard
        title="DEPLOY/23"
        description={
          <>
            <p>The first hackathon hosted by <Link href="/projects/compsigh">my computer science club compsigh</Link>, and our biggest event of the Fall 2023 semester. An entirely student-bootstrapped, three-day event, bringing together the best minds in CS, design, and engineering to hack on a project for a weekend.</p>
          </>
        }
        src="/assets/deploy-grid-banner.png"
        alt="DEPLOY/23 banner"
        link={"/projects/deploy23" as Route}
        cta="View project"
      />
    </>
  )
}
