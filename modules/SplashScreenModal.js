import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Modal from "react-native-modal";
// import Markdown from 'react-native-markdown-renderer';
import { PrivacyPolicyData, TermsConditions } from './SplashScreenData'
import { SafeAreaView } from 'react-native-safe-area-context';

module.exports.PrivacyPolicyModal = (props) => {
  const styles = StyleSheet.create({
    PPModal: {
      backgroundColor: '#FCF951'
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
            {/* <Markdown>
              {PrivacyPolicyData()}
            </Markdown> */}
            <Text>PP</Text>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  ) 
}

module.exports.TACModal = (props) => {
  const styles = StyleSheet.create({
    TACModal: {
      backgroundColor: '#FCF951'
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
            {/* <Markdown>
              {TermsConditions()}
            </Markdown> */}
            <Text>TAC</Text>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  ) 
}