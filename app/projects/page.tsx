import Link from 'next/link'
import type { Metadata } from 'next'

import { Media } from '@/components/Media'
import { Spacer } from '@/components/Spacer'

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
      <Spacer size={16} />
      <Media
        title="compsigh web platform"
        description="Building a home for compsigh — the computer science club at the University of San Francisco — unifying our events calendar, showcasing club member projects, and documenting the club's culture"
        src="/assets/compsigh-web-platform-trailer-min.mp4"
        link="https://compsigh.club/community/web-platform"
        cta="Read the announcement on the web platform"
      />
      <Spacer size={16} />
      <Media
        title="My personal website"
        description="Crafting & curating my new identity on the Web"
        src="/og/root.png"
        link="/projects/site"
        cta="View project"
      />
      <Spacer size={16} />
      <Media
        title="compsigh"
        description="The computer science club I founded at the University of San Francisco for meeting cool people & building cool things"
        src="/og/compsigh.png"
        alt="compsigh banner"
        link="/projects/compsigh"
        cta="View project"
      />
      <Spacer size={16} />
      <Media
        title="DEPLOY/23"
        description={
          <>
            The first hackathon hosted by <Link href="/projects/compsigh">compsigh</Link> — the computer science club at the University of San Francisco — and our biggest event of the Fall 2023 semester. An entirely student-bootstrapped, three-day event, bringing together the best minds in CS, design, and engineering to hack on a project for a weekend.
          </>
        }
        src="/og/deploy23.png"
        alt="DEPLOY/23 banner"
        link="/projects/deploy23"
        cta="View project"
      />
      <Spacer size={16} />
      <Media
        title="Cue"
        description="A minimalist active recall study app focused on helping students ask the right questions. Transform your notes into actionable study cards for easy pasting back into Google Docs or Notion, or export to Anki."
        src="/og/cue.png"
        alt="Cue banner"
        link="/projects/cue"
        cta="View project"
      />
      <Spacer size={16} />
      <Media
        title="d.craft"
        description="A virtual recreation of the Design Tech High School campus in Minecraft, bringing students together in distanced times"
        src="/og/dcraft.png"
        alt="d.craft banner"
        link="/projects/dcraft"
        cta="View project"
      />
    </>
  )
}
