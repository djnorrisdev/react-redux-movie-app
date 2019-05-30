import React from 'react';
import { withRouter } from 'react-router';
import { BurgerMenu, Btn, NavMenu, Wrapper } from './googleAuthStyles';
import { Dropdown, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { userLogin, userLogout } from '../../redux/auth';

const GoogleAuth = props => {
	const handleLogin = () => {
		props.isAuthenticated ? props.userLogout() : props.userLogin();
	};

	const handleOpenDash = () => {
		props.history.push('/user-dash');
	};

	const renderButtons = () => {
		return (
			<>
				<NavMenu>
					{props.isAuthenticated ? (
						<Btn onClick={handleOpenDash}>Favorites</Btn>
					) : null}
					<Btn onClick={() => props.history.push('/')}>Home</Btn>
					<Btn onClick={handleLogin}>
						{props.isAuthenticated ? 'Logout' : 'Login'}
					</Btn>
				</NavMenu>
				<BurgerMenu>
					<Menu attached='top'>
						<Dropdown
							item
							icon='bars'
							simple
							style={{ color: `#fafafa`, background: `transparent`, fontSize: `2rem` }}
						>
							<Dropdown.Menu>
								{props.isAuthenticated ? (
									<Dropdown.Item onClick={handleOpenDash}>
										Favorites
									</Dropdown.Item>
								) : null}
								<Dropdown.Item onClick={() => props.history.push('/')}>
									Home
								</Dropdown.Item>
								<Dropdown.Item onClick={handleLogin}>
									{props.isAuthenticated ? 'Logout' : 'Login'}
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Menu>
				</BurgerMenu>
			</>
		);
	};

	return <Wrapper>{renderButtons()}</Wrapper>;
};
const mapStateToProps = ({ auth: { isAuthenticated } }) => {
	// console.log(isAuthenticated);
	return {
		isAuthenticated,
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ userLogin, userLogout }
	)(GoogleAuth)
);
