
const API_key= '887b9dde32acb93a14ba6bab6b6c6c68';

const requests= {
    /* 
     Writing all the different endpoints
     (appended to baseurl in axios.js)
    */
   fetchTrending:`/trending/all/week?api_key=${API_key}&language=en-US`,
   fetchNetflixOriginals:`/discover/tv?api_key=${API_key}&with_networks=213`,
   fetchTopRated:`/movie/top_rated?api_key=${API_key}&language=en-US`,
   fetchActionMovies:`/discover/movie?api_key=${API_key}&with_genres=28`,
   fetchComedyMovies:`/discover/movie?api_key=${API_key}&with_genres=35`,
   fetchHorrorMovies:`/discover/movie?api_key=${API_key}&with_genres=27`,
   fetchRomanceMovies:`/discover/movie?api_key=${API_key}&with_genres=10749`,
   fetchDocumentaries:`/discover/movie?api_key=${API_key}&with_genres=99`,
};

export default requests;