import Head from "next/head";
import BuyAHome from "../components/BuyAHome";
import HouseListing from "../components/HouseListing";
import NewsLetter from "../components/NewsLetter";
import SellAHome from "../components/SellAHome";
import SliderWrapper from "../components/SliderWrapper";

export default function Home() {
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
        <SliderWrapper slides={slides} />
        <BuyAHome />
        <SellAHome />
        <HouseListing />
        <NewsLetter />
      </main>
    </div>
  );
}
