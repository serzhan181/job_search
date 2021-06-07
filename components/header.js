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
          <Avatar width={30} height={30} />
        </Flex>
      </Flex>
    </Container>
  </Box>
)
