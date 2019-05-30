import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../../redux/favoritesList';
import { StyledItem, Wrapper } from './userDashStyles';
import { Icon, Item, Loader } from 'semantic-ui-react';
import {authRef} from '../../firebase'
import axios from 'axios'

const UserDash = props => {
	useEffect(() => {
		props.getFavorites();
  }, []);
  const formatList = props.items.favorites && Object.entries(props.items.favorites)

  const handleDelete = (ident) => {
    console.log(ident);
    const user = authRef.currentUser;
		console.log(user);
		user &&
			user
				.getIdToken(/* forceRefresh */ true)
				.then(idToken => {
					const url = `https://redux-movie-app.firebaseio.com/users/${
						user.uid
					}/${ident}.json?auth=${idToken}`;
					axios({
						method: 'delete',
						url: url
					}).then(() => {
              props.getFavorites();
            }, [])
				})
				.catch(err => console.log(err));
  }
	return (
		<Wrapper>
      {formatList === null ? 
      <div>No Saved Items</div>
      : props.items.loading ? (
				<div>
					<Loader size='massive'>Loading</Loader>
				</div>
			) : (
				<div>
					<h1>Favorites</h1>
					{formatList.map((item, i) => (
						<StyledItem>
							<Item.Group>
								<Item>
									<Item.Image
										size='tiny'
										src={`https://image.tmdb.org/t/p/original${
											item[1].poster
										}`}
										loading='lazy'
										alt='movie poster'
										wrapped
										ui={false}
									/>
									<Item.Content verticalAlign='middle'>
										<Item.Header as='a'>
											{item[1].originalName === ''
												? item[1].originalTitle
												: item[1].originalTitle === ''
												? item[1].originalName
												: null}
										</Item.Header>
									</Item.Content>
								</Item>
							</Item.Group>
							<button onClick={()=>handleDelete(item[0])}>
								<Icon style={{ color: `#d4d4d5` }} name='minus square' />
							</button>
						</StyledItem>
					))}
				</div>
			)}
		</Wrapper>
	);
};
const mapStateToProps = ({favoritesList}) => {
	return {
		items: favoritesList
	};
};
export default connect(
	mapStateToProps,
	{ getFavorites }
)(UserDash);
