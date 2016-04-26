/* Combine all available reducers to a single root reducer. */
import content from './content'
import Duration from 'models/Duration';

import moment from 'frozen-moment';
import { combineReducers } from 'redux';

const currentWeek = (state=(new Duration(moment('1914-07-28'), moment('1914-08-01'))), action) => {
  switch (action.type) {
    case 'SET_CURRENT_WEEK':
      return action.weekDuration
    default:
      return state;
  }
};

const reducers = { currentWeek, content };
module.exports = combineReducers(reducers);
