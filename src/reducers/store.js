import { routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import * as reducers from "./";

export const History = createHistory()
export const configureStore = (initialState = {}) => {
    const rootReducer = combineReducers(reducers);
    const middleware = applyMiddleware(routerMiddleware(History))
  
    return createStore(
      rootReducer,
      initialState,
      compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
    );
  }

export const Store = configureStore()

export default {
    History,
    Store
}