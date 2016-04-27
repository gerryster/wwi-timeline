require('styles/ContentDisplay.css');

import React, { PropTypes } from 'react';

import _ from 'lodash';

const propTypes = {
  duration: PropTypes.object,
  content: PropTypes.object,
};

const ContentDisplay = ({ duration, content }) => {
  let header = <h2>Select A Week</h2>;
  if(duration) {
    header = <h2>{duration.startDate.format('M/D/YYYY')} to {duration.endDate.format('M/D/YYYY')}</h2>;
  }

  return (
    <div className="content-display">
      {header}
      {_.map(content, (value, key) => <code key={key}>{key}: {JSON.stringify(value, null, 2)}</code>)}
    </div>
  );
}

ContentDisplay.propTypes = propTypes;

export default ContentDisplay;
