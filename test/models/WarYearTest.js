/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import WarYear from 'models/WarYear';

describe('WarYear', () => {
  describe('.allYearsInOrder()', () => {
    it('returns years 1914,1915,1916,1917, and 1918', () => {
      const foundYears = WarYear.allYearsInOrder().map((year) => year.year());
      expect(foundYears).to.eql([1914,1915,1916,1917,1918]);
    });
  });
});
