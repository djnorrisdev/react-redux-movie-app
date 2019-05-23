import { combineReducers } from 'redux';
import getMovies from './getMovies'
import auth from './auth'

export default combineReducers({
  getMovies,
  auth
});