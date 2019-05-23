import React from 'react';
import { connect } from 'react-redux';
import { StyledItem, Wrapper } from './userDashStyles';
import { Icon, Item } from 'semantic-ui-react';

const UserDash = () => {
	return (
		<Wrapper>
			<h1>Favorites</h1>
			<StyledItem>
				<Item.Group>
					<Item>
						<Item.Image
							size='tiny'
							src='https://react.semantic-ui.com/images/wireframe/image.png'
						/>
						<Item.Content verticalAlign='middle'>
							<Item.Header as='a'>12 Years a Slave</Item.Header>
						</Item.Content>
					</Item>
				</Item.Group>
        <button><Icon style={{color: `#d4d4d5`}} name='minus square'/></button>
			</StyledItem>
		</Wrapper>
	);
};

export default UserDash;
