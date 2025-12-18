import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGeminiMovieResults } from "../utils/geminiSlice";

const GeminiSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const fetchMovieFromTMDBByTitle = async (movieTitle) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movieTitle
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    return res.json();
  };

  const handleGeminiMovieSearch = async () => {
    try {
      const userPrompt = `Act as a movie recommendation system. User input: "${searchText.current.value}". Rules: Recommend exactly 7 movies, Only movie names, Comma-separated, No extra text.`;
      
      const res = await fetch("http://localhost:5000/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt }),
      });

      const data = await res.json();
      const tmdbResponses = await Promise.all(
        data.movies.map((title) => fetchMovieFromTMDBByTitle(title))
      );

      const tmdbMovies = tmdbResponses
        .map((res) => res.results?.[0])
        .filter(Boolean);

      dispatch(addGeminiMovieResults({
        movieName: data.movies,
        movieResults: tmdbMovies
      }));

    } catch (error) {
      console.error("Movie search failed:", error.message);
    }
  };

  return (
    <div className="w-full flex justify-center mb-10">
      <form
        className="flex gap-3 bg-black/90 p-4 rounded-lg w-11/12 md:w-1/2 max-w-2xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langKey].placeholder}
          className="flex-1 px-4 py-3 rounded-md text-white bg-gray-800 outline-none"
          ref={searchText}
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 text-white font-semibold rounded-md cursor-pointer"
          onClick={handleGeminiMovieSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;