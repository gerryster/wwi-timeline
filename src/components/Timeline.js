require('styles/Timeline.css');

import Week from '../containers/Timeline/Week';
import Year from './Timeline/Year'

import TimelineModel from 'models/Timeline';

import React from 'react';

export const DAY_WIDTH = 2;
const DAYS_IN_WAR = 1567;

class Timeline extends React.Component {
  render() {
    const overallWidthCss = { width: `${(DAYS_IN_WAR * DAY_WIDTH) + 30}px`};
    return (
      <div className="timeline">
        <div className="years-container" style={overallWidthCss}>
          {TimelineModel.allYears().map((warYear) => (
            <Year warYear={warYear} key={warYear.year()}/>
          ))}
        </div>
        <div className="weeks-container" style={overallWidthCss}>
          {TimelineModel.allWeeks().map((weekDuration) => (
            <Week duration={weekDuration} key={weekDuration.startDate.format('YYYY-MM-DD')}/>
          ))}
        </div>
      </div>
    );
  }
}

Timeline.defaultProps = {
};

export default Timeline;
