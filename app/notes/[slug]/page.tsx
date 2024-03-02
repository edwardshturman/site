import fs from 'node:fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { Suspense } from 'react'
import { Comment } from '@/app/components/Comment'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Options } from 'rehype-pretty-code'

export async function generateMetadata(
  { params }:
  { params: { slug: string } }
): Promise<Metadata> {
  const slug = params.slug
  let note
  try {
    note = fs.readFileSync(`${process.cwd()}/app/notes/${slug}.mdx`, 'utf8')
  }
  catch (error) {
    notFound()
  }
  const { data } = matter(note)

  return {
    title: `${data.title} — Edward Shturman`,
    description: data.description
  }
}

export default async function Note(
  { params }:
  { params: { slug: string } }
) {
  const slug = params.slug
  let note
  try {
    note = fs.readFileSync(`${process.cwd()}/app/notes/${slug}.mdx`, 'utf8')
  }
  catch (error) {
    notFound()
  }
  const { content } = matter(note)

  const vercelTheme = await fetch(
    'https://raw.githubusercontent.com/triyanox/vercel-theme/b93488a9a13216371ccdf015f3dc9f736dacb3e2/themes/Vercel%20Theme-color-theme.json'
  )
  const vercelThemeJson = await vercelTheme.json()

  const options: Options = {
    theme: vercelThemeJson,
    defaultLang: 'plaintext'
  }

  return (
    <>
      <Suspense fallback={<></>}>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
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
