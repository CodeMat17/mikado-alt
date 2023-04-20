import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
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
  {
    id: 3,
    image: "/mngt/rodd.webp",
    position: "BUSINESS CONSULTANT/PARTNER, ATLANTA. GA, USA",
    name: "ROZ DODD",
  },
  {
    id: 4,
    image: "/mngt/jeff.webp",
    position: "ICT PERSONNEL",
    name: "JEFF OSAMU",
  },
];

const ManagementTeam = () => {
  return (
    <div>
      <Head>
        <title>Our Team | Mikado Shelters</title>
        <meta name='description' content='Our Management Team' />
        <meta property='og:title' content='Our Team ' key='title' />
        <meta property='og:description' content='Our Management Team' />
        <meta
          property='og:url'
          content='https://www.mikadoshelters.com/our-team'
        />
        <meta property='og:type' content='website' />

        {/* New details */}
        <meta key='og_locale' property='og:locale' content='en_IE' />
        <meta
          key='og_site_name'
          property='og:site_name'
          content='Mikado Shelters'
        />
        <meta
          key='og_image'
          property='og:image'
          content='https://res.cloudinary.com/mctony17/image/upload/v1646157936/mikado/for-seo.png'
        />
        <meta key='og_image:alt' property='og:image:alt' content='logo' />
        <meta key='og_image:width' property='og:image:width' content='300' />
        <meta key='og_image:height' property='og:image:height' content='300' />

        <meta name='robots' content='index,follow' />

        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta key='twitter:site' name='twitter:site' content='@MikadoShelter' />
        <meta
          key='twitter:creator'
          name='twitter:creator'
          content='@MikadoShelter'
        />
        <meta
          key='twitter:title'
          property='twitter:title'
          content='Mikado Shelter'
        />
        <meta
          key='twitter:description'
          property='twitter:description'
          content='Mikado Shelters Ltd is an emerging real estate company located in Abuja, FCT, Nigeria. The proprietors have over 10 years combined experience. The company is currently redefining real estate development landscape in Abuja by building homes that accord customers exhilarating experience from start to finish. Our estates are designed to care for the environment to carter for the wel lbeing of the inhabitants. We use sophisticated security appliances to protect our estates and deter porous access to it.'
        />

        <link rel='canonical' href='https://www.mikadoshelters.com' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box px='6' py='16' maxW='6xl' mx='auto'>
        <Heading textAlign='center'>OUR MANAGEMENT TEAM</Heading>

        <SimpleGrid pt='16' pb='8' columns={[1, 1, 2, 3, 4]} spacing='40px'>
          {mngt.map((team) => (
            <ManagementTeamCard key={team.id} {...team} />
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default ManagementTeam;
