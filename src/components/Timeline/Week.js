import { DAY_WIDTH } from '../Timeline'

import React, { PropTypes } from 'react';

const propTypes = {
  weekDuration: PropTypes.object.isRequired,
};

export const BORDER_WIDTH = 1;

const Week = ({ weekDuration }) => {
  const contentWidth = weekDuration.numDays() * DAY_WIDTH;

  return (
    <div className="duration week" style={{width: `${contentWidth}px`}}>
      <div className="label-header">
        {weekDuration.startDate.format('M/D') + ' -  ' + weekDuration.endDate.format('M/D')}
      </div>
    </div>
  );
}

Week.propTypes = propTypes;
export default Week;
