import { connect } from 'react-redux'
import ContentDisplay from 'components/ContentDisplay'

export const mapStateToProps = (state) => {
  return {
    duration: state.currentWeek,
    content: state.content,
  }
}

export default connect(mapStateToProps)(ContentDisplay)
