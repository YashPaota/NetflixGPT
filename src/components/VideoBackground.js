import React from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';

const VideoBackground = ({movieId}) => {
  //fetch movie trailer
  //movieid

  const getMovieVideo = async() => {
      const data = await fetch("https://api.themoviedb.org/3/movie/299054/videos?language=en-US", API_OPTIONS);
      const json = await data.json();
      // console.log(json);
      const filterData = json.results.filter((video) => video.type === "Trailer"); //Here We got two trailers
      console.log(filterData);
      const trailer = filterData[0];   //We are assuming
  }

  useEffect(() => {
     getMovieVideo();
  },[])
  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground;