import { Box, SimpleGrid } from "@chakra-ui/react";
import OptionsCard from "./OptionsCard";



const Options = ({ cardDetails }) => {
  return (
    <Box px='6' py='20' maxW='6xl' mx='auto'>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing='40px'>
        {cardDetails && cardDetails.map((card) => (
          <OptionsCard key={card.id} {...card} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Options;
