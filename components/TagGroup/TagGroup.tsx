import { Tag, type TagProps } from '@/components/Tag'

export function TagGroup({ tags }: { tags: TagProps[] }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    }}>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          text={tag.text}
        />
      ))}
    </div>
  )
}
