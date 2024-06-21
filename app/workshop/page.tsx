import Link from 'next/link'
import type { Metadata } from 'next'

import { Spacer } from '@/components/Spacer'
import { Comment } from '@/components/Comment'
import { GalleryCard } from '@/components/GalleryCard'
import type { GalleryCardProps } from '@/components/GalleryCard'

export const metadata: Metadata = {
  title: 'Workshop',
  description: 'Everything from design experiments to side projects',
  openGraph: {
    siteName: "Edward Shturman's personal website",
    images: [{
      url: 'api/og?title=Workshop',
      width: 1200,
      height: 630,
      alt: ''
    }]
  }
}

export default function Workshop() {
  const cards: GalleryCardProps[] = [
    {
      title: 'Intention',
      description: <p>A proof-of-concept app I made for one of my classes to promote Deep Work: One thing at a time. Most important thing first. Start now.</p>,
      src: '/assets/intention.gif',
      alt: "A gif of Intention, a proof-of-concept app I made for one of my classes to promote Deep Work: One thing at a time. Most important thing first. Start now.",
      link: 'https://intention-demo.vercel.app',
      cta: 'View demo'
    },
    {
      title: 'compsigh flyer',
      description: <p>A flyer for <Link href="/projects/compsigh">compsigh</Link>, my computer science club. We handed these out at our university&apos;s annual Spring event for incoming freshmen.</p>,
      src: '/assets/compsigh-flyer.png'
    },
    {
      title: 'compsigh cascade',
      description: <p>A platform I design-engineered to host a coding riddle competition for <Link href="/projects/compsigh">compsigh</Link>, my computer science club. Fit with auth via NextAuth, event flags via Vercel Edge Config, teams, invites, and leaderboard via Vercel Postgres, and input validation.</p>,
      src: '/assets/cascade-ui.gif',
      alt: 'A gif of the compsigh cascade UI',
      link: 'https://github.com/compsigh/cascade',
      cta: 'View source'
    },
    {
      title: 'Repost',
      description: <p>Mockups of a PWA I made with friends at Dons Hack 2024, an annual hackathon hosted at the University of San Francisco by Association of Computing Machinery × Women in Tech</p>,
      src: '/assets/repost-mockups.png',
      alt: 'Mockups of a PWA I made with friends at Dons Hack 2024, an annual hackathon hosted at the University of San Francisco by Association of Computing Machinery × Women in Tech'
    },
    {
      title: '2033',
      description: <p>A set of 4K AI-generated wallpapers from <Link href="/projects/deploy23">DEPLOY/23</Link>, a hackathon hosted by <Link href="/projects/compsigh">compsigh</Link>, my computer science club</p>,
      src: '/assets/2033.png',
      link: 'https://goodies.edward.so/l/2033',
      cta: 'Grab them on Gumroad'
    },
    {
      title: 'Hive logo',
      description: <p>A logo for the <Link href="https://www.usfca.edu/arts-sciences/research/facilities-labs/innovation-hive">Innovation Hive</Link> maker space at the University of San Francisco</p>,
      src: '/assets/hive.png',
      alt: 'A logo for the Innovation Hive maker space at the University of San Francisco'
    },
    {
      title: 'GitHub Contrib Emojis',
      description:
        <>
          <p>A set of 10 high-quality icons modeled after the GitHub contribution chart you can upload to your Slack workspace or Discord server as emojis!</p>
          <ul style={{color: 'var(--color-light-gray)'}}>
            <li>Light mode &amp; dark mode ready</li>
            <li>Padding built in, so they&apos;ll look great alongside each other</li>
            <li>Recreated using GitHub Light Default / GitHub Dark Default themes</li>
          </ul>
        </>,
      src: '/assets/github-contrib-emojis.png',
      alt: 'A banner of the GitHub Contrib Emojis, showing all 10 emojis in the set',
      link: 'https://goodies.edward.so/l/github-contrib-emojis',
      cta: 'Grab them for free'
    },
    {
      title: 'compsigh leadership avatars',
      description: <p>A set of avatars I generated with <Link href="https://midjourney.com">Midjourney</Link> for the Fall 2023 leadership cohort of <Link href="/projects/compsigh">compsigh</Link>, my computer science club</p>,
      src: '/assets/compsigh-ai-pfps.png',
      alt: 'A set of AI-generated avatars for the leadership team of compsigh, a computer science club at the University of San Francisco'
    },
    {
      title: 'compsigh icons',
      description: <p>A set of vector icons I generated with <Link href="https://recraft.ai">Recraft</Link> for <Link href="/projects/compsigh">compsigh</Link>, my computer science club</p>,
      src: '/assets/compsigh-icons.png',
      alt: 'A set of AI-generated vector icons for compsigh, a computer science club at the University of San Francisco'
    },
    {
      title: 'U Can UI',
      description: <p>A distilled version of a workshop I ran for <Link href="/projects/compsigh">compsigh</Link>, my computer science club, on why engineers should design, and how to start</p>,
      src: '/assets/u-can-ui.png',
      alt: 'A thumbnail for U Can UI, a workshop on why engineers should design, and how to start',
      link: 'https://www.youtube.com/watch?v=fLlz6CMZDoo',
      cta: 'Watch video on YouTube'
    },
    {
      title: 'Realm Thread Queue',
      description: <p>Thread Queue for Realm, a Discord bot I&apos;m building. Lets you pluck individual messages from a channel into a thread. Great for separating multiple conversations going on in the same channel.</p>,
      src: '/assets/Realm-thread-queue-demo.gif',
      alt: "A gif of Thread Queue, a feature for Realm, a Discord bot I'm building",
      link: 'https://github.com/compsigh/realm',
      cta: 'View source'
    },
    {
      title: 'Nature Morte',
      description: <p>Generated with <Link href="https://midjourney.com">Midjourney</Link></p>,
      src: '/assets/nature-morte.png',
      alt: 'An AI-generated image of a skull in the middle of a spread of fruits, wine bottles, and other objects befitting a still life painting'
    },
    {
      title: 'Новий Світ — New World',
      description: <p>Fictitious fashion collection exploring traditional Ukrainian vyshyvanka, modernized. Generated with <Link href="https://midjourney.com">Midjourney</Link>.</p>,
      src: '/assets/new-world.png',
      alt: 'A carousel of AI-generated fashion designs inspired by traditional Ukrainian vyshyvanka'
    },
    {
      title: 'Trainyard',
      description: <p>Generated with <Link href="https://midjourney.com">Midjourney</Link></p>,
      src: '/assets/trainyard.png',
      alt: 'An AI-generated image of an abandoned trainyard, dimly lit in the misty night'
    },
    {
      title: 'Arc Boosts',
      description: <p>Style popular websites based on your <Link href="https://arc.net/gift/6a6a1565">Arc</Link> theme</p>,
      src: '/assets/Arc-boosts.png',
      alt: 'A banner for Arc Boosts, showcasing two screenshots of GitHub on different Arc themes, styled with the GitHub Boost I wrote',
      link: 'https://github.com/edwardshturman/arc-boosts',
      cta: 'View source'
    }

  ]

  return (
    <>
      <h1>Workshop</h1>
      <Comment type="block">Everything from design experiments to side projects</Comment>
      <Spacer size={48} />
      {cards.map((card, index) => (
        <div key={index}>
          <GalleryCard {...card} />
          <Spacer size={48} />
        </div>
      ))}
    </>
  )
}
