import { Header } from '@/components/header'
import { Box } from '@chakra-ui/layout'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box pt={9}>{children}</Box>
    </>
  )
}
