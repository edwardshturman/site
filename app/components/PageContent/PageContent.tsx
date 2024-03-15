'use client'

import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

export function PageContent(
  { content }:
  { content: string }
) {
  const Content = useMemo(() => getMDXComponent(content), [content])

  return <Content />
}
