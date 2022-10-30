import {Box, Heading, VStack, Text} from '@chakra-ui/react'

const SellAHome = () => {
  return (
    <Box px='6' py='16' maxW='6xl' mx='auto'>
          <Heading textAlign='center'>HOMES FOR SALE</Heading>
          
          <VStack pt='32' pb='64'>
              <Text fontWeight='bold' fontSize='3xl'>Coming Soon!</Text>
          </VStack>
    </Box>
  );
}

export default SellAHome