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
// import { useQuery } from '@apollo/client'
// import { get_job_data } from '@/queries/jobs/index'
import { dateago } from '@/helpers/dateago'

const MOCK_JOB = {
  data: {
    job: {
      title: 'Deep Learning Engineer',
      description:
        "At Stockwell, we are using machine learning and computer vision to build the retail platform of the future. In our world, brick and mortar stores look much different - we place stores right where our customers live, work and play so we can curate the products in our stores with the help of our customers. This is all possible because we design, build and operate automated stores that put the customer first with a seamless, frictionless checkout experience. \n\n\n\n### **You'll make an impact on one or more of these areas:**\n\n- **Design end-to-end pipelines for new vision models**: We have a unique asset in that our fleet of stores generates hundreds of transactions a day, each of which is a similarly structured problem with rich collected context. You will build pipelines that operate on a per transaction basis that help determine the state of inventory in each of our stores after transaction and restocking events. This involves 1) adapting and inventing novel model architecture, 2) designing training data for those model 3) working with our internal ops teams or vendors to generate training data, and 4) deploying inference services against our incoming transaction queue.\n- **Retrain metrics and item introduction pipeline**: Although all of our stores share a similar form factor, they operate in different contexts, with different lighting, and with different items. Help us learn and establish pipeline best practices around training data requirements on a per store and per item basis.\n- **Journal Club**: You will help drive our internal journal club, where we review the latest and greatest papers, demos, and novel methods in your field of expertise.\n\n### **Qualifications:**\n\n- Masters or PhD in machine learning or a machine learning related field\n- 1+ years of experience building nets in Tensorflow, Caffe, Torch, Keras, Theano (we use Tensorflow)\n- Experience with GPU computing including multigpu training and CUDA management.\n- Strong written and verbal communication skills\n- Incredibly fast learner, hungry for growth and/or ready to lead.\n\n### **Preferred/Bonus Qualifications:**\n\n- 1+ years of full-stack software development experience.\n- 3+ years experience with one or more general purpose programming languages including but not limited to: Java, C/C++, C#, Objective C, Python, JavaScript, or Go\n- Experience with classical computer vision and machine learning techniques.\n- Experience with the Google Cloud Platform\n- An interest in Advertising/Retail/CPG\n",
      company: {
        name: 'Stockwell',
        websiteUrl: 'https://www.stockwell.ai',
      },
      tags: [
        {
          id: 'cjuvb22bh017f07351gib1q0b',
          name: 'Python',
        },
        {
          id: 'cjuvchmgl01ej0735lulrje9d',
          name: 'Full Stack',
        },
        {
          id: 'cjvnpu2gl00ex0704w0scay4d',
          name: 'Tensorflow',
        },
        {
          id: 'cjvnpv9pb00g60704ta0pklvx',
          name: 'Google Cloud Platform',
        },
      ],
      commitment: {
        title: 'Full-time',
      },
      applyUrl:
        'https://jobs.lever.co/stockwell/41a3eac8-59e0-44de-b788-8aab168d99b6',
      createdAt: '2019-05-14T11:30:33.200Z',
    },
  },
}

export const JobContent = observer(() => {
  // const { jobSlug, companySlug } = jobs?.selectedJob
  const { data, error, loading } = {
    data: MOCK_JOB.data,
    loading: false,
    error: false,
  } // useQuery(get_job_data({ jobSlug, companySlug }))

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
        {!loading ? (
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

            <Text mt='5'>
              <Text as='h2' my={2} fontWeight='bold' fontSize='xl'>
                Description:
              </Text>
              <Markdown>{data.job.description}</Markdown>
            </Text>

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
        ) : (
          <Skeleton height='full'>
            <SkeletonText />
            <SkeletonText mt='5' noOfLines={4} spacing='4' />
          </Skeleton>
        )}
      </Box>
    </>
  )
})
