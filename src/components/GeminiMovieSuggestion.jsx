import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';
import ShimmerMovieCard from './ShimmerMovieCard';

const GeminiMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gemini)

  if (!movieName || movieName.length === 0) return <ShimmerMovieCard />

  return (
    <div className="px-12 w-full">
      <div className="bg-black/70 p-6 rounded-xl">
        <h1 className="text-white text-2xl mb-4 font-bold">Recommended for you:</h1>
        <div className="flex gap-12 overflow-x-auto scrollbar-hide">
          {movieResults.map((movie, index) => (
            <div key={movie.id || index} className="flex-shrink-0 w-48">
               <MovieCard
                poster_path={movie.poster_path}
              />
              <p className="text-white text-sm mt-4 text-center truncate">{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GeminiMovieSuggestion;