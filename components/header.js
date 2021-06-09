import {
  Flex,
  Box,
  Link,
  Avatar,
  Container,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { useAuth, signOut } from '@/hooks/useAuth'

export const Header = () => {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <Box
      borderBottom='1px'
      borderColor='gray.200'
      position='fixed'
      top={0}
      height={9}
      width='full'
      bg='#fcfcfc'
    >
      <Container maxW='container.xl'>
        <Flex justifyContent='space-between'>
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

          <Flex>
            {user ? (
              <HStack>
                <Text size='xs' colorScheme='gray'>
                  {user.email}
                </Text>
                <Avatar width={30} height={30} />
                <Button size='xs' colorScheme='red' onClick={handleSignOut}>
                  Sign out
                </Button>
              </HStack>
            ) : (
              <HStack>
                <NextLink href='/signup'>
                  <Button size='xs' colorScheme='teal'>
                    Sign Up
                  </Button>
                </NextLink>
                <NextLink href='/login'>
                  <Button size='xs' colorScheme='blue'>
                    Log In
                  </Button>
                </NextLink>
              </HStack>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
