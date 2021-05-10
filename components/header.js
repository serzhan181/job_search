import { Flex, Box, Link, Avatar, Container, Text } from '@chakra-ui/react'

export const Header = () => (
  <Container maxW='container.xl'>
    <Flex justifyContent='space-between' mb={10}>
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
        <Link color='telegram.600' fontWeight='bold'>
          Find job
        </Link>
      </Box>
      <Flex>
        <Avatar width={30} height={30} />
      </Flex>
    </Flex>
  </Container>
)
