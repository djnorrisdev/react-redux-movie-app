import { combineReducers } from 'redux';
import getMovies from './getMovies'
import auth from './auth'
import favoritesList from './favoritesList'

export default combineReducers({
  getMovies,
  auth,
  favoritesList,
});