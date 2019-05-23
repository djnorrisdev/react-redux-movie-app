import React, { Component } from 'react';
import { Wrapper } from './headerStyles';
import GoogleAuth from '../../../components/GoogleAuth/GoogleAuth';

class Header extends Component {
	
	render() {
    console.log(this.props);
		return (
			<Wrapper>
        <GoogleAuth />
			</Wrapper>
		);
	}
}

export default (Header);
