import {ChakraProvider} from '@chakra-ui/react'
import theme from "../theme";
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NavHeader />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
