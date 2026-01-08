import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'

const SecondaryContainer = () => {
   const movies=useSelector(store=>store.movies)
  const langKey=useSelector(store=>store.config.lang) 
  
  return (
    movies.nowPlayingMovies && (
      <div className=' bg-black' >
        <div className='-mt-40 pl-6 relative z-20'>
         <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"} />
          <MovieList movies={movies.trendingMovies} title={lang[langKey].trending} />
         <MovieList movies={movies.popularMovies} title={"Popular"} />
         <MovieList movies={movies.upcomingMovies} title={"Upcoming Movies"} />
       
      
        </div>

    </div>)
  )
}

export default SecondaryContainer
