import { IconButton } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
const TwitterBtn = () => {
  return (
    <IconButton
      as='a'
      href='https://twitter.com/MikadoShel79324?t=t-hIwJZ8KaPnNmcedoAXIw&s=09'
      target='_blank'
      size='lg'
      color='blue.400'
      icon={<BsTwitter size={25} />}
      isRound
    />
  );
};

export default TwitterBtn;
