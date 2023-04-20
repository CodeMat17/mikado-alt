import { IconButton } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";

const InstagramBtn = () => {
  return (
    <IconButton
      as='a'
      href='https://www.instagram.com/invites/contact/?i=u3qvyhl4trxr&utm_content=qxxoqyy'
      target='_blank'
      size='lg'
      icon={<BsInstagram size={25} color='red' />}
      isRound
    />
  );
};

export default InstagramBtn;
