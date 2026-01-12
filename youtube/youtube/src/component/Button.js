import React from 'react'

const Button = () => {
   const name=["All","Music","Gaming","JavaScript","Mixes","Comic Books", "Cricket","Live","Motivation","Docker","FootBall","Hockey","Fight","jj" ]

  return (
    <div className='w-full bg-white overflow-hidden '>
    <div className='flex  flex-nowrap  overflow-x-auto  scrollbar-hide '>
        
          {name.map((name) => (
              <button className=' shrink-0 py-2 px-5 m-2 bg-gray-200 rounded-lg' key={name}>{ name}</button>
          ))}
      </div>
      </div>
  )
}

export default Button
