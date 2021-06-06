import { Cards, SidebarFilter, JobContent } from '@/components/index'
import { Box, Container, Grid } from '@chakra-ui/layout'
import { useState } from 'react'
import { Layout } from '@/layout/basic'
import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  query {
    jobs {
      id
      title
      slug
      company {
        slug
      }
      tags {
        name
      }
    }
  }
`

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null)

  const { data, loading, error } = useQuery(QUERY)

  if (error) {
    console.log('the error appeared ' + error)
  }

  if (loading) {
    return <div>LOADING...</div>
  }

  return (
    <Layout>
      <Container mt={9} maxW='container.xl'>
        <Grid
          gap={7}
          gridTemplateColumns={{
            lg: `1fr 2fr ${selectedJob ? '4fr' : ''}`,
          }}
        >
          <SidebarFilter />

          <Box bg='#fcfcfc' rounded='sm'>
            <Cards {...{ jobs: data.jobs, setSelectedJob }} />
          </Box>

          {selectedJob && (
            <JobContent
              selectedJob={selectedJob}
              setSelectedJob={setSelectedJob}
            />
          )}
        </Grid>
      </Container>
    </Layout>
  )
}
