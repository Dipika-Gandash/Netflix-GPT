import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';
import ShimmerMovieCard from './ShimmerMovieCard';

const GeminiMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gemini)

  if (!movieName || movieName.length === 0) return <ShimmerMovieCard />

  return (
    <div className="md:px-12 px-5 w-full">
      <div className="bg-black/70 p-6 rounded-xl">
        <h1 className="text-white md:text-2xl text-xl  mb-4 font-bold">Recommended for you:</h1>
       <div className="flex md:gap-12 gap-0 overflow-x-auto scrollbar-hide">
  {movieResults
    .filter((movie) => movie.poster_path)
    .map((movie) => (
      <div key={movie.id} className="flex-shrink-0 w-48">
        <MovieCard poster_path={movie.poster_path} />
        <p className="text-white text-sm mt-4 text-center truncate">
          {movie.title}
        </p>
      </div>
    ))}
</div>

      </div>
    </div>
  )
}

export default GeminiMovieSuggestion;