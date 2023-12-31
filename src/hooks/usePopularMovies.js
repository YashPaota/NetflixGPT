import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const usePopularMovies = () => {

    const dispatch = useDispatch();

    const popularMovies = useSelector(store => store.movies.popularMovies);  
  const getPopularMoviess = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMoviess();    //Done Memoization
  }, []);

}

export default usePopularMovies;