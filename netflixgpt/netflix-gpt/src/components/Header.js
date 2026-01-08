import React, { useEffect } from 'react'
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addUsers, removeUsers } from '../utils/userSlice'
import { LOGO } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  const handleSignOut = () => {
      
    signOut(auth).then(() => {
      
    }).catch((error) => {
      //  An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
     const unSubscribe= onAuthStateChanged(auth, (user) => {
     if (user) {
        const {uid,email,displayName,photoURL} = user;
       dispatch(addUsers({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }))
       navigate("/browse")
      } else {
        dispatch(removeUsers())
        navigate("/")
     }
     });
    
    return ()=>unSubscribe()
    },[ ])
  
  const handleGptSearch=() => {
      dispatch(toggleGptSearchView())
    }
  
  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between  '>
      <img className="w-40" src={LOGO} alt='logo' />
       
      {user && (<div className='flex p-2' >
        <select className='p-2 bg-gray-900 text-white rounded-lg m-2' onChange={handleLanguageChange}>
          <option value="en" >English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
          <option value="italy"> Italy</option>
          
        </select>
        <button className='p-2 m-2 bg-purple-700 rounded-lg text-white' onClick={handleGptSearch}>
          GPT Search</button>
        <img className='w-10 h-10' alt="user icon"
          src={user?.photoUrl} />
        <button onClick={handleSignOut} className='font-bold text-white' >(Sign Out)</button>
      </div>)
      }
    </div>

  )
}

export default Header
