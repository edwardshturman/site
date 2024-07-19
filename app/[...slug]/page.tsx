import path from 'node:path'
import Link from 'next/link'
import { Suspense } from 'react'
import fs from 'node:fs/promises'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'

import '@/app/katex.min.css'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'

import { Tag } from '@/components/Tag'
import { Grid } from '@/components/Grid'
import { Spacer } from '@/components/Spacer'
import { Comment } from '@/components/Comment'
import { Mention } from '@/components/Mention'
import { TagGroup } from '@/components/TagGroup'
import { Playground } from '@/components/Playground'
import { GalleryCard } from '@/components/GalleryCard'
import { TableOfContents } from '@/components/TableOfContents'

async function readPage(slug: string[]) {
  try {
    const filePath = path.join(process.cwd(), 'app', ...slug) + '.md'
    const page = await fs.readFile(filePath, 'utf8')

    const vercelTheme = await import('./vercel-theme.json')
    const rehypePrettyCodeOptions: Options = {
      theme: vercelTheme as any
    }

    type Frontmatter = {
      title: string
      description: string
      published: boolean
      og_image?: string
    }

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: page,
      components: { Comment, GalleryCard, Grid, Link, Mention, Playground, Spacer, TableOfContents, Tag, TagGroup },
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
}

export async function generateMetadata(
  { params }:
  { params: { slug: string[] } }
) {
  const { frontmatter } = await readPage(params.slug)
  const metadata: Metadata = {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      siteName: "Edward Shturman's personal website",
    }
  }

  metadata.openGraph!.images = [{
    url: `api/og?title=${frontmatter.title}`,
    width: 1200,
    height: 630,
    alt: ''
  }]

  if (frontmatter.og_image)
    metadata.openGraph!.images = [{
      url: frontmatter.og_image,
      width: 1200,
      height: 630,
      alt: ''
    }]

  return metadata
}

export const dynamicParams = false
export async function generateStaticParams() {
  async function getMdSlugs(folder: string) {
    const entries = await fs.readdir(folder, { withFileTypes: true })
    const files = entries.filter((file) => file.isFile())
    const directories = entries.filter((file) => file.isDirectory())
    let slugs = files
      .filter((file) => file.name.endsWith('.md'))
      .map((file) => file.name.replace(/\.md$/, ''))
      .map((slug) => path.join(folder, slug))
      .map((slug) => slug.split('/'))
      .map((slug) => slug.slice(1))
      .map((slug) => ({ slug }))

    for (const directory of directories) {
      const nestedSlugs = await getMdSlugs(path.join(folder, directory.name))
      slugs = slugs.concat(nestedSlugs)
    }

    return slugs
  }

  const slugs = await getMdSlugs('app')
  return slugs
}

export default async function Page(
  { params }:
  { params: { slug: string[] } }
) {
  const { content, frontmatter } = await readPage(params.slug)

  return (
    <Suspense>
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
  )
}
