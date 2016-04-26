import { CONTENT_LOADED } from 'actions/ActionCreators';

const initialState = {
  isLoading: true,
};

export default (state=initialState, action) => {
  switch (action.type) {
    case CONTENT_LOADED:
      return {
        ...action.content,
        isLoading: false,
      };
    default:
      return state;
  }
};
