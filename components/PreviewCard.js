import { AspectRatio, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const PreviewCard = ({ image }) => {
  return (
    <Box
      as={motion.div}
      whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
      pos='relative'
      w='170px'
      mx='4'
      //   h='250px'
      shadow='md'
      bg='red.100'
      rounded='xl'
      overflow='hidden'>
      <AspectRatio w='100%' ratio={16 / 9}>
        {image ? (
          <Image
            alt='preview'
            priority
            layout='fill'
            objectFit='cover'
            src={image}
          />
        ) : (
          <Box bg='red'></Box>
        )}
      </AspectRatio>
      {/* <Text>{ title}</Text> */}
    </Box>
  );
};

export default PreviewCard;
