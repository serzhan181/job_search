import { Header, Card, SidebarFilter } from '@/components/index'
import { Box, Container, Grid } from '@chakra-ui/layout'

const Home = () => (
  <>
    <Header />
    <Container maxW='container.xl'>
      <Grid gap={7} gridTemplateColumns='1fr 2fr 4fr'>
        <SidebarFilter />

        <Box bg='#fcfcfc' rounded='sm'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Box>

        <Box bg='gray.300'>{'<Job Content Here>'}</Box>
      </Grid>
    </Container>
  </>
)

export default Home
