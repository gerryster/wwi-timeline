require('styles/Timeline.css');

import Year from './Year'
import WarYear from 'models/WarYear';

import React from 'react';

const DAY_WIDTH = 2;
const DAYS_IN_WAR = 1567

class Timeline extends React.Component {
  render() {
    const overallWidthCss = { width: `${(DAYS_IN_WAR * DAY_WIDTH) + 30}px`};
    return (
      <div className="timeline">
        <div className="timeline-content" style={overallWidthCss}>
          {WarYear.allYearsInOrder().map((warYear) => <Year warYear={warYear} key={warYear.year()}/>)}
        </div>
      </div>
    );
  }
}

Timeline.defaultProps = {
};

export default Timeline;
