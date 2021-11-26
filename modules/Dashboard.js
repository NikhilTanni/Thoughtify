import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getColorScheme } from './Utils';
import {HeaderBar} from './Header';
import {ThoughtsListView} from './DashboardThoughts';

module.exports.DashboardRoot = function (props) {

  const [colorScheme, setColorScheme] = useState(getColorScheme());
  useEffect(() => {
    //
    }, []);

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      alignSelf: 'stretch',
      backgroundColor: (colorScheme === "dark") ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)",
      // justifyContent: 'center',
      // alignItems: 'center'
    }
  });


  return (
    <View style={styles.container} >
      <HeaderBar _signOut={_signOut} setloggedIn={props.setloggedIn}  />
      <ThoughtsListView />
    </View>
  )
}
