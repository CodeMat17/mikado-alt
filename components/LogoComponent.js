import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const LogoComponent = () => {
  return (
    <Link href='/'>
      <a>
        <Box p='0.5' bgGradient='linear(to-l, tomato, blue.600)' rounded='full'>
          <Box pos='relative' w={12} h={12} rounded='full' overflow='hidden'>
            <Image
              alt='logo'
              priority
              layout='fill'
              objectFit='contain'
              src='/logo.webp'
            />
          </Box>
        </Box>
      </a>
    </Link>
  );
};

export default LogoComponent;
