import { CONTENT_LOADED } from 'actions/ActionCreators';

module.exports = function(content) {
  return { type: CONTENT_LOADED, content };
};
