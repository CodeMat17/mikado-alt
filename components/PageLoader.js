import { Box, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import LogoComponent from "../components/LogoComponent";

const PageLoader = () => {
  const animLogo = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: "spring", bounce: "0.4", duration: 3 },
    },
  };

  return (
    <Box w='100%' h='100vh'>
      <VStack>
        <HStack mt='32'>
          <Box
            as={motion.div}
            initial='hidden'
            whileInView='visible'
            variants={animLogo}>
            <LogoComponent />
          </Box>
          <Text>Please wait...</Text>
          <Spinner size='xs' />
        </HStack>
      </VStack>
    </Box>
  );
};

export default PageLoader;
