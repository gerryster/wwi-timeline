import { DAY_WIDTH } from './Timeline'
import { BORDER_WIDTH as YEAR_BORDER_WIDTH } from './Year'

import React, { PropTypes } from 'react';

const propTypes = {
  warMonth: PropTypes.object.isRequired,
};

const Month = ({ warMonth }) => {
  const contianerEndWidth = warMonth.month() === 12 ? YEAR_BORDER_WIDTH : 0;
  const widthCss = { width: `${((warMonth.numDays() * DAY_WIDTH)) - contianerEndWidth}px` };

  return (
    <div className="duration month" style={widthCss} key={warMonth.year() + warMonth.month()}>
      {warMonth.numDays() > 8 && warMonth.startDate.format('MMM')}
    </div>
  )
};

Month.propTypes = propTypes;
export default Month;
