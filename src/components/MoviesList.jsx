import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movieData }) => {
  return (
    <div className="md:px-6 px-4 md:mt-12 mt-8">
      <h1 className="text-white font-semibold md:text-3xl text-2xl mb-4">{title}</h1>

      <div className="flex gap-6 overflow-x-scroll no-scrollbar">
        {movieData?.map(movie => (
          <div key={movie.id} className="shrink-0">
            <MovieCard poster_path={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
