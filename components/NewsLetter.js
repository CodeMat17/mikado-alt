import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const NewsLetter = ({title, label, desc}) => {
  const color = useColorModeValue("white", "");

  const handleSubscribe = () => {};

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
    <Box px='6' pt='20' pb='20' maxW='2xl' mx='auto'>
      <VStack
        as={motion.div}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.6 }}>
        <Box as={motion.div} variants={animSvg} pos='relative' w='64' h='40'>
          <Image
            alt='news letter svg'
            src='/svg/news-letter.svg'
            priority
            layout='fill'
            objectFit='cover'
          />
        </Box>
        <Text
          as={motion.div}
          variants={animMidText}
          textAlign='center'
          letterSpacing='1px'
          fontWeight='semibold'
          fontSize='lg'>
  {label}
        </Text>
        <Heading as={motion.div} variants={animBigText} textAlign='center'>
        {title}
        </Heading>
        <Text
          as={motion.div}
          variants={animSmallText}
          textAlign='center'
          maxW='md'
          mx='auto'>
       {desc}
        </Text>
      </VStack>

      <InputGroup mt='6' maxW='md' mx='auto'>
        <Input py='6' placeholder='Enter your email' />
        <InputRightAddon
          py='6'
          as='button'
          onClick={handleSubscribe}
          // children='Subscribe'
          bg='gray.700'
          color={color}>
          Subscribe
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

export default NewsLetter;
