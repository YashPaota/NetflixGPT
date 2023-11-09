import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedSeries} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useTopRatedSeries = () => {

    const dispatch = useDispatch();
    const getTopRatedSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedSeries(json.results));
  };

  useEffect(() => {
    getTopRatedSeries();
  }, []);

}

export default useTopRatedSeries;