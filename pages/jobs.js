import { JobCards, SidebarFilter, JobContent } from '@/components/index'
import { Box, Container, Grid } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'
import { JobsLayout } from '@/layout/jobs_layout'
import { jobs } from '@/store/jobs'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { GET_REMOTE_JOBS } from '@/queries/jobs/index'
import { client } from 'apollo-client'

const MOCK_JOBS = {
  data: {
    jobs: [
      {
        id: 'cjwnlolmk03hm0756mmvkw5d2',
        title: 'Senior Software Engineer - Frontend',
        slug: 'senior-software-engineer-frontend',
        company: {
          slug: 'close',
        },
        tags: [
          {
            name: 'JavaScript',
          },
          {
            name: 'Frontend',
          },
        ],
      },
      {
        id: 'cjwnlegxb03dv0756ysmiqd0y',
        title: 'Senior Software Engineer - Backend',
        slug: 'senior-software-engineer-backend',
        company: {
          slug: 'close',
        },
        tags: [
          {
            name: 'Backend',
          },
          {
            name: 'Python',
          },
        ],
      },
      {
        id: 'cjuv67iby00m7073524m7c01j',
        title: 'Engineering Manager',
        slug: 'engineering-manager',
        company: {
          slug: 'prisma',
        },
        tags: [
          {
            name: 'Prisma',
          },
          {
            name: 'Rust',
          },
          {
            name: 'Scala',
          },
          {
            name: 'Management',
          },
        ],
      },
      {
        id: 'cjuv5x5je00k70735fzuc3sis',
        title: 'Developer Support Engineer',
        slug: 'developer-support-engineer',
        company: {
          slug: 'prisma',
        },
        tags: [
          {
            name: 'Prisma',
          },
          {
            name: 'JavaScript',
          },
        ],
      },
      {
        id: 'cjuv53bpu00fs0735b5ljpmpc',
        title: 'Backend Engineer',
        slug: 'backend-engineer',
        company: {
          slug: 'prisma',
        },
        tags: [
          {
            name: 'Prisma',
          },
          {
            name: 'Backend',
          },
          {
            name: 'Rust',
          },
          {
            name: 'Scala',
          },
        ],
      },
    ],
  },
}

const Jobs = observer(() => {
  const { data, loading, error } = {
    data: MOCK_JOBS.data,
    loading: false,
    error: false,
  } // useQuery(GET_ALL_JOBS)

  jobs.setListedJobs(data.jobs)

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

  return (
    <JobsLayout>
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
