import { IconButton } from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";

const EmailBtn = ({ email }) => {
  return (
    <>
      {email.map((item, index) => (
        <IconButton
          key={index}
          as='a'
          href={`mailto:${item.email}`}
          color='pink.500'
          size='lg'
          isRound
          icon={<BiMailSend size={25} />}
        />
      ))}
    </>
  );
};

export default EmailBtn;
