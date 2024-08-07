import Link from 'next/link'

import { Media } from '@/components/Media'
import { Spacer } from '@/components/Spacer'
import { Navbar } from '@/components/Navbar'

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
      <Media
        priority
        title="compsigh landing page"
        description={
          <>
            Work in progress on a new web platform for <Link href="/projects/compsigh">compsigh</Link>, the computer science club at the University of San Francisco
          </>
        }
        video={true}
        src="/assets/compsigh-landing-page.mp4"
        link="https://compsigh.club"
        cta="View live demo"
      />
      <h2>Now</h2>
      <ul>
        <li>Building the compsigh web platform</li>
        <li>Reading <em>Get Together</em> by People &amp; Company</li>
        <li>Studying Josh Comeau&apos;s <Link href="https://css-for-js.dev">CSS for JS Devs</Link> course</li>
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
