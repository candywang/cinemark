import { List, ListItem } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, bookmarkedMovies, handleBookmark }) => (
  <List spacing={3}>
    {movies.map((movie) => {
      const isBookmarked = bookmarkedMovies.filter(
        (m) => m.imdbID !== movie.imdbID
      ).length;
      return (
        <ListItem key={movie.imdbID}>
          <MovieCard
            movie={movie}
            isBookmarked={isBookmarked}
            handleBookmark={handleBookmark}
          />
        </ListItem>
      );
    })}
  </List>
);

export default MovieList;
