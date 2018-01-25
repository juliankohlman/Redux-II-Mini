// we'll need axios
import axios from 'axios'
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_CHARS = 'FETCHING_CHARS';
export const CHARS_RECEIVED = 'CHARS_RECEIVED';
export const ERROR_FETCHING_CHARS = 'ERROR_FETCHING_CHARS';
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based
export const getStarWars = () => {
  const request = axios.get('https://swapi.co/api/people/');
  return dispatch => {
    console.log(request);
    dispatch({type: FETCHING_CHARS})
    request.then(({ data }) => {
      dispatch({type: CHARS_RECEIVED, payload: data.results})
    }).catch(err => {
      dispatch({type: ERROR_FETCHING_CHARS, payload: err})
    })
  }

};