import { IconButton } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppBtn = () => {
  return (
    <IconButton
      as='a'
      href='https://wa.me/+2348056666949'
      target='_blank'
      color='green'
      size='lg'
      isRound
      icon={<BsWhatsapp size={25} />}
    />
  );
};

export default WhatsAppBtn;
