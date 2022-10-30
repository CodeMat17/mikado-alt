import { Box, HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import Image from "next/image";
import ColorModeToggle from "./ColorModeToggle";
import { MobileMenu } from "../components/menuBtn/MobileMenu";
import LogoComponent from "./LogoComponent";

const NavHeader = () => {
   const bg = useColorModeValue("gray.200", "gray.800");

  return (
    <Box
      as='nav'
      py='3'
      px='4'
      pos='sticky'
      top='0'
      zIndex='60'
      // color='#00afee'
      bg={bg}>
      <HStack justify='space-between' align='center'>
        <HStack>
          <LogoComponent />
          <VStack spacing='-2' align='start' fontSize='lg' fontWeight='semibold'>
            <Text>MIKADO</Text>
            <Text>SHELTERS</Text>
          </VStack>
        </HStack>

        <HStack spacing='4'>
          <ColorModeToggle />
          <MobileMenu />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavHeader;
