import { connect } from 'react-redux'
import Week from 'components/Timeline/Week'

export const mapStateToProps = (state) => {
  return { currentWeek: state.currentWeek }
};

export default connect(mapStateToProps)(Week)
