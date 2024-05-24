---
title: "Setting up MDX on Next.js 14"
description: "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it."
published: false
---

# Setting up MDX on Next.js 14

It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.

<nav className="table-of-contents">
  <ul>
    <li>
      <Link href="#my-criteria">My criteria</Link>
    </li>
    <li>
      <Link href="#ecosystem">Ecosystem</Link>
    </li>
    <li>
      <Link href="#setup">Setup</Link>
    </li>
  </ul>
</nav>

## My criteria

I set out to check a few boxes:

1. **A natural authoring experience**: it should feel intuitive enough to edit as actual Markdown, such as in editors like Obsidian.
2. **As little dependencies & acrobatics as possible**: many of the solutions in guides I read while trying to build this used either multiple packages (like `gray-matter` + `next-mdx-remote`) or unmaintained ones like Contentlayer. It should be elegant — enough ;).
3. **Flexibility**: I don't want to be confined to something like a `/blog` route to use MDX. I want to be able to use what I want, where I want, based on my needs.

I'm happy to say I managed to check all of the above, with some bells & whistles, including:

- YAML frontmatter support
- Dynamic metadata & OG image generation
- Static generation of MDX pages at build time

## Ecosystem

### `@next/mdx`

While very fast server-rendered, [`@next/mdx`](https://www.npmjs.com/package/@next/mdx) is not very flexible: you can't name files anything other than `<slug>/page.mdx`, which does not get prettier over time. Also, YAML frontmatter is not natively supported.

### `gray-matter`

If the `@next/mdx` tradeoffs don't bother you, [`gray-matter`](https://github.com/jonschlinkert/gray-matter) is a great package for parsing frontmatter. In addition to standard YAML, it supports JSON and TOML as well.

### `mdx-bundler`

[`mdx-bundler`](https://github.com/kentcdodds/mdx-bundler) is nice for apps with a lot of components used sparsely in different places, as well as for non-Next.js apps, but it does come with a developer experience tradeoff in my opinion.

### `next-mdx-remote`

This is it. [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) allows you to write full-fat Markdown — you don't even need to use an `.mdx` extension — and just *use* your components, no import required. That does mean you have to package all of them for every page. But, since I use just a few small ones I wrote for convenience — in almost all my pages anyway — this isn't a concern for me personally.

## Setup

In this guide, I'll walk you through creating an MVP for serving MDX content on your Next.js app. I've scaffolded a [complete template repository](https://github.com/edwardshturman/next-mdx) you can use to follow along.

If you'd prefer to start from scratch, let's get going with a clean install of Next.js:

```shell
npx create-next-app@latest
```

For the reasons outlined above, let's roll with `next-mdx-remote`:

```shell
npm install next-mdx-remote
```

At this point, you get to decide the scope of rendering Markdown for your app. For my personal site, I've chosen the root route, meaning any `.md` file in the `app/` directory will be rendered. If this is what you're looking for, go ahead and create a new file `app/[...slug]/page.tsx`.

There are, broadly, three steps we need to implement for this route:

1. Fetching all `.md` files
2. Reading their contents
3. Compiling Markdown into HTML

Let's tackle these one at a time.

### Fetching files

Let's write a function to return all the "slugs" — filenames that represent routes we'll render — for our app:

```typescript
function getMdSlugs(folder: string, paths: string[] = []) {
  const slugs = paths
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
    .map((slug) => path.join(folder, slug))
    .map((slug) => slug.split('/'))
    .map((slug) => ({ slug }))
  return slugs
}
```

<Spacer size={32} />

<Comment type="block">An aside on <code>generateStaticParams()</code></Comment>

You might be wondering why we're returning an array of *objects*. That's because to [statically generate a catch-all dynamic segment](https://nextjs.org/docs/app/api-reference/functions/generate-static-params#catch-all-dynamic-segment):

- Next.js expects an array of objects,
- Where the value of each key is an array,
- And each element in that array maps to a segment in the route to be rendered.

For example:

```typescript
export function generateStaticParams() {
  return [
    { slug: ['a', '1'] },
    { slug: ['b', '2'] },
    { slug: ['c', '3'] }
  ]
}
```

Three routes will be statically generated:

- `/a/1`
- `/b/2`
- `/c/3`

<Comment type="block">End aside</Comment>

<Spacer size={32} />

Let's set up the logic for traversing each folder:

```typescript
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
```

Great! In order to generate each route at build time, let's wrap all of this in `generateStaticParams()`:

```typescript
export const dynamicParams = false
export async function generateStaticParams() {
  // function getMdSlugs(...)

  // Traversal logic above...

  return slugs
}
```

Awesome. We're done with the first step. Let's move on to reading page contents.

## Resources

- Josh Comeau's (the 🐐) [post on how he built his blog](https://www.joshwcomeau.com/blog/how-i-built-my-blog/)
- The fantastic plugins I'm using:
  - [`rehype-pretty-code`](https://rehype-pretty-code.netlify.app/)
  - [`rehype-slug`](https://github.com/rehypejs/rehype-slug)
  - [`remark-math` with `rehype-katex`](https://github.com/remarkjs/remark-math)
