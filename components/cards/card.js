import {
  Flex,
  Box,
  HStack,
  Tag,
  TagLabel,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'

export const Card = ({
  title,
  description = 'some description for now',
  tags = [],
  ...rest
}) => {
  const shrinkedTags = tags.length > 3 ? tags.slice(0, 3) : tags

  return (
    <Flex
      w='full'
      maxW='sm'
      px={4}
      py={3}
      height='32'
      shadow='sm'
      rounded='md'
      justifyContent='space-between'
      flexDir='column'
      cursor='pointer'
      {...rest}
    >
      <Box>
        <chakra.h1
          fontSize='lg'
          fontWeight='bold'
          mt={2}
          color={useColorModeValue('gray.800', 'white')}
        >
          {title}
        </chakra.h1>
        <chakra.p
          fontSize='sm'
          mt={2}
          color={useColorModeValue('gray.600', 'gray.300')}
        >
          {description}
        </chakra.p>
      </Box>

      {shrinkedTags.length && (
        <Box>
          <Flex
            alignItems='center'
            mt={2}
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            <HStack>
              {shrinkedTags.map((tag) => (
                <Tag
                  size='sm'
                  borderRadius='full'
                  variant='solid'
                  colorScheme='purple'
                  cursor='pointer'
                >
                  <TagLabel>{tag.name}</TagLabel>
                </Tag>
              ))}

              {tags.length > 3 && (
                <Tag
                  size='sm'
                  borderRadius='full'
                  variant='subtle'
                  colorScheme='gray'
                >
                  <TagLabel>and {tags.length - 3} more</TagLabel>
                </Tag>
              )}
            </HStack>
          </Flex>
        </Box>
      )}
    </Flex>
  )
}
