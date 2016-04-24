require('normalize.css');
require('styles/App.css');

import Timeline from './Timeline';
import WeekContent from './WeekContent';

import Firebase from 'firebase';
import React from 'react';

class AppComponent extends React.Component {
  componentDidMount() {
    const contentRef = new Firebase('https://wwi-timeline.firebaseio.com/content');
    contentRef.on('value', snap => console.log(snap.val()));
  }
  render() {
    return (
      <div className="index">
        <h1>WWI Interactive Timeline</h1>
        <Timeline />
        <WeekContent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
