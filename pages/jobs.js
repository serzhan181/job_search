import { Cards, SidebarFilter, JobContent } from '@/components/index'
import { Box, Container, Grid } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { JobsLayout } from '@/layout/jobs_layout'
// import { useQuery } from '@apollo/client'
// import { GET_ALL_JOBS } from '@/queries/jobs/index'

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

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null)

  const { data, loading, error } = {
    data: MOCK_JOBS.data,
    loading: false,
    error: false,
  } // useQuery(GET_ALL_JOBS)

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
          </Box>{' '}
          {selectedJob && (
            <JobContent
              selectedJob={selectedJob}
              setSelectedJob={setSelectedJob}
            />
          )}
        </Grid>
      </Container>
    </JobsLayout>
  )
}
