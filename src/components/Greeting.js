/**
 * @flow
 * Project: my-react-template-app
 * Author: Johan Nilsson (johan.nilsson@nerdsofsweden.se)
 * Copyright 2017 - 2018 Golfhaftet, OnTee
 */

import React from "react";
import { connect } from "react-redux";

import { getTranslate, getActiveLanguage } from "react-localize-redux";

const Greeting = ({ translate, currentLanguage }) => {
	return (
		<div>
			<h1>{translate("greeting")}</h1>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		translate: getTranslate(state.locale),
		currentLanguage: getActiveLanguage(state.locale).code
	};
};

export default connect(mapStateToProps)(Greeting);
