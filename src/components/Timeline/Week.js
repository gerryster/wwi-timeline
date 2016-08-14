import { DAY_WIDTH } from '../Timeline'

import { setCurrentWeek } from 'actions/ActionCreators';

import classNames from 'classnames';
import React, { PropTypes } from 'react';

const propTypes = {
  duration: PropTypes.object.isRequired,
};

export const BORDER_WIDTH = 1;

const Week = ({ duration, currentWeek, dispatch }) => {
  const contentWidth = duration.numDays() * DAY_WIDTH;
  const classes = classNames("duration week", {current: duration.isSame(currentWeek) });

  return (
    <div className={classes} style={{width: `${contentWidth}px`}}
         onClick={() => dispatch(setCurrentWeek(duration))}>
      <div className="label-header">
        {duration.startDate.format('M/D') + ' -  ' + duration.endDate.format('M/D')}
      </div>
    </div>
  );
}

Week.propTypes = propTypes;
export default Week;
