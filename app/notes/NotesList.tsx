"use client"

import { useSearchParams } from "next/navigation"

import Link from "next/link"
import { NoteIcon } from "@/components/Icon"
import { UnreadIndicator } from "@/components/Icon"
import { Suspense, useMemo, useSyncExternalStore } from "react"

import { notes } from "./notes"

import styles from "./Notes.module.css"

function UnreadIndicatorContainer() {
  return (
    <div
      style={{
        position: "absolute",
        marginLeft: "-23px"
      }}
    >
      <UnreadIndicator />
    </div>
  )
}

function subscribeStorage(callback: () => void) {
  window.addEventListener("storage", callback)
  return () => window.removeEventListener("storage", callback)
}

function getReadNotesSnapshot() {
  const stored = localStorage.getItem("readNotes")
  if (stored) return stored
  localStorage.setItem("readNotes", JSON.stringify([]))
  return "[]"
}

const serverSnapshot = JSON.stringify(notes.map((note) => note.slug))
function getReadNotesServerSnapshot() {
  return serverSnapshot
}

function NotesListContent() {
  const readNotesRaw = useSyncExternalStore(
    subscribeStorage,
    getReadNotesSnapshot,
    getReadNotesServerSnapshot
  )
  const readNotes = useMemo(
    () => JSON.parse(readNotesRaw) as string[],
    [readNotesRaw]
  )

  // Filter notes by tags if present
  const searchParams = useSearchParams()
  const tagString = searchParams.get("tags")
  const tags = tagString?.split(",") || []
  let filteredNotes = notes
  if (tagString)
    filteredNotes = notes.filter((note) =>
      tags.every((tag) => note.tags.includes(tag))
    )

  function isSlugInLocalStorage(link: string) {
    return readNotes.some((note: string) => note === link)
  }

  function addSlugToLocalStorage(link: string) {
    const seen = isSlugInLocalStorage(link)
    if (!seen) {
      const updated = [...readNotes, link]
      localStorage.setItem("readNotes", JSON.stringify(updated))
      window.dispatchEvent(new StorageEvent("storage", { key: "readNotes" }))
    }
  }

  return (
    <ul>
      {filteredNotes.map((note, index) => (
        <li key={index}>
          <Link
            className={`${styles.link} ${isSlugInLocalStorage(note.slug) ? styles.seen : ""}`}
            href={`/notes/${note.slug}`}
            onClick={() => addSlugToLocalStorage(note.slug)}
          >
            {!isSlugInLocalStorage(note.slug) && <UnreadIndicatorContainer />}
            {note.text}
            <NoteIcon
              style={{ scale: 0.8, marginLeft: "4px", verticalAlign: "-6px" }}
            />
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
