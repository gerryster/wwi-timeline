import Month from './Month'
import { DAY_WIDTH } from './Timeline'

import React, { PropTypes } from 'react';

const propTypes = {
  warYear: PropTypes.object.isRequired,
};

const BORDER_WIDTH = 1;

const Year = ({ warYear }) => {
  const widthCss = { width: `${(warYear.numDays() * DAY_WIDTH) - BORDER_WIDTH}px`};

  return (
    <div className="duration year" style={widthCss} key={warYear.year()}>
      {warYear.year()}
      {warYear.months().map((warMonth) => ( <Month warMonth={warMonth} />) )}
    </div>
  );
}

Year.propTypes = propTypes;
export default Year;
