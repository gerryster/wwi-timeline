/* Combine all available reducers to a single root reducer. */
import content from './content'
import currentWeek from './currentWeek'

import { combineReducers } from 'redux';

const reducers = { currentWeek, content };
module.exports = combineReducers(reducers);
