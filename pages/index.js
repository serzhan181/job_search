import { Header, Card, SidebarFilter } from '@/components/index'
import { Container, Grid } from '@chakra-ui/layout'

const Home = () => (
  <>
    <Header />
    <Container maxW='container.xl'>
      <Grid gridTemplateColumns='1fr 2fr 4fr'>
        <div style={{ backgroundColor: 'red' }}>
          <SidebarFilter />
        </div>

        <div style={{ backgroundColor: 'blue' }}></div>

        <div style={{ backgroundColor: 'purple' }}></div>
        {/* <Card /> */}
      </Grid>
    </Container>
  </>
)

export default Home
