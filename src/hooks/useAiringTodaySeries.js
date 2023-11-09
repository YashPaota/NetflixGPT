import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAiringTodaySeries, addTopRatedSeries} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useAiringTodaySeries = () => {

    const dispatch = useDispatch();
    const getAiringTodaySeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addAiringTodaySeries(json.results));
  };

  useEffect(() => {
    getAiringTodaySeries();
  }, []);

}

export default useAiringTodaySeries;