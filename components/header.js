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

import { useAuth } from '@/hooks/useAuth'

export const Header = () => {
  const { authenticated } = useAuth()

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
            {authenticated ? (
              <Avatar width={30} height={30} />
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
