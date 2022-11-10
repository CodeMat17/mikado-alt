import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const EstateDescriptionModal = ({ name, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const options = {
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return (
    <Box>
      <Button onClick={onOpen} size='sm' variant='ghost' color='blue.500'>
        See description
      </Button>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior='inside'
        isCentered>
        <ModalOverlay />
        <ModalContent mx='2'>
          <ModalHeader>
            <Text> {name}</Text>
            <Text fontSize='sm' fontWeight='medium'>
              Description
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {documentToReactComponents(description, options)}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EstateDescriptionModal;
