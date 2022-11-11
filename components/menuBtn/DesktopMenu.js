import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

export const DesktopMenu = () => {
  return (
    <Box display={{ base: "none", xl: "flex" }}>
      <Link href='/'>
        <a>
          <Button variant='ghost'>HOME</Button>
        </a>
      </Link>

      <Link href='/who-we-are'>
        <a>
                  <Button variant='ghost'>WHO WE ARE</Button>

        </a>
      </Link>

      <Link href='/buy-a-home'>
        <a>
                  <Button variant='ghost'>BUY A HOME</Button>

        </a>
      </Link>

      <Link href='/sell-a-home'>
        <a>
                  <Button variant='ghost'>SELL A HOME</Button>

        </a>
        
      </Link>

      <Link href='/house-listing'>
        <a>
                  <Button variant='ghost'>HOUSE LISTING</Button>

        </a>
      </Link>

      <Link href='/our-team'>
        <a>
        
          <Button variant='ghost'>OUR TEAM</Button></a>
      </Link>

      <Link href='/contact-us'>
        <a>
        <Button variant='ghost'>CONTACT US</Button>
      </a>
      </Link>
    </Box>
  );
};
