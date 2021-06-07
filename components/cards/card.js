import { Flex, Box, HStack, chakra, useColorModeValue } from '@chakra-ui/react'
import { Tags } from '@/components/common/tags'

export const Card = ({
  title,
  description = 'some description for now',
  tags = [],
  ...rest
}) => {
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

      {tags.length && (
        <Box>
          <Flex
            alignItems='center'
            mt={2}
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            <Tags tags={tags} />
          </Flex>
        </Box>
      )}
    </Flex>
  )
}
