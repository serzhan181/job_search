import Image from 'next/image'
import { Box, Flex, Heading, Text, Link } from '@chakra-ui/layout'
import { css } from '@emotion/react'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInterception } from '@/hooks/useInterception'
import { Button } from '@chakra-ui/button'
import { observer } from 'mobx-react-lite'

const Home = observer(() => {
  const [ref, isVisible] = useInterception({ threshold: 0.2 })
  const animation = useAnimation()

  useEffect(() => {
    if (isVisible) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: 'spring',
        },
      })
    }

    if (!isVisible) {
      animation.start({
        opacity: 0,
        x: -200,
      })
    }
  }, [isVisible])

  return (
    <>
      <Box
        borderBottom='4px'
        borderColor='cyan.50'
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
              <motion.p
                animate={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.2, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                WORKISION
              </motion.p>
            </Heading>
            <Text color='whiteAlpha.500'>job all around the world.</Text>
          </Flex>
        </Flex>

        <Box
          position='absolute'
          left='50%'
          top='80%'
          className={css`
            transform: translate(-50%, -50%);
          `}
        >
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 10 }}
            transition={{ yoyo: Infinity, duration: 0.5 }}
          >
            <Text color='white' fontSize='3xl'>
              <i className='icon ion-ios-arrow-down'></i>
            </Text>
          </motion.div>
        </Box>
      </Box>

      <Flex
        justifyContent='center'
        flexDir='column'
        alignItems='center'
        bgGradient='linear(to-l, blue.400, blue.500)'
        h='100vh'
      >
        <Box>
          <Text
            as='h1'
            fontSize='5xl'
            fontFamily='Montserrat'
            color='whiteAlpha.900'
          >
            <motion.p ref={ref} animate={animation}>
              Find jobs wherever you want.
            </motion.p>
          </Text>
        </Box>
        <Button mt='7' as='a' href='/jobs'>
          Discover job openings
        </Button>
      </Flex>
    </>
  )
})

export default Home
