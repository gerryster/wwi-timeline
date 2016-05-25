/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Duration from 'models/Duration';
import {mapStateToProps} from 'containers/WeekContent';

import moment from 'frozen-moment';

describe('WeekContent', () => {
  describe('mapStateToProps', () => {
    it('filters content to the currentWeek', () => {
      const state = {
        content: {
          week1: { "startDate": "1914-07-28", "endDate": "1914-08-01", "format": "video" },
          week2: { "startDate": "1914-08-02", "endDate": "1914-08-08", "format": "video" },
          week3: { "startDate": "1914-08-09", "endDate": "1914-08-15", "format": "video" },
        },
        currentWeek: new Duration(moment('1914-07-28'), moment('1914-08-01')),
      }

      const expectedProps = {currentWeek: state.currentWeek, content: state.content.week1 };
      expect(mapStateToProps(state)).toEqual(expectedProps);
    });
  });
});
