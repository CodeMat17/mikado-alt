import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { CiBoxList } from "react-icons/ci";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { HiMenuAlt3, HiOutlineUserGroup } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";
import { RiHomeHeartLine } from "react-icons/ri";
import { SiMicrosoftteams } from "react-icons/si";
import LogoComponent from "../LogoComponent";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={{ xl: "none" }}>
      <IconButton
        // variant='ghost'
        onClick={onOpen}
        color='#00afee'
        icon={<HiMenuAlt3 size={32} />}
        isRound
        size='lg'
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack>
              <LogoComponent />
            </HStack>
          </DrawerHeader>

          <DrawerBody pt='12'>
            <Link href='/'>
              <a>
                <Button
                  onClick={onClose}
                  leftIcon={<RiHomeHeartLine size={23} />}
                  justifyContent='start'
                  size='lg'
                  w='100%'
                  variant='ghost'
                  letterSpacing='1px'>
                  HOME
                </Button>
              </a>
            </Link>

            <Link href='/who-we-are'>
              <a>
                <Button
                  onClick={onClose}
                  leftIcon={<HiOutlineUserGroup size={23} />}
                  justifyContent='start'
                  size='lg'
                  w='100%'
                  variant='ghost'
                  letterSpacing='1px'>
                  WHO WE ARE
                </Button>
              </a>
            </Link>

            <Link href='/buy-a-home'>
              <a>
                <Button
                  onClick={onClose}
                  leftIcon={<GiPayMoney size={23} />}
                  justifyContent='start'
                  size='lg'
                  w='100%'
                  variant='ghost'
                  letterSpacing='1px'>
                  BUY A HOME
                </Button>
              </a>
            </Link>

            <Link href='/sell-a-home'>
              <a>
                <Button
                  onClick={onClose}
                  leftIcon={<GiReceiveMoney size={23} />}
                  justifyContent='start'
                  size='lg'
                  w='100%'
                  variant='ghost'
                  letterSpacing='1px'>
                  SELL A HOME
                </Button>
              </a>
            </Link>

            <Link href='/house-listing'>
              <a>
                <Button
                  onClick={onClose}
                  leftIcon={<CiBoxList size={23} />}
                  justifyContent='start'
                  size='lg'
                  w='100%'
                  variant='ghost'
                  letterSpacing='1px'>
                  HOUSE LISTING
                </Button>
              </a>
            </Link>

            <Link href='/our-team'>
              <a>
                <Button
                  onClick={onClose}
                  leftIcon={<SiMicrosoftteams size={23} />}
                  justifyContent='start'
                  size='lg'
                  w='100%'
                  variant='ghost'
                  letterSpacing='1px'>
                  OUR TEAM
                </Button>
              </a>
            </Link>

            <Link href='/contact-us'>
              <a>
                <Button
                  onClick={onClose}
                  leftIcon={<MdContactMail size={23} />}
                  justifyContent='start'
                  size='lg'
                  w='100%'
                  variant='ghost'
                  letterSpacing='1px'>
                  CONTACT US
                </Button>
              </a>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
