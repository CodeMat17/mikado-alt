import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import { Router } from "next/router";
import { useState } from "react";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import PageLoader from "../components/PageLoader";
import { client } from "../datalayer/contentfulClient";
import theme from "../theme";


function MyApp({ Component, pageProps}) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));

  return (
    <ChakraProvider theme={theme}>
      {!loading ? (
        <>
          <NavHeader />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <PageLoader />
      )}
    </ChakraProvider>
  );
}

export default MyApp;


