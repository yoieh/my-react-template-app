/**
 * @flow
 * Project: my-react-template-app
 * Author: Johan Nilsson (johan.nilsson@nerdsofsweden.se)
 * Copyright 2017 - 2018 Golfhaftet, OnTee
 */

import { routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'
import { routerReducer } from 'react-router-redux'
import { localeReducer } from 'react-localize-redux';

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import * as reducers from "./";

export const History = createHistory()
export const configureStore = (initialState: any = {}) => {
    const rootReducer = combineReducers({reducers, router: routerReducer, locale: localeReducer
    });
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