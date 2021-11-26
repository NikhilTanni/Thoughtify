import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import ANTIcon from 'react-native-vector-icons/AntDesign';
import FONTISTOIcon from 'react-native-vector-icons/Fontisto';
import { PoweredLogoImage } from './logo';
import { getColorScheme } from './Utils';
import {MainModal, AddNewThoughtModal} from './HeaderModals';
import {_signOut} from './Auth';


const SearchBar = function () {
  const [colorScheme, setColorScheme] = useState(getColorScheme());
  useEffect(() => {
    //
  }, []);


  const SBstyles = StyleSheet.create({
    searchBar: {
      marginLeft: '1%',
      marginRight: '1%',
      width: '82%',
      padding: '2%',
      borderLeftWidth: 1,
      elevation: 0,
      borderLeftColor: (colorScheme === "dark") ? "#3A95FF" : "#FCF951",
      color: (colorScheme === "dark") ? "#3A95FF" : "#FCF951"
    }
  });


  return (
    <TextInput
      style={SBstyles.searchBar}
      placeholder="Search . . ."
      placeholderTextColor={(colorScheme === "dark") ? "#3A95FF" : "#FCF951"}
    />
  )
}


module.exports.HeaderBar = function (props) {
  const [isMainModalVisible, setMainModalVisible] = useState(false);
  const [isAddNewThoughtModalVisible, setAddNewThoughtModalVisible] = useState(false);
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    setColorScheme(getColorScheme());
  }, []);

  const HEADERStyles = StyleSheet.create({
    headerContainer: {
      backgroundColor: (colorScheme === "dark") ? "#FCF951" : "#3A95FF",
      alignItems: 'center',
      flexDirection: 'row',
      // marginTop: 50,
      elevation: 5
    },
    AddNewThoughtBtn: {},
    AddNewThoughtBtnIcon: {
      color: (colorScheme === "dark") ? "#3A95FF" : "#FCF951"
    }
  });

  const toggleMainModal = () => {
    setMainModalVisible(!isMainModalVisible);
  }
  const toggleAddNewThoughtModal = () => {
    setAddNewThoughtModalVisible(!isAddNewThoughtModalVisible);
  }
  useEffect(()=>{
    // toggleMainModal();
    // toggleAddNewThoughtModal()
  }, []);


  return (
    <View>
      <View style={HEADERStyles.headerContainer} >
        <TouchableOpacity
          style={HEADERStyles.PoweredLogoImage}
          activeOpacity={0.5}
          onPress={()=>{
            toggleMainModal()
          }}
        >
          <PoweredLogoImage />
        </TouchableOpacity>
        <SearchBar />

        <TouchableOpacity
          style={HEADERStyles.AddNewThoughtBtn}
          activeOpacity={0.5}
          onPress={()=>{
            toggleAddNewThoughtModal()
          }}
        >
          <ANTIcon name="addfile" size={25} style={HEADERStyles.AddNewThoughtBtnIcon} />
        </TouchableOpacity>
      </View>
      <View
        style={HEADERStyles.statusBar}
      >
        
        <Text><FONTISTOIcon name="radio-btn-active" color="green" /> active</Text>
      </View>
      <MainModal isMainModalVisible={isMainModalVisible} toggleMainModal={toggleMainModal} _signOut={props._signOut} setloggedIn={props.setloggedIn} />
      <AddNewThoughtModal isAddNewThoughtModalVisible={isAddNewThoughtModalVisible} toggleAddNewThoughtModal={toggleAddNewThoughtModal} />
    </View>
  )
}