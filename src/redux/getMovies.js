import axios from 'axios'
//Initial State
const initialState = {
  value: {
    results: {}
  }
};

const MOVIE = 'MOVIE'

//Reducers
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case MOVIE: {
      console.log(action, state)
      return {
        ...state,
        value: action.payload
      }
    }
    default:
    return state
  }
}
export default reducer;

//Action Creator
export const findMovie = val => async dispatch => {
  const apiUrl = `https://api.themoviedb.org/3/search/multi`
  const apiKey = process.env.REACT_APP_API_KEY
  const response = await axios({
    url: apiUrl,
    method: 'GET',
    responseType: 'json',
    params: {
      api_key: apiKey,
      language: 'en-US',
      query: val
    }
  })
  console.log(response);
  dispatch({
    type: MOVIE,
    payload: response.data
  })
}