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
        title="compsigh web platform"
        description={
          <>
            Building a home for <Link href="/projects/compsigh">compsigh</Link> — the computer science club at the University of San Francisco — unifying our events calendar, showcasing club member projects, and documenting the club&apos;s culture
          </>
        }
        src="/assets/compsigh-web-platform-trailer-min.mp4"
        link="https://compsigh.club/community/web-platform"
        cta="Read the announcement on the web platform"
      />
      <h2>Now</h2>
      <ul>
        <li>Reading <em>Build</em> by Tony Fadell</li>
        <li>Resting after a challenging semester</li>
        <li>Documenting <Link href="/projects/compsigh">compsigh</Link> culture for the next club leadership team</li>
      </ul>
      <h2>Connect</h2>
      <ul>
        <li>
          <Link href="https://twitter.com/edwardshturman">X</Link>
        </li>
        <li>
          <Link href="https://github.com/edwardshturman">GitHub</Link>
        </li>
      </ul>
    </>
  )
}
