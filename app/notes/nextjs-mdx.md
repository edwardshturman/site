---
title: "Setting up MDX on Next.js 14"
description: "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it."
published: false
---

# Setting up MDX on Next.js 14

It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.

## Requirements

I set out to check a few boxes:

1. **A natural authoring experience**: it should feel intuitive enough to edit as actual Markdown, such as in editors like Obsidian.
2. **As little dependencies and acrobatics as possible**: many of the solutions in guides I read while trying to build this used `gray-matter{:.entity.name.type.module}`, `next-mdx-remote{:.entity.name.type.module}` — often both `compileMDX{:.entity.name.function}` and `MDXRemote{:.entity.name.function}` — or a hacked-together amalgam of Node.js I/O APIs. It should be elegant (enough :)).
3. **Flexibility**: I don't want to be confined to something like a `/blog` route to use MDX. I want to be able to use what I want interchangeably based on my needs.

## Resources

- Josh Comeau's (the 🐐) [post on how he built his blog](https://www.joshwcomeau.com/blog/how-i-built-my-blog/)
- The fantastic plugins I'm using:
  - [`rehype-pretty-code`](https://rehype-pretty-code.netlify.app/)
  - [`rehype-slug`](https://github.com/rehypejs/rehype-slug)
  - [`remark-math` with `rehype-katex`](https://github.com/remarkjs/remark-math)
