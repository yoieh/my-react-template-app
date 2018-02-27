import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { localeReducer } from 'react-localize-redux';

import todos from './todos'
import visibilityFilter from './visibilityFilter'
 
const reducers = combineReducers({
  localeReducer,
  routerReducer,
  todos,
  visibilityFilter,
})
 
export default reducers