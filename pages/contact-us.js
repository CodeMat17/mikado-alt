import { AspectRatio, Box, Heading, Text, VStack } from "@chakra-ui/react";

const ContactUs = () => {
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
          <iframe src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5769.507433651375!2d7.469386504574796!3d9.000735451908367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSuite%20418%2C%20MKK%20Plaza%2C%20Along%20Joseph%20Gomwalk%20Road%2C%20Gudu%20District%2C%20FCT!5e0!3m2!1sen!2sno!4v1667056898796!5m2!1sen!2sno' />
        </AspectRatio>
      </Box>

      <VStack align='start' mt='12'>
        <Text fontWeight='bold' fontSize='2xl' letterSpacing='1px'>
          eMail Address:
        </Text>
        <Text>
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </Text>
      </VStack>
    </Box>
  );
};

export default ContactUs;
