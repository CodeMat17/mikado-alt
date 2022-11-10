import { Box, Heading, VStack, Text, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";

const HouseListing = () => {
  return (
    <Box pos='relative'>
      {/* <Heading textAlign='center'>HOUSE LISTING</Heading>

      <VStack pt='32' pb='64'>
        <Text fontWeight='bold' fontSize='3xl'>
          Coming Soon!
        </Text>
      </VStack> */}
      <AspectRatio maxW='100%' ratio={16 / 9}>
        <Image
          priority
          layout='fill'
          alt=''
          objectFit='cover'
          src='/listing.webp'
        />
      </AspectRatio>
    </Box>
  );
};

export default HouseListing;
