'use strict';

export default class Duration {
  constructor(startDate, endDate) {
    this.startDate = startDate.freeze();
    this.endDate = endDate.freeze();
  }

  year() {
    return this.startDate.year();
  }

  month() {
    return this.startDate.month() + 1 // convert to one based months
  }

  numDays() {
    // add one day to the end as this is inclusive:
    return this.endDate.add('1', 'days').diff(this.startDate, 'days');
  }
}
