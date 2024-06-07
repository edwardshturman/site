import Link from 'next/link'
import type { Metadata } from 'next'

import { Comment } from '@/components/Comment'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Thoughts on design, engineering, learning, and life',
  openGraph: {
    siteName: "Edward Shturman's personal website",
    images: [{
      url: 'api/og?title=Notes',
      width: 1200,
      height: 630,
      alt: ''
    }]
  }
}

export default function Notes() {
  return (
    <>
      <h1>Notes</h1>
      <Comment type="block">Thoughts on design, engineering, learning, and life</Comment>
      <nav>
        <ul>
          <li>
            <Link href="/notes/easy">&quot;It&apos;s easy&quot;</Link>
          </li>
          <li>
            <Link href="/notes/vs-code">VS Code: an Artist&apos;s Canvas</Link>
          </li>
          <li>
            <Link href="/notes/mdx-nextjs-14">Setting up MDX on Next.js 14</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
