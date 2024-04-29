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
        title="Hive logo"
        description={
          <>
            <p>A logo for the <Link href="https://www.usfca.edu/arts-sciences/research/facilities-labs/innovation-hive">Innovation Hive</Link> maker space at the University of San Francisco</p>
          </>
        }
        src="/assets/hive.png"
        alt="A logo for the Innovation Hive maker space at the University of San Francisco"
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
        title="compsigh leadership avatars"
        description={
          <>
            <p>A set of avatars I generated with <Link href="https://midjourney.com">Midjourney</Link> for the Fall 2023 leadership cohort of <Link href="/projects/compsigh">compsigh</Link>, my computer science club</p>
          </>
        }
        src="/assets/compsigh-ai-pfps.png"
        alt="A set of AI-generated avatars for the leadership team of compsigh, a computer science club at the University of San Francisco"
      />
      <Spacer size={32} />
      <GalleryCard
        title="compsigh icons"
        description={
          <>
            <p>A set of vector icons I generated with <Link href="https://recraft.ai">Recraft</Link> for <Link href="/projects/compsigh">my computer science club compsigh</Link></p>
          </>
        }
        src="/assets/compsigh-icons.png"
        alt="A set of AI-generated vector icons for compsigh, a computer science club at the University of San Francisco"
      />
      <Spacer size={32} />
      <GalleryCard
        title="U Can UI"
        description={
          <>
            <p>A distilled version of a workshop I ran for <Link href="/projects/compsigh">compsigh</Link>, my computer science club, on why engineers should design, and how to start</p>
          </>
        }
        src="/assets/u-can-ui.png"
        alt="A thumbnail for U Can UI, a workshop on why engineers should design, and how to start"
        link="https://www.youtube.com/watch?v=fLlz6CMZDoo"
        cta="Watch video on YouTube"
      />
      <Spacer size={32} />
      <GalleryCard
        title="Realm Thread Queue"
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
        title="Arc Boosts"
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
