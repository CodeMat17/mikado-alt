import { AspectRatio, Box, Heading, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";

export const getStaticProps = async (context) => {
  return {
    props: {
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6865823372073!2d7.469884414203603!3d9.000959591907229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0dc55a80d1cf%3A0x677738fdb0cc2c56!2sMikado%20Shelters!5e0!3m2!1sen!2sng!4v1668248661714!5m2!1sen!2sng",
    },
    revalidate: 5,
  };
};

const ContactUs = ({ url }) => {
  return (
    <div>
      <Head>
        <title>Contact Us | Mikado Shelters</title>
        <meta
          name='description'
          content='Office Address: Suite 418, MKK Plaza, Along Joseph Gomwalk Road, Gudu District, FCT, Abuja-Nigeria.'
        />
        <meta property='og:title' content='Contact Us' key='title' />
        <meta
          property='og:description'
          content='Office Address: Suite 418, MKK Plaza, Along Joseph Gomwalk Road, Gudu District, FCT, Abuja-Nigeria.'
        />
        <meta
          property='og:url'
          content='https://www.mikadoshelters.com/contact-us'
        />
        <meta property='og:type' content='website' />

        {/* New details */}
        <meta key='og_locale' property='og:locale' content='en_IE' />
        <meta
          key='og_site_name'
          property='og:site_name'
          content='Mikado Shelters'
        />
        <meta
          key='og_image'
          property='og:image'
          content='https://res.cloudinary.com/mctony17/image/upload/v1646157936/mikado/for-seo.png'
        />
        <meta key='og_image:alt' property='og:image:alt' content='logo' />
        <meta key='og_image:width' property='og:image:width' content='300' />
        <meta key='og_image:height' property='og:image:height' content='300' />

        <meta name='robots' content='index,follow' />

        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta key='twitter:site' name='twitter:site' content='@MikadoShelter' />
        <meta
          key='twitter:creator'
          name='twitter:creator'
          content='@MikadoShelter'
        />
        <meta
          key='twitter:title'
          property='twitter:title'
          content='Mikado Shelter'
        />
        <meta
          key='twitter:description'
          property='twitter:description'
          content='Mikado Shelters Ltd is an emerging real estate company located in Abuja, FCT, Nigeria. The proprietors have over 10 years combined experience. The company is currently redefining real estate development landscape in Abuja by building homes that accord customers exhilarating experience from start to finish. Our estates are designed to care for the environment to carter for the wel lbeing of the inhabitants. We use sophisticated security appliances to protect our estates and deter porous access to it.'
        />

        <link rel='canonical' href='https://www.mikadoshelters.com' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box px='6' py='16' maxW='xl' mx='auto'>
        <Heading textAlign='center'>CONTACT US</Heading>

        <VStack align='start' mt='12'>
          <Text fontWeight='bold' fontSize='2xl' letterSpacing='1px'>
            Office Address:
          </Text>
          <Text>
            Suite 418, MKK Plaza, Along Joseph Gomwalk Road, Gudu District, FCT,
            Abuja-Nigeria.
          </Text>
        </VStack>

        <VStack align='start' mt='8'>
          <Text fontWeight='bold' fontSize='2xl' letterSpacing='1px'>
            eMail Address:
          </Text>
          <Text>mikadoshelters@gmail.com</Text>
        </VStack>

        <Box rounded='md' overflow='hidden' mt='12'>
          <AspectRatio ratio={16 / 9}>
            <iframe src={url} />
          </AspectRatio>
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
