import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from  './axios'


            //Destructing the arguments from props
function Row({title,fetchUrl,isLargeRow=false}) {
    const [movies,setMovies] = useState([]);
    
    const base_url = "https://image.tmdb.org/t/p/original/";

    //When value of fetchURL changes, rerun effect
    useEffect( () => {
        async function fetchData(){
            const request = await axios.get(fetchUrl); //function waits for API request to complete before moving to next line
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    },[fetchUrl]);
    
  return (
    <div className='row'>
        <h2> {title}</h2>

        <div className='row__posters'>

        {movies.map((movie) =>(
            //Condition to remove deadlinks
            (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)
        )
            &&(
                <img className= {`row__poster ${isLargeRow && 'row__posterLarge'}`}
            key={movie.id}
            src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
             }`}
             alt={movie.name}/> 

            )
        
    )}


        </div>
        
    </div>
  );
}

export default Row