import { Flex } from '@chakra-ui/react'
import { Option } from './option'
import router from 'next/router'

const options = [
  {
    title: 'Type of employment',
    fields: ['Remote Jobs'],
  },
]

export const SidebarFilter = () => {
  const handleFieldChange = (optionName, fieldName, checked) => {
    if (optionName === 'Type of employment' && fieldName === 'Remote Jobs') {
      if (checked) return router.push({ query: { type: 'remote' } })
      if (!checked)
        return router.replace(router.pathname, undefined, { shallow: true })
    }
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
        {options.map((option) => (
          <Option
            {...option}
            onFieldChange={handleFieldChange}
            key={option.title}
          />
        ))}
      </div>
    </Flex>
  )
}
