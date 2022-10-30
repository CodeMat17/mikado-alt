import { AspectRatio, Box, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";

const HouseCard = ({ url, location, published_at }) => {
  console.log(url);

  return (
    <Box pos='relative' rounded='lg' overflow='hidden' shadow='md'>
      <AspectRatio maxW={["100%", "650px"]} ratio={16 / 9}>
        <Image alt='house' priority layout='fill' objectFit='cover' src={url} />
      </AspectRatio>
  
        <Text
          pos='absolute' left='2' bottom='2'
          fontWeight='semibold' color='white'
          // fontSize=''
          textShadow='0 0 20px black'>
          {location}
        </Text>
        <Text
          pos='absolute'
          right='2'
          top='2'
          color='tomato'
          fontWeight='semibold'
          fontSize='sm'
          textShadow='0 0 20px black'>
          {published_at}
        </Text>
   
    </Box>
  );
};

export default HouseCard;
