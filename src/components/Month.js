import { DAY_WIDTH } from './Timeline'
import { BORDER_WIDTH as YEAR_BORDER_WIDTH } from './Year'

import classNames from 'classnames';
import React, { PropTypes } from 'react';

const propTypes = {
  warMonth: PropTypes.object.isRequired,
  firstMonth: PropTypes.bool.isRequired,
};

const Month = ({ warMonth, firstMonth }) => {
  const contianerStartWidth = warMonth.month() === 1 ? YEAR_BORDER_WIDTH : 0;
  const widthCss = { width: `${((warMonth.numDays() * DAY_WIDTH)) - contianerStartWidth}px` };

  const monthClasses = classNames({
    month: true,
    duration: true,
    'first-month': firstMonth,
  });

  return (
    <div className={monthClasses} style={widthCss}>
      {warMonth.numDays() > 8 && warMonth.startDate.format('MMM')}
    </div>
  )
};

Month.propTypes = propTypes;
export default Month;
