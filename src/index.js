import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { ConnectedRouter } from "react-router-redux";

import { store, history } from "./redux/store";

import { initialize, addTranslationForLanguage, setActiveLanguage } from 'react-localize-redux';

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "./scss/style.scss";
import "./index.css";

const languages = [
    { name: 'English', code: 'en' },
    { name: 'French', code: 'fr' },
    { name: 'Spanish', code: 'es' },
    { name: 'Swedish', code: 'sv' }
  ];

// const languages =  ['en', 'fr', 'es', 'sv'];

store.dispatch(initialize(languages, { defaultLanguage: 'sv' }));
store.dispatch(setActiveLanguage('sv'));

const jsonEN = {
    "greeting": "Hello",
    "farwell": "Goodbye"
}

const jsonFR = {
    "greeting": "Bonjour",
    "farwell": "Au revoir"
}

const jsonES = {
    "greeting": "Hola",
    "farwell": "Adiós"
}

const jsonSV = {
    "greeting": "Hej",
    "farwell": "Hejdå"
}

store.dispatch(addTranslationForLanguage(jsonEN, 'en'));
store.dispatch(addTranslationForLanguage(jsonFR, 'fr'));
store.dispatch(addTranslationForLanguage(jsonES, 'es'));
store.dispatch(addTranslationForLanguage(jsonSV, 'sv'));

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
