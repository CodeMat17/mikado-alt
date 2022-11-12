import { IconButton } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";

const InstagramBtn = ({ ig }) => {
  return (
    <>
      {ig.map((item, index) => (
        <IconButton
          key={index}
          as='a'
          href={item.url}
          target='_blank'
          size='lg'
          icon={<BsInstagram size={25} color='red' />}
          isRound
        />
      ))}
    </>
  );
};

export default InstagramBtn;
