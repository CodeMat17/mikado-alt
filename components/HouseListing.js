import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PreviewCard from "./PreviewCard";

const HouseListing = ({title, label}) => {
  const bg = useColorModeValue("", "gray.700");

   const cards = [
     {
       id: 1,
       image: "/preview/aco-lugbe-2.webp",
     },
     {
       id: 2,
       image: "/preview/aco-lugbe-4.webp",
     },
     {
       id: 3,
       image: "/preview/aco-lugbe-6.webp",
     },
     {
       id: 4,
       image: "/preview/aco-lugbe-8.webp",
     },
   ];

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
    <Flex
      as={motion.div}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.4 }}
      transition={{ staggerChildren: 0.6 }}
      py='20'
      px='6'
      flexDir={["column"]}
      justify='center'
      align='center'
      gap={["12", "12", "8"]}
      maxW='6xl'
      mx='auto'>
      <Box>
        <VStack as={motion.div} align='center' px='4'>
          <Box as={motion.div} variants={animSvg} pos='relative' w='56' h='56'>
            <Image
              alt='news letter svg'
              src='/svg/listing.svg'
              priority
              layout='fill'
              objectFit='contain'
            />
          </Box>
        </VStack>
        <Box as={motion.div} px='4'>
          <Heading as={motion.div} variants={animBigText} textAlign='center'>
         
            {title}
          </Heading>
          <Text
            as={motion.div}
            variants={animMidText}
            textAlign='center'
            letterSpacing='1px'
            fontWeight='semibold'
            fontSize='lg'>
      {label}
          </Text>
          {/* <Text as={motion.div} variants={animSmallText} textAlign='center'>
          Checkout our listing
        </Text> */}
        </Box>
      </Box>

      <Box>
        <Flex
          bg={bg}
          px='6'
          py='6'
          mt={[0, 0, 0, 12]}
          maxW={["320px", "500px", "600px"]}
          overflowX='scroll'
          rounded='xl'>
          <Flex justify='center'>
            {cards.map((card) => (
              <PreviewCard key={card.id} {...card} />
            ))}
          </Flex>
        </Flex>
        <VStack mt='8'>
          <Link href='/house-listing'>
            <a>
              <Button shadow='lg' size='lg' px='6' py='7'>
                CHECK OUR LIST
              </Button>
            </a>
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export default HouseListing;
