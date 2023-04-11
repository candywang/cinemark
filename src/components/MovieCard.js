import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const MovieCard = ({ movie, onBookmark }) => {
  const { Poster, Title, Year } = movie;

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={Poster}
        alt={Title}
      />
      <Stack>
        <CardBody>
          <Heading size="md">{Title}</Heading>
          <Text py="2">{Year}</Text>
        </CardBody>
        <CardFooter>
          <Button onClick={onBookmark}>Bookmark</Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default MovieCard;
