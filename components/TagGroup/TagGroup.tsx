'use client'

import { useSearchParams } from 'next/navigation'

import { Tag, type TagProps } from '@/components/Tag'

export function TagGroup({ tags }: { tags: TagProps[] }) {
  const searchParams = useSearchParams()
  const tagsParam = searchParams.get('tags') || ''
  const selectedTags = tagsParam.split(',').filter(Boolean)
  tags.sort((a, b) => {
    if (selectedTags.includes(a.text) && !selectedTags.includes(b.text)) return -1
    if (!selectedTags.includes(a.text) && selectedTags.includes(b.text)) return 1
    return 0
  })

  return (
    <>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          text={tag.text}
          style={{ paddingRight: '8px' }}
        />
      ))}
    </>
  )
}
