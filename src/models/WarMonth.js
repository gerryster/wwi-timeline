'use strict';

const WarMonth = function(startDate, endDate) {
  this.startDate = startDate.freeze();
  this.endDate = endDate.freeze();
};

WarMonth.prototype.year = function() {
  return this.startDate.year();
}

WarMonth.prototype.month = function() {
  return this.startDate.month();
}

WarMonth.prototype.numDays = function() {
  // add one day to the end as this is inclusive:
  return this.endDate.add('1', 'days').diff(this.startDate, 'days');
}

export default WarMonth;
