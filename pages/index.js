import { auth } from '@/store/auth'
import Image from 'next/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { css } from '@emotion/react'
import Router from 'next/router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: 'easeOut',
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: 'easeOut',
    repeatDelay: 0.8,
  },
}

const Home = () => {
  useEffect(() => {
    if (auth.isInSession) {
      return Router.push('/jobs')
    }
  }, [])

  return (
    <Box
      w='100%'
      h='100vh'
      bgGradient='linear(to-r, blue.300, green.500)'
      display='flex'
      justifyContent='center'
      alignItems='center'
      position='relative'
    >
      <Flex alignItems='center'>
        <Image src='/logo-2.svg' width={90} height={90} />
        <Flex
          color='white'
          ml={3}
          alignItems='center'
          justifyContent='center'
          flexDir='column'
        >
          <Heading
            fontSize='5xl'
            css={css`
              font-family: 'Montserrat', sans-serif;
              font-weight: 300;
            `}
          >
            WORKISION
          </Heading>
          <Text color='whiteAlpha.500'>job all around the world.</Text>
        </Flex>
      </Flex>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '80%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {'{scroll down animation}'}
      </div>
    </Box>
  )
}

export default Home
