import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const WhoWeAre = () => {
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

  const animMidText = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      // rotate: [0, 10, 0],
      transition: { type: "spring", bounce: "0.4", duration: 3, delay: 0.2 },
    },
  };
  const animSmallText = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      // rotate: [0, 10, 0],
      transition: { type: "spring", bounce: "0.4", duration: 3, delay: 0.6 },
    },
  };

  return (
    <Box maxW='3xl' mx='auto' px='6' py='12'>
      <VStack
        as={motion.div}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.6 }}>
        <Box as={motion.div} variants={animSvg} pos='relative' w='64' h='64'>
          <Image
            alt='news letter svg'
            src='/svg/about-us.svg'
            priority
            layout='fill'
            objectFit='cover'
          />
        </Box>
        <Heading as={motion.div} variants={animBigText} textAlign='center'>
          WHO WE ARE
        </Heading>
        {/* <Text
          as={motion.div}
          variants={animSmallText}
          textAlign='center'
          maxW='md'
          mx='auto'>
          &quot; Ninety percent of all millionaires become so through owning
          real estate &quot; - Andrew Carnegie.
        </Text> */}
        <Text pt='6'>
          Mikado Shelters is an emerging real estate company located in Abuja.
          Our mission is to be the number one real estate developer in
          Sub-Saharan Africa by creating eco-friendly luxury apartments and
          residential real estate in harmony with our client&apos;s tastes.
        </Text>

        <Text pt='2'>
          We are setting the pace by building single-family homes and other
          housing units in accordance with thoroughly researched, aesthetically
          pleasing customer experiences from brick to ground up, we are setting
          the pace. Our estates are environmentally sustainable and provide for
          the wellbeing and safety of the residents.
        </Text>

        <Text pt='2'>
          We don&apos;t take security lightly, which is why we&apos;ve
          implemented cutting-edge security and procedures to thwart
          unauthorized entry into the estate.We take great delight in providing
          the finest residential real estate.
        </Text>
      </VStack>
      <Text pt='2'>We are building an abode that cares.</Text>
    </Box>
  );
};

export default WhoWeAre;
