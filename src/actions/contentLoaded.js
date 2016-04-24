import { CONTENT_LOADED } from 'actions/ActionCreators';

module.exports = function(parameter) {
  return { type: CONTENT_LOADED, parameter };
};
