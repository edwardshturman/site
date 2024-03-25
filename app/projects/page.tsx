import type { Metadata } from 'next'
import Link from 'next/link'
import { Comment } from '@/app/components/Comment'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Notable work I've done and am doing",
  openGraph: {
    siteName: "Edward Shturman's personal website",
  }
}

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <nav>
        <ul>
          <li>
            <Link href="/projects/compsigh">compsigh</Link>
          </li>
        </ul>
      </nav>
      <Comment type="block">
        More coming soon. In the meantime, check out <Link href="https://read.cv/edwardshturman">my read.cv</Link>.
      </Comment>
    </>
  )
}
