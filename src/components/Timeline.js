require('styles/Timeline.css');

//import moment from 'moment';
//var moment = require('moment');
import React from 'react';
import _ from 'lodash';

const DAY_WIDTH = 2;
const DAYS_IN_WAR = 1567
//const WAR_START_DATE = new Date(1914, 6, 28);
const YEARS_TO_DAYS = Object.freeze({1914: 157, 1915: 365, 1916: 366, 1917: 365, 1918: 315 });

class Timeline extends React.Component {
  render() {
    const overallWidthCss = { width: `${(DAYS_IN_WAR * DAY_WIDTH) + 30}px`};
    return (
      <div className="timeline">
        <div className="timeline-content" style={overallWidthCss}>
          {this.renderYears()}
        </div>
      </div>
    );
  }

  renderYears() {
    return _.sortBy(_.keys(YEARS_TO_DAYS)).map((year) => {
      const BORDER_WIDTH = 1;
      const widthCss = { width: `${(YEARS_TO_DAYS[year] * DAY_WIDTH) - BORDER_WIDTH}px`};
      return (<div className="year" style={widthCss} key={year}>
        {year}
      </div>);
    });
  }

  isLeapYear(year) {
    return new Date(year, 1, 29).getMonth() == 1
  }
}

Timeline.defaultProps = {
};

export default Timeline;
