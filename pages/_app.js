import { ChakraProvider } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'

const App = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Global
      styles={css`
        body {
          background-color: #f7f7f7;
        }
      `}
    />
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
