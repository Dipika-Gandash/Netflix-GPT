import useFetchMovies from "../hooks/useFetchMovies";
import {
  addActionMovies,
  addAnimation,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addHorrorMovies,
} from "../utils/moviesSlice";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    addNowPlayingMovies
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    addPopularMovies
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    addTopRatedMovies
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    addUpcomingMovies
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/discover/movie?with_genres=28",
    addActionMovies
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/discover/movie?with_genres=27&page=1",
    addHorrorMovies
  );

  useFetchMovies(
    "https://api.themoviedb.org/3/discover/movie?with_genres=16",
    addAnimation
  );

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <div className="relative bg-gray-900">
      <Header />
      {showGPTSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
