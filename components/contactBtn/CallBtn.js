import { IconButton } from "@chakra-ui/react";
import { MdOutlineCall } from "react-icons/md";

const CallBtn = () => {
  return (
    <IconButton
      as='a'
      href='tel:+2348037024572'
      color='orange'
      size='lg'
      isRound
      icon={<MdOutlineCall size={25} />}
    />
  );
};

export default CallBtn;
