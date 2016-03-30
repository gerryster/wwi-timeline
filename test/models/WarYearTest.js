/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import WarYear, {Y1914, Y1916} from 'models/WarYear';

import moment from 'frozen-moment';

describe('WarYear', () => {
  describe('.allYearsInOrder() static method', () => {
    it('returns years 1914,1915,1916,1917, and 1918', () => {
      const foundYears = WarYear.allYearsInOrder().map((year) => year.year());
      expect(foundYears).to.eql([1914,1915,1916,1917,1918]);
    });
  });

  describe('.numDays()', () => {
    it('returns 157 for 1914', () => {
      expect(Y1914.numDays()).to.equal(157);
    });

    it('returns 366 for 1916', () => {
      expect(Y1916.numDays()).to.equal(366);
    });
  });

  describe('.eachMonth()', () => {
    it('finds the correct months for 1914', () => {
      const expectedMonths = [
        ['1914-07-28', '1914-07-31'],
        ['1914-08-01', '1914-08-31'],
        ['1914-09-01', '1914-09-30'],
        ['1914-10-01', '1914-10-31'],
        ['1914-11-01', '1914-11-30'],
        ['1914-12-01', '1914-12-31'],
      ];
      const foundMonths = [];
      Y1914.eachMonth((month) => (
        foundMonths.push([month.startDate.format('YYYY-MM-DD'), month.endDate.format('YYYY-MM-DD')])
      ));
      expect(expectedMonths).to.eql(foundMonths);
    });
  });
});
