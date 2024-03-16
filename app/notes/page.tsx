import type { Metadata } from 'next'
import Link from 'next/link'
import { Comment } from '@/app/components/Comment'

export const metadata: Metadata = {
  title: 'Notes',
  description: "Thoughts on programming, learning, and life",
  openGraph: {
    siteName: "Edward Shturman's personal website",
  }
}

export default function Notes() {
  return (
    <>
      <h1>Notes</h1>
      <ul>
        <li>
          <Link href="/notes/mandarin">Mandarin learning log</Link>
        </li>
      </ul>
      <br />
      <Comment type="block">In progress</Comment>
      <ul>
        <li>
          <p>VS Code: an Artist&apos;s Canvas</p>
        </li>
        <li>
          <p>MDX &amp; Metadata in Next.js</p>
        </li>
      </ul>
    </>
  )
}
