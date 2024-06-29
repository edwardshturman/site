type NoteProps = {
  text: string
  slug: string
  tags: string[]
}

export const notes: NoteProps[] = [
  {
    text: `"It's easy"`,
    slug: 'easy',
    tags: ['life', 'learning']
  },
  {
    text: "VS Code: an Artist's Canvas",
    slug: 'vs-code',
    tags: ['guide', 'setup']
  },
  {
    text: 'Setting up MDX on Next.js 14',
    slug: 'mdx-nextjs-14',
    tags: ['guide', 'engineering']
  }
]
