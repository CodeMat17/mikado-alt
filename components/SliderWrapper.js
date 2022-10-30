import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  IconButton,
  // Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiRadioCircleMarked } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SliderWrapper = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const autoScroll = true;
  let intervalTime = 5000;
  let slideInterval;

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, autoScroll]);

  const big = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, delay: 0.4, duration: 1 },
    },
  };

  const small = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.5, duration: 2, delay: 1 },
    },
  };

  return (
    <Box py=''>
      <Box pos='relative'>
        <AspectRatio pos='relative' w={[ '100%']} maxH={['70vh']} ratio={16 / 9}>
          <Image
            src={`${slides[currentIndex].url}`}
            alt='sliders'
            objectFit='cover'
            priority
            layout='fill'
          />
        </AspectRatio>

        <Box
          as={motion.div}
          initial='hidden'
          whileInView='visible'
          viewport={{once: false}}
          transition={{staggerChildren: 0.6}}
          pos='absolute'
          bottom={[6, 8, 12]}
          left={[2, 4, 6]}>
          <Heading
            as={motion.div}
            variants={big}
            size={["xl", "2xl", "3xl"]}
            textShadow='0 0 20px black'
            color='#00afee'>
            MIKADO SHELTERS
          </Heading>
          <Text
            as={motion.div}
            variants={small}
            maxW='lg'
            textShadow='0 0 10px black'
            color='white'
            fontSize='lg'
            fontWeight='semibold'
            letterSpacing='1px' pr='6'>
            Welcome to the future of residential real estate.
          </Text>
        </Box>
      </Box>

      <HStack py='2' align='center' justify='center' spacing={[4, 8, 24]}>
        <IconButton
          onClick={previousSlide}
          // opacity='0.5'
          isRound
          icon={<FaChevronLeft size={20} />}
        />

        <HStack spacing={[2, 4, 6]} justify='center'>
          {slides.map((slide, slideIndex) => (
            <IconButton
              key={slideIndex}
              onClick={() => currentSlide(slideIndex)}
              icon={<BiRadioCircleMarked size={20} />}
              isRound
              opacity='0.5'
              size='sm'
            />
          ))}
        </HStack>

        <IconButton
          onClick={nextSlide}
          // opacity='0.5'
          isRound
          icon={<FaChevronRight size={20} />}
        />
      </HStack>
    </Box>
  );
};

export default SliderWrapper;
