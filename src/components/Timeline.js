require('styles/Timeline.css');

import React from 'react';

const DAYS_IN_WAR = 1567;
const DAY_WIDTH = 2;

class Timeline extends React.Component {
  render() {
    const widthCss = { width: `${DAYS_IN_WAR * DAY_WIDTH}px`};
    return (
      <div className="timeline">
        <div className="notice" style={widthCss}>The timeline will go here!</div>
      </div>
    );
  }
}

Timeline.defaultProps = {
};

export default Timeline;
