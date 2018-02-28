import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Farwell from "../containers";

class Debug extends Component {

	render() {
		let { locale, id } = this.props.match.params;

		return (
			<div className="Test">
				TEST
				<div>{locale ? locale : null}</div>
				<div>{id ? id : null}</div>
				<Farwell />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	location: state.location,
});
const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Debug));
