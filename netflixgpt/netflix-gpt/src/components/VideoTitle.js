import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[15%] px-16 absolute text-white bg-gradient-to-r from-black'>
      <div>
        <h1 className='text-5xl font-bold pl-1'>{title}</h1>
        <p className='py-6 pl-3 text-lg w-1/4'>{overview}</p>
      </div>
     
      <div className=''>
        <button  className='bg-white text-black p-2 px-8 text-lg bg-opacity-50 rounded-lg m-4 hover:bg-opacity-80'> ▶️Play</button>
        <button className='bg-gray-500 text-black p-2 px-8 text-lg bg-opacity-50 rounded-lg m-4 ' >More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle
