import React, { useState } from 'react'
import "./login.css"
import assets from '../../assets/assets/assets'
const Login = () => {
   
    const [currentState,setCurrentState]=useState("Sign up")

  return (
    <div className='login'>
          <img src={assets.logo_big} className='logo' alt='login' />
          <form className="login-form">
              <h2>{currentState}</h2>
              {currentState==="Sign up"? <input type='text' placeholder='username' className='form-input' required />:null}
             
              <input type='email' className='form-input' placeholder='Email address' required />
              <input type='password' className='form-input' placeholder='Password' required />
              <button type='submit'>{currentState }</button>
         
          <div className="login-term">
              <input type="checkbox" />
              <p>Agree to the terms of use and privacy policy</p>
          </div>
              <div className="login-forget">
                  {
                      currentState == "Sign up" ? <p className="login-toggle">Already have an account? <span onClick={() => { setCurrentState("Login") }} >Click here</span> </p>
                       :   <p className="login-toggle"> Create an account? <span onClick={()=>{setCurrentState("Sign up")}} >Click here</span> </p>
              
                  }
           
              </div>
          </form>
    </div>
  )
}

export default Login
