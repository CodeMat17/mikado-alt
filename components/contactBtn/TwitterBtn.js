import { IconButton } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
const TwitterBtn = () => {
  return (
    <IconButton
      as='a'
      href='https://twitter.com/MikadoShelter?t=Hnz5glBn2EE0lJV6puGlSg&s=08'
      target='_blank'
      size='lg'
      color='blue.400'
      icon={<BsTwitter size={25} />}
      isRound
    />
  );
};

export default TwitterBtn;
