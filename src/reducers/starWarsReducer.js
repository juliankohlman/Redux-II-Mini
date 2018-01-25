// import /* we need our action types here*/ '../actions';
//import * as name from "module-name";
import { FETCHING_CHARS, CHARS_RECEIVED, ERROR_FETCHING_CHARS } from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null,
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return { ...state, fetching: true };
    case CHARS_RECEIVED:
      return { ...state, fetching: false, fetched: true, chars: action.payload };
    case ERROR_FETCHING_CHARS:
      return { ...state, fetching: false, error: action.payload }
    // Fill me in with the important reducers
    // action types should be FETCHING_CHARS, CHARS_RECEIVED, ERROR_FETCHING_CHARS
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};