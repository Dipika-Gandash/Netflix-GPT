import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useFetchMovies = (url, action) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(url, API_OPTIONS);

      const jsonData = await data.json();
      dispatch(action(jsonData.results));
    };
    getNowPlayingMovies();
  }, []);
};

export default useFetchMovies;

// "https://api.themoviedb.org/3/movie/now_playing?page=1",
