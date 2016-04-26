import { SET_CURRENT_WEEK } from 'actions/ActionCreators';
import Duration from 'models/Duration';

import moment from 'frozen-moment';

export default (state=(new Duration(moment('1914-07-28'), moment('1914-08-01'))), action) => {
  switch (action.type) {
    case SET_CURRENT_WEEK:
      return action.weekDuration
    default:
      return state;
  }
};
