import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
  } from '@react-native-google-signin/google-signin';
import googleJsonData from './google-services.json';

_signIn = async (updateState) => {
  try {
    await GoogleSignin.hasPlayServices();
    const {accessToken, idToken} = await GoogleSignin.signIn();
    updateState({loggedIn: true});
    const credential = auth.GoogleAuthProvider.credential(
      idToken,
      accessToken,
    );
    await auth().signInWithCredential(credential);
    alert("You are now signed in!");
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      alert("Signin cancelled!");
    } else if (error.code === statusCodes.IN_PROGRESS) {
      alert("Signin in-progress");
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      alert("Play services not available / outdated. Contact the admin");
    } else {
      if (error.code == 7) {
        alert("you must connect to the internet for signing in");
      } else {
        alert("some other err");
      }
    }
  }
}
module.exports._signIn = _signIn;

_isSignedIn = async () => {
  const isSgIn = await GoogleSignin.isSignedIn();
  return isSgIn;
}
module.exports._isSignedIn = _isSignedIn;

_signOut = async (updateState2) => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    updateState2({loggedIn: false});
    updateState2({userInfo: []});
    alert("signout successful!");
  } catch (error) {
    alert("error while signing out. Contact the admin");
    console.log("----------------------------------");
    console.log(error);
  }
}
module.exports._signOut = _signOut;

_googleSignInConfigure = async (mode="mount") => {
  GoogleSignin.configure({
    scopes: ['email', 'profile'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: googleJsonData.client[0].oauth_client[1].client_id, // client ID of type WEB for your server (needed to verify user ID and offline access)
    // androidClientId: 
    offlineAccess: true // if you want to access Google API on behalf of the user FROM YOUR SERVER
  });
  if (mode === "mount") {
    this._isSignedIn();
  }
}
module.exports._googleSignInConfigure = _googleSignInConfigure;