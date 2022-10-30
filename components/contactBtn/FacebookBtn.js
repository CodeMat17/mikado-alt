import { IconButton } from "@chakra-ui/react";
import { GrFacebookOption } from "react-icons/gr";

const FacebookBtn = () => {
  return (
    <IconButton
      as='a'
      href='https://web.facebook.com/people/Mikado-Shelters/100077538831363/'
      target='_blank'
      color='facebook.500'
      size='lg'
      icon={<GrFacebookOption size={25} />}
      isRound
    />
  );
};

export default FacebookBtn;
