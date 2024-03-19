import type { Metadata } from 'next'
import Link from 'next/link'

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
          <Link href="/notes/easy">&quot;It&apos;s easy&quot;</Link>
        </li>
        <li>
          <Link href="/notes/mandarin">Mandarin learning log</Link>
        </li>
      </ul>
    </>
  )
}
