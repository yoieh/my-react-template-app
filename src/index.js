import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { ConnectedRouter } from "react-router-redux";

import {Store, History} from "./reducers/store";

import { initialize, addTranslationForLanguage } from 'react-localize-redux';

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

console.log(Store)

Store.dispatch(initialize(languages, { defaultLanguage: 'sv' }));

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

Store.dispatch(addTranslationForLanguage(jsonEN, 'en'));
Store.dispatch(addTranslationForLanguage(jsonFR, 'fr'));
Store.dispatch(addTranslationForLanguage(jsonES, 'es'));
Store.dispatch(addTranslationForLanguage(jsonSV, 'sv'));

// Now you can dispatch navigation actions from anywhere!
// Store.dispatch(push('/Home'))

ReactDOM.render(
  <Provider store={Store}>
    {/* ConnectedRouter will use the Store from Provider automatically */}
    <ConnectedRouter history={History}>
        <App store={Store}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
