import Link from 'next/link'
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
          </>
        }
        src="/assets/intention.gif"
        alt="A gif of Intention, a concept of an app I'm working on for one of my classes."
        link="https://intention-demo.vercel.app"
        cta="View demo"
      />
      <Spacer size={32} />
      <GalleryCard
        title="compsigh cascade"
        description={
          <>
            <p>A platform I design-engineered to host a coding riddle competition for {<Link href={"/projects/compsigh"}>compsigh</Link>}, my computer science club. Fit with auth via NextAuth, event flags via Vercel Edge Config, teams, invites, and leaderboard via Vercel Postgres, and input validation.</p>
          </>
        }
        src="/assets/cascade-ui.gif"
        alt="A gif of the compsigh cascade UI"
        link="https://github.com/compsigh/cascade"
        cta="View source"
      />
      <Spacer size={32} />
      <GalleryCard
        title="GitHub Contrib Emojis"
        description={
          <>
            <p>A set of 10 high-quality icons modeled after the GitHub contribution chart you can upload to your Slack workspace or Discord server as emojis!</p>
            <ul style={{color: 'var(--color-light-gray)'}}>
              <li>Light mode &amp; dark mode ready</li>
              <li>Padding built in, so they&apos;ll look great alongside each other</li>
              <li>Recreated using GitHub Light Default / GitHub Dark Default themes</li>
            </ul>
          </>
        }
        src="/assets/github-contrib-emojis.png"
        alt="A banner of the GitHub Contrib Emojis by Edward Shturman, showing all 10 emojis in the set"
        link="https://goodies.edward.so/l/github-contrib-emojis"
        cta="Grab them for free"
      />
      <Spacer size={32} />
      <GalleryCard
        title="Realm thread queue"
        description={
          <>
            <p>Thread Queue for Realm, a Discord bot I&apos;m building. Lets you pluck individual messages from a channel into a thread. Great for separating multiple conversations going on in the same channel.</p>
          </>
        }
        src="/assets/Realm-thread-queue-demo.gif"
        alt="A gif of Thread Queue, a feature for Realm, a Discord bot I'm building"
        link="https://github.com/compsigh/realm"
        cta="View source"
      />
      <Spacer size={32} />
      <GalleryCard
        title="Arc boosts"
        description={
          <>
            <p>Style popular websites based on your <Link href="https://arc.net/gift/6a6a1565">Arc</Link> theme</p>
          </>
        }
        src="/assets/Arc-boosts.png"
        alt="A thumbnail of two Arc boosts made by Edward Shturman"
        link="https://github.com/edwardshturman/arc-boosts"
        cta="View source"
      />
    </>
  )
}
