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
      <h2>Now</h2>
      <p>
        Focused on running <Link href="/projects/compsigh">compsigh</Link>, my CS club at the University of San Francisco
      </p>
      <h2>Connect</h2>
      <p>
        <Link href="https://twitter.com/edwardshturman">X</Link>
      </p>
      <p>
        <Link href="https://github.com/edwardshturman">GitHub</Link>
      </p>
      <p>
        <Link href="https://read.cv/edwardshturman">read.cv</Link>
      </p>
    </>
  )
}
