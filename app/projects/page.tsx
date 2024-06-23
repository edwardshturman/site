import Link from 'next/link'
import type { Metadata } from 'next'

import { Spacer } from '@/components/Spacer'
import { Comment } from '@/components/Comment'
import { GalleryCard } from '@/components/GalleryCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Larger endeavors that have changed my life & work in some meaningful way",
  openGraph: {
    siteName: "Edward Shturman's personal website",
    images: [{
      url: 'api/og?title=Projects',
      width: 1200,
      height: 630,
      alt: ''
    }]
  }
}

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <Comment type="block">
        More coming soon; in the meantime, check out <Link href="https://read.cv/edwardshturman">my read.cv</Link>
      </Comment>
      <Spacer size={48} />
      <GalleryCard
        title="My personal website"
        description={
          <>
            <p>Crafting &amp; curating my new identity on the Web</p>
          </>
        }
        src="/og/root.png"
        link={"/projects/site"}
        cta="View project"
      />
      <Spacer size={48} />
      <GalleryCard
        title="compsigh"
        description={
          <>
            <p>My computer science club at the University of San Francisco</p>
          </>
        }
        src="/og/compsigh.png"
        alt="compsigh banner"
        link={"/projects/compsigh"}
        cta="View project"
      />
      <Spacer size={48} />
      <GalleryCard
        title="DEPLOY/23"
        description={
          <>
            <p>The first hackathon hosted by <Link href="/projects/compsigh">my computer science club compsigh</Link>, and our biggest event of the Fall 2023 semester. An entirely student-bootstrapped, three-day event, bringing together the best minds in CS, design, and engineering to hack on a project for a weekend.</p>
          </>
        }
        src="/og/deploy23.png"
        alt="DEPLOY/23 banner"
        link={"/projects/deploy23"}
        cta="View project"
      />
      <Spacer size={48} />
      <GalleryCard
        title="Cue"
        description={
          <>
            <p>A minimalist active recall study app focused on helping students ask the right questions. Transform your notes into actionable study cards for easy pasting back into Google Docs or Notion, or export to Anki.</p>
          </>
        }
        src="/og/cue.png"
        alt="Cue banner"
        link={"/projects/cue"}
        cta="View project"
      />
    </>
  )
}
