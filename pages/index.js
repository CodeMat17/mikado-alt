import { Box } from "@chakra-ui/react";
import Head from "next/head";
import NewsLetter from "../components/NewsLetter";
import Options from "../components/Options";
import SliderWrapper from "../components/SliderWrapper";
import { client } from "../datalayer/contentfulClient";

export default function Home({ data, cardDetails, slides }) {
  
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
              <Options cardDetails={cardDetails} />
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
      cardDetails: [
        {
          id: 1,
          title: "WANT TO BUY A HOME?",
          subTitle: "DON'T GET LEFT BEHIND",
          image: "/svg/home.svg",
          url: "/buy-a-home",
        },
        {
          id: 2,
          title: "WANT TO SELL A HOME?",
          subTitle: "WAIT NO MORE!",
          image: "/svg/sell.svg",
          url: "/sell-a-home",
        },
        {
          id: 3,
          title: "HOME LISTING?",
          subTitle: "YOU ARE AT THE RIGHT PLACE",
          image: "/svg/listing.svg",
          url: "/house-listing",
        },
      ],

      slides: [
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
      ],
    },
  };
};
