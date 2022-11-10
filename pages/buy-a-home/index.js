import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import CallBtn from "../../components/contactBtn/CallBtn";
import EmailBtn from "../../components/contactBtn/EmailBtn";
import WhatsAppBtn from "../../components/contactBtn/WhatsAppBtn";
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
  });

  return {
    props: {
      pagedata: data.items,
      estates: estates.items,
    },
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
    <Box
      as={motion.div}
      initial='hidden'
      whileInView='visible'
      // viewport={{ once: false, amount: 0.56 }}
      transition={{ staggerChildren: 0.6 }}
      px='6'
      py='16'
      maxW='6xl'
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
            <Heading as={motion.div} variants={animBigText} textAlign='center'>
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

      <Box
        pos='relative'
        mt='20'
        // columns={[1]}
        // spacing='40px'
      >
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
      </Box>

      <Box
        display={{ base: "none", lg: "block" }}
        w='300px'
        py='6'
        px='4'
        pos='absolute'
        top='550px'
        right={[20, 20, 20, 20, 32, 72]}
        rounded='lg'
        shadow='dark-lg'>
        <Text fontWeight='semibold' fontSize='lg'>
          Contact us for more Info
        </Text>
        <HStack mt='4' spacing='6'>
          <EmailBtn />
          <WhatsAppBtn />
          <CallBtn />
        </HStack>
      </Box>
    </Box>
  );
};

export default BuyAHome;
