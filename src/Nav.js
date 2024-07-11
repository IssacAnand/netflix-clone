import React, { useState, useEffect } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';

function Nav() {

    // useState - allow stored data to be changed over time
    const[show,handleShow] =useState('false');
    // used to navigate different routes w/o using link or navlink component
    const navigate = useNavigate();

    const transitionNavBar =  () =>{
        if (window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };
    //run after render and also clean itself
    useEffect( () => {
        window.addEventListener("scroll",transitionNavBar);
        return ()=> window.removeEventListener("scroll",transitionNavBar);
    },[]); //empty array: effect only runs once
  return (
    <div className={`nav ${show  && "nav__black"}`}>

        <div className='nav__contents'>

        <img  className = 'nav__logo'
        onClick={()=>navigate('/')}
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
        alt='' />
        {/* () prevents the navigate function from executing immediately*/}
        <img className = 'nav__avatar'
        onClick={() => navigate('/profile')}
         src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
        alt='' />
   </div>
    </div>
  )
}

export default Nav