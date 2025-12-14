import React from "react";
import bg from "../assets/background_image.jpg";

const GptSearchBar = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />


      <div className="absolute inset-0 bg-black/50"></div>

     <div className="relative z-10 mt-44 flex justify-center">
  <form className="flex gap-3 bg-black/70 p-4 rounded-lg w-1/2 max-w-2xl">
    <input
      type="text"
      placeholder="Search movies, genres, actors..."
      className="flex-1 px-4 py-3 rounded-md text-white bg-gray-800 outline-none"
    />
    <button
      type="submit"
      className="bg-red-600 hover:bg-red-700 px-6 py-3 text-white font-semibold rounded-md"
    >
      Search
    </button>
  </form>
</div>


    </div>
  );
};

export default GptSearchBar;
