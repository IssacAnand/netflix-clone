/*
TMDC provides API calls (Get, POSt) for the frontend 
to request data from the database
*/

import axios from 'axios'
// Axios always starts with the url request
const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3'

})
export default instance