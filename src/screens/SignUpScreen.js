import React, { useRef } from 'react'
import './SignUpScreen.css'
import { auth } from '../firebase';

function SignUpScreen() {
  // useRef-> track and update w/o re-rendering
  const emailRef = useRef(null); 
  const passwordRef = useRef(null);

  const register = (e) =>{
    //prevent button from refreshing
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      //points to the input user types
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser);
    })
    .catch((error)=>{
      alert(error.message);
    });
    
  };
  const sign_in = (e) =>{
    //prevent button from refreshing
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser);
    }).catch((error)=>{
      alert(error.message);
    });
  }


  return (
    <div className='signUpScreen'>
      <h1>Sign In</h1>
      <form>
        <input type='email' placeholder='Email' ref={emailRef}/>
        <input type='password' placeholder='Password' ref={passwordRef}/>
        <button onClick={sign_in}  type='submit'>Sign In</button>

        <h4>
          <span className='signUp__gray'>New to Netflix? </span>
          <span className='signUp__link' onClick={register}>Sign Up now. </span>
          </h4>
      </form>
    </div>
  )
}

export default SignUpScreen