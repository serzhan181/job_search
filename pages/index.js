import { Flex, Box, Button, Stack } from '@chakra-ui/react'

const Home = () => {
  return (
    <Flex bg='blackAlpha.500' justifyContent='space-between' p={2}>
      <Stack
        spacing={2}
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
      >
        <Button variant='solid' size='md' colorScheme='red'>
          Home
        </Button>
      </Stack>
      <Box spacing='24px'>
        <Button variant='solid' size='sm' colorScheme='telegram' mr={2}>
          Login
        </Button>
        <Button variant='solid' size='sm' colorScheme='twitter'>
          Sign up
        </Button>
      </Box>
    </Flex>
  )
}

export default Home
