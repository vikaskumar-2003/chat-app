import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const[isSignInForm,setIsSignInForm]=useState(true)

  const toggleSignInForm = () => {
     setIsSignInForm(!isSignInForm)
   }
  
  return (
    <div>
          
          <Header />
          <div className='absolute' >
              <img src='https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg' alt='background' />
      </div>
      <form className=' w-3/12 absolute p-12 bg-black bg-opacity-70 mx-auto my-36 right-0 left-0 rounded-xl'>
        <h1 className='font-bold text-3xl py-4 text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm&&(  <input type="text" placeholder='Full Name' className='py-4 px-2 m-2 w-full bg-gray-600 rounded-xl'/>)}

        <input type="text" placeholder='Email address' className='py-4 px-2 m-2 w-full bg-gray-600 rounded-xl'/>
        <input type="password" placeholder='Password' className='py-4 px-2 m-2 w-full bg-gray-600 rounded-xl' />
        <button className='py-3  my-4 mx-2 bg-red-600 text-white w-full rounded-xl '>{isSignInForm?"Sign In":"Sign Up" }</button>
        <p className='text-white m-4 pointer ' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign UP Now":"Already Existed! Sign In"}</p>
      </form>
    </div>
  )
}

export default Login
