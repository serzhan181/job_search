import { AuthProvider } from '@/context/AuthProvider'
import { ChakraProvider } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'

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
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
