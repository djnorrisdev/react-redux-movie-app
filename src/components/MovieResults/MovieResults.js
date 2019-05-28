import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMovie } from '../../redux/getMovies';
import { Card, Icon, Image } from 'semantic-ui-react';
import { StyledHeader, InnerWrapper, OuterWrapper } from './movieResultsStyles';
import BasicSearch from '../../shared/BasicSearch/BasicSearch';
import axios from 'axios';
import firebase from 'firebase';
import SearchTitle from '../../shared/SearchTitle/SearchTitle';

class MovieResults extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleFavorite = result => {
		const user = firebase.auth().currentUser;
		console.log(user);
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
	render() {
		const results = this.props.results;
		const resArr = Object.values(results);

		return (
			<OuterWrapper>
        {results === {} ? <SearchTitle /> : null}
        {console.log(results)}
				<BasicSearch />
				<InnerWrapper>
					{results === {}
						? ''
						: resArr.map((result, i) => (
								<div key={i}>
									<Card>
										<Image
											src={`https://image.tmdb.org/t/p/original${
												result.poster_path
											}`}
											loading='lazy'
											alt='movie poster'
											wrapped
											ui={false}
										/>
										<Card.Content>
											<Card.Header>
												<StyledHeader>
													<span>
														{result.title ? result.title : result.original_name}
													</span>
													<Icon
														name={
															this.state[result.id] ? `star` : `star outline`
														}
														onClick={() => this.handleFavorite(result)}
													/>
												</StyledHeader>
											</Card.Header>
											<Card.Meta>
												<span className='date'>
													Release Date:{' '}
													{result.release_date
														? result.release_date
														: 'Unknown'}
												</span>
											</Card.Meta>
											<Card.Description>
												{result.overview && result.overview.length > 35
													? result.overview.slice(0, 35) + '...'
													: result.overview}
											</Card.Description>
										</Card.Content>
									</Card>
								</div>
						  ))}
				</InnerWrapper>
			</OuterWrapper>
		);
	}
}
const mapStateToProps = ({ getMovies: { value } }) => {
	return { results: value.results };
};
export default connect(mapStateToProps)(MovieResults);
