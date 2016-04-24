// See http://redux.js.org/docs/recipes/ReducingBoilerplate.html
export const CONTENT_LOADED = 'CONTENT_LOADED';
export const SET_CURRENT_WEEK = 'SET_CURRENT_WEEK';

export function contentLoaded(weekDuration) {
  return {
    type: SET_CURRENT_WEEK,
    weekDuration,
  }
}

export function contentLoaded(content) {
  return {
    type: CONTENT_LOADED,
    content,
  }
}
