require('styles/WeekContent.css');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  currentWeek: PropTypes.object,
};

const WeekContent = ({ currentWeek }) => {
  let header = <h2>Select A Week</h2>;
  if(currentWeek) {
    header = <h2>{currentWeek.startDate.format('M/D/YYYY')} to {currentWeek.endDate.format('M/D/YYYY')}</h2>;
  }

  return (
    <div className="week-content">
      {header}
    </div>
  );
}

WeekContent.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    currentWeek: state.currentWeek,
  }
}

export default connect(mapStateToProps)(WeekContent);
