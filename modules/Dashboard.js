import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { StatusbarDefault } from './StatusBarMod';
import {HeaderBar} from './Header';
import {ThoughtsListView} from './DashboardThoughts';

module.exports.DashboardRoot = function (props) {
  return (
    <View style={styles.container} >
      <StatusbarDefault />
      <HeaderBar _signOut={_signOut} updateState={props.updateState}  />
      <ThoughtsListView />
    </View>
  )
}

const MtFlatList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignSelf: 'stretch',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  statusbar: {
    backgroundColor: '#fcf951'
  }
});
