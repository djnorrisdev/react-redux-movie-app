import { authRef } from '../firebase';
import axios from 'axios';

//Initial State
const initialState = {
	loading: true,
  favorites: {},
  added: false
};

const FAVORITES = 'FAVORITES';
const ADDED_FAV = 'ADDED_FAV'
//Reducers
const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FAVORITES: 
			return {
				...state,
				favorites: action.payload,
				loading: action.loading,
      }
    case ADDED_FAV: 
      return {
        ...state,
        added: action.added
      }
		default:
			return state;
	}
};
export default favoritesReducer;

// Actions

export const getFavorites = () => async dispatch => {
	const user = authRef.currentUser;
	user &&
		user.getIdToken(/* forceRefresh */ true).then(idToken => {
			const url = `https://redux-movie-app.firebaseio.com/users/${
				user.uid
			}.json?auth=${idToken}`;
			axios({
				method: 'get',
				url: url,
			})
				.then(res => {
					dispatch({
						type: FAVORITES,
						payload: res.data,
						loading: false,
					});
				})
				.catch(err => console.log(err));
		});
};

export const addedFav = isOpen => {
  return {
    type: ADDED_FAV,
    added: isOpen
  }
}