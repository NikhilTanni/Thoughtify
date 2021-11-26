import React from 'react';
import { Appearance, addChangeListener, ToastAndroid } from 'react-native';

const getColorScheme = () => {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme;
}
module.exports.getColorScheme = getColorScheme;

module.exports.colorSchemeListener = (handler) => {
  Appearance.addChangeListener(() => {
    handler({
      colorScheme: getColorScheme()
    })
  })
}

module.exports.showToastMessage = (message) => {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM
  );
}

module.exports.initMainComponent = (props) => {
  //
}