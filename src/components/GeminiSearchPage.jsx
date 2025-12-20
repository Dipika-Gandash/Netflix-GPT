import React from 'react'
import GeminiMovieSuggestion from './GeminiMovieSuggestion'
import GeminiSearchBar from './GeminiSearchBar'
import bg from "../assets/background_image.jpg"; 

const GeminiSearchPage = () => {
  return (
    <div className='relative w-full'>
      
      <div className="fixed inset-0 z-0 ">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 pt-44 flex flex-col items-center">
        <GeminiSearchBar />
        <GeminiMovieSuggestion />
      </div>
      
    </div>
  )
}

export default GeminiSearchPage;