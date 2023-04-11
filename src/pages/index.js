import Head from "next/head";
import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const changeSetSearch = (input) => setSearch(input);

  const getBookmarkedMovies = () => {
    const bookmarkedMovies =
      JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    return bookmarkedMovies;
  };

  useEffect(() => {
    const bookmarkedMovies = getBookmarkedMovies();
    if (bookmarkedMovies) {
      setBookmarkedMovies(bookmarkedMovies);
    }
  }, []);

  const handleBookmark = (movie) => {
    console.log(
      JSON.parse(localStorage.getItem("bookmarkedMovies")),
      "JSON.parse(localStorage.getIt"
    );
    let bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies"));
    if (!bookmarkedMovies[0]) bookmarkedMovies = [];
    console.log(movie, "this is movie that was clicked");
    console.log(bookmarkedMovies, "bookmarkedMovies");
    const index = bookmarkedMovies.findIndex((m) => m.imdbID === movie.imdbID);

    if (index > -1) {
      bookmarkedMovies.splice(index, 1);
    } else {
      bookmarkedMovies.push(movie);
    }

    localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
    setBookmarkedMovies(bookmarkedMovies);
  };

  useEffect(() => {
    setMovies([]);

    const getMovies = async (query) => {
      const res = await axios.get(`/api/search?query=${query}`);
      return res.data;
    };

    const debounce = (callback, delay) => {
      let timeout;

      const executedFunc = (...args) => {
        const delayFunc = () => {
          timeout = null;
          callback(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(delayFunc, delay);
      };

      return executedFunc;
    };

    if (search) {
      setSearching(true);
      debounce(
        getMovies(search).then((res) => {
          res.Search ? setMovies(res.Search) : [];
          setSearching(false);
        }),
        3000
      );
    } else {
      setSearching(false);
    }
  }, [search]);

  return (
    <>
      <Head>
        <title>CineMark</title>
        <meta name="description" content="Cinema Marker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      ={" "}
      <main>
        <div>CineMark</div>
        <Flex
          direction="column"
          align="center"
          justify="center"
          minHeight="100vh"
        >
          <SearchBar search={search} changeSetSearch={changeSetSearch} />
          {searching ? (
            <div>Searching</div>
          ) : (
            <MovieList
              movies={movies}
              bookmarkedMovies={bookmarkedMovies}
              handleBookmark={handleBookmark}
            />
          )}
          Bookmarks:
          {bookmarkedMovies ? (
            <MovieList
              movies={bookmarkedMovies}
              bookmarkedMovies={bookmarkedMovies}
              handleBookmark={handleBookmark}
            />
          ) : null}
        </Flex>
      </main>
    </>
  );
}
