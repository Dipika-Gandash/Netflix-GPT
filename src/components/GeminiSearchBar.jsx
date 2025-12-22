import React, { useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGeminiMovieResults } from "../utils/geminiSlice";

const GeminiSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoading , setIsLoading] = useState(false);
  const [lastQuery, setLastQuery] = useState("");

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
    const currentQuery = searchText.trim();
    if(currentQuery === "") {
      setError("Please enter a movie name to search.")
      return ;
    }

   if (currentQuery.toLowerCase() === lastQuery.toLowerCase()) {
    setError("You already searched for this");
    return;
  }

    try {
      setError(null);
      setIsLoading(true);
      setLastQuery(currentQuery);
      const userPrompt = `Act as a movie recommendation system. User input: "${searchText}". Rules: Recommend exactly 7 movies, Only movie names, Comma-separated, No extra text.`;
      
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
      setError("Failed to fetch movie recommendations. Please try again.")
      setLastQuery("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center mb-6 -mt-12">
  <div className="w-11/12 md:w-1/2 max-w-2xl">
    
    {error && (
      <p className="mb-2 text-red-500 text-md text-center">
        {error}
      </p>
    )}

    <form
      className="flex md:gap-3 gap-2 bg-black/90 p-4 rounded-lg"
      onSubmit={(e) => {e.preventDefault();
        handleGeminiMovieSearch();}
      }

    >
      <input
        type="text"
        placeholder={lang[langKey].placeholder}
        className="flex-1 px-4 py-3 sm:px-6 sm:py-3 rounded-md text-white bg-gray-800 outline-none"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
     <button
  type="submit"
  disabled={
    isLoading ||
    !searchText.trim()
  }
  className={`px-6 py-3 font-semibold rounded-md text-white
    ${
      isLoading
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-red-600 hover:bg-red-700"
    }`}
>
  {isLoading ? "Searching..." : lang[langKey].search}
</button>
    </form>

  </div>
</div>

  );
};

export default GeminiSearchBar;