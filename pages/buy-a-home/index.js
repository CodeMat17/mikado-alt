import { Box, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import HouseCard from "../../components/HouseCard";
import { client } from "../../datalayer/contentfulClient";

export const getStaticProps = async () => {
  const data = await client.getEntries({
    content_type: "buyAHome",
  });

  const estates = await client.getEntries({
    content_type: "buyEstate",
    select: [
      "sys.id",
      "fields.name",
      "fields.slug",
      "fields.location",
      "fields.description",
      "fields.coverImage",
    ],
    order: 'fields.name',
  });

  return {
    props: {
      pagedata: data.items,
      estates: estates.items,
    },
    revalidate: 5,
  };
};

const animSvg = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: "0.4", duration: 3 },
  },
};

const animBigText = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // rotate: [0, 10, 0],
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 0.2 },
  },
};

const animMidText = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // rotate: [0, 10, 0],
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 0.4 },
  },
};

const BuyAHome = ({ pagedata, estates }) => {
  

  return (
    <div>
      <Head>
        <title>Buy A Home | Mikado Shelters</title>
        <meta
          name='description'
          content='For you real estate needs, Mikado Shelters is here for you. We are building an abode that cares.'
        />
        <meta property='og:title' content='Buy A Home' key='title' />
        <meta
          property='og:description'
          content='For you real estate needs, Mikado Shelters is here for you. We are building an abode that cares.'
        />
        <meta
          property='og:url'
          content='https://www.mikadoshelters.com/buy-a-home'
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
      <Box
        as={motion.div}
        initial='hidden'
        whileInView='visible'
        // viewport={{ once: false, amount: 0.56 }}
        transition={{ staggerChildren: 0.6 }}
        px='6'
        py='16'
        maxW='5xl'
        mx='auto'>
        <VStack as={motion.div} align='center' px='4'>
          <Box as={motion.div} variants={animSvg} pos='relative' w='56' h='56'>
            <Image
              alt='news letter svg'
              src='/svg/home.svg'
              priority
              layout='fill'
              objectFit='contain'
            />
          </Box>
        </VStack>

        {pagedata &&
          pagedata.map((info) => (
            <Box key={info.sys.id} as={motion.div} px='4'>
              <Heading
                as={motion.div}
                variants={animBigText}
                textAlign='center'>
                {info.fields.title}
              </Heading>
              <Text
                as={motion.div}
                variants={animMidText}
                textAlign='center'
                letterSpacing='1px'
                fontWeight='semibold'
                fontSize='lg'>
                {info.fields.label}
              </Text>
            </Box>
          ))}

        <SimpleGrid columns={[1, 1, 2]} spacing='40px' mt='20'>
          {estates &&
            estates.map((estate) => (
              <HouseCard
                key={estate.sys.id}
                id={estate.sys.id}
                name={estate.fields.name}
                slug={estate.fields.slug}
                location={estate.fields.location}
                coverimage={estate.fields.coverImage.fields.file.url}
                description={estate.fields.description}
              />
            ))}
        </SimpleGrid>
      </Box>{" "}
    </div>
  );
};

export default BuyAHome;
