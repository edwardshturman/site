'use client'

import { useSearchParams } from 'next/navigation'

import Link from 'next/link'
import { Suspense } from 'react'
import { NoteIcon } from '@/components/Icon'

import { notes } from './notes'

import styles from './Notes.module.css'

function NotesListContent() {
  const searchParams = useSearchParams()
  const tagString = searchParams.get('tags')
  const tags = tagString?.split(',') || []
  let filteredNotes = notes
  if (tagString)
    filteredNotes = notes.filter(note => (tags.every(tag => note.tags.includes(tag))))

  return (
    <ul>
      {filteredNotes.map((note, index) => (
        <li key={index}>
          <Link className={styles.link} href={`/notes/${note.slug}`}>
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
