type NoteProps = {
  text: string
  slug: string
  tags: string[]
}

export const notes: NoteProps[] = [
  {
    text: "20 from 20",
    slug: "20-from-20",
    tags: ["life"]
  },
  {
    text: "21 from 21",
    slug: "21-from-21",
    tags: ["life"]
  },
  {
    text: `"It's easy"`,
    slug: "easy",
    tags: ["life"]
  }
]
