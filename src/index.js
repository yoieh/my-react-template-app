/**
 * @flow
 * Project: my-react-template-app
 * Author: Johan Nilsson (johan.nilsson@nerdsofsweden.se)
 * Copyright 2017 - 2018 Golfhaftet, OnTee
 */

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { ConnectedRouter } from "react-router-redux";

import { Store, History } from "./reducers/store";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "./scss/style.scss";
import "./index.css";

// Now you can dispatch navigation actions from anywhere!
// Store.dispatch(push('/Home'))

ReactDOM.render(
	<Provider store={Store}>
		{/* ConnectedRouter will use the Store from Provider automatically */}
		<ConnectedRouter history={History}>
			<App store={Store} />
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
