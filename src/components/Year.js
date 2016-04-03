import Month from './Month'
import { DAY_WIDTH } from './Timeline'

import React, { PropTypes } from 'react';

const propTypes = {
  warYear: PropTypes.object.isRequired,
};

const BORDER_WIDTH = 1;

const Year = ({ warYear }) => {
  const contentWidth = warYear.numDays() * DAY_WIDTH;

  return (
    <div className="duration year" style={{width: `${contentWidth - BORDER_WIDTH}px`}}
        key={warYear.year()}>
      <div className="label-header" style={{width: `${contentWidth}px`}}>{warYear.year()}</div>
      {warYear.months().map((warMonth) => ( <Month warMonth={warMonth} />) )}
    </div>
  );
}

Year.propTypes = propTypes;
export default Year;
