import Link from 'next/link'
import dynamic from 'next/dynamic'

import { Spacer } from '@/components/Spacer'
import { Comment } from '@/components/Comment'
import { GalleryCard } from '@/components/GalleryCard'
const Navbar = dynamic(() => import('@/components/Navbar').then((mod) => mod.Navbar), { ssr: false })

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
        <li>Taking Josh Comeau&apos;s <Link href={`https://css-for-js.dev/`}>CSS for JS Devs</Link> course</li>
        <li><s>Reading <em>The Practice</em> by Seth Godin</s><Comment type="inline">Great read! Writing a note on it</Comment></li>
        <li>Planning Fall for <Link href="/projects/compsigh">compsigh</Link>, my CS club at the University of San Francisco</li>
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
