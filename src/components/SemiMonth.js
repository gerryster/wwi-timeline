import { DAY_WIDTH } from './Timeline';

import React, { PropTypes } from 'react';

const propTypes = {
  warMonth: PropTypes.object.isRequired,
  contianerStartWidth: PropTypes.number.isRequired,
};

const DIVIDER_WIDTH = 1;
const SemiMonth = ({ warMonth, contianerStartWidth }) => {
  if(warMonth.numDays() >= 15) { // works for WWI but not for a generic timeline
    return (
      <div className="semi-month">
        <div className="first-half duration" style={{width: `${15 * DAY_WIDTH - contianerStartWidth}px`}}/>
        <div className="second-half duration" style={{width: `${(warMonth.numDays() - 15) * DAY_WIDTH - DIVIDER_WIDTH}px`}}/>
      </div>
    );
  } else {
    return <div></div>;
  }
}

SemiMonth.propTypes = propTypes;
export default SemiMonth;
