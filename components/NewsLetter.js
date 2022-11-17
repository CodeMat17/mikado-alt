import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  Heading,
  HStack,
  Input,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const NewsLetter = ({ title, label, desc }) => {
  const toast = useToast();
  const color = useColorModeValue("white", "");

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

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await axios.post("/api/subscribe", {
        email,
        firstName,
        lastName,
        phone,
      });
      toast({
        title: "DONE!!!",
        description:
          "You have successfully subscribed for our newsletter. Kudos!",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhone("");
    } catch (e) {
      setErrorMsg(e.response.data.error);
    }
    setLoading(false);
  };

  return (
    <Box px='6' pt='20' pb='20' maxW='2xl' mx='auto'>
      <VStack
        as={motion.div}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.6 }}>
        <Box as={motion.div} variants={animSvg} pos='relative' w='64' h='52'>
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

      <Box mt='8' maxW='md' mx='auto'>
        {errorMsg && (
          <Box p='4' mb='4' bg='red.100' color='red.500' rounded='lg'>
            <Text fontWeight='semibold' fontSize='lg' textAlign='center'>
              Something went wrong!
            </Text>
            <Text>{errorMsg}</Text>
          </Box>
        )}
        <chakra.form onSubmit={subscribe}>
          <Flex flexDir={["column", "row"]}>
            <FormControl isRequired={true}>
              <Input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                py='6'
                placeholder='Enter your first name'
              />
            </FormControl>
            <FormControl mt={[4, 0]} ml={[0, 4]} isRequired={true}>
              <Input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                py='6'
                placeholder='Enter your last name'
              />
            </FormControl>
          </Flex>
          <FormControl mt={[4]} isRequired={true}>
            <Input
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              py='6'
              placeholder='Enter your phone number'
            />
          </FormControl>
          <FormControl mt={[4]} isRequired={true}>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              py='6'
              placeholder='Enter your email'
            />
          </FormControl>
          <HStack mt='4'>
            <Button
              type='submit'
              disabled={loading}
              isLoading={loading}
              // onClick={subscribe}
              size='lg'
              w='full'
              bg='gray.700'
              color={color}>
              SUBSCRIBE
            </Button>
          </HStack>
        </chakra.form>
      </Box>

      {/* <InputGroup mt='6' maxW='md' mx='auto'>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          py='6'
          placeholder='Enter your email'
        />
        <InputRightAddon
          py='6'
          as='button'
          disabled={loading}
          loading={loading}
          onClick={subscribe}
          // children='Subscribe'
          bg='gray.700'
          color={color}>
          Subscribe
        </InputRightAddon>
      </InputGroup> */}
    </Box>
  );
};

export default NewsLetter;
