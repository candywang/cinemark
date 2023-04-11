import { List, ListItem } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, bookmarkedMovies, handleBookmark }) => (
  <List spacing={3}>
    {movies.map((movie) => (
      <ListItem key={movie.imdbID}>
        <MovieCard
          movie={movie}
          bookmarkedMovies={bookmarkedMovies}
          handleBookmark={handleBookmark}
        />
      </ListItem>
    ))}
  </List>
);

export default MovieList;
