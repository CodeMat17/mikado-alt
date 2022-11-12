import { IconButton } from "@chakra-ui/react";
import { GrFacebookOption } from "react-icons/gr";

const FacebookBtn = ({ fb }) => {
  return (
    <>
      {fb &&
        fb.map((item, index) => (
          <IconButton
            key={index}
            as='a'
            href={item.url}
            target='_blank'
            color='facebook.500'
            size='lg'
            icon={<GrFacebookOption size={25} />}
            isRound
          />
        ))}
    </>
  );
};

export default FacebookBtn;
