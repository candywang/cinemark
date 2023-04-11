import Head from "next/head";
import styles from "@components/styles/Home.module.css";
import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const changeSetSearch = (input) => setSearch(input);

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
      debounce(getMovies(search).then((res) => {
              res.Search ? setMovies(res.Search) : [];
              setSearching(false);
            })
        , 3000);
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
      <main className={styles.main}>
        <div>CineMark</div>
        <Flex
          direction="column"
          align="center"
          justify="center"
          minHeight="100vh"
        >
          <SearchBar search={search} changeSetSearch={changeSetSearch} />
          {searching ? <div>Searching</div> : (
            <MovieList
              movies={movies}
              onBookmark={() => console.log("bookmark")}
            />
          )}
        </Flex>
      </main>
    </>
  );
}
