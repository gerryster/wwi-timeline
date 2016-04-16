/* Combine all available reducers to a single root reducer. */
import { combineReducers } from 'redux';
/* Populated by react-webpack-redux:reducer */

const currentWeek = (state='initial', action) => {
  console.log("state: ", state, ", action: ", action);
  switch (action.type) {
    case 'SET_CURRENT_WEEK':
      return action
    default:
      return state;
  }
};

const reducers = { currentWeek };
module.exports = combineReducers(reducers);
