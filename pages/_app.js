import { ChakraProvider } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from '@/context/Auth'
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
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default App
