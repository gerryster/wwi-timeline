import { USER_CHANGED } from 'actions/ActionCreators';

export default (state=null, action) => {
  switch (action.type) {
    case USER_CHANGED:
      return action.user;
    default:
      return state;
  }
};
