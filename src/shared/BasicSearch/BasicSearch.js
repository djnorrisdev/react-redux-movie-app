import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {findMovie} from '../../redux/getMovies'
import { Wrapper } from './basicSearchStyles';

 class BasicSearch extends Component {
	state = {
		inputVal: {},
	};

	handleChange = e => {
		const val = e.target.value;

		this.setState({
			inputVal: val,
		});
	};

	handleSubmit = () => {
		this.props.findMovie(this.state.inputVal);
	};

	render() {
		return (
			<Wrapper>
				<Form onSubmit={this.handleSubmit}>
					<Input
						action='Search'
						placeholder='Search...'
						onChange={e => this.handleChange(e)}
					/>
				</Form>
			</Wrapper>
		);
	}
}

export default connect(null, {findMovie})(BasicSearch);
