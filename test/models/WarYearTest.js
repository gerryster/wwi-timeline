/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import WarYear, {Y1914, Y1916} from 'models/WarYear';

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
});
