import React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import ANTIcon from 'react-native-vector-icons/AntDesign';
import FONTISTOIcon from 'react-native-vector-icons/Fontisto';
import { PoweredLogoImage } from './logo';
import {MainModal, AddNewThoughtModal} from './HeaderModals';
import {_signOut} from './Auth';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    flexDirection: 'row',
    // marginTop: 50,
    elevation: 5
  },
  searchBar: {
    marginLeft: '1%',
    marginRight: '1%',
    width: '82%'
  },
  statusBar: {
    // backgroundColor: 'red',
    alignItems: 'center'
  }
});

const SearchBar = function () {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search . . ."
    />
  )
}
// module.exports.SearchBar = SearchBar




module.exports.HeaderBar = function (props) {
  const [isMainModalVisible, setMainModalVisible] = useState(false);
  const [isAddNewThoughtModalVisible, setAddNewThoughtModalVisible] = useState(false);

  const toggleMainModal = () => {
    setMainModalVisible(!isMainModalVisible);
  }
  const toggleAddNewThoughtModal = () => {
    setAddNewThoughtModalVisible(!isAddNewThoughtModalVisible);
  }

  return (
    <View>
      <View style={styles.headerContainer} >
        <TouchableOpacity
          style={styles.PoweredLogoImage}
          activeOpacity={0.5}
          onPress={()=>{
            toggleMainModal()
          }}
        >
          <PoweredLogoImage />
        </TouchableOpacity>
        <SearchBar />

        <TouchableOpacity
          style={styles.AddNewThoughtBtn}
          activeOpacity={0.5}
          onPress={()=>{
            toggleAddNewThoughtModal()
          }}
        >
          <ANTIcon name="addfile" size={25} style={styles.MainModalIcon} />
        </TouchableOpacity>
      </View>
      <View
        style={styles.statusBar}
      >
        
        <Text><FONTISTOIcon name="radio-btn-active" color="green" /> active</Text>
      </View>
      <MainModal isMainModalVisible={isMainModalVisible} toggleMainModal={toggleMainModal} _signOut={props._signOut} updateState={props.updateState} />
      <AddNewThoughtModal isAddNewThoughtModalVisible={isAddNewThoughtModalVisible} toggleAddNewThoughtModal={toggleAddNewThoughtModal} />
    </View>
  )
}