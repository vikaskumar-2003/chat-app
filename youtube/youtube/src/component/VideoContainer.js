import React, { useEffect, useState } from 'react'
import { YOUTUBE_LINK } from '../utils/constant'
import VideoCard from './VideoCard'

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
    <div className='flex grid grid-cols-5'>
      {video.map(video => <VideoCard key={video.id} info={video} />)  }
    </div>
  )
}

export default VideoContainer
