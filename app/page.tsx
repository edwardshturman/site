import Link from 'next/link'
import { Comment } from '@/components/Comment'
import { Spacer } from '@/components/Spacer'

export default function Home() {
  return (
    <>
      <h1>Edward Shturman</h1>
      <p>
        Web developer, interface designer, <br /> and community builder based in San Francisco
      </p>
      <Spacer size={4} />
      <Comment type="block">Site under construction</Comment>
      <Spacer size={4} />
      <nav>
        <ul>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/notes"}>Notes</Link>
          </li>
          <li>
            <Link href={"/roadmap"}>Roadmap</Link>
          </li>
        </ul>
      </nav>
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
