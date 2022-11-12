import { IconButton } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
const TwitterBtn = ({tw}) => {
  return (
    <>
    {tw && tw.map((item, index) => (
       <IconButton key={index}
      as='a'
      href={item.url}
      target='_blank'
      size='lg'
      color='blue.400'
      icon={<BsTwitter size={25} />}
      isRound
    />
    ))}
    </>
   
  );
};

export default TwitterBtn;
