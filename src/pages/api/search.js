import axios from "axios";
import { rapidApiKey } from "../../../config";

const search = async (req, res) => {
  const { query } = req.query;
  const url = `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${query}&page=1&r=json`;

  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  res.status(200).json(response.data);
};

export default search;
