import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterDisplay extends Component {
	render() {
		return (
			<div id="countDisplay">
				<h3>The current count is: {this.props.count}</h3>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		count: state.count
	}
}

export default connect(mapStateToProps)(CounterDisplay);