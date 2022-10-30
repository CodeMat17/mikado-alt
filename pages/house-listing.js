import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const HouseListing = () => {
  return (
    <Box px='6' py='16' maxW='6xl' mx='auto'>
      <Heading textAlign='center'>HOUSE LISTING</Heading>

      <VStack pt='32' pb='64'>
        <Text fontWeight='bold' fontSize='3xl'>
          Coming Soon!
        </Text>
      </VStack>
    </Box>
  );
};

export default HouseListing;
