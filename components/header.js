import {
  Flex,
  Box,
  Link,
  Avatar,
  Container,
  Text,
  Button,
} from '@chakra-ui/react'

export const Header = () => (
  <Container maxW='container.xl'>
    <Flex justifyContent='space-between' mt={1} mb={5}>
      <Flex justifyContent='center' alignItems='center'>
        <Text color='GrayText' fontWeight='medium'>
          LOGO
        </Text>
        <Link
          fontWeight='bold'
          textAlign='left'
          fontSize='lg'
          color='blackAlpha.800'
        >
          Milao
        </Link>
      </Flex>
      <Box>
        <Button
          variant='ghost'
          size='sm'
          colorScheme='telegram'
          fontWeight='bold'
        >
          Find job
        </Button>
      </Box>
      <Flex>
        <Avatar width={30} height={30} />
      </Flex>
    </Flex>
  </Container>
)
