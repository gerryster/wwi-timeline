/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import TimelineModel from 'models/Timeline';

import _ from 'lodash';

describe('TimelineModel', () => {
  describe('.allWeeks() static method', () => {
    it('returns the correct start week', () => {
      const firstWeek = TimelineModel.allWeeks()[0];
      expect(firstWeek.startDate.format('YYYY-MM-DD')).to.equal('1914-07-28');
      expect(firstWeek.endDate.format('YYYY-MM-DD')).to.equal('1914-08-01');
    });

    it('week 2 is from Sunday 2014-08-02 to Saturday 2014-08-08', () => {
      const secondWeek = TimelineModel.allWeeks()[1];
      expect(secondWeek.startDate.format('YYYY-MM-DD')).to.equal('1914-08-02');
      expect(secondWeek.endDate.format('YYYY-MM-DD')).to.equal('1914-08-08');
    });

    it('returns the correct final week', () => {
      const lastWeek = _.last(TimelineModel.allWeeks());
      expect(lastWeek.startDate.format('YYYY-MM-DD')).to.equal('1918-11-10');
      expect(lastWeek.endDate.format('YYYY-MM-DD')).to.equal('1918-11-11');
    });

    it('returns the correct number of weeks', () => {
      expect(TimelineModel.allWeeks().length).to.equal(225);
    });
  });
});
