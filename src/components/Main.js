require('normalize.css');
require('styles/App.css');

import Timeline from './Timeline';
import WeekContent from '../containers/WeekContent';

import config from 'config';

import Firebase from 'firebase';
import React from 'react';

class AppComponent extends React.Component {
  componentDidMount() {
    Firebase.initializeApp(config.firebaseConnection);

    const rootRef = Firebase.database().ref();
    console.log('rootRef: ', rootRef);
    rootRef.on('value', snap => {
      console.log("in fireboase ON with snap: ", snap.val);
      this.props.actions.contentLoaded(snap.val);
    });
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
