import path from 'node:path'
import fs from 'node:fs/promises'
import type { Metadata } from 'next'
import { Suspense, cache } from 'react'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'

import '@/app/katex.min.css'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import type { Options } from 'rehype-pretty-code'

import Link from 'next/link'
import { Comment } from '@/components/Comment'
import { GalleryCard } from '@/components/GalleryCard'

const readPage = cache(async (slug: string[]) => {
  try {
    const filePath = path.join(process.cwd(), 'app', ...slug) + '.md'
    const page = await fs.readFile(filePath, 'utf8')

    const vercelTheme = await import('@/app/vercel-theme.json')
    const rehypePrettyCodeOptions: Options = {
      theme: vercelTheme as any
    }

    type Frontmatter = {
      title: string
      description: string
      published: boolean
    }

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: page,
      components: { Comment, GalleryCard, Link },
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [
            [rehypePrettyCode as any, rehypePrettyCodeOptions],
            rehypeSlug,
            rehypeKatex as any,
          ]
        }
      }
    })
    return { content, frontmatter }
  } catch (error) {
    notFound()
  }
})

export async function generateMetadata(
  { params }:
  { params: { slug: string[] } }
) {
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

export const dynamicParams = false
export async function generateStaticParams() {
  function getMdSlugs(folder: string, paths: string[] = []) {
    const slugs = paths
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''))
      .map((slug) => path.join(folder, slug))
      .map((slug) => slug.split('/'))
      .map((slug) => ({ slug }))
    return slugs
  }

  const app = path.join(process.cwd(), 'app')
  const files = await fs.readdir(app, { withFileTypes: true })
  const folders = files.filter((file) => file.isDirectory())
  let slugs = await Promise.all(
    folders.map(async (folder) => {
      const pathsInFolder = await fs.readdir(path.join(app, folder.name))
      return getMdSlugs(folder.name, pathsInFolder)
    })
  )
  .then((slugs) => slugs.flat())

  const pathsInAppFolder = files.map((file) => file.name)
  const slugsFromAppFolder = getMdSlugs('', pathsInAppFolder)
  slugs = slugs.concat(slugsFromAppFolder)
  return slugs
}

export default async function Page(
  { params }:
  { params: { slug: string[] } }
) {
  const { content, frontmatter } = await readPage(params.slug)

  return (
    <>
      <Suspense fallback={<h1>{frontmatter.title}</h1>}>
        { !frontmatter.published &&
          <>
            <br />
            <Comment type="block">
              Hey there, you&apos;ve found an unpublished page. Feel free to poke around, but keep in mind the thoughts here are a bit more in-progress than usual. :)
            </Comment>
          </>
        }
        {content}
      </Suspense>
    </>
  )
}
