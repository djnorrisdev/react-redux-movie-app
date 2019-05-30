import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Wrapper } from './headerStyles';
import GoogleAuth from '../../../components/GoogleAuth/GoogleAuth';

class Header extends Component {
	
	render() {
		return (
			<Wrapper>
        <h1 onClick={()=>this.props.history.push('/')}>ShowFindr</h1>
        <GoogleAuth />
			</Wrapper>
		);
	}
}

export default withRouter(Header);
