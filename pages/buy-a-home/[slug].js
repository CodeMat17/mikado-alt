import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import EstateDescriptionModal from "../../components/EstateDescriptionModal";
import PageLoader from '../../components/PageLoader';
import { client } from "../../datalayer/contentfulClient";

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "buyEstate",
  });
  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({
    content_type: "buyEstate",
    "fields.slug": params.slug,
  });

  if (!res) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      estate: res.items[0],
    },
    revalidate: 5,
  };
};

const Details = ({ estate }) => {
// if (!estate) return <PageLoader />

  const router = useRouter();
  const { name, location, description, images } = estate.fields;
 
  return (
    <Box px='6' py='12' maxW='6xl' mx='auto'>
      <Heading textAlign='center'>{name}</Heading>
      <Text
        textAlign='center'
        letterSpacing='1px'
        fontWeight='semibold'
        fontSize='lg'>
        {location}
      </Text>

      <HStack
        pt='12'
        align='center'
        justify='space-between'
        maxW='6xl'
        mx='auto'>
        {images && (
          <Text color='blue.500' fontSize='sm'>
            Estate views
          </Text>
        )}
        <HStack spacing='4'>
          {images && (
            <EstateDescriptionModal name={name} description={description} />
          )}
          <Button onClick={() => router.back()} size='sm'>
            GO BACK
          </Button>
        </HStack>
      </HStack>

      <SimpleGrid mt='8' columns={[1, 1, 2]} spacing='40px'>
        {images &&
          images.map((image) => (
            <Box key={image.sys.id} rounded='md' overflow='hidden'>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={`https:${image.fields.file.url}`}
                  alt='estate views'
                  layout='fill'
                  priority
                  objectFit='contain'
                />
              </AspectRatio>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Details;
