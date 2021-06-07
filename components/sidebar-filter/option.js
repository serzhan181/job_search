import { Flex, Heading, Checkbox } from '@chakra-ui/react'

export const Option = ({ title, fields, onFieldChange }) => {
  return (
    <Flex mb={7} flexDirection='column'>
      <Heading as='h6' size='xs' colorScheme='gray' mb={3}>
        {title}
      </Heading>
      {Array.isArray(fields) ? (
        fields.map((field) => (
          <Checkbox
            key={field}
            onChange={(e) => onFieldChange(title, field, e.target.checked)}
            size='sm'
          >
            {field}
          </Checkbox>
        ))
      ) : (
        <Checkbox>{fields}</Checkbox> // in theres single option
      )}
    </Flex>
  )
}
