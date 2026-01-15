import React, { useEffect, useState } from 'react'
import { YOUTUBE_LINK } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  
  const [video,setVideo]=useState([])

  useEffect(() => {
   getVideos()
 },[])

  const getVideos = async () => {
    console.log(process.env.REACT_APP_YOUTUBE_KEY);
    
    console.log(YOUTUBE_LINK);
    
    const data = await fetch(YOUTUBE_LINK)
    const json = await data.json()
    console.log(json.items);
    setVideo(json.items)
    
   }
  
  return (
    <div className='flex grid grid-cols-4'>
      {video.map(video => <Link to={"watch?v="+video.id} ><VideoCard key={video.id} info={video} /></Link>)  }
    </div>
  )
}

export default VideoContainer
