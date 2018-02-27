import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { ConnectedRouter } from "react-router-redux";

import { store, history } from "./redux/store";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "./scss/style.scss";
import "./index.css";

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/Home'))

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
