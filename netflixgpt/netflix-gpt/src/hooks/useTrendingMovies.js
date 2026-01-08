import { useEffect } from "react";
import { addNowPlayingMovies, addTrendingMovies } from "../utils/moviesSlices";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

   

  const getTrendingMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=1`, API_OPTION ); 
    const json = await data.json();
  
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
     getTrendingMovies();
  }, []);
};

export default useTrendingMovies;