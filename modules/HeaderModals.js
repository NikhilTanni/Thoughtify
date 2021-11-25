import React from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import { StatusbarDefault } from './StatusBarMod';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FEIcon from 'react-native-vector-icons/Feather';


module.exports.MainModal = (props) => {

  const styles = StyleSheet.create({
    PoweredLogoImage: {
      paddingRight: '1%',
      marginRight: '1%',
      borderRightColor: '#000',
      borderRightWidth: 1
    },
    AddNewThoughtBtn: {
      padding: '1%'
    },
    searchBar: {
      width: "75%",
      // borderBottomColor: '#3A95FF',
      borderColor: 'rgba(0,0,0,0)',
      borderBottomWidth: 1
    },
    MainModal: {
      flex: 1
    },
    IconContainerParent: {
      flexDirection: 'row-reverse',
      display: 'flex'
    },
    MainModalIconCloseContainer: {
      backgroundColor: 'rgba(252,249,81,1)',
      alignSelf: 'flex-end',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10
    },
    MainModalIconLogoutContainer: {
      backgroundColor: 'rgba(252,249,81,1)',
      alignSelf: 'flex-end',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
      marginRight: 50
    },
    MainModalIcon: {
      color: '#3A95FF'
    }
  });

  return (
    <View style={styles.MainModal}>
      <Modal isVisible={props.isMainModalVisible} backdropColor="#3A95FF" backdropOpacity={0.88} onBackButtonPress={()=>{props.toggleMainModal()}} >

      <View style={styles.IconContainerParent}>
        <TouchableOpacity
          style={styles.MainModalIconCloseContainer}
          activeOpacity={0.5}
          onPress={()=>{
            props.toggleMainModal();
          }}
        >
          <FAIcon name="close" size={25} style={styles.MainModalIcon} />
          <Text>Close</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.MainModalIconLogoutContainer}
            activeOpacity={0.5}
            onPress={()=>{
              const createAlertForLogout = () => {
                Alert.alert(
                  "Confirm Logout?",
                  "Are you sure, you want to log-out??", [
                    {
                      text: "Yes",
                      onPress: () => {
                        // logout here
                        props._signOut(props.updateState);
                      }
                    }, {
                      text: "No",
                      style: "cancel"
                    }
                  ]
                )
              }
              createAlertForLogout();
            }}
          >
            <FEIcon name="log-out" size={25} style={styles.MainModalIcon} />
            <Text>Logout</Text>
          </TouchableOpacity>
      </View>

        <ScrollView style={{ flex: 1 }}>                 
          
        </ScrollView>
      </Modal>
    </View>
  );
}

module.exports.AddNewThoughtModal = (props) => {
  const toggleAddNewThoughtModal = () => {
    //
  };

  const styles = StyleSheet.create({
    AddNewThoughtModal: {
      flex: 1
    },
    ANTTitle: {
      backgroundColor: 'rgba(252,249,81,1)',
      color: "#3A95FF",
    },
    ANTDescription: {
      backgroundColor: 'rgba(252,249,81,1)',
      color: "#3A95FF",
      marginTop: '2%'
    },
    ANTBtnBar1: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: '8%'
    },
    ANTSaveBtn: {
      backgroundColor: 'rgba(252,249,81,1)',
      padding: '4%',
      width: '40%',
      marginLeft: '1%',
      flex: 1,
      alignItems: 'center'
    },
    ANTCancelBtn: {
      backgroundColor: 'rgba(252,249,81,1)',
      borderColor: 'rgba(252,249,81,1)',
      borderWidth: 2,
      padding: '4%',
      width: '40%',
      marginRight: '1%',
      flex: 1,
      alignItems: 'center'
    }
  });

  const closeThisModal = () => {
    const createAlertForNewThoughtDiscard = () => {
      Alert.alert(
        "Think Again!!",
        "Are you sure, you want to discard this thought??", [
          {
            text: "Yes, I'm sure!",
            onPress: () => {
              // Discard new thought modal here
              props.toggleAddNewThoughtModal();
            }
          }, {
            text: "No, wait!",
            style: "cancel"
          }
        ]
      )
    }
    createAlertForNewThoughtDiscard();
  }
  return (
    <View style={styles.AddNewThoughtModal}>
      <Modal isVisible={props.isAddNewThoughtModalVisible} backdropColor="#3A95FF" backdropOpacity={0.9} onBackButtonPress={()=>{closeThisModal()}} >
        <TextInput style={styles.ANTTitle} placeholder={"What you're thinking about??"} />
        <TextInput style={styles.ANTDescription} placeholder={"Please explain more . . ."} multiline={true} maxLength={500} />
        <View style={styles.ANTBtnBar1}>
          <TouchableOpacity
            style={styles.ANTCancelBtn}
            onPress={()=>{
              closeThisModal();
            }}
          >
              <Text style={{color:'brown'}}>Nah, Discard off!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ANTSaveBtn}>
            <Text style={{color:'#3A95FF'}}>That's all, Save it!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}