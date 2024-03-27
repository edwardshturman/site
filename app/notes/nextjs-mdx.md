---
title: "Setting up MDX on Next.js 14"
description: "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it."
published: false
---

# Setting up MDX on Next.js 14

It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.

## My criteria

I set out to check a few boxes:

1. **A natural authoring experience**: it should feel intuitive enough to edit as actual Markdown, such as in editors like Obsidian.
2. **As little dependencies and acrobatics as possible**: many of the solutions in guides I read while trying to build this used `gray-matter{:.entity.name.type.module}`, `next-mdx-remote{:.entity.name.type.module}` — often both `compileMDX{:.entity.name.function}` and `MDXRemote{:.entity.name.function}` — or a hacked-together amalgam of Node.js I/O APIs. It should be elegant (enough :)).
3. **Flexibility**: I don't want to be confined to something like a `/blog` route to use MDX. I want to be able to use what I want interchangeably based on my needs.

I'm happy to say I managed to check all of the above, with some bells & whistles:

- YAML frontmatter support
- Dynamic metadata & OG image generation
- Static generation of MDX pages at build time

## Ecosystem

### `@next/mdx{:.entity.name.type.module}`

While very fast server-rendered, `@next/mdx{:.entity.name.type.module}` is not very flexible: you can't name the pages anything other than `<slug>/page.mdx`, and this does not get prettier over time. Also, YAML frontmatter is not natively supported.

### `gray-matter{:.entity.name.type.module}`

If the `@next/mdx{:.entity.name.type.module}` tradeoffs don't bother you, `gray-matter{:.entity.name.type.module}` is a great package for parsing frontmatter. It supports JSON and TOML in addition to YAML as well.

### `mdx-bundler{:.entity.name.type.module}`

`mdx-bundler{:.entity.name.type.module}` is nice for apps with a lot of components used sparsely in different places, as well as for non-Next.js apps, but it does come with a developer experience tradeoff in my opinion.

### `next-mdx-remote{:.entity.name.type.module}`

This is it. `next-mdx-remote{:.entity.name.type.module}` allows you to write full-fat Markdown — you don't even need to use an `.mdx` extension — and just *use* your components, no import required. Yes, that does mean you have to bundle *all of them* in *every* page. But, since I don't have a lot of them right now, and since my pages are statically generated anyway, this isn't a concern for me personally.

## Resources

- Josh Comeau's (the 🐐) [post on how he built his blog](https://www.joshwcomeau.com/blog/how-i-built-my-blog/)
- The fantastic plugins I'm using:
  - [`rehype-pretty-code`](https://rehype-pretty-code.netlify.app/)
  - [`rehype-slug`](https://github.com/rehypejs/rehype-slug)
  - [`remark-math` with `rehype-katex`](https://github.com/remarkjs/remark-math)
