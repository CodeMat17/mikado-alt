import { IconButton } from "@chakra-ui/react";
import { MdOutlineCall } from "react-icons/md";

const CallBtn = ({ callNo }) => {
  
  return (
    <>
      {callNo &&
        callNo.map((id, index) => (
          <IconButton
            key={index}
            as='a'
            href={`tel:${id.number}`}
            color='orange'
            size='lg'
            isRound
            icon={<MdOutlineCall size={25} />}
          />
        ))}
    </>
  );
};

export default CallBtn;
