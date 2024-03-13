import path from 'node:path'
import { bundleMDX } from 'mdx-bundler'
import { Note } from '@/app/components/Note'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import '@/app/katex.min.css'
import rehypeSlug from 'rehype-slug'
import { Suspense, cache } from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Options } from 'rehype-pretty-code'

const readNote = cache(async (slug: string) => {
  try {
    const vercelTheme = await import('@/app/vercel-theme.json')
    const options: Options = {
      theme: vercelTheme as any,
      defaultLang: 'plaintext'
    }

    type Frontmatter = {
      title: string
      description: string
    }

    const result = await bundleMDX<Frontmatter>({
      cwd: process.cwd(),
      file: path.join(process.cwd(), 'app/notes', `${slug}.mdx`),
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMath]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          [rehypePrettyCode, options],
          rehypeSlug,
          rehypeKatex
        ]
        return options
      }
    })

    return {
      content: result.code,
      frontmatter: result.frontmatter
    }
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
    title: `${frontmatter.title}`,
    description: frontmatter.description,
    openGraph: {
      images: [
        {
          url: `api/og?title=${frontmatter.title}`,
          width: 1200,
          height: 630,
          alt: `A bitmapped version of an AI-generated image of a city in space. The words "${frontmatter.title}, a note by Edward Shturman" overlay the image.`
        }
      ],
      siteName: "Edward Shturman's personal website"
    }
  }
}

export default async function NotePage(
  { params }:
  { params: { slug: string } }
) {
  const { content, frontmatter } = await readNote(params.slug)

  return (
    <>
      <Suspense fallback={<h1>{frontmatter.title}</h1>}>
        <Note content={content} />
      </Suspense>
    </>
  )
}
