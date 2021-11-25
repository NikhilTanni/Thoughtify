import React, { useEffect, useState } from 'react';
const { GoogleSigninButton } = require("@react-native-google-signin/google-signin");
const { View, Text, StyleSheet, Linking } = require("react-native");
import { PoweredLogoImage } from './logo';
import { PrivacyPolicyModal, TACModal } from './SplashScreenModal';



module.exports.WelcomeScreen = function (props) {
  const WSStyle = StyleSheet.create({
    termsText: {
      fontWeight: 'bold'
    }
  });

  const [isPPModalVisible, setPPModalVisibility] = useState(false);
  const togglePPModalVisibility = () => {
    setPPModalVisibility(!isPPModalVisible);
  }

  const [isTACModalVisible, setTACModalVisibility] = useState(false);
  const toggleTACModalVisibility = () => {
    setTACModalVisibility(!isTACModalVisible);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Thoughtify
      </Text>
      <Text style={styles.poweredByText}>
        Powered by
      </Text>
      <PoweredLogoImage />
      <GoogleSigninButton
        style={styles.gSigninBtn}
        onPress={() => {
          props._signIn(props.updateState);
        }}
      />
      <Text style={{fontSize: 9, marginTop: '10%', textAlign: 'center'}}>
        By continuing you agree to 
        <Text
          style={WSStyle.termsText}
          onPress={() => {
            togglePPModalVisibility();
          }}
        > Privacy Policy </Text>
        and
        <Text
          style={WSStyle.termsText}
          onPress={() => {
            toggleTACModalVisibility();
          }}
        > Terms and conditions </Text>
      </Text>
      <PrivacyPolicyModal isPPModalVisible={isPPModalVisible} togglePPModalVisibility={togglePPModalVisibility} />
      <TACModal isTACModalVisible={isTACModalVisible} toggleTACModalVisibility={toggleTACModalVisibility} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#3A95FF',
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  poweredByText: {
    marginTop: '5%',
    fontSize: 12
  },
  gSigninBtn: {
    marginTop: '20%'
  }
});