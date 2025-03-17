'use client'

import { useSearchParams } from 'next/navigation'

import Link from 'next/link'
import { NoteIcon } from '@/components/Icon'
import { UnreadIndicator } from '@/components/Icon'
import { Suspense, useEffect, useState } from 'react'

import { notes } from './notes'

import styles from './Notes.module.css'

function UnreadIndicatorContainer() {
  return (
      <div
        style={{
          position: 'absolute',
          marginLeft: '-23px',
        }}
      >
        <UnreadIndicator />
      </div>
  )
}

function NotesListContent() {
  // Fetch read notes from localStorage for unread indicators
  const [readNotes, setReadNotes] = useState<string[]>(notes.map(note => note.slug))
  useEffect(() => {
    const storedReadNotes = localStorage.getItem('readNotes')
    if (storedReadNotes) {
      setReadNotes(JSON.parse(storedReadNotes))
    }
    else {
      localStorage.setItem('readNotes', JSON.stringify([]))
    }
  }, [])

  // Filter notes by tags if present
  const searchParams = useSearchParams()
  const tagString = searchParams.get('tags')
  const tags = tagString?.split(',') || []
  let filteredNotes = notes
  if (tagString)
    filteredNotes = notes.filter(note => (tags.every(tag => note.tags.includes(tag))))

  function isSlugInLocalStorage(link: string) {
    return readNotes.some((note: string) => note === link)
  }

  function addSlugToLocalStorage(link: string) {
    const seen = isSlugInLocalStorage(link)
    if (!seen) {
      readNotes.push(link)
      localStorage.setItem('readNotes', JSON.stringify(readNotes))
    }
  }

  return (
    <ul>
      {filteredNotes.map((note, index) => (
        <li key={index}>
          <Link
            className={`${styles.link} ${isSlugInLocalStorage(note.slug) ? styles.seen : ''}`}
            href={`/notes/${note.slug}`}
            onClick={() => addSlugToLocalStorage(note.slug)}
          >
            {!isSlugInLocalStorage(note.slug) && <UnreadIndicatorContainer />}
            {note.text}
            <NoteIcon style={{ scale: 0.8, marginLeft: '4px', verticalAlign: '-6px' }} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function NotesList() {
  return (
    <Suspense>
      <NotesListContent />
    </Suspense>
  )
}
