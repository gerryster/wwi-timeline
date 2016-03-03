require('styles/Timeline.css');

//import moment from 'moment';
var moment = require('moment');
import React from 'react';

const DAYS_IN_WAR = 1567;
const DAY_WIDTH = 2;
const WAR_START_DATE = new Date(1914, 6, 28);
const YEARS_TO_DAYS = Object.freeze({1914: 57, 1915: 365, 1916: 366, 1917: 365, 1918: 315 });

class Timeline extends React.Component {
  render() {
    console.log("where am i?");
    console.log("Moment: ", moment().format('MMMM Do YYYY, h:mm:ss a'));
    const widthCss = { width: `${DAYS_IN_WAR * DAY_WIDTH}px`};
    return (
      <div className="timeline">
        {this.renderYears()}
      </div>
    );
  }

  renderYears() {
    const widthCss = { width: `${DAYS_IN_WAR * DAY_WIDTH}px`};
    //<div className="y1914" style=""

  }

  isLeapYear(year) {
    return new Date(year, 1, 29).getMonth() == 1
  }
}

Timeline.defaultProps = {
};

export default Timeline;
