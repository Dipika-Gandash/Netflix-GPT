import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'

const GptSearchPage = () => {
  return (
    <div className='bg-white'>
    <GptSearchBar />
    <GptMovieSuggestion />
    </div>
  )
}

export default GptSearchPage