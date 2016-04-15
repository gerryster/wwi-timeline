'use strict';

import Duration from './Duration';
import WarYear from 'models/WarYear';

import moment from 'frozen-moment';

const START_WEEK = new Duration(moment('1914-07-28'), moment('1914-08-01'));
const END_WEEK = new Duration(moment('1918-11-10'), moment('1918-11-11'));

export default class Timeline {
  static allYears() {
    return WarYear.allYearsInOrder();
  }

  static allWeeks() {
    const weeks = [];

    let currentWeek = START_WEEK;
    while(currentWeek.startDate.isBefore(END_WEEK.startDate)) {
      weeks.push(currentWeek);

      currentWeek = new Duration(currentWeek.endDate.add(1, 'day'),
                                 currentWeek.endDate.add(7, 'days'));
    }
    weeks.push(END_WEEK);

    return weeks;
  }
}
