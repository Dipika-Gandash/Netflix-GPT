import { useSelector } from "react-redux";
import MoviesList from "./MoviesList.jsx"

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    if(movies === null) return ;
    return (
        <div className="-mt-36 relative z-30">
            <MoviesList title={"Now Playing Movies"} movieData={movies?.nowPlayingMovies}/>
            <MoviesList title={"Popular Movies"} movieData={movies?.popularMovies} />
            <MoviesList title={"Top Rated Movies"} movieData={movies?.topRatedMovies} />
            <MoviesList title={"Upcoming Movies"} movieData={movies?.upcomingMovies} />
             <MoviesList title={"Action Movies"} movieData={movies?.actionMovies} />
               <MoviesList title={"Animation"} movieData={movies?.animation} />

        </div>
    )
}

export default SecondaryContainer;