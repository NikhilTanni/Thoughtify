import React, { useState, useEffect } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from "react-native-modal";
import { getColorScheme } from './Utils';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FEIcon from 'react-native-vector-icons/Feather';


module.exports.MainModal = (props) => {

  const [colorScheme, setColorScheme] = useState(getColorScheme());
  const [ModalBGColor, setModalBGColor] = useState(() => {
    if (colorScheme === "dark") {
      return "#000"
    } else {
      return "#3A95FF";
    }
  });

  useEffect(() => {
    //
  }, []);

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
      <Modal isVisible={props.isMainModalVisible} backdropColor={ModalBGColor} backdropOpacity={0.88} onBackButtonPress={()=>{props.toggleMainModal()}} >

      <View style={styles.IconContainerParent}>
        <TouchableOpacity
          style={styles.MainModalIconCloseContainer}
          activeOpacity={0.5}
          onPress={()=>{
            props.toggleMainModal();
          }}
        >
          <FAIcon name="close" size={25} style={styles.MainModalIcon} />
          <Text style={{color: "#000"}}>Close</Text>
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
                        props._signOut(props.setloggedIn);
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
            <Text style={{color: "#000"}}>Logout</Text>
          </TouchableOpacity>
      </View>

        <ScrollView style={{ flex: 1 }}>                 
          
        </ScrollView>
      </Modal>
    </View>
  );
}

module.exports.AddNewThoughtModal = (props) => {

  const [colorScheme, setColorScheme] = useState("light");
  const [ModalBGColor, setModalBGColor] = useState("");

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryValue, setCategoryValue] = useState("init");
  const [categoryList, setCategoryList] = useState([
    {
      label: "Select Category",
      value: "init",
      
    },
    {
      label: "Apple",
      value: "apple"
    },
    {
      label: "Banana",
      value: "banana"
    }
  ]);

  useEffect(() => {
    const cc = getColorScheme();
    setColorScheme(cc);
    if (cc === "dark") {
      setModalBGColor("#000");
    } else {
      setModalBGColor("#FFF");
    }
  }, []);

  const ANTstyles = StyleSheet.create({
    AddNewThoughtModal: {
      flex: 1
    },
    ANTTitle: {
      backgroundColor: (colorScheme === "dark") ? "rgba(252,249,81,0.1)" : "rgba(58,149,255,1)",
      borderColor: (colorScheme === "dark") ? "rgba(252,249,81,1)" : "rgba(0,0,0,0)",
      borderRadius: 8,
      borderWidth: 1,
      color: "#FCF951",
    },
    ANTDescription: {
      backgroundColor: (colorScheme === "dark") ? "rgba(252,249,81,0.1)" : "rgba(58,149,255,1)",
      borderColor: (colorScheme === "dark") ? "rgba(252,249,81,1)" : "rgba(0,0,0,0)",
      borderRadius: 8,
      borderWidth: 1,
      color: "#FCF951",
      marginTop: '4%'
    },
    ANTCategoryDropDown: {
      backgroundColor: (colorScheme === "dark") ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)",
      borderWidth: 1,
      borderColor: (colorScheme === "dark") ? "rgba(252,249,81,1)" : "rgba(58,149,255,1)",
      elevation: 3
    },
    ANTCategory: {
      backgroundColor: (colorScheme === "dark") ? "rgba(252,249,81,0.1)" : "rgba(255,255,255,1)",
      borderColor: (colorScheme === "dark") ? "rgba(252,249,81,1)" : "rgba(0,0,0,0)",
      marginTop: '4%',
      elevation: 2
    },
    ANTCategoryText: {
      color: (colorScheme === "dark") ? "#FFF" : "rgba(58,149,255,1)"
    },
    ANTBtnBar1: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: '8%'
    },
    ANTSaveBtn: {
      backgroundColor: (colorScheme === "dark") ? "rgba(58,149,255,0.1)" : "rgba(58,149,255,1)",
      padding: '4%',
      width: '40%',
      borderColor: '#FCF951',
      borderWidth: 1,
      marginLeft: '1%',
      flex: 1,
      alignItems: 'center'
    },
    ANTCancelBtn: {
      backgroundColor: (colorScheme === "dark") ? "rgba(58,149,255,0.1)" : "rgba(150,150,150,1)",
      borderColor: 'rgba(255,255,255,0.4)',
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
    <View style={ANTstyles.AddNewThoughtModal}>
      <Modal
        isVisible={props.isAddNewThoughtModalVisible}
        backdropColor={ModalBGColor}
        backdropOpacity={1}
        onBackButtonPress={()=>{closeThisModal()}}
      >
        <TextInput
          style={ANTstyles.ANTTitle}
          placeholder={"What you're thinking about??"}
          placeholderTextColor={(colorScheme === "dark") ? "#FCF951" : "#FFF"}
        />
        <TextInput
          style={ANTstyles.ANTDescription}
          placeholder={"Please explain more . . ."}
          placeholderTextColor={(colorScheme === "dark") ? "#FCF951" : "#FFF"}
          multiline={true}
          maxLength={500}
        />
        <DropDownPicker
          open={categoryOpen}
          value={categoryValue}
          items={categoryList}
          setOpen={setCategoryOpen}
          setValue={setCategoryValue}
          setItems={setCategoryList}
          style={ANTstyles.ANTCategory}
          textStyle={ANTstyles.ANTCategoryText}
          dropDownContainerStyle={ANTstyles.ANTCategoryDropDown}
          mode="SIMPLE"
        />
        <View style={ANTstyles.ANTBtnBar1}>
          <TouchableOpacity
            style={ANTstyles.ANTCancelBtn}
            onPress={()=>{
              closeThisModal();
            }}
          >
              <Text style={{color:'#FFFFFF'}}>Nah, Discard off!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ANTstyles.ANTSaveBtn}>
            <Text style={{color:'#FCF951'}}>That's all, Save it!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}