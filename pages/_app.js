import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode='dark'></ColorModeScript>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp