/* Very impure component which displays the current user and sets up Firebase authentication.
*/
require('styles/CurrentUser.css');

import { userChangedTo } from 'actions/ActionCreators';

import Firebase from 'firebase';
import React from 'react';

class CurrentUser extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.state = {userMenuIsOpen: false};
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

  signIn() {
    console.log("attempting signIn");
    Firebase.auth().signInWithRedirect(this.provider);
  }

  signOut() {
    Firebase.auth().signOut().then(function() {
      console.log("signOut successful");
    }, function(error) {
      console.error("unable to signOut: ", error);
    });
  }

  render() {
    const {user} = this.props;
    console.log("this.props.user: ", user);
    return (
      <div className="current-user">
        {user ? this.renderAuthenticated(user) : this.renderNoUser()}
      </div>
    );
  }

  renderAuthenticated(user) {
    return (
      <div>
        { /* TODO: improve the closing of the user menu to support clicking outside of
          the modal and the escape key. */ }
        <img height="32" width="32" src={user.photoURL}
             onClick={() => this.setState({userMenuIsOpen: !this.state.userMenuIsOpen})}/>
        {this.state.userMenuIsOpen && this.renderUserMenu(user)}
      </div>
    );
  }

  renderUserMenu(user) {
    return <button onClick={this.signOut}>Sign Out of WWI Timeline</button>
  }

  renderNoUser() {
    return <button onClick={this.signIn}>Sign In</button>;
  }
}

export default CurrentUser;
