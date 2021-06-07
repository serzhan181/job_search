import {
  Box,
  Button,
  Heading,
  Skeleton,
  SkeletonText,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react'
import Markdown from 'react-markdown'
import { Tags } from '@/components/common/tags'
import { observer } from 'mobx-react-lite'
import { jobs } from '@/store/jobs'
import { useQuery } from '@apollo/client'
import { get_job_data } from '@/queries/jobs/index'
import { dateago } from '@/helpers/dateago'

export const JobContent = observer(() => {
  const { jobSlug, companySlug } = jobs?.selectedJob
  const { data, error, loading } = useQuery(
    get_job_data({ jobSlug, companySlug })
  )

  if (error) {
    console.log(error)
    return <div>Error</div>
  }

  return (
    <>
      <Box
        bg='gray.200'
        position='sticky'
        top={'70px'}
        height='90vh'
        overflow='auto'
      >
        {loading ? (
          <Skeleton height='full'>
            <SkeletonText />
            <SkeletonText mt='5' noOfLines={4} spacing='4' />
          </Skeleton>
        ) : (
          <Box position='relative' py='5' px='7'>
            <VStack align='stretch'>
              <Heading size='xl'>{data.job.title}</Heading>
              <Heading size='sm'>{data.job.company.name}</Heading>
              <Link
                href={data.job.company.websiteUrl}
                colorScheme='gray'
                size='xs'
                isExternal
              >
                {data.job.company.websiteUrl}
              </Link>
            </VStack>

            <Box mt={5}>
              <Tags isExpanded tags={data.job.tags} />
            </Box>

            <Box mt={5}>
              <Text>Published: {dateago(data.job.createdAt)}</Text>
              <Text>Workflow: {data.job.commitment.title}</Text>
            </Box>

            <Text mt={5} as='h2' my={2} fontWeight='bold' fontSize='xl'>
              Description:
            </Text>
            <Markdown>{data.job.description}</Markdown>

            <Button colorScheme='teal' size='md' mt={7}>
              <Link href={data.job.applyUrl} isExternal>
                Apply for this job
              </Link>
            </Button>

            {/* The close button */}
            <Button
              position='absolute'
              top={1}
              right={1}
              fontSize='2xl'
              colorScheme='gray'
              onClick={() => jobs.setSelectedJob(null)}
            >
              <i className='icon ion-ios-close-circle'></i>{' '}
            </Button>
          </Box>
        )}
      </Box>
    </>
  )
})
