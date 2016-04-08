import { DAY_WIDTH } from './Timeline'
import { BORDER_WIDTH as YEAR_BORDER_WIDTH } from './Year'

import classNames from 'classnames';
import React, { PropTypes } from 'react';

const DAYS_REQUIRED_TO_DISPLAY_MONTH_LABEL = 9;
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
      <div className="label-header" style={widthCss}>
        {warMonth.numDays() >= DAYS_REQUIRED_TO_DISPLAY_MONTH_LABEL && warMonth.startDate.format('MMM')}
      </div>
      <SemiMonth warMonth={warMonth} contianerStartWidth={contianerStartWidth}/>
    </div>
  )
};

const SEMI_MONTH_DIVIDER_WIDTH = 1;
const SemiMonth = ({ warMonth, contianerStartWidth }) => {
  if(warMonth.numDays() >= 15) { // works for WWI but not for a generic timeline
    return (
      <div className="semi-month">
        <div className="first-half duration" style={{width: `${15 * DAY_WIDTH - contianerStartWidth}px`}}/>
        <div className="second-half duration" style={{width: `${(warMonth.numDays() - 15) * DAY_WIDTH - SEMI_MONTH_DIVIDER_WIDTH}px`}}/>
      </div>
    );
  } else {
    return <div></div>;
  }
}

Month.propTypes = propTypes;
export default Month;
