import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if(!poster_path) return null;
  return (
    <img
      src={IMAGE_CDN_URL + poster_path}
      className="w-40 md:w-48 lg:w-56 h-auto rounded-lg cursor-pointer 
                 hover:scale-110 transition-transform duration-300 shrink-0"
      alt="Movie Poster"
    />
  );
};

export default MovieCard;
