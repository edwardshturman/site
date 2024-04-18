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
        title="Intention"
        description={
          <>
            <p>A concept of an app I&apos;m working on for one of my classes</p>
            <Spacer size={10} />
            <p><Link href="https://intention-demo.vercel.app">View demo</Link></p>
          </>
        }
      >
        <Image
          unoptimized
          src="/assets/Intention-landing-page-mockup.png"
          alt="A screenshot of Intention, a concept of an app I'm working on for one of my classes."
          width={1920/4}
          height={1440/4}
        />
      </GalleryCard>
      <Spacer size={32} />
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
      <Spacer size={32} />
      <GalleryCard
        title="Arc boosts"
        description={
          <>
            <p>Style popular websites based on your <Link href="https://arc.net/gift/6a6a1565">Arc</Link> theme</p>
            <Spacer size={10} />
            <p><Link href="https://github.com/edwardshturman/arc-boosts">View source</Link></p>
          </>
        }
      >
        <Image
          unoptimized
          src="/assets/Arc-boosts.png"
          alt="A thumbnail of two Arc boosts made by Edward Shturman"
          width={1280/3}
          height={640/3}
        />
      </GalleryCard>
    </>
  )
}
