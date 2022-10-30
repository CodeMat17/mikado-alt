import {
  Box,
  Button,
  Heading,
  ListItem,
  OrderedList,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMultiStyleConfig,
  useTab,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import HouseCard from "../../components/HouseCard";

const buyHouse = [
  {
    id: 1,
    url: "/house/aco-lugbe-1.webp",
    location: "Acoberry Guzape",
    published_at: "1 month ago",
  },
  {
    id: 2,
    url: "/house/aco-lugbe-2.webp",
    location: "Acoberry Guzape",
    published_at: "1 month ago",
  },
  {
    id: 3,
    url: "/house/aco-lugbe-3.webp",
    location: "Hillside Estate",
    published_at: "1 month ago",
  },
  {
    id: 4,
    url: "/house/aco-lugbe-4.webp",
    location: "Hillside Estate",
    published_at: "1 month ago",
  },
  {
    id: 5,
    url: "/house/aco-lugbe-5.webp",
    location: "Pearl Apartment Jabi",
    published_at: "1 month ago",
  },
  {
    id: 6,
    url: "/house/aco-lugbe-6.webp",
    location: "Pearl Apartment Jabi",
    published_at: "1 month ago",
  },
  {
    id: 7,
    url: "/house/aco-lugbe-7.webp",
    location: "Pearl Apartment Jabi",
    published_at: "1 month ago",
  },
  {
    id: 8,
    url: "/house/aco-lugbe-8.webp",
    location: "Acoberry Lugbe",
    published_at: "1 month ago",
  },
  {
    id: 9,
    url: "/house/aco-lugbe-9.webp",
    location: "Acoberry Lugbe",
    published_at: "1 month ago",
  },
  {
    id: 10,
    url: "/house/aco-lugbe-10.webp",
    location: "Acoberry Guzape",
    published_at: "1 week ago",
  },
];

const animSvg = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: "0.4", duration: 3 },
  },
};

const animBigText = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // rotate: [0, 10, 0],
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 0.2 },
  },
};

const animMidText = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // rotate: [0, 10, 0],
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 0.4 },
  },
};

