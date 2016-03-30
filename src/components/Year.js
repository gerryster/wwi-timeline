import Month from './Month'

import React, { PropTypes } from 'react';

const propTypes = {
  warYear: PropTypes.object.isRequired,
};

const BORDER_WIDTH = 1;
const DAY_WIDTH = 2;

const Year = ({ warYear }) => {
  const widthCss = { width: `${(warYear.numDays() * DAY_WIDTH) - BORDER_WIDTH}px`};

  return (
    <div className="year" style={widthCss} key={warYear.year()}>
      {warYear.year()}
      {warYear.eachMonth((warMonth) => (
        <Month warMonth={warMonth} key={warYear.year() + warMonth.month()}/>)
      )}
    </div>
  );
}

Year.propTypes = propTypes;
export default Year;
