import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const OptionsCard = ({title, subTitle, image, url}) => {
  return (
    <Flex
      as={motion.div}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false }}
      transition={{ staggerChildren: 0.6 }}
    //   py='20'
    //   px='6'
      flexDir={["column"]}
      justify='center'
      align='center'
      gap={["12", "12", "8"]}
      maxW='xs'
      mx='auto'>
      <Box pb='8' rounded='md' shadow='lg'>
        <VStack as={motion.div} align='center' px='4'>
          <Box as={motion.div} variants={animSvg} pos='relative' w='40' h='40'>
            <Image
              alt='news letter svg'
              src={image}
              priority
              layout='fill'
              objectFit='contain'
            />
          </Box>
        </VStack>
        <Box as={motion.div} px='4'>
          <Heading as={motion.div} variants={animBigText} size='lg' textAlign='center'>
            {title}
          </Heading>
          <Text
            as={motion.div}
            variants={animMidText}
            textAlign='center'
            letterSpacing='1px'
            fontWeight='semibold'
            fontSize='lg'>
            {subTitle}
          </Text>
        </Box>

        <VStack mt='8'>
          <Link href={url}>
            <a>
              <Button colorScheme='blue' shadow='lg' size='lg' px='6' py='7'>
                CHECK OUT
              </Button>
            </a>
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export default OptionsCard;
