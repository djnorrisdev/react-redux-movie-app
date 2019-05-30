import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Wrapper } from './detailedViewStyles';
import { Icon, Image } from 'semantic-ui-react';
import axios from 'axios';
import {authRef} from '../../firebase'
import { addedFav } from '../../redux/favoritesList'
import FavModal from '../../shared/FavModal/FavModal'

const DetailedView = props => {
	const { added, results } = props;
	const id = props.location.state.id;

	const handleAdd = result => {
		const user = authRef.currentUser;
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
              const isOpen = true
							props.addedFav(isOpen)
						})
						.catch(err => console.log(err));
				})
				.catch(err => console.log(err));
	};


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
						<button onClick={() => handleAdd(item)}>
							<Icon name='plus' />
							Add To Favorites
						</button>
            <button onClick={() => props.history.goBack()}>
							<Icon name='long arrow alternate left' />
							Back to Results
						</button>
					</Wrapper>
				) : null
      )}
      {added ? <FavModal /> : null}
		</>
	);
};

const mapStateToProps = ({
	getMovies: { results },
  auth: { isAuthenticated },
  favoritesList: {added}
}) => {
	return { results, isAuthenticated, added };
};
export default withRouter(connect(mapStateToProps, { addedFav })(DetailedView));
