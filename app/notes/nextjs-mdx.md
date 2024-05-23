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

Let's start with a clean install of Next.js:

```shell
npx create-next-app@latest
```

## Resources

- Josh Comeau's (the 🐐) [post on how he built his blog](https://www.joshwcomeau.com/blog/how-i-built-my-blog/)
- The fantastic plugins I'm using:
  - [`rehype-pretty-code`](https://rehype-pretty-code.netlify.app/)
  - [`rehype-slug`](https://github.com/rehypejs/rehype-slug)
  - [`remark-math` with `rehype-katex`](https://github.com/remarkjs/remark-math)
