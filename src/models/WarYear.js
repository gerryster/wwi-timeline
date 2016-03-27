'use strict';

var moment = require('moment');

const WarYear = function(startDate, endDate) {
  this.startDate = startDate;
  this.endDate = endDate;
};

WarYear.prototype.year = function() {
  return this.startDate.year();
}

WarYear.allYearsInOrder = function() {
  return [
    new WarYear(moment('1914-06-28'), moment('1914-12-31')),
    new WarYear(moment('1915-01-01'), moment('1915-12-31')),
    new WarYear(moment('1916-01-01'), moment('1916-12-31')),
    new WarYear(moment('1917-01-01'), moment('1917-12-31')),
    new WarYear(moment('1918-01-01'), moment('1918-11-11')),
  ];
}

export default WarYear;
