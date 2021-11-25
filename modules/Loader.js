import React from 'react';
import { ActivityIndicator, View } from 'react-native';

module.exports.Loader1 = (props) => {
  return (
    <View>
      <ActivityIndicator size="large" color={props.color} />
    </View>
  )
}