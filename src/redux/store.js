import { routerMiddleware } from 'react-router-redux'

import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers' // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = applyMiddleware(routerMiddleware(history))

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const store = createStore(
  reducers,
  compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
)
