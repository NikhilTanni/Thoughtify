import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
  } from '@react-native-google-signin/google-signin';
import googleJsonData from './google-services.json';
import { showToastMessage } from './Utils';

_signIn = async (setloggedIn) => {
  try {
    await GoogleSignin.hasPlayServices();
    const {accessToken, idToken} = await GoogleSignin.signIn();
    setloggedIn(true);
    const credential = auth.GoogleAuthProvider.credential(
      idToken,
      accessToken,
    );
    await auth().signInWithCredential(credential);
    showToastMessage("Login Successful!")
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      showToastMessage("Signin cancelled!");
    } else if (error.code === statusCodes.IN_PROGRESS) {
      showToastMessage("Signin in-progress");
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      showToastMessage("Play services not available / outdated. Contact the admin");
    } else {
      if (error.code == 7) {
        showToastMessage("you must connect to the internet for signing in");
      } else {
        showToastMessage(`Error logging-in. Code:${error.code}. Contact admin for support.`);
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

_signOut = async (setloggedIn) => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    setloggedIn(false);
    showToastMessage("signout successful!");
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
    _isSignedIn();
  }
}
module.exports._googleSignInConfigure = _googleSignInConfigure;