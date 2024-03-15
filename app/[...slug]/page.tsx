import path from 'node:path'
import { bundleMDX } from 'mdx-bundler'
import { PageContent } from '@/app/components/PageContent'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import '@/app/katex.min.css'
import rehypeSlug from 'rehype-slug'
import { Suspense, cache } from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Options } from 'rehype-pretty-code'
import { Comment } from '@/app/components/Comment'

const readPage = cache(async (
  slug: string | string[]
) => {
  try {
    const vercelTheme = await import('@/app/vercel-theme.json')
    const rehypePrettyCodeOptions: Options = {
      theme: vercelTheme as any,
      defaultLang: 'plaintext'
    }

    type Frontmatter = {
      title: string
      description: string
      published: boolean
    }

    if (Array.isArray(slug))
      slug = slug.join('/')

    const result = await bundleMDX<Frontmatter>({
      cwd: process.cwd(),
      file: path.join(process.cwd(), 'app', `${slug}.mdx`),
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMath]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          [rehypePrettyCode, rehypePrettyCodeOptions],
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
    notFound()
  }
})

export async function generateMetadata(
  { params }:
  { params: { slug: string | string[] }}
): Promise<Metadata> {
  const { frontmatter } = await readPage(params.slug)
  const metadata: Metadata = {
    title: `${frontmatter.title}`,
    description: frontmatter.description,
    openGraph: {
      siteName: "Edward Shturman's personal website",
    }
  }

  if (params.slug.includes('notes'))
    metadata.openGraph!.images = [{
      url: `api/og?title=${frontmatter.title}`,
      width: 1200,
      height: 630,
      alt: `A bitmapped version of an AI-generated image of a city in space. The words "${frontmatter.title}, a note by Edward Shturman" overlay the image.`
    }]

  return metadata
}

export default async function Page(
  { params }:
  { params: { slug: string | string[] }}
) {
  const { content, frontmatter } = await readPage(params.slug)

  return (
    <>
      <Suspense fallback={<h1>{frontmatter.title}</h1>}>
        { !frontmatter.published &&
          <>
            <br />
            <Comment type='block'>
              Hey there, you&apos;ve found an unpublished page. Feel free to poke around, but keep in mind the thoughts here are a bit more in-progress than usual. :)
            </Comment>
          </>
        }
        <PageContent content={content} />
      </Suspense>
    </>
  )
}
