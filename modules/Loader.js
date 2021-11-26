import React , { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import { StatusbarDefault } from './StatusBarMod';
import { PoweredLogoImage, SplashLogoImage } from './logo';

module.exports.Loader1 = (props) => {
  return (
    <View>
      <ActivityIndicator size="large" color={props.color} />
    </View>
  )
}

module.exports.MainLoader = (props) => {
  const MLStyles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  const [MLVisible, setMLVisible] = useState(true)
  return (
    <View>
      <Modal isVisible={MLVisible} backdropColor={props.BGColor} backdropOpacity={0.99} style={MLStyles.container} animationIn="zoomIn" animationOut="fadeOut" >
        <StatusbarDefault SBContentColor="light-content" SBColor="#3A95FF" />
        <SplashLogoImage />
        <module.exports.Loader1 color="#FCF951" />
      </Modal>
    </View>
  )
}