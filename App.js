import React, { Component } from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {_googleSignInConfigure, _signIn, _signOut, _isSignedIn} from './modules/Auth';
import {WelcomeScreen} from './modules/SplashScreen';
import {DashboardRoot} from './modules/Dashboard'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userInfo: []
    }
  }
  

  componentDidMount() {
    _googleSignInConfigure();
  }

  componentDidUpdate() {
  }

  render() {
    let screenMode = "welcome";
    if (this.state.loggedIn) {
      screenMode = "dashboard"
    }
    return (
      <View>
        <WelcomeScreen _signIn={_signIn} _signOut={_signOut} updateState={this.updateState} loginStatus={this.state.loggedIn} />
      </View>
    )
  }

  async modeWrapper() {
    let mode = "welcome";
    const isSgIn = await _isSignedIn();
    if (isSgIn) {
      mode = "dashboard";
      this.updateState({
        loggedIn: true
      });
    } else {
      this.updateState({
        loggedIn: false,
        userInfo: []
      });
      mode = "welcome";
    }
    return mode;
  }

  updateState = (data) => {
    this.setState(data);
  }

  loadPage = (mode) => {
    if (mode === "welcome") {
      return (
        <WelcomeScreen _signIn={_signIn} _signOut={_signOut} updateState={this.updateState} loginStatus={this.state.loggedIn} />
      );
    } else if (mode === "dashboard") {
      return (
        <DashboardRoot _signOut={_signOut} updateState={this.updateState} />
      );
    }
  }

}
