import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import BookmarkButton from "./BookmarkButton";

const MovieCard = ({ movie, isBookmarked, handleBookmark }) => {
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
          <BookmarkButton
            isBookmarked={isBookmarked}
            onToggle={() => handleBookmark(movie)}
          />
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default MovieCard;
