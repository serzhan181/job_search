import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Markdown from 'react-markdown'
import { gql, useQuery } from '@apollo/client'

const get_job_data = ({ jobSlug, companySlug }) => {
  return gql`
  query {
    job(input: { jobSlug: "${jobSlug}", companySlug: "${companySlug}" }) {
      title
      description
    }
  }
`
}

// commitment {
//   title
// }

export const JobContent = ({
  selectedJob: { jobSlug, companySlug },
  setSelectedJob,
}) => {
  const { data, error, loading } = useQuery(
    get_job_data({ jobSlug, companySlug })
  )

  if (error) {
    console.log(error)
    return <div>Error</div>
  }

  return !loading ? (
    <>
      <Box
        bg='gray.200'
        position='sticky'
        top={'70px'}
        height='90vh'
        overflow='auto'
      >
        <Box position='relative' py='5' px='7'>
          <Heading fontSize='3xl'>{data.job.title}</Heading>

          <Text mt='5'>
            <Markdown>{data.job.description}</Markdown>
          </Text>

          <Button
            position='absolute'
            top={1}
            right={1}
            fontSize='2xl'
            onClick={() => setSelectedJob(null)}
          >
            <i className='icon ion-ios-close-circle'></i>{' '}
          </Button>
        </Box>
      </Box>
    </>
  ) : (
    <div>LOADING...</div>
  )
}
