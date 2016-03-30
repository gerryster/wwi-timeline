import { DAY_WIDTH } from './Timeline'

import React, { PropTypes } from 'react';

const propTypes = {
  warMonth: PropTypes.object.isRequired,
};

const BORDER_WIDTH = 1;

const Month = ({ warMonth }) => {
  const widthCss = { width: `${(warMonth.numDays() * DAY_WIDTH) - BORDER_WIDTH}px`};

  return (
    <div className="duration month" style={widthCss} key={warMonth.year() + warMonth.month()}>
      {warMonth.month()}
    </div>
  )
};

Month.propTypes = propTypes;
export default Month;
