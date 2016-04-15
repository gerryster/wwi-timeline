'use strict';

import Duration from './Duration';

import moment from 'frozen-moment';

export default class WarYear extends Duration {
  months() {
    const months = [];

    let currentMonthStartDate = this.startDate;
    while(currentMonthStartDate.isBefore(this.endDate)) {
      const monthEndDate = this._determineMonthEnd(currentMonthStartDate);
      months.push(new Duration(currentMonthStartDate, monthEndDate));

      currentMonthStartDate = monthEndDate.add(1, 'day');
    }

    return months;
  }

  _determineMonthEnd(month) {
    if(month.month() == this.endDate.month()) { // war end case
      return this.endDate;
    }
    return month.endOf('months').startOf('day');
  }

  static allYearsInOrder() {
    return [Y1914, Y1915, Y1916, Y1917, Y1918];
  }
}

export const Y1914 = new WarYear(moment('1914-07-28'), moment('1914-12-31'));
export const Y1915 = new WarYear(moment('1915-01-01'), moment('1915-12-31'));
export const Y1916 = new WarYear(moment('1916-01-01'), moment('1916-12-31'));
export const Y1917 = new WarYear(moment('1917-01-01'), moment('1917-12-31'));
export const Y1918 = new WarYear(moment('1918-01-01'), moment('1918-11-11'));
