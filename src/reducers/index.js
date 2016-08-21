/* Combine all available reducers to a single root reducer. */
import content from './content'
import currentWeek from './currentWeek'
import user from './user'

import { combineReducers } from 'redux';

const reducers = { currentWeek, content, user };
module.exports = combineReducers(reducers);
