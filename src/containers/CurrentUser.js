import CurrentUserComponent from 'components/CurrentUser'

import { connect } from 'react-redux'

export const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(CurrentUserComponent)
