import fs from 'fs/promises'
import path from 'node:path'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import '@/app/katex.min.css'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { Suspense, cache } from 'react'
import { Comment } from '@/app/components/Comment'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Options } from 'rehype-pretty-code'

const readNote = cache(async (slug: string) => {
  try {
    const filePath = path.join(process.cwd(), 'app/notes', `${slug}.mdx`)
    const note = await fs.readFile(filePath, 'utf8')

    const vercelTheme = await import('@/app/vercel-theme.json')
    const options: Options = {
      theme: vercelTheme as any,
      defaultLang: 'plaintext'
    }

    type Frontmatter = {
      title: string
      description: string
    }

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: note,
      components: { Comment },
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [
            // remarkGfm,
            remarkMath
          ],
          rehypePlugins: [
            [rehypePrettyCode as any, options],
            rehypeSlug,
            rehypeKatex as any
          ]
        }
      }
    })
    return { content, frontmatter }
  } catch (error) {
    console.error(error)
    notFound()
  }
})

export async function generateMetadata(
  { params }:
  { params: { slug: string } }
): Promise<Metadata> {
  const { frontmatter } = await readNote(params.slug)
  return {
    title: `${frontmatter.title} — Edward Shturman`,
    description: frontmatter.description,
    openGraph: {
      images: [
        {
          url: `api/og?title=${frontmatter.title}`,
          width: 1200,
          height: 630,
          alt: ''
        }
      ]
    }
  }
}

export default async function Note(
  { params }:
  { params: { slug: string } }
) {
  const { content } = await readNote(params.slug)

  return (
    <>
      <Suspense fallback={<></>}>
        {content}
      </Suspense>
    </>
  )
}
