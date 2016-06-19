import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/index';
import { bindActionCreators } from 'redux';

class CounterButton extends Component {
	constructor(props) {
		super(props);

		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}
	
	handleIncrement() {
		this.props.incrementCounter();
	}

	handleDecrement() {
		this.props.decrementCounter();
	}

	render() {
		return (
			<div>
				<input id="btnDec" type="button" onClick={this.handleDecrement} className="btn btn-secondary btn-lg" value="-1"/>
				<input id="btnInc" type="button" onClick={this.handleIncrement} className="btn btn-primary btn-lg" value="+1"/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ incrementCounter, decrementCounter }, dispatch);
}

export default connect(null, mapDispatchToProps)(CounterButton);