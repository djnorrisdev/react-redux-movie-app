import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from './detailedViewStyles';
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';
import firebase from 'firebase';
import FavModal from '../FavModal/FavModal';

const DetailedView = props => {
	const { isAuthenticated, results } = props;
	const id = props.location.state.id;

	const handleAdd = result => {
		const user = firebase.auth().currentUser;
		user &&
			user
				.getIdToken(/* forceRefresh */ true)
				.then(idToken => {
					const url = `https://redux-movie-app.firebaseio.com/users/${
						user.uid
					}.json?auth=${idToken}`;
					axios({
						method: 'post',
						url: url,
						uid: user.uid,
						data: {
							resultId: result.id,
							poster: result.poster_path,
							originalName: result.original_name ? result.original_name : '',
							originalTitle: result.original_title ? result.original_title : '',
						},
					})
						.then(res => {
							res &&
								this.setState({
									[result.id]: true,
								});
						})
						.catch(err => console.log(err));
				})
				.catch(err => console.log(err));
  };
  
  const handleNoAuth = () => (
    <FavModal />
  )

	return (
		<>
			{results.map((item, i) =>
				item.id === id ? (
					<Wrapper key={i}>
						<Image
							src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
							size='medium'
						/>
						<h1>{item.title ? item.title : item.original_name}</h1>
						<div>
							<p>{item.overview}</p>
						</div>
						<div>
							<h3>
								Popularity:<span> {item.popularity} / 100</span>
							</h3>
						</div>
						<div>
							<h3>
								Vote Average:{' '}
								<span>
									{item.vote_average} / 10 from {item.vote_count} voters
								</span>
							</h3>
						</div>
						<button onClick={isAuthenticated ? () => handleAdd(item): handleNoAuth}>
							<Icon name='plus' />
							Add To Favorites
						</button>
					</Wrapper>
				) : null
			)}
		</>
	);
};

const mapStateToProps = ({ getMovies: { results }, auth: {isAuthenticated} }) => {
	return { results, isAuthenticated };
};
export default connect(mapStateToProps)(DetailedView);
