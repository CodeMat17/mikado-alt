import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";
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
  };
};
