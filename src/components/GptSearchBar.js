import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie in tmdb database
  const searchMovieTmdb = async(movie) => {
    const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
  
      return json.results;
  }

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    //Make an API call to gpt api to find movies
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value +"only give me name of 5 movies, comma separated like the results given ahead. Example Resukt : Gadar , Sholay , Golmal , Dhol , Chup Chup k";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    //Homework
    if(!gptResults.choices) 
    {
        //Error handeling error page
    }
    
    console.log(gptResults?.choices[0]?.message?.content);
    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");
    console.log(gptMovies);
    //["dhol","Andaaz apna apna" ,"Krrish " ,"Hera pheri" , "Golmaal"]

    //for each movie i will search
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    //[Promise , Promise , Promise , Promise , Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies , movieResults : tmdbResults}));

  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="m-4 py-2 px-4 col-span-9 rounded-sm"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="bg-red-700 rounded-sm text-white m-4 py-2 px-4 col-span-3 hover:bg-red-600 focus:outline-none "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
