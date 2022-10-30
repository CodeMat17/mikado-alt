import { AspectRatio, Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

const ManagementTeamCard = ({ name, position, image }) => {
  return (
    <Box mx='auto'>
        <Box shadow='md' rounded='full' overflow='hidden' w={['220px']} h='220px'>
          <AspectRatio ratio={1 / 1}>
            <Image
              alt='image'
              priority
              layout='fill'
              objectFit='cover'
              src={image}
            />
          </AspectRatio>
        </Box>
    
      <VStack pt='4' spacing='0' fontSize='sm'>
        <Text>{name}</Text>
        <Text>{position}</Text>
      </VStack>
    </Box>
  );
};

export default ManagementTeamCard;
