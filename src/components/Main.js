require('normalize.css');
require('styles/App.css');

import Timeline from './Timeline';
import WeekContent from '../containers/WeekContent';

import config from 'config';

import Firebase from 'firebase';
import React from 'react';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    Firebase.initializeApp(config.firebaseConnection);

    this.initAuth();

    const contentRef = Firebase.database().ref('content');
    contentRef.on('value', snap => {
      this.props.actions.contentLoaded(snap.val());
    });
  }

  initAuth() {
    this.provider = new Firebase.auth.GoogleAuthProvider();
    Firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        console.log("auth token: ", token);
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      console.log("newly authenticated user: ", user);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.error("an auth error occured: ", error);
    });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("authenticated user is: ", user);
      } else {
        console.log("no authenticated user");
      }
    });
  }

  login() {
    console.log("attempting login");
    Firebase.auth().signInWithRedirect(this.provider);
  }

  logout() {
    firebase.auth().signOut().then(function() {
      console.log("logout successful");
    }, function(error) {
      console.error("unable to logout: ", error);
    });
  }

  render() {
    return (
      <div className="index">
        <button onClick={this.login}>Sign In</button>
        <button onClick={this.logout}>Sign Out</button>
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
