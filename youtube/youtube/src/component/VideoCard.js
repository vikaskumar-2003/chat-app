import React from 'react'

const VideoCard = ({ info }) => {
    if(!info) return null
    console.log(info);
     const { snippet, statistics } = info
     const {channelTitle,title,thumbnails}=snippet
  return (
    <div className='p-2 m-2 shadow-lg w-60  '>
          <img src={thumbnails.high.url} alt='thumbnails'className=' rounded-lg w-60' />
          <ul>
              <li className='font-bold py-2' >{title}</li>
              <li  >{channelTitle}</li>
              <li>{statistics.viewCount}</li>
              
          </ul>
    </div>
  )
}

export default VideoCard

