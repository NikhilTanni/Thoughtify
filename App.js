import React, { Component, useEffect, useState } from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {_googleSignInConfigure, _signIn, _signOut, _isSignedIn} from './modules/Auth';
import { StatusbarDefault } from './modules/StatusBarMod';
import { getColorScheme, colorSchemeListener } from './modules/Utils';
import { MainLoader } from './modules/Loader';
import {WelcomeScreen} from './modules/SplashScreen';
import {DashboardRoot} from './modules/Dashboard'






const App = () => {

  const [loggedIn, setloggedIn] = useState(false);
  const [loginCheckFlag, setloginCheckFlag] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const [colorScheme, setcolorScheme] = useState(getColorScheme());


  const modeWrapper = async () => {
    const isSgIn = await _isSignedIn();
    setloginCheckFlag(true);
    if (isSgIn) {
      setloggedIn(true);
    } else {
      setloggedIn(false);
      setuserInfo([])
    }
  }

  const loadPage = (mode) => {
    if (mode === "default") {
      return (
        <MainLoader BGColor={(colorScheme === "dark") ? "#3A95FF" : "#3A95FF"} />
      )
    } else if (mode === "welcome") {
      return (
        <WelcomeScreen _signIn={_signIn} _signOut={_signOut} setloggedIn={setloggedIn} loginStatus={loggedIn} />
      );
    } else if (mode === "dashboard") {
      return (
        <DashboardRoot _signOut={_signOut} setloggedIn={setloggedIn} />
      );
    }
  }


  useEffect(() => {
    setTimeout(() => {
      _googleSignInConfigure();
      modeWrapper();
      // colorSchemeListener(this.setState);
    }, 800);
  }, []);
  
  let screenMode = "default";
  if (loginCheckFlag && loggedIn) {
    screenMode = "dashboard"
  } else if (loginCheckFlag) {
    screenMode = "welcome"
  }

  return (
    <View>
      <StatusbarDefault SBContentColor={(colorScheme === "dark") ? "dark-content" : "light-content"} SBColor={(colorScheme === "dark") ? "#fcf951" : "#3A95FF"} />
      {loadPage(screenMode)}
    </View>
  );
  
}
export default App;

class App2bak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loginCheckFlag: false,
      userInfo: [],
      colorScheme: getColorScheme()
    }
  }
  

  componentDidMount() {
    // setTimeout(() => {
    //   _googleSignInConfigure();
    //   this.modeWrapper();
    //   colorSchemeListener(this.setState);
    // }, 500);
  }

  componentDidUpdate() {
  }

  render() {
    let screenMode = "default";
    if (this.state.loginCheckFlag && this.state.loggedIn) {
      screenMode = "dashboard"
    } else if (this.state.loginCheckFlag) {
      screenMode = "welcome"
    }
    return (
      <View>
        <StatusbarDefault SBContentColor={(this.state.colorScheme === "dark") ? "dark-content" : "light-content"} SBColor={(this.state.colorScheme === "dark") ? "#fcf951" : "#3A95FF"} />
        {this.loadPage(screenMode)}
      </View>
    )
  }

  async modeWrapper() {
    // const isSgIn = await _isSignedIn();
    // if (isSgIn) {
    //   this.updateState({
    //     loggedIn: true,
    //     loginCheckFlag: true
    //   });
    // } else {
    //   this.updateState({
    //     loggedIn: false,
    //     userInfo: [],
    //     loginCheckFlag: true
    //   });
    // }
  }

  updateState = (data) => {
    this.setState(data);
  }

  loadPage = (mode) => {
    // if (mode === "default") {
    //   return (
    //     <MainLoader BGColor={(this.state.colorScheme === "dark") ? "#3A95FF" : "#fcf951"} />
    //   )
    // } else if (mode === "welcome") {
    //   return (
    //     <WelcomeScreen _signIn={_signIn} _signOut={_signOut} updateState={this.updateState} loginStatus={this.state.loggedIn} />
    //   );
    // } else if (mode === "dashboard") {
    //   return (
    //     <DashboardRoot _signOut={_signOut} updateState={this.updateState} />
    //   );
    // }
  }

}
