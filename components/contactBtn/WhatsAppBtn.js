import { IconButton } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppBtn = ({ whatsapp }) => {
  return (
    <>
      {whatsapp.map((item, index) => (
        <IconButton
          key={index}
          as='a'
          href={`https://wa.me/${item.number}`}
          target='_blank'
          color='green'
          size='lg'
          isRound
          icon={<BsWhatsapp size={25} />}
        />
      ))}
    </>
  );
};

export default WhatsAppBtn;
