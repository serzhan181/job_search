import { ChakraProvider } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { ApolloProvider } from '@apollo/client'
import { client } from '../apollo-client'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Global
        styles={css`
          body {
            background-color: #f7f7f7;
          }
        `}
      />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default App