const BuyAHome = () => {
  // const CustomTab = React.forwardRef((props, ref) => {
  //   // 1. Reuse the `useTab` hook
  //   const tabProps = useTab({ ...props, ref });
  //   const isSelected = !!tabProps["aria-selected"];

  //   // 2. Hook into the Tabs `size`, `variant`, props
  //   const styles = useMultiStyleConfig("Tabs", tabProps);

  //   return (
  //     <Button __css={styles.tab} {...tabProps}>
  //       <Box as='span' mr='2'>
  //         {isSelected ? "🏡" : "😎"}
  //       </Box>
  //       {tabProps.children}
  //     </Button>
  //   );
  // });

  return (
    <Box
      as={motion.div}
      initial='hidden'
      whileInView='visible'
      // viewport={{ once: false, amount: 0.56 }}
      transition={{ staggerChildren: 0.6 }}
      px='6'
      py='16'
      maxW='6xl'
      mx='auto'>
      <VStack as={motion.div} align='center' px='4'>
        <Box as={motion.div} variants={animSvg} pos='relative' w='56' h='56'>
          <Image
            alt='news letter svg'
            src='/svg/home.svg'
            priority
            layout='fill'
            objectFit='contain'
          />
        </Box>
      </VStack>
      <Box as={motion.div} px='4'>
        <Heading as={motion.div} variants={animBigText} textAlign='center'>
          WANT TO BUY A HOME?
        </Heading>
        <Text
          as={motion.div}
          variants={animMidText}
          textAlign='center'
          letterSpacing='1px'
          fontWeight='semibold'
          fontSize='lg'>
          DON&apos;T GET LEFT BEHIND
        </Text>
      </Box>

      <Tabs
        // bg='gray.800'
        variant='enclosed'
        pt='12'
        pb='8'
        pos='sticky'
        top='4'
        zIndex='50'>
        <TabList>
          <Tab px='6' fontWeight={["bold"]} fontSize={["xl"]}>
            Views
          </Tab>
          <Tab px='6' fontWeight={["bold"]} fontSize={["xl"]}>
            Description
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid pt='12' pb='8' columns={[1, 1, 2, 3]} spacing='40px'>
              {buyHouse.map((house) => (
                <HouseCard key={house.id} {...house} />
              ))}
            </SimpleGrid>
          </TabPanel>

          <TabPanel maxW='2xl'>
            <Box py='6'>
              <Text fontWeight='semibold' fontSize='xl' letterSpacing='1px'>
                Acoberry Lugbe Estate
              </Text>

              <Text pt='4'>
                The lovely neighborhood is found in Lugbe, Federal Capital
                Territory of Abuja, at Aco estate Lube, just after the DSS
                quarters. With a down payment of 7.5 million, you can own a
                four-bedroom detached duplex at Acoberry Lugbe. The Acoberry
                Lugbe gives you access to:
              </Text>
              <OrderedList pt='4'>
                <ListItem>Good internal roads with street lights.</ListItem>
                <ListItem>
                  Standby power plant / dedicated transformer.
                </ListItem>
                <ListItem>Water treatment facility</ListItem>
                <ListItem>Perimeter fencing</ListItem>
                <ListItem>CCTV security system</ListItem>
                <ListItem>Waste disposal system</ListItem>
                <ListItem>
                  24/7 emergency maintenance services. and many more
                </ListItem>
              </OrderedList>
            </Box>

            <Box py='6'>
              <Text fontWeight='semibold' fontSize='xl' letterSpacing='1px'>
                Acoberry Guzape Estate
              </Text>
              <Text fontWeight='semibold' letterSpacing='1px'>
                1710 Cadastral zone A09, Guzape, Federal Capital Territory,
                Abuja
              </Text>

              <Text pt='4'>
                The appealing Guzape is an envied natural family residential
                home unit with a view of the wide topography. A twelve-car
                parking area, bubble interlocked pave the way, surrounding pines
                and trees for the proper ambiance are all included in this
                two-story, four-bedroom terrace building. Guzape has a
                three-part payment schedule that ranges from 80 million naira
                (carcass) to 160 million naira (finished). This estate allure
                offers you:
              </Text>
              <OrderedList pt='4'>
                <ListItem>Good internal roads with street lights.</ListItem>
                <ListItem>
                  Standby power plant / dedicated transformer.
                </ListItem>
                <ListItem>Water treatment facility</ListItem>
                <ListItem>Perimeter fencing</ListItem>
                <ListItem>CCTV security system</ListItem>
                <ListItem>Waste disposal system</ListItem>
                <ListItem>
                  24/7 emergency maintenance services. and many more
                </ListItem>
              </OrderedList>
            </Box>

            <Box py='6'>
              <Text fontWeight='semibold' fontSize='xl' letterSpacing='1px'>
                Pearl Apartment, Jabi
              </Text>
              <Text fontWeight='semibold' letterSpacing='1px'>
                318 Cadastral zone, B10, Dakabiyu district, Federal Capital
                Territory, Abuja
              </Text>

              <Text pt='4'>
                The Pearl Apartment is a precious residence with top-notch
                housing amenities, as the name suggests. This exquisite
                residence is made up of a four-bedroom terrace with boys&apos;
                quarters, a three-bedroom semi-detached home, and a two-bedroom
                semi-detached home.
              </Text>

              <Text pt='4'>
                The four-bedroom apartment features a BQ and costs 60 million
                Naira (carcass) or 80 million Naira (finished) respectively.The
                cost of the 3 bedroom is 35 million Naira (carcass) and 45
                million Naira (finished), while the cost of the 2 bedroom is 25
                million Naira (carcass) and 35 million Naira (completed). The
                Pearl Apartment has a three-part payment schedule to suit your
                budget.
              </Text>

              <Text pt='4'>Here is what the Pearl Apartment offers:</Text>

              <OrderedList pt='4'>
                <ListItem>Outdoor game area </ListItem>
                <ListItem>Children&apos;s swimming pool</ListItem>
                <ListItem>Outdoor relaxation area</ListItem>
                <ListItem>Adequate parking space</ListItem>
                <ListItem>Good internal road with street lights</ListItem>
                <ListItem>
                  Standby power plant / dedicated transformer.
                </ListItem>
                <ListItem>Water treatment facility</ListItem>
                <ListItem>Perimeter Fencing</ListItem>
                <ListItem>CCTV security system</ListItem>
                <ListItem>Waste disposal system</ListItem>
                <ListItem>24/7 emergency maintenance services</ListItem>
              </OrderedList>
            </Box>

            <Box py='6'>
              <Text fontWeight='semibold' fontSize='xl' letterSpacing='1px'>
                Hillside Estate, Kubwa
              </Text>

              <Text pt='4'>
                With its enviable scenic vista, the hillside lives up to its
                name. Semi-detached duplex with four bedrooms is located in this
                estate. The Hillside Kubwa gives you access to:
              </Text>

              <OrderedList pt='4'>
                <ListItem>Good internal roads with street lights.</ListItem>
                <ListItem>
                  Standby power plant / dedicated transformer.
                </ListItem>
                <ListItem>Water treatment facility</ListItem>
                <ListItem>Perimeter fencing</ListItem>
                <ListItem>CCTV security system</ListItem>
                <ListItem>Waste disposal system</ListItem>
                <ListItem>
                  24/7 emergency maintenance services. and many more
                </ListItem>
              </OrderedList>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default BuyAHome;
