import { AspectRatio, Box } from "@chakra-ui/react";
import Image from "next/image";

const SellAHome = () => {
  return (
    <Box pos='relative'>
      <AspectRatio maxW='100%' ratio={16 / 9}>
        <Image
          priority
          layout='fill'
          alt=''
          objectFit='cover'
          src='/sell.webp'
        />
      </AspectRatio>
    </Box>
  );
};

export default SellAHome;
