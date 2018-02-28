// import {routerMiddleware } from 'react-router-redux'

// import { createStore, applyMiddleware, compose } from 'redux'
// import createHistory from 'history/createBrowserHistory'

// import reducers from './reducers' // Or wherever you keep your reducers

// // Create a history of your choosing (we're using a browser history in this case)
// export const history = createHistory()

// // Build the middleware for intercepting and dispatching navigation actions
// const middleware = applyMiddleware(routerMiddleware(history))

// // Add the reducer to your store on the `router` key
// // Also apply our middleware for navigating
// export const store = createStore(
//   reducers,
//   compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
// )


import { routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'
import { routerReducer } from 'react-router-redux'
import { localeReducer } from 'react-localize-redux';

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import * as reducers from "./";

export const History = createHistory()
export const configureStore = (initialState = {}) => {
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