'use strict';

import WarMonth from './WarMonth';

import moment from 'frozen-moment';

const WarYear = function(startDate, endDate) {
  this.startDate = startDate.freeze();
  this.endDate = endDate.freeze();
};

WarYear.prototype.year = function() {
  return this.startDate.year();
}

WarYear.prototype.numDays = function() {
  // add one day to the end as this is inclusive:
  return this.endDate.add('1', 'days').diff(this.startDate, 'days');
}

WarYear.prototype.eachMonth = function(iterator) {
  let currentMonthStartDate = this.startDate;
  while(currentMonthStartDate.isBefore(this.endDate)) {
    const monthEndDate = this._determineMonthEnd(currentMonthStartDate);
    iterator.call(undefined, new WarMonth(currentMonthStartDate, monthEndDate));

    currentMonthStartDate = monthEndDate.add(1, 'day');
  }
}

WarYear.prototype._determineMonthEnd = function(month) {
  if(month.month() == this.endDate.month()) { // war end case
    return this.endDate;
  }
  return month.endOf('months').startOf('day');
}

export const Y1914 = new WarYear(moment('1914-07-28'), moment('1914-12-31'));
export const Y1915 = new WarYear(moment('1915-01-01'), moment('1915-12-31'));
export const Y1916 = new WarYear(moment('1916-01-01'), moment('1916-12-31'));
export const Y1917 = new WarYear(moment('1917-01-01'), moment('1917-12-31'));
export const Y1918 = new WarYear(moment('1918-01-01'), moment('1918-11-11'));

WarYear.allYearsInOrder = function() {
  return [Y1914, Y1915, Y1916, Y1917, Y1918];
}

export default WarYear;
