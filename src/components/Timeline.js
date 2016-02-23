import React from 'react';

const DAYS_IN_WAR = 1567;

class Timeline extends React.Component {
  render() {
    const widthCss = { width: `${DAYS_IN_WAR * 2}px;`};
    return (
      <div className="timeline" style={widthCss}>
        <div className="notice">The timeline will go here!</div>
      </div>
    );
  }
}

Timeline.defaultProps = {
};

export default Timeline;
