import { Box, HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import ColorModeToggle from "./ColorModeToggle";
import { MobileMenu } from "../components/menuBtn/MobileMenu";
import LogoComponent from "./LogoComponent";
import { DesktopMenu } from "./menuBtn/DesktopMenu";

const NavHeader = () => {
   const bg = useColorModeValue("white", "gray.800");

  return (
    <Box
      as='nav'
      py='3'
      px='4'
      pos='sticky'
      top='0'
      zIndex='60' shadow='md'
      // color='#00afee'
      bg={bg}
    >
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
          <DesktopMenu />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavHeader;
