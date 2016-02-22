require('normalize.css');
require('styles/App.css');

import Timeline from './Timeline';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>WWI Interactive Timeline</h1>
        <Timeline />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
