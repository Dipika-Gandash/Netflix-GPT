import React from "react";

const ShimmerMovieCard = () => {
  return (
    <div className="w-48 h-72 rounded-lg bg-gray-800 overflow-hidden relative">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
    </div>
  );
};

export default ShimmerMovieCard;