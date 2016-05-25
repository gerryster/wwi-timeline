import { connect } from 'react-redux'
import ContentDisplay from 'components/ContentDisplay'

import _ from 'lodash';

export const mapStateToProps = (state) => {
  return {
    duration: state.currentWeek,
    content: _(state.content).values().filter((content)=>{
      return state.currentWeek.overlapsWith(content.startDate, content.endDate);
    }).value(),
  };
};

export default connect(mapStateToProps)(ContentDisplay)
