/*eslint-env node, mocha */
/*global expect */
'use strict';

import Duration from 'models/Duration';

import moment from 'frozen-moment';

describe('Duration', () => {
  describe('.overlapsWith', () => {
    const duration = new Duration(moment('1914-07-28'), moment('1914-08-01'));

    it('returns false when no overlap', () => {
      expect(duration.overlapsWith('1914-01-01', '1914-01-02')).toBeFalsy();
    });

    it(`returns true when
            -----
                --`, () => {
      expect(duration.overlapsWith('1914-08-01', '1914-08-02')).toBeTruthy();
    });

    it(`returns true when
            -----
             --`, () => {
      expect(duration.overlapsWith('1914-07-29', '1914-07-30')).toBeTruthy();
    });

    it(`returns true when
            -----
            -----`, () => {
      expect(duration.overlapsWith('1914-07-28', '1914-08-01')).toBeTruthy();
    });

    it(`returns true when
            -----
           ------`, () => {
      expect(duration.overlapsWith('1914-07-27', '1914-08-01')).toBeTruthy();
    });

    it(`returns true when
            -----
           -------`, () => {
      expect(duration.overlapsWith('1914-07-27', '1914-08-02')).toBeTruthy();
    });
  });
});
