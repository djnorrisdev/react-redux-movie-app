import React, { Component } from 'react';
import { Wrapper } from './headerStyles';
import GoogleAuth from '../../../components/GoogleAuth/GoogleAuth';

class Header extends Component {
	
	render() {
		return (
			<Wrapper>
        <h1>ShowFindr</h1>
        <GoogleAuth />
			</Wrapper>
		);
	}
}

export default (Header);
