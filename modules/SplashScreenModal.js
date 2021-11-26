import React, { PureComponent, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Modal from "react-native-modal";
import Markdown from 'react-native-markdown-display';
import { PrivacyPolicyData, TermsConditions } from './SplashScreenData'
import { getColorScheme } from './Utils';
import { SafeAreaView } from 'react-native-safe-area-context';

module.exports.PrivacyPolicyModal = (props) => {

  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    setColorScheme(getColorScheme());
  }, []);


  const styles = StyleSheet.create({
    PPModal: {
      backgroundColor: (colorScheme === "dark") ? "#000" : "#FFF"
    },
    PPModalText: {
      color: '#3A95FF',
      padding: '2%'
    }
  });

  return (
    <View style={styles.PPModal}>
      <Modal isVisible={props.isPPModalVisible} onBackButtonPress={props.togglePPModalVisibility} backgroundColor={styles.PPModal.backgroundColor}>
        <SafeAreaView>
          <ScrollView style={styles.PPModalText}>
            <Markdown>
              {PrivacyPolicyData()}
            </Markdown>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  ) 
}

module.exports.TACModal = (props) => {

  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    setColorScheme(getColorScheme());
  }, []);


  const styles = StyleSheet.create({
    TACModal: {
      backgroundColor: (colorScheme === "dark") ? "#000" : "#FFF"
    },
    TACModalText: {
      color: '#3A95FF',
      padding: '2%'
    }
  });

  return (
    <View style={styles.TACModal}>
      <Modal isVisible={props.isTACModalVisible} onBackButtonPress={props.toggleTACModalVisibility} backgroundColor={styles.TACModal.backgroundColor}>
        <SafeAreaView>
          <ScrollView style={styles.TACModalText}>
            <Markdown>
              {TermsConditions()}
            </Markdown>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  ) 
}