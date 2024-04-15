import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

import { Spacer } from '@/components/Spacer'
import { Comment } from '@/components/Comment'
import { GalleryCard } from '@/components/GalleryCard'

export const metadata: Metadata = {
  title: 'Craft',
  description: 'Pixels & prose',
  openGraph: {
    siteName: "Edward Shturman's personal website",
  }
}

export default function Craft() {
  return (
    <>
      <h1>Craft</h1>
      <Comment type="block">
        More coming soon. In the meantime, check out <Link href="https://read.cv/edwardshturman">my read.cv</Link>.
      </Comment>
      <GalleryCard
        title="compsigh cascade"
        description={
          <>
            <p>A platform I design-engineered to host a coding riddle competition for {<Link href={"/projects/compsigh"}>compsigh</Link>}, my computer science club. Fit with auth via NextAuth, event flags via Vercel Edge Config, teams, invites, and leaderboard via Vercel Postgres, and input validation.</p>
            <Spacer size={10} />
            <p><Link href="https://github.com/compsigh/cascade">View source</Link></p>
          </>
        }
      >
        <Image
          unoptimized
          src="/assets/cascade-ui.gif"
          alt="A gif of the compsigh cascade UI"
          width={1920/4}
          height={1080/4}
        />
      </GalleryCard>
    </>
  )
}
