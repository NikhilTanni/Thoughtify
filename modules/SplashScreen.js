import React, { useEffect, useState } from 'react';
const { GoogleSigninButton } = require("@react-native-google-signin/google-signin");
const { View, Text, StyleSheet } = require("react-native");
import { getColorScheme } from './Utils';
import { PoweredLogoImage } from './logo';
import { PrivacyPolicyModal, TACModal } from './SplashScreenModal';



module.exports.WelcomeScreen = function (props) {

  const [isPPModalVisible, setPPModalVisibility] = useState(false);
  const togglePPModalVisibility = () => {
    setPPModalVisibility(!isPPModalVisible);
  }

  const [isTACModalVisible, setTACModalVisibility] = useState(false);
  const toggleTACModalVisibility = () => {
    setTACModalVisibility(!isTACModalVisible);
  }

  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    setColorScheme(getColorScheme());
  }, []);

  



  const WSStyles = StyleSheet.create({
    container: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: (colorScheme === "dark") ? "#000" : "#FFF"
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      color: (colorScheme === "dark") ? "#FCF951" : "#3A95FF"
    },
    poweredByText: {
      marginTop: '5%',
      fontSize: 12,
      color: (colorScheme === "dark") ? "#C0C0C0" : "#808080"
    },
    TACDisplayText: {
      fontSize: 9,
      marginTop: '10%',
      textAlign: 'center',
      color: (colorScheme === "dark") ? "#C0C0C0" : "#808080"
    },
    gSigninBtn: {
      marginTop: '20%'
    },
    termsText: {
      fontWeight: 'bold',
      color: (colorScheme === "dark") ? "#fcf951" : "#3A95FF"
    }
  });

  
  return (
    <View style={WSStyles.container}>
      <Text style={WSStyles.title}>
        Thoughtify
      </Text>
      <Text style={WSStyles.poweredByText}>
        Powered by
      </Text>
      <PoweredLogoImage />
      <GoogleSigninButton
        style={WSStyles.gSigninBtn}
        // color={(colorScheme === "dark") ? GoogleSigninButton.Color.Dark : GoogleSigninButton.Color.Dark}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          props._signIn(props.setloggedIn);
        }}
      />
      <Text style={WSStyles.TACDisplayText}>
        By continuing you agree to 
        <Text
          style={WSStyles.termsText}
          onPress={() => {
            togglePPModalVisibility();
          }}
        > Privacy Policy </Text>
        and
        <Text
          style={WSStyles.termsText}
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

