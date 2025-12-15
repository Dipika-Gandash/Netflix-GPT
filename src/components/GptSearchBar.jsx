import React, { useRef } from "react";
import bg from "../assets/background_image.jpg";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
 const handleGptSearchClick = async () => {
  // 1. Get the prompt value safely
  const prompt = `
Act as a movie recommendation system.
User input: "${searchText.current.value}"
Rules:
- Recommend exactly 5 movies
- Only movie names
- Comma-separated
- No extra text
`;

  try {
    const res = await fetch("http://localhost:5000/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    // 2. CHECK THE HTTP STATUS FIRST (Crucial for robust fetching)
    if (!res.ok) {
      // If the backend returns 4xx or 5xx, read the error message from the body
      const errorData = await res.json();
      throw new Error(
        `Backend Error (${res.status}): ${errorData.error || 'Unknown server issue'}`
      );
    }

    // 3. Process the successful response
    const data = await res.json();
    
    // The backend should return { movies: ["Movie 1", "Movie 2", ...] }
    if (data.movies && Array.isArray(data.movies)) {
      console.log("Movies returned:", data.movies);
      // 🔥 TO DO: Update your UI state with the movies here
      // setMovies(data.movies); 
    } else {
      // Handles cases where the response is 200 OK but the expected data format is missing
      console.error("Unexpected successful response format:", data);
    }
  } catch (err) {
    // Catches network errors, CORS/CSP issues, and the explicit errors thrown above
    console.error("Fetch failed or API returned an error:", err.message);
    // 🔥 TO DO: Show an error message to the user in the UI here
  }
};


  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 mt-44 flex justify-center">
        <form
          className="flex gap-3 bg-black/90 p-4 rounded-lg w-1/2 max-w-2xl"
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
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
