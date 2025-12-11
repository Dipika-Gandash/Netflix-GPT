import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useActionMovies from "../hooks/useActionMovies";
import useAnimation from "../hooks/useAnimation";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useActionMovies();
  useAnimation();

  return (
    <div className="relative bg-gray-900">
        <Header />
        <MainContainer />
       <SecondaryContainer />
    </div>
  );
};

export default Browse;
