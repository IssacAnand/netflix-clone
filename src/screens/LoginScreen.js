import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {
  // track state of sign in
  const[signIn,setSignIn] = useState(false);
 
  return (
    <div className='loginScreen'>
    
    <div className='loginScreen__background'>

      <img className='loginScreen__logo'
       src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
      alt=''/>
    </div>

    <button onClick={()=>setSignIn(true)}
    className='loginScreen__button'>
      Sign in
    </button>
    <div className='loginScreen__gradient'>

    </div>

    <div className='loginScreen__body'>
      {signIn ?(

        <SignUpScreen/>
      ):(

        <>
      <h1> Unlimimted films, TV Programmes and 
        more</h1>
        <h2> Watch Anywhere. Cancel at Anytime</h2>

        <h3>
          Ready to kickback & relax?
          Enter your email to create or restart memebership.
        </h3>

        <div className='loginScreen__input'>
          <form>
            <input type='email' placeholder='Email Address'
            />
            <button onClick={()=>setSignIn(true)}
             className='loginScreen__getStarted'>GET STARTED</button>
          </form>
        </div>
    </>

      )
    
    }
    </div>

    
    </div>
  )
}

export default LoginScreen