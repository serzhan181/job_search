import {
  Flex,
  Box,
  HStack,
  Tag,
  TagLabel,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'

export const Card = () => {
  return (
    <Flex
      w='full'
      maxW='sm'
      px={4}
      py={3}
      bg='white'
      height='32'
      shadow='md'
      rounded='md'
      justifyContent='space-between'
      flexDir='column'
    >
      <Box>
        <chakra.h1
          fontSize='lg'
          fontWeight='bold'
          mt={2}
          color={useColorModeValue('gray.800', 'white')}
        >
          Senior Next.js developer
        </chakra.h1>
        <chakra.p
          fontSize='sm'
          mt={2}
          color={useColorModeValue('gray.600', 'gray.300')}
        >
          Next.js developer for making e-commerce websites etc.
        </chakra.p>
      </Box>

      <Box>
        <Flex
          alignItems='center'
          mt={2}
          color={useColorModeValue('gray.700', 'gray.200')}
        >
          <HStack>
            <Tag
              size='sm'
              borderRadius='full'
              variant='solid'
              colorScheme='green'
              cursor='pointer'
            >
              <TagLabel>Full Time</TagLabel>
            </Tag>

            <Tag
              size='sm'
              borderRadius='full'
              variant='solid'
              colorScheme='purple'
              cursor='pointer'
            >
              <TagLabel>Remote</TagLabel>
            </Tag>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  )
}
