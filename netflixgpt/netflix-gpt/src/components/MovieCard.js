import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({backdrop_path}) => {
  return (
    <div className='w-60 pr-2' >
      <img alt='Movie card' src={ IMG_CDN + backdrop_path} />
    </div>
  )
}

export default MovieCard
