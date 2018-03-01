/**
 * @flow
 * Project: my-react-template-app
 * Author: Johan Nilsson (johan.nilsson@nerdsofsweden.se)
 * Copyright 2017 - 2018 Golfhaftet, OnTee
 */

import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {Farwell} from "../components";

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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Debug))