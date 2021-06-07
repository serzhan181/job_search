import { Flex, Input, Button } from '@chakra-ui/react'
import { Options } from './options'
import { debounce } from '@/helpers/debounce'

const options = [
  {
    title: 'Type of employment',
    fields: ['Full Time Jobs', 'Part Time Jobs', 'Remote Jobs'],
  },
  {
    title: 'Salary range',
    fields: ['100-500', '500-1000', '1000-2000', '2000-5000', '5000+'],
  },
]

export const SidebarFilter = () => {
  const handleFindJob = (e) => {
    console.log(e.target.value)
  }

  return (
    <Flex
      alignItems='center'
      pt={2}
      rounded='md'
      flexDirection='column'
      bg='#fcfcfc'
    >
      <div>
        <Flex alignItems='center' mb={2}>
          <Input
            placeholder='frontend developer...'
            size='sm'
            color='gray.700'
            borderRadius='md'
            onChange={debounce(handleFindJob, 300)}
          />
          <Button
            variant='ghost'
            size='xs'
            colorScheme='telegram'
            fontWeight='bold'
            ml='2'
          >
            Find job
          </Button>
        </Flex>

        {options.map((option) => (
          <Options {...option} key={option.title} />
        ))}
      </div>
    </Flex>
  )
}
