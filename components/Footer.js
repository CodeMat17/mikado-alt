import {
  Box,
  Divider,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import useContentfulLinks from "../datalayer/useContentfulLinks";
import CallBtn from "./contactBtn/CallBtn";
import EmailBtn from "./contactBtn/EmailBtn";
import FacebookBtn from "./contactBtn/FacebookBtn";
import InstagramBtn from "./contactBtn/InstagramBtn";
import TwitterBtn from "./contactBtn/TwitterBtn";
import WhatsAppBtn from "./contactBtn/WhatsAppBtn";
import LogoComponent from "./LogoComponent";

const Footer = () => {
  const color = useColorModeValue("gray.200", "gray.200");

  const [callNo, setCallNo] = useState(null);
  const [whatsapp, setWhatsapp] = useState(null);
  const [email, setEmail] = useState(null);
  const [fb, setFb] = useState(null);
  const [ig, setIg] = useState(null);
   const [tw, setTw] = useState(null);

  const { getCallNo, getWhatsAppNo, getEmail, getFb, getIg, getTw } = useContentfulLinks();

  useEffect(() => {
    getCallNo().then((res) => setCallNo(res));
  }, []);

  useEffect(() => {
    getWhatsAppNo().then((res) => setWhatsapp(res));
  }, []);

  useEffect(() => {
    getEmail().then((res) => setEmail(res));
  }, []);

  useEffect(() => {
    getFb().then((res) => setFb(res));
  }, []);

   useEffect(() => {
     getIg().then((res) => setIg(res));
   }, []);
  
   useEffect(() => {
     getTw().then((res) => setTw(res));
   }, []);

  return (
    <Box px='6' py='12' bg='gray.900' color={color}>
      <Box maxW='6xl' mx='auto'>
        <Flex mb='8'>
          <HStack align='center'>
            <LogoComponent />
            <VStack align='start' lineHeight='3'>
              <Text fontSize='lg' fontWeight='semibold'>
                MIKADO SHELTERS LTD
              </Text>
              <Text fontSize='sm'>
                Diversified services, unvarying quality.
              </Text>
            </VStack>
          </HStack>
        </Flex>

        <SimpleGrid columns={[1, 2, 3]} spacingY={["40px"]}>
          <VStack align='start'>
            <Text fontWeight='semibold' fontSize='lg' letterSpacing='1px'>
              Follow Us
            </Text>
            <HStack spacing='4'>
              <FacebookBtn fb={fb} />
              <InstagramBtn ig={ig} />
              <TwitterBtn tw={tw} />
            </HStack>
          </VStack>

          <VStack align='start'>
            <Text fontWeight='semibold' fontSize='lg' letterSpacing='1px'>
              Contact Us
            </Text>
            <HStack spacing='4'>
              <EmailBtn email={email} />
              <WhatsAppBtn whatsapp={whatsapp} />
              <CallBtn callNo={callNo} />
            </HStack>
          </VStack>

          <VStack align='start'>
            <Text fontWeight='semibold' fontSize='lg' letterSpacing='1px'>
              Pages
            </Text>
            <Box fontSize='sm' color='blue.500'>
              <NextLink href='/'>
                <a>
                  <Text fontSize='sm'>Home</Text>
                </a>
              </NextLink>
              <NextLink href='who-we-are'>
                <a>
                  <Text>Who We Are</Text>
                </a>
              </NextLink>
              <NextLink href='buy-a-home'>
                <a>
                  <Text>Buy A Home</Text>
                </a>
              </NextLink>
              <NextLink href='sell-a-home'>
                <a>
                  <Text>Sell A Home</Text>
                </a>
              </NextLink>
              <NextLink href='our-team'>
                <a>
                  <Text>Our Team</Text>
                </a>
              </NextLink>
              <NextLink href='contact-us'>
                <a>
                  <Text>Contact Us</Text>
                </a>
              </NextLink>
            </Box>
          </VStack>
        </SimpleGrid>
        <Divider my='8' />
        <Text>&copy; 2022 Mikado Shelters Ltd. All rights reserved.</Text>
        <Text color='gray'>
          {" "}
          Developed by{" "}
          <Link
            color='blue.500'
            isExternal
            href='https://www.soft-lutions.com.ng'>
            CodeMat Soft-lutions.
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
