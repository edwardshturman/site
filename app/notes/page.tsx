import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Thoughts on design, engineering, learning, and life',
  openGraph: {
    siteName: "Edward Shturman's personal website",
  }
}

export default function Notes() {
  return (
    <>
      <h1>Notes</h1>
      <nav>
        <ul>
          <li>
            <Link href="/notes/easy">&quot;It&apos;s easy&quot;</Link>
          </li>
          <li>
            <Link href="/notes/vs-code">VS Code: an Artist&apos;s Canvas</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
