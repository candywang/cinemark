import { VStack, Box, Image, Flex, Button } from "@chakra-ui/react";

const BookmarkList = ({ bookmarkedMovies, onRemove, onWatched }) => (
  <VStack spacing={4}>
    {bookmarkedMovies.map((movie) => {
      const { imdbID, Poster, Title, watched, Year } = movie;

      return (
        <Box
          key={imdbID}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          className={watched ? "watched" : ""}
        >
          <Image
            src={Poster}
            alt={Title}
            objectFit="cover"
            height={400}
            width={300}
          />
          <Box p={4}>
            <Box d="flex" alignItems="baseline">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {`${Title} (${Year})`}
              </Box>
            </Box>
            <Flex justify="space-between" mt={4}>
              <Button colorScheme="red" onClick={() => onRemove(movie)}>
                Remove
              </Button>
              {!movie.watched && (
                <Button onClick={() => onWatched(movie)}>
                  Mark as Watched
                </Button>
              )}
            </Flex>
          </Box>
        </Box>
      );
    })}
  </VStack>
);

export default BookmarkList;
