import React, { useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch= useDispatch();
  // [] ->only run after first render, could lead to performance issues otherwise
  useEffect(()=>{
    //callback function
   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
    //login
    if(userAuth){
      console.log(userAuth)
      dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email,
      }))
    } else{
      //logout
      dispatch(logout());

    }
   })
   //Cleanup to prevent potential memory leak
   return unsubscribe;
  },[dispatch]);


  return (
    <div className="app">
<Router>
        {!user ? (
          <LoginScreen/>
        ) : (
          <>
            {/* Routes: Collection of all the routes 
            Ensure only 1 route rendered at a time
            Route-> define an individual route */}
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path='/profile' element={<ProfileScreen/>}/>
              
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
