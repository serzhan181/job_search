import { useState } from 'react'
import {
  Center,
  Box,
  SimpleGrid,
  Flex,
  VisuallyHidden,
  Input,
  Button,
  Icon,
  chakra,
} from '@chakra-ui/react'
import { useAuth } from '@/hooks/useAuth'
import router from 'next/router'

export default function SignUp() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUp = async () => {
    if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g.test(email)) return

    setLoading(true)
    const { user, error } = await signIn({ email, password })
    setLoading(false)

    if (error) {
      return alert('Error signing up...')
    }
    if (user) {
      router.push('/jobs')
    }
  }

  return (
    <Center bg='gray.800' height='100vh'>
      <Box colSpan={{ base: 'auto', md: 4 }}>
        <Box as='form' mb={6} rounded='lg' shadow='xl'>
          <Center pb={0} color='gray.700'>
            <chakra.p pt={2}>Log in.</chakra.p>
          </Center>
          <SimpleGrid
            columns={1}
            px={6}
            py={4}
            spacing={4}
            borderBottom='solid 1px'
            borderColor='gray.200'
          >
            <Flex>
              <VisuallyHidden>Email</VisuallyHidden>
              <Input
                mt={0}
                color='gray.200'
                type='email'
                placeholder='Email'
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Flex>
            <Flex>
              <VisuallyHidden>Password</VisuallyHidden>
              <Input
                mt={0}
                color='gray.200'
                type='password'
                placeholder='Password'
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Flex>
            <Button
              isLoading={loading}
              loadingText='Submitting...'
              colorScheme='brand'
              w='full'
              py={2}
              onClick={() => {
                handleSignUp()
              }}
            >
              Login
            </Button>
          </SimpleGrid>
          <Flex px={6} py={4}>
            <Button
              py={2}
              w='full'
              colorScheme='blue'
              leftIcon={
                <Icon
                  mr={1}
                  aria-hidden='true'
                  boxSize={6}
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  stroke='transparent'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z' />
                </Icon>
              }
            >
              Continue with Google
            </Button>
          </Flex>
        </Box>
      </Box>
    </Center>
  )
}
