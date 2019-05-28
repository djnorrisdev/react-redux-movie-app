import firebase from 'firebase';
import axios from 'axios';

//Initial State
const initialState = {
	loading: true,
	favorites: {},
};

const FAVORITES = 'FAVORITES';

//Reducers
const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FAVORITES: {
			console.log(action, state);
			return {
				...state,
				favorites: action.payload,
				loading: action.loading
			};
		}
		default:
			return state;
	}
};
export default favoritesReducer;

// Actions

export const getFavorites = () => async dispatch => {
	const user = firebase.auth().currentUser;
	user &&
		user
			.getIdToken(/* forceRefresh */ true)
			.then(idToken => {
				const url = `https://redux-movie-app.firebaseio.com/users/${
					user.uid
				}.json?auth=${idToken}`;
				axios({
					method: 'get',
					url: url,
				}).then(res => {
          console.log(res.data);
          // const filtered = items.map(item => {
          // return Object.keys(item)
          //   })
          // const flatArr = filtered.flat()
          // flatArr.map((item, i, filtered)=>{
          //   console.log(item, filtered[i]);
          //   console.log(item == filtered[i] ? false: item)
          // })
          
          dispatch({
          	type: FAVORITES,
            payload: res.data,
            loading: false
          });
        })
        .catch(err => console.log(err));
			})
			
};
