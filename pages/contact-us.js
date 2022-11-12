import { AspectRatio, Box, Heading, Text, VStack } from "@chakra-ui/react";

export const getStaticProps = async (context) => {
  return {
    props: {
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6865823372073!2d7.469884414203603!3d9.000959591907229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0dc55a80d1cf%3A0x677738fdb0cc2c56!2sMikado%20Shelters!5e0!3m2!1sen!2sng!4v1668248661714!5m2!1sen!2sng",
    },
  };
};

const ContactUs = ({ url }) => {
  return (
    <Box px='6' py='16' maxW='xl' mx='auto'>
      <Heading textAlign='center'>CONTACT US</Heading>

      <VStack align='start' mt='12'>
        <Text fontWeight='bold' fontSize='2xl' letterSpacing='1px'>
          Office Address:
        </Text>
        <Text>
          Suite 418, MKK Plaza, Along Joseph Gomwalk Road, Gudu District, FCT,
          Abuja-Nigeria.
        </Text>
      </VStack>

      <Box rounded='md' overflow='hidden' mt='6'>
        <AspectRatio ratio={16 / 9}>
          <iframe src={url} />
        </AspectRatio>
      </Box>

      <VStack align='start' mt='12'>
        <Text fontWeight='bold' fontSize='2xl' letterSpacing='1px'>
          eMail Address:
        </Text>
        <Text>xxxxxxxxxxxxxxxxx</Text>
      </VStack>
    </Box>
  );
};

export default ContactUs;
