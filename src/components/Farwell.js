import React from "react";
import { connect } from "react-redux";

import { getTranslate, getActiveLanguage } from "react-localize-redux";

const Farwell = ({ translate, currentLanguage }) => {
	return (
		<div>
			<h1>{translate("farwell")}</h1>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		translate: getTranslate(state.locale),
		currentLanguage: getActiveLanguage(state.locale).code
	};
};

export default connect(mapStateToProps)(Farwell);
