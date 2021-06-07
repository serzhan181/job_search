import { Header } from '@/components/header'
import { Box } from '@chakra-ui/layout'

export const JobsLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box pt={9}>{children}</Box>
    </>
  )
}
