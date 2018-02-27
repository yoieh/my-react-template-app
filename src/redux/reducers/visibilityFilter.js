import { SET_VISIBILITY_FILTER } from "../actions"

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return [
        ...state,
        action.filter
      ]
    default:
      return state
  }
}
 
export default visibilityFilter