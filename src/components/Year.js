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
      {/*<Months dayWidth={DAY_WIDTH} startDate={42} endDate={42}/>*/}
    </div>
  );
}

Year.propTypes = propTypes;
export default Year;
