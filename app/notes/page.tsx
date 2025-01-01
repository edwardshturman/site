import type { Metadata } from 'next'

import { Spacer } from '@/components/Spacer'
import { Comment } from '@/components/Comment'
import { TagGroup } from '@/components/TagGroup'

import { notes } from './notes'
import { NotesList } from './NotesList'

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
      <Spacer size={8} />
      <TagGroup
        tags={
          Array.from(new Set(notes.flatMap(note => note.tags))).map(tag => ({ text: tag }))
        }
      />
      <Spacer size={8} />
      <nav>
        <NotesList />
      </nav>
    </>
  )
}
