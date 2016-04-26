require('styles/WeekContent.css');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

const propTypes = {
  currentWeek: PropTypes.object,
  content: PropTypes.object,
};

const WeekContent = ({ currentWeek, content }) => {
  let header = <h2>Select A Week</h2>;
  if(currentWeek) {
    header = <h2>{currentWeek.startDate.format('M/D/YYYY')} to {currentWeek.endDate.format('M/D/YYYY')}</h2>;
  }

  return (
    <div className="week-content">
      {header}
      {_.map(content, (value, key) => <code key={key}>{key}: {JSON.stringify(value, null, 2)}</code>)}
    </div>
  );
}

WeekContent.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    currentWeek: state.currentWeek,
    content: state.content,
  }
}

export default connect(mapStateToProps)(WeekContent);
