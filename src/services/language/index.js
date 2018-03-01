

/**
 * @flow
 * Project: my-react-template-app
 * Author: Johan Nilsson (johan.nilsson@nerdsofsweden.se)
 * Copyright 2017 - 2018 Golfhaftet, OnTee
 */

import { initialize, addTranslationForLanguage } from "react-localize-redux";

export const init = (store: any) => {
	const languages = [
		{ name: "English", code: "en" },
		{ name: "French", code: "fr" },
		{ name: "Spanish", code: "es" },
		{ name: "Swedish", code: "sv" }
	];

	// const languages =  ['en', 'fr', 'es', 'sv'];

	store.dispatch(initialize(languages, { defaultLanguage: "en" }));

	const jsonEN = {
		greeting: "Hello",
		farwell: "Goodbye"
	};

	const jsonFR = {
		greeting: "Bonjour",
		farwell: "Au revoir"
	};

	const jsonES = {
		greeting: "Hola",
		farwell: "Adiós"
	};

	const jsonSV = {
		greeting: "Hej",
		farwell: "Hejdå"
	};

	store.dispatch(addTranslationForLanguage(jsonEN, "en"));
	store.dispatch(addTranslationForLanguage(jsonFR, "fr"));
	store.dispatch(addTranslationForLanguage(jsonES, "es"));
    store.dispatch(addTranslationForLanguage(jsonSV, "sv"));
    
    return true
};

export default {
    init
}