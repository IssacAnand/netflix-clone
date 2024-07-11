import React from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Requests'
import Row from '../Row'
function HomeScreen() {
  return (
    <div className='homeScreen'>
    
     <Nav/>
    
    <Banner/>
     
    {/* Props allow customisation for each component*/}
    <Row
    title="Netflix Originals"
    fetchUrl = {requests.fetchNetflixOriginals}
    isLargeRow
    />

    <Row
    title="Top Trending"
    fetchUrl = {requests.fetchTrending}
     />

     
    <Row
    title="Top Rated"
    fetchUrl = {requests.fetchTopRated}
     />

     
    <Row
    title="Romance"
    fetchUrl = {requests.fetchRomanceMovies}
     />

<Row
    title="Action"
    fetchUrl = {requests.fetchActionMovies}
     />

     
<Row
    title="Comedy"
    fetchUrl = {requests.fetchComedyMovies}
     />

{/* <Row
    title="Documentary"
    fetchUrl = {requests.fetchDocumentaries}
     /> */}

<Row
    title="Horror"
    fetchUrl = {requests.fetchHorrorMovies}
     />
    </div>
    
   
  )
}

export default HomeScreen