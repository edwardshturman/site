type NoteProps = {
  text: string
  slug: string
  tags: string[]
}

export const notes: NoteProps[] = [
  {
    text: 'Changelog',
    slug: 'changelog',
    tags: ['devlog']
  },
  {
    text: '20 from 20',
    slug: '20-from-20',
    tags: ['life']
  },
  {
    text: '21 from 21',
    slug: '21-from-21',
    tags: ['life']
  },
  {
    text: `"It's easy"`,
    slug: 'easy',
    tags: ['life']
  },
  {
    text: 'How I write',
    slug: 'how-i-write',
    tags: ['writing']
  },
  {
    text: 'Site v1.1: Tags',
    slug: 'site-v1-1',
    tags: ['devlog', 'engineering']
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
