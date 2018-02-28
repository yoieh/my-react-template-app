import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { localeReducer as locale } from "react-localize-redux";

import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
const reducers = combineReducers({
	locale,
	routerReducer,
	todos,
	visibilityFilter
});
export default reducers;
