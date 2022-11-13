import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { animated, useSpring } from "react-spring";
import { client } from "../datalayer/contentfulClient";

const WhoWeAre = ({ data }) => {
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 800,
      config: { mass: 1, tension: 20, friction: 20 },
    });
    return (
      <animated.div>
        {number.to((n) =>
          n
            .toFixed(0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        )}
      </animated.div>
    );
  }

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
      transition: { type: "spring", bounce: "0.4", duration: 3, delay: 0.4 },
    },
  };

  const options = {
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return (
    <div>
      <Head>
        <title>Who We Are | Mikado Shelters</title>
        <meta
          name='description'
          content="Located in the beautiful heart of Abuja, our mission is to be the number one real estate developer in Sub-Saharan Africa by creating eco-friendly luxury apartments and residential real estate in harmony with our client's tastes. We are setting the pace by building single-family homes and other housing units in accordance with thoroughly researched, aesthetically pleasing customer experiences from brick to ground up, we are setting the pace. Our estates are environmentally sustainable and provide for the well being and safety of the residents."
        />
        <meta property='og:title' content='Who We Are' key='title' />
        <meta
          property='og:description'
          content="Located in the beautiful heart of Abuja, our mission is to be the number one real estate developer in Sub-Saharan Africa by creating eco-friendly luxury apartments and residential real estate in harmony with our client's tastes. We are setting the pace by building single-family homes and other housing units in accordance with thoroughly researched, aesthetically pleasing customer experiences from brick to ground up, we are setting the pace. Our estates are environmentally sustainable and provide for the well being and safety of the residents."
        />
        <meta
          property='og:url'
          content='https://www.mikadoshelters.com/who-we-are'
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

      <Box maxW='3xl' mx='auto' px='6' py='12'>
        {data &&
          data.map((item) => (
            <Box key={item.sys.id}>
              <VStack
                as={motion.div}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.6 }}>
                <Box
                  as={motion.div}
                  variants={animSvg}
                  pos='relative'
                  w='64'
                  h='64'>
                  <Image
                    alt='news letter svg'
                    src='/svg/about-us.svg'
                    priority
                    layout='fill'
                    objectFit='cover'
                  />
                </Box>
                <Heading
                  as={motion.div}
                  variants={animBigText}
                  textAlign='center'>
                  {item.fields.title}
                </Heading>
                <VStack mt='12'>
                  <HStack spacing='16'>
                    <VStack pb='4' px='2' shadow='lg' rounded='lg'>
                      <HStack>
                        <Box
                          fontSize='7xl'
                          fontWeight='extrabold'
                          letterSpacing='4px'
                          color='blue.500'>
                          <Number n={10} />
                        </Box>
                        <Text
                          fontSize='7xl'
                          fontWeight='extrabold'
                          color='blue.500'>
                          +
                        </Text>
                      </HStack>

                      <Text textAlign='center'> {item.fields.experience}</Text>
                    </VStack>
                    <VStack pb='4' px='2' shadow='lg' rounded='lg'>
                      <Box
                        fontSize='7xl'
                        fontWeight='extrabold'
                        letterSpacing='4px'
                        color='blue.500'>
                        <Number n={4} />
                      </Box>
                      <Text textAlign='center'> {item.fields.estates}</Text>
                    </VStack>
                  </HStack>
                </VStack>

                <Box pt='6'>
                  {documentToReactComponents(item.fields.content, options)}
                </Box>
              </VStack>
              {/* <Text pt='2'>We are building an abode that cares.</Text> */}
            </Box>
          ))}
      </Box>
    </div>
  );
};

export default WhoWeAre;

export const getStaticProps = async () => {
  const data = await client.getEntries({
    content_type: "whoWeAre",
  });

  return {
    props: {
      data: data.items,
    },
    revalidate: 5,
  };
};
