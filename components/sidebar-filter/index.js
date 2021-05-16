import { Flex } from '@chakra-ui/react'
import { Options } from './options'

const fake_options = [
  {
    title: 'Type of employment',
    options: ['Full Time Jobs', 'Part Time Jobs', 'Remote Jobs'],
  },
  {
    title: 'Salary range',
    options: ['100-500', '500-1000', '1000-2000', '2000-5000', '5000+'],
  },
]

export const SidebarFilter = () => {
  return (
    <Flex
      alignItems='center'
      pt={2}
      rounded='md'
      flexDirection='column'
      bg='#fcfcfc'
    >
      <div>
        {fake_options.map((option) => (
          <Options {...option} key={option.title} />
        ))}
      </div>
    </Flex>
  )
}
