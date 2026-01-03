import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
   const movies=useSelector(store=>store.movies)
  console.log(movies.nowPlayingMovies);
  
  return (
    movies.nowPlayingMovies && (
      <div className=' bg-black' >
        <div className='-mt-40 pl-6 relative z-20'>
         <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"} />
         
         <MovieList movies={movies.popularMovies} title={"Popular"} />
         <MovieList movies={movies.upcomingMovies} title={"Upcoming Movies"} />
         <MovieList movies={movies.trendingMovies} title={"Trending"} />
      
        </div>

    </div>)
  )
}

export default SecondaryContainer
