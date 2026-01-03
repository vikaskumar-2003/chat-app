import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth"
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUsers } from '../utils/userSlice'
import { AVATAR_URL } from '../utils/constant'
const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const email = useRef(null)
  const password = useRef(null)
  const name=useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch=useDispatch()

  const navigate=useNavigate()

  const handleButtonClick = () => {
    //  checkValidate(email )
    const message = checkValidate(email.current.value, password.current.value)

    setErrorMessage(message)

    if (message) return 
      
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
          displayName: name.current.value,
          photoURL: AVATAR_URL
          }).then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
           dispatch(addUsers({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }))
          
            }).catch((error) => {
            setErrorMessage(error.message)
       });
        console.log(user);
      
   
      })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage)
    // ..
    });
    }
    else {
      //sign in
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
       navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " "+errorMessage)
  }); 
        
    }

  }

  const toggleSignInForm = () => {
     setIsSignInForm(!isSignInForm)
   }
  
  return (
    <div>
          
          <Header />
          <div className='absolute' >
              <img src='https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg' alt='background' />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=' w-3/12 absolute p-12 bg-black bg-opacity-70 mx-auto my-36 right-0 left-0 rounded-xl'>
        <h1 className='font-bold text-3xl py-4 text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm&&(  <input type="text" placeholder='Full Name' ref={name} className='py-4 px-2 m-2 w-full bg-gray-600 rounded-xl'/>)}

        <input ref={email} type="text" placeholder='Email address' className='py-4 px-2 m-2 w-full bg-gray-600 rounded-xl'/>
        <input ref={password} type="password" placeholder='Password' className='py-4 px-2 m-2 w-full bg-gray-600 rounded-xl' />
        <p className='text-red-600'>{ errorMessage}</p> 

        <button className='py-3  my-4 mx-2 bg-red-600 text-white w-full rounded-xl' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up" }</button>
        <p className='text-white m-4 pointer ' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign UP Now":"Already Existed! Sign In"}</p>
      </form>
    </div>
  )
}

export default Login
