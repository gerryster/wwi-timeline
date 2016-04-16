import Month from './Month'
import { DAY_WIDTH } from '../Timeline'

import React, { PropTypes } from 'react';

const propTypes = {
  warYear: PropTypes.object.isRequired,
};

export const BORDER_WIDTH = 1;

const Year = ({ warYear }) => {
  const contentWidth = warYear.numDays() * DAY_WIDTH;

  return (
    <div className="duration year" style={{width: `${contentWidth}px`}}>
      <div className="label-header" style={{width: `${contentWidth}px`}}>{warYear.year()}</div>
      {warYear.months().map((warMonth) => (
        <Month warMonth={warMonth}
               firstMonth={warMonth.startDate.month() === warYear.startDate.month()}
               key={warMonth.year() + warMonth.month()}/>
      ))}
    </div>
  );
}

Year.propTypes = propTypes;
export default Year;
