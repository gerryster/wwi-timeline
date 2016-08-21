require('normalize.css');
require('styles/App.css');

import CurrentUser from './../containers/CurrentUser';
import Timeline from './Timeline';
import WeekContent from '../containers/WeekContent';

import config from 'config';

import Firebase from 'firebase';
import React from 'react';

class AppComponent extends React.Component {
  componentWillMount() {
    Firebase.initializeApp(config.firebaseConnection);

    const contentRef = Firebase.database().ref('content');
    contentRef.on('value', snap => {
      this.props.actions.contentLoaded(snap.val());
    });
  }
  render() {
    return (
      <div className="index">
        <CurrentUser />
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
