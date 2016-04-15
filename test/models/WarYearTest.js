/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import WarYear, {Y1914, Y1916, Y1918} from 'models/WarYear';

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
      const foundMonths = Y1914.months().map((month) => (
        [month.startDate.format('YYYY-MM-DD'), month.endDate.format('YYYY-MM-DD')]
      ));
      expect(expectedMonths).to.eql(foundMonths);
    });

    it('finds the correct months for 1918', () => {
      const expectedMonths = [
        ['1918-01-01', '1918-01-31'],
        ['1918-02-01', '1918-02-28'],
        ['1918-03-01', '1918-03-31'],
        ['1918-04-01', '1918-04-30'],
        ['1918-05-01', '1918-05-31'],
        ['1918-06-01', '1918-06-30'],
        ['1918-07-01', '1918-07-31'],
        ['1918-08-01', '1918-08-31'],
        ['1918-09-01', '1918-09-30'],
        ['1918-10-01', '1918-10-31'],
        ['1918-11-01', '1918-11-11'],
      ];
      const foundMonths = Y1918.months().map((month) => (
        [month.startDate.format('YYYY-MM-DD'), month.endDate.format('YYYY-MM-DD')]
      ));
      expect(expectedMonths).to.eql(foundMonths);
    });
  });
});
