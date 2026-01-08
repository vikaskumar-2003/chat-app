import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
   if (!movies || movies.length === 0) return null;
   
    
  return (
    <div className='px-7 w-screen '>
       <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex  overflow-x-auto scrollbar-hide'>
        
        <div className='flex  '>
          {movies.map((movie)=>(   <MovieCard key={movie.id} backdrop_path={movie?.backdrop_path} />))}
        
        </div>
       
      </div>
      
    </div>
  )
}

export default MovieList
