import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import generateRandomName, { makeRandomMessage } from '../utils/helper'



const LiveChat = () => {
    const[liveMessage,setLiveMessage]=useState("")

    const dispatch = useDispatch()
    const chatMessage=useSelector((store)=>store.chat.messages)
    console.log(chatMessage);
    
    useEffect(() => {
        const i = setInterval(() => {
            
            dispatch(addMessage({
                name: generateRandomName(),
                message:makeRandomMessage(5)
            }))
        }, 1000)
        

        return ()=>{clearInterval(i)}

    },[])
     

    return (
      <>
    <div className='w-full h-[515px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
        
          {
              chatMessage.map((chat,idx) => (
                   <ChatMessage key={idx} name={chat.name} message={chat.message} />
              ))
          }
            </div>
            <form className='w-full p-2 ml-2 border border-black' onSubmit={(e) => {
                e.preventDefault()
                dispatch(addMessage({
                    name: "vikas",
                    message:liveMessage
                }))
                setLiveMessage("")
            }}>
                <input type='text' className='px-2 w-[80%]'value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} />
                <button className='px-2 mx-2'>Submit</button>
            </form>
  </>
  )
}

export default LiveChat
