import { HStack, Tag, TagLabel } from '@chakra-ui/react'

export const Tags = ({ tags, isExpanded = false }) => {
  const shrinkedTags = tags.length > 3 ? tags.slice(0, 3) : tags
  return (
    <HStack>
      {(isExpanded ? tags : shrinkedTags).map((tag) => (
        <Tag
          key={tag.id}
          size='sm'
          borderRadius='full'
          variant='solid'
          colorScheme='purple'
        >
          <TagLabel>{tag.name}</TagLabel>
        </Tag>
      ))}

      {!isExpanded && tags.length > 3 && (
        <Tag size='sm' borderRadius='full' variant='subtle' colorScheme='gray'>
          <TagLabel>and {tags.length - 3} more</TagLabel>
        </Tag>
      )}
    </HStack>
  )
}
