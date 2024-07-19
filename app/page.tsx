import Link from 'next/link'

import { Spacer } from '@/components/Spacer'
import { Navbar } from '@/components/Navbar'
import { Comment } from '@/components/Comment'
import { GalleryCard } from '@/components/GalleryCard'

export default function Home() {
  return (
    <>
      <h1>Edward Shturman</h1>
      <p>
        Web developer, interface designer, <br /> and community builder based in San Francisco
      </p>
      <Spacer size={4} />
      <Navbar />
      <h2>Latest</h2>
      <GalleryCard
        title="d.craft"
        description={
          <>
            <p>A retrospective on how my friends and I built d.craft: a virtual recreation of the Design Tech High School campus in Minecraft, bringing students together in distanced times</p>
          </>
        }
        src="/og/dcraft.png"
        link={`/projects/dcraft`}
        cta="View project"
      />
      <h2>Now</h2>
      <ul>
        <li>Reading <em>Get Together</em> by People &amp; Company</li>
        <li>Studying Josh Comeau&apos;s <Link href={`https://css-for-js.dev`}>CSS for JS Devs</Link> course</li>
        <li>Building a web platform for <Link href={`/projects/compsigh`}>compsigh</Link>, the computer science club at USFCA</li>
      </ul>
      <h2>Connect</h2>
      <ul>
        <li>
          <Link href="https://twitter.com/edwardshturman">X</Link>
        </li>
        <li>
          <Link href="https://github.com/edwardshturman">GitHub</Link>
        </li>
        <li>
          <Link href="https://read.cv/edwardshturman">read.cv</Link>
        </li>
      </ul>
    </>
  )
}
