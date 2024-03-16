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
      <Comment type="block">Writing</Comment>
      <ul>
        <li>Setting up MDX on Next.js 14</li>
        <li>VS Code: an Artist&apos;s Canvas</li>
      </ul>
    </>
  )
}
