import { IconButton } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppBtn = () => {
  return (
    <IconButton
      as='a'
      href='https://wa.me/+234837024572'
      color='green'
      size='lg'
      isRound
      icon={<BsWhatsapp size={25} />}
    />
  );
};

export default WhatsAppBtn;
