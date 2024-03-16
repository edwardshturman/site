import Link from 'next/link'
import { Comment } from './components/Comment'

export default function Home() {
  return (
    <>
      <h1>Edward Shturman</h1>
      <p>
        Web developer, interface designer, and community builder based in San
        Francisco
      </p>
      <br />
      <nav>
        <p>
          / <Link href={'/notes'}>Notes</Link>
        </p>
        <p>
          / <Link href={'/roadmap'}>Roadmap</Link>
        </p>
      </nav>
      <br />
      <Comment type="block">Site under construction</Comment>
      <h2>Now</h2>
      <p>
        Focused on running{' '}
        <Link href="https://github.com/compsigh">compsigh</Link>, my CS club at
        the University of San Francisco
      </p>
      <h2>Connect</h2>
      <p>
        <Link href="https://twitter.com/edwardshturman">𝕏</Link>
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
