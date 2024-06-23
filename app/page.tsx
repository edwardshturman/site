import Link from 'next/link'

import { Spacer } from '@/components/Spacer'
import { Navbar } from '@/components/Navbar'
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
        title="Setting up MDX on Next.js 14"
        description={
          <>
            <p>It&apos;s comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here&apos;s how I did it.</p>
          </>
        }
        src="/og/mdx-nextjs-14.png"
        link={`/notes/mdx-nextjs-14`}
        cta="Read note"
      />
      <h2>Now</h2>
      <ul>
        <li>Reading <em>The Practice</em> by Seth Godin</li>
        <li>Taking Josh Comeau&apos;s <Link href={`https://css-for-js.dev/`}>CSS for JS Devs</Link> course</li>
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
