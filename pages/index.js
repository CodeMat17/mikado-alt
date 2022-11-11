import { Box } from "@chakra-ui/react";
import Head from "next/head";
import BuyAHome from "../components/BuyAHome";
import SellAHome from '../components/SellAHome'
import HouseListing from "../components/HouseListing";
import NewsLetter from "../components/NewsLetter";
import SliderWrapper from "../components/SliderWrapper";
import { client } from "../datalayer/contentfulClient";


export default function Home({ data }) {


  const slides = [
    {
      url: "/sliders/slider1.webp",
    },
    {
      url: "/sliders/slider2.webp",
    },
    {
      url: "/sliders/slider3.webp",
    },
    {
      url: "/sliders/slider4.webp",
    },
    {
      url: "/sliders/slider5.webp",
    },
    {
      url: "/sliders/slider6.webp",
    },
  ];

  return (
    <div>
      <Head>
        <title>Mikado Shelters | Home</title>
        <meta
          name='description'
          content='Mikado shelters is a real estate company in Abuja Nigeria.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {data &&
          data.map((item) => (
            <Box key={item.sys.id}>
              <SliderWrapper
                slides={slides}
                title={item.fields.sliderTitle}
                label={item.fields.sliderLabel}
              />
              <BuyAHome
                title={item.fields.buyHomeTitle}
                label={item.fields.buyHomeLabel}
              />
              <SellAHome
                title={item.fields.sellHomeTitle}
                label={item.fields.sellHomeLabel}
              />
              <HouseListing
                title={item.fields.houseListingTitle}
                label={item.fields.houseListingLabel}
              />
              <NewsLetter
                title={item.fields.newsLetterTitle}
                label={item.fields.newsLetterLabel}
                desc={item.fields.newsLetterDescription}
              />
            </Box>
          ))}
      
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.getEntries({
    content_type: "homePage",
  });

  return {
    props: {
      data: data.items,
    },
  };
};
