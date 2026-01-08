import { useEffect } from "react";
import { addNowPlayingMovies, addUpcomingMovies } from "../utils/moviesSlices";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

   

  const getUpcomingMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, API_OPTION ); 
    const json = await data.json();
   
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
      getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
