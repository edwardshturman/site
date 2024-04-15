import Link from 'next/link'
import Image from 'next/image'

import { Spacer } from '@/components/Spacer'
import { GalleryCard } from '@/components/GalleryCard'

export default function Home() {
  return (
    <>
      <h1>Edward Shturman</h1>
      <p>
        Web developer, interface designer, <br /> and community builder based in San Francisco
      </p>
      <Spacer size={4} />
      <nav>
        <ul>
          <li>
            <Link href={"/craft"}>Craft</Link>
          </li>
          <li>
            <Link href={"/notes"}>Notes</Link>
          </li>
          <li>
            <Link href={"/roadmap"}>Roadmap</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
        </ul>
      </nav>
      <h2>Latest</h2>
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
