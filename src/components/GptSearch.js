import React from 'react';
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={BACKGROUND_URL} alt="Background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion /> 
    </div>
  )
}

export default GptSearch;