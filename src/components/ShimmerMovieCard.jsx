import React from "react";

const ShimmerMovieCard = () => {
  return (
    <div className="md:w-48 md:h-72 w-36 h-56 rounded-lg bg-gray-800 overflow-hidden relative">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
    </div>
  );
};

export default ShimmerMovieCard;