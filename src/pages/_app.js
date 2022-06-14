// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import "../../styles/globals.css"
import chakraTheme from 'theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp