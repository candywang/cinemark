import { List, ListItem } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onBookmark }) => (
  <List spacing={3}>
    {movies.map((movie) => (
      <ListItem key={movie.imdbID}>
        <MovieCard movie={movie} onBookmark={() => onBookmark(movie)} />
      </ListItem>
    ))}
  </List>
);

export default MovieList;
