import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'
import VideoTitle from './VideoTitle'
import VideosBackGround from './VideosBackGround'

const MainContainer = () => {

  const movies=useSelector(store=> store.movies?.nowPlayingMovies)
 

  if (!movies || movies.length === 0) return //earley return
   const movieNum=Math.floor(Math.random()*10)
    
    const mainMovies=movies[0]
   
    const {original_title,overview,id}=mainMovies
    
  return (
      <div className='w-screen '>
      <VideoTitle title={ original_title} overview={overview} />
      <VideosBackGround movieId={id} />
    </div>
  )
}

export default MainContainer
