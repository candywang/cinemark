import Head from "next/head";
import styles from "@components/styles/Home.module.css";
import { useState, useEffect } from "react";
import { Flex, Input, List, ListItem, Image } from "@chakra-ui/react";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getMovies = async (query) => {
      const res = await axios.get(`/api/search?query=${query}`);
      return res.data;
    };

    const searchMovies = (search, delay = 1000) => {
      const timeout = setTimeout(() => {
        getMovies(search).then((res) => setMovies(res.Search));
      }, delay);

      return () => clearTimeout(timeout);
    };

    if (search) {
      searchMovies(search);
    }
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Head>
        <title>CineMark</title>
        <meta name="description" content="Cinema Marker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>CineMark</div>
        <Flex
          direction="column"
          align="center"
          justify="center"
          minHeight="100vh"
        >
          <Input
            value={search}
            onChange={handleSearch}
            placeholder="Movie Title"
            mb={4}
          />
          <List>
            {movies &&
              movies.map((movie) => (
                <ListItem key={movie.imdbID}>
                  <Image alt={movie.Title} src={movie.Poster} />
                  {movie.Title} ({movie.Year})
                </ListItem>
              ))}
          </List>
        </Flex>
      </main>
    </>
  );
}
