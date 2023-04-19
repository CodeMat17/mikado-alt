import { IconButton } from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";

const EmailBtn = () => {
  return (
    <IconButton
      as='a'
      href='mailto:mikadoshelters@gmail.com'
      color='pink.500'
      size='lg'
      isRound
      icon={<BiMailSend size={25} />}
    />
  );
};

export default EmailBtn;
