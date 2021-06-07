import { Flex, Heading, Checkbox } from '@chakra-ui/react'

export const Options = ({ title, fields }) => {
  return (
    <Flex mb={7} flexDirection='column'>
      <Heading as='h6' size='xs' colorScheme='gray' mb={3}>
        {title}
      </Heading>
      {Array.isArray(fields) ? (
        fields.map((option) => (
          <Checkbox key={option} size='sm'>
            {option}
          </Checkbox>
        ))
      ) : (
        <Checkbox>{fields}</Checkbox> // in theres single option
      )}
    </Flex>
  )
}
