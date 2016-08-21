/* Very impure component which displays the current user and sets up Firebase authentication.
*/
require('styles/CurrentUser.css');

import { userChangedTo } from 'actions/ActionCreators';

import Firebase from 'firebase';
import React from 'react';

class CurrentUser extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    const {dispatch} = this.props;
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

    Firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("authenticated user is: ", user);
        dispatch(userChangedTo(user));
      } else {
        console.log("no authenticated user");
        dispatch(userChangedTo(null));
      }
    });
  }

  login() {
    console.log("attempting login");
    Firebase.auth().signInWithRedirect(this.provider);
  }

  logout() {
    Firebase.auth().signOut().then(function() {
      console.log("logout successful");
    }, function(error) {
      console.error("unable to logout: ", error);
    });
  }

  render() {
    const {user} = this.props;
    console.log("this.props.user: ", user);
    return (
      <div className="current-user">
        <button onClick={this.login}>Sign In</button>
        <button onClick={this.logout}>Sign Out</button>
      </div>
    );
  }
}

export default CurrentUser;
