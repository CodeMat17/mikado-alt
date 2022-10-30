import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ManagementTeamCard from "../components/ManagementTeamCard";

const mngt = [
  {
    id: 1,
    image: "/mngt/md.webp",
    position: "MD/CEO",
    name: "ENGR. ISIOMA ANDY",
  },
  {
    id: 2,
    image: "/mngt/legal.webp",
    position: "LEGAL REPRESENTATIVE",
    name: "UJUNWA LEATICIA O.",
  },
];

const ManagementTeam = () => {
  return (
    <Box px='6' py='16' maxW='6xl' mx='auto'>
      <Heading textAlign='center'>OUR MANAGEMENT TEAM</Heading>

      <SimpleGrid pt='16' pb='8' columns={[1, 1, 2, 3]} spacing='40px'>
        {mngt.map((team) => (
          <ManagementTeamCard key={team.id} {...team}  />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ManagementTeam;
