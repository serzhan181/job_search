import { Cards, SidebarFilter } from '@/components/index'
import { Box, Container, Grid } from '@chakra-ui/layout'
import { Layout } from '@/layout/basic'

export default function Jobs() {
  return (
    <Layout>
      <Container mt={9} maxW='container.xl'>
        <Grid gap={7} gridTemplateColumns={{ lg: '1fr 2fr 4fr' }}>
          <SidebarFilter />

          <Box bg='#fcfcfc' rounded='sm'>
            <Cards />
          </Box>

          <Box bg='gray.300'>{'<Job Content Here>'}</Box>
        </Grid>
      </Container>
    </Layout>
  )
}
