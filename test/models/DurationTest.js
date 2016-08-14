/*eslint-env node, mocha */
/*global expect */
'use strict';

import Duration from 'models/Duration';

import moment from 'frozen-moment';

describe('Duration', () => {
  const duration = new Duration(moment('1914-07-28'), moment('1914-08-01'));

  describe('.overlapsWith', () => {
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

  describe('.isSame', () => {
    const equalDuration = new Duration(moment('1914-07-28'), moment('1914-08-01'));

    it('returns true for identical dates', () => {
      expect(duration.isSame(equalDuration)).toBeTruthy();
    });

    it('is transative', () => {
      expect(equalDuration.isSame(duration)).toBeTruthy();
    });

    it('is false when the start date is different but the end date is the same', () => {
      const differentEnd = new Duration(moment('1914-07-28'), moment('1914-07-31'));
      expect(duration.isSame(differentEnd)).toBeFalsy();
    });

    it('is false when the start date is identical but the end date is different', () => {
      const differentStart = new Duration(moment('1914-07-27'), moment('1914-08-01'));
      expect(duration.isSame(differentStart)).toBeFalsy();
    });
  });
});
