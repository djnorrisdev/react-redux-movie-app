import { authRef, provider } from '../firebase';
import firebase from 'firebase'
import axios from 'axios'

//Initial State
const initialState = {
  loading: false,
  user:'',
	isAuthenticated: false,
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const FETCH_USER = 'FETCH_USER';

//Reducers
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER: {
			return {
				...state,
        user: action.payload,
        isAuthenticated: localStorage.getItem('jwt') ? true : false,
			};
		}
		default:
			return state;
	}
};
export default userReducer;

// Actions

// Listen and store changes to user
export const fetchUser = () => dispatch => {
	authRef.onAuthStateChanged(user => {
		if (user) {
			dispatch({
				type: FETCH_USER,
				payload: user,
      })
		} else {
			dispatch({
				type: FETCH_USER,
				payload: null,
			});
		}
	})
};

export const userLogin = () => dispatch => {
	authRef
		.signInWithPopup(provider)
		.then(result => {
      const token = result.credential.idToken
      const authId = result.user.uid
      localStorage.setItem('jwt', token)
      console.log(result)
      // firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(
      //   idToken => {
      //   const url = `https://redux-movie-app.firebaseio.com/users.json?auth=${idToken}`
      // axios({
      //     method: 'patch',
      //     url: url,
      //     data: {
      //       [authId]: {
      //       displayName: result.user.displayName,
      //       email: result.user.email
      //       }
      //     }
      //   }).then(
      //     res => console.log(res)
      //   ).catch(
      //     err => console.log(err)
      //   )}
      // ).catch(
      //   err => console.log(err)
      // )
      
    })
		.catch(error => {
			console.log(error);
		});
};

export const userLogout = () => dispatch => {
	authRef
    .signOut()
    .then(() => {
      // Sign-out successful.
      localStorage.removeItem('jwt')
      dispatch({
				type: FETCH_USER,
				payload: initialState,
			})
    })
    .catch(error => {
      console.log(error);
    });
};
