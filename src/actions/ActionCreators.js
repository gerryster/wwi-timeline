// See http://redux.js.org/docs/recipes/ReducingBoilerplate.html
export const SET_CURRENT_WEEK = 'SET_CURRENT_WEEK';

export function setCurrentWeek(weekDuration) {
  return {
    type: SET_CURRENT_WEEK,
    weekDuration,
  }
}
