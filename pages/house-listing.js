import { Box, Heading, VStack, Text, AspectRatio } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

const HouseListing = () => {
  return (
    <div>
      <Head>
        <title>House Listing | Mikado Shelters</title>
        <meta
          name='description'
          content='For you real estate needs, Mikado Shelters is here for you. We are building an abode that cares.'
        />
        <meta property='og:title' content='House Listing' key='title' />
        <meta
          property='og:description'
          content='For you real estate needs, Mikado Shelters is here for you. We are building an abode that cares.'
        />
        <meta
          property='og:url'
          content='https://www.mikadoshelters.com/house-listing'
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
      <Box pos='relative'>
        <AspectRatio maxW='100%' ratio={16 / 9}>
          <Image
            priority
            layout='fill'
            alt=''
            objectFit='cover'
            src='/listing.webp'
          />
        </AspectRatio>
      </Box>{" "}
    </div>
  );
};

export default HouseListing;
