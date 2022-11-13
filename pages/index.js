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
        <title>Who We Are | Mikado Shelters</title>
        <meta
          name='description'
          content='Mikado Shelters Ltd is an emerging real estate company located in Abuja, FCT, Nigeria. The proprietors have over 10 years combined experience. The company is currently redefining real estate development landscape in Abuja by building homes that accord customers exhilarating experience from start to finish. Our estates are designed to care for the environment to carter for the wel lbeing of the inhabitants. We use sophisticated security appliances to protect our estates and deter porous access to it.'
        />
        <meta property='og:title' content='Who We Are' key='title' />
        <meta
          property='og:description'
          content="Located in the beautiful heart of Abuja, our mission is to be the number one real estate developer in Sub-Saharan Africa by creating eco-friendly luxury apartments and residential real estate in harmony with our client's tastes. We are setting the pace by building single-family homes and other housing units in accordance with thoroughly researched, aesthetically pleasing customer experiences from brick to ground up, we are setting the pace. Our estates are environmentally sustainable and provide for the well being and safety of the residents."
        />
        <meta
          property='og:url'
          content='https://www.mikadoshelters.com/who-we-are'
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
    revalidate: 5,
  };
};
