import { Flex, Heading, Checkbox } from '@chakra-ui/react'

export const Options = ({ title, options }) => {
  return (
    <Flex mb={7} flexDirection='column'>
      <Heading as='h6' size='xs' colorScheme='gray' mb={3}>
        {title}
      </Heading>
      {Array.isArray(options) ? (
        options.map((option) => (
          <Checkbox key={option} size='sm'>
            {option}
          </Checkbox>
        ))
      ) : (
        <Checkbox>{options}</Checkbox> // in theres single option
      )}
    </Flex>
  )
}
