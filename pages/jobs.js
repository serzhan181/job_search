import { JobCards, SidebarFilter, JobContent } from '@/components/index'
import { Box, Container, Grid } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'
import { JobsLayout } from '@/layout/jobs_layout'
import { jobs } from '@/store/jobs'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_ALL_JOBS, GET_REMOTE_JOBS } from '@/queries/jobs/index'
import { client } from 'apollo-client'
import Head from 'next/head'

const Jobs = observer(() => {
  const { data, loading, error } = useQuery(GET_ALL_JOBS)
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      if (router.query?.type) {
        const { type } = router.query
        if (type === 'remote') {
          const { data } = await client.query({ query: GET_REMOTE_JOBS })
          jobs.setListedJobs(data.remotes[0].jobs)
        }
      }
    })()
  }, [router.query])

  if (data) {
    jobs.setListedJobs(data?.jobs)
  }

  if (error) {
    console.log('the error appeared ' + error)
  }

  if (loading) {
    return (
      <JobsLayout>
        <Grid placeItems='center' h='80vh'>
          <Spinner
            thickness='3px'
            speed='0.65s'
            emptyColor='gray.200'
            color='gray.500'
            size='lg'
          />
        </Grid>
      </JobsLayout>
    )
  }

  return (
    <JobsLayout>
      <Head>
        <title>Explore Jobs</title>
      </Head>
      <Container mt={9} maxW='container.xl'>
        <Grid
          gap={7}
          gridTemplateColumns={{
            lg: `1fr 2fr ${jobs.selectedJob ? '4fr' : ''}`,
          }}
        >
          <SidebarFilter />
          <Box bg='#fcfcfc' rounded='sm'>
            <JobCards />
          </Box>{' '}
          {jobs.selectedJob && <JobContent />}
        </Grid>
      </Container>
    </JobsLayout>
  )
})

export default Jobs
