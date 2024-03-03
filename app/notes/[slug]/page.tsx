import fs from 'fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
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
    return matter(note)
  } catch (error) {
    notFound()
  }
})

export async function generateMetadata(
  { params }:
  { params: { slug: string } }
): Promise<Metadata> {
  const { data } = await readNote(params.slug)
  return {
    title: `${data.title} — Edward Shturman`,
    description: data.description
  }
}

export default async function Note(
  { params }:
  { params: { slug: string } }
) {

  const vercelTheme = await import('@/app/vercel-theme.json')

  const options: Options = {
    theme: vercelTheme as any,
    defaultLang: 'plaintext'
  }

  const { content } = await readNote(params.slug)

  return (
    <>
      <Suspense fallback={<></>}>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                [rehypePrettyCode as any, options],
                rehypeSlug
              ]
            }
          }}
          components={{ Comment }}
        />
      </Suspense>
    </>
  )
}
