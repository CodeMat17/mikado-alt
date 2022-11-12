import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const HouseCard = ({ id, name, slug, location, description, coverimage }) => {
 const options = {
   renderText: (text) => {
     return text.split("\n").reduce((children, textSegment, index) => {
       return [...children, index > 0 && <br key={index} />, textSegment];
     }, []);
   },
 };


  return (
    <Box maxW={["100%", "100%", "xl"]}>
      <Link href={`buy-a-home/${slug}`}>
        <a>
          <Flex
            mb='12'
            shadow='lg'
            rounded='lg'
            // mx={['auto']}
            // key={house.id}
            flexDir={["column", "row", "row"]}>
            <Box pos='relative' w='100%' maxH='300px' rounded='md' overflow='hidden'>
              <AspectRatio ratio={1}>
                <Image
                  src={"https:" + coverimage}
                  alt='house'
                  priority
                  layout='fill'
                  objectFit='cover'
                />
              </AspectRatio>
            </Box>
            <Box pb={[2, 2, 4]} pt={[1]} px={[2, 2, 4]}>
              <Text fontSize='lg' fontWeight='semibold'>
                {name}
              </Text>
              <Text fontSize='sm' fontWeight='semibold' noOfLines='1'>
                {location}
              </Text>
              <Box fontSize='sm' mt='2' noOfLines={[2, 4, 2, 3, 4]} maxW='lg'>
                {documentToReactComponents(description, options)}
              </Box>
            </Box>
          </Flex>
        </a>
      </Link>{" "}
    </Box>
  );
};

export default HouseCard;
