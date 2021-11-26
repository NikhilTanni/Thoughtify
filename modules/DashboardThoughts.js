import React, { useState, useEffect } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import OTIcon from 'react-native-vector-icons/Octicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import IONIcon from 'react-native-vector-icons/Ionicons';
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import { getColorScheme } from './Utils';
import { Loader1 } from './Loader';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignSelf: 'stretch',
    marginTop: '4%',
    // justifyContent: 'center',
    // alignItems: 'center'
  }
});

const ThoughtsList = (props) => {
  const [colorScheme, setColorScheme] = useState(getColorScheme());
  useEffect(() => {
    // loadThoughtViewModal('b2d9a3d1-736f-435b-af1a-712e1f21a821', 'What is consiousness?');
    }, []);
    
  const thoughtliststyle = StyleSheet.create({
    thoughtlist: {
      margin: '2%',
      padding: '2%',
      justifyContent: 'center',
      textAlign: 'left',
      color: '#3A95FF',
      backgroundColor: (colorScheme === "dark") ? "rgba(252,249,81,1)" : "rgba(58,149,255,1)",
      fontWeight: 'bold'
    },
    thoughtlistId: {
      fontSize: 10,
      color: (colorScheme === "dark") ? "rgba(58,149,255,1)" : "rgba(252,249,81,1)",
    },
    thoughtlistTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: (colorScheme === "dark") ? "rgba(58,149,255,1)" : "rgba(252,249,81,1)",
    },
    thoughtlistFooter: {
      marginTop: '1%',
      padding: '1%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    thoughtlistComment: {
      marginLeft: '4%',
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'flex-start'
    },
    thoughtlistCommentText: {
      marginLeft: '6%',
      color: (colorScheme === "dark") ? "#000" : "#fff"
    },
    thoughtlistCategory: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'flex-start'
    },
    thoughtlistCategoryText: {
      marginLeft: '6%',
      color: (colorScheme === "dark") ? "#000" : "#fff"
    },
  });
  const listData = [
    {id: 'b2d9a3d1-736f-435b-af1a-712e1f21a821', title: 'What is consiousness?', commentCount: 4, category: 'biology'},
    {id: 'c2d86148-8d2f-428e-a1b2-5502628953b1', title: 'How do we get more energy from sun?', commentCount: 1, category: 'natural-tech'},
    {id: 'f3374e3c-3952-48d3-b5c1-b5e0e5fd9993', title: 'Can computers keep getting faster?', commentCount: 2, category: 'technology'},
    {id: '7b1dd369-f16f-4044-bd5e-c302137f1a908', title: 'Is time travel possible, like really really possible or just a science fantasy?', commentCount: 8, category: 'science'}
  ]

  const loadThoughtViewModal = (thoughtID, thoughtTitle) => {
    props.setThoughID(thoughtID)
    props.setthoughtTitle(thoughtTitle)
    props.toggleThoughtViewModal();
  }
  const renderThoughtsItems = ({item}) => {
    return (
      <TouchableOpacity style={thoughtliststyle.thoughtlist} onPress={() => {
        loadThoughtViewModal(item.id, item.title);
      }}>
        {/* <Text style={thoughtliststyle.thoughtlistId}>{item.id}</Text> */}
        <Text style={thoughtliststyle.thoughtlistTitle}>{item.title}</Text>
        <View style={thoughtliststyle.thoughtlistFooter}>
          <TouchableOpacity style={thoughtliststyle.thoughtlistCategory}>
            <MAIcon name="category" size={15} color={(colorScheme === "dark") ? "#000" : "#fff"} />
            <Text style={thoughtliststyle.thoughtlistCategoryText}>{item.category}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={thoughtliststyle.thoughtlistComment}>
            <OTIcon name="comment-discussion" size={15} color={(colorScheme === "dark") ? "#000" : "#fff"} />
            <Text style={thoughtliststyle.thoughtlistCommentText}>{item.commentCount}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={listData}
      renderItem={renderThoughtsItems}
    />
  )
}

module.exports.ThoughtsListView = (props) => {
  const [isThoughtViewModalVisible, setThoughtViewModalVisible] = useState(false);
  const toggleThoughtViewModal = () => {
    setThoughtViewModalVisible(!isThoughtViewModalVisible);
  }

  const [thoughtID, setThoughID] = useState("");
  const [thoughtTitle, setthoughtTitle] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ThoughtsList toggleThoughtViewModal={toggleThoughtViewModal} setThoughID={setThoughID} setthoughtTitle={setthoughtTitle} />
      </SafeAreaView>
      <ThoughtViewScreen isThoughtViewModalVisible={isThoughtViewModalVisible} toggleThoughtViewModal={toggleThoughtViewModal} thoughtID={thoughtID} thoughtTitle={thoughtTitle} />
    </View>
  )
}


const ThoughtViewScreen = (props) => {

  const [colorScheme, setColorScheme] = useState(getColorScheme());
  const [commentData, setCommentData] = useState("");
  const [commentSubmit, setCommentSubmit] = useState(false);
  const [commentsList, setCommentsList] = useState(commentsList2);

  const TVSStyles = StyleSheet.create({
    TVSModal: {
      backgroundColor: '#3A95FF',
      opacity: 0.9,
      margin: 0
    },
    TVSHeader: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      top: 0,
      width: '100%',
      padding: '2%',
      backgroundColor: (colorScheme === "dark") ? "#FCF951" : "#3A95FF",
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 1
    },
    TVSHeaderID: {
      display: 'flex',
      flexDirection: 'row'
    },
    TVSHeaderIDText: {
      color: (colorScheme === "dark") ? "#000" : "#FFF",
      fontWeight: 'bold'
    },
    TVSBody: {
      paddingTop: '10%',
      backgroundColor: (colorScheme === "dark") ? "#000" : "#FFF"
    },
    TVSThoughtTitle: {
      fontSize: 36,
      color: (colorScheme === "dark") ? "#FCF951" : "#3A95FF",
      fontWeight: 'bold',
      alignSelf: 'center',
      textAlign: 'center'
    },
    TVSThoughtDescription: {
      fontSize: 18,
      color: (colorScheme === "dark") ? "#FCF951" : "#3A95FF",
      marginTop: '5%',
      alignSelf: 'center',
      textAlign: 'left'
    },
    TVSCommentBox: {
      display: 'flex',
      marginTop: '10%',
      backgroundColor: (colorScheme === "dark") ? "#282828" : "#E0F2F1",
      elevation: 5
    },
    TVSCommentBoxHeader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: (colorScheme === "dark") ? "#FCF951" : "#3A95FF"
    },
    TVSCommentBoxHeaderInfo: {
      display: 'flex',
      flexDirection: 'column'
    },
    TVSCommentUserInfo: {
      fontSize: 12,
      color: (colorScheme === "dark") ? "#E0F2F1" : "#282828"
    },
    TVSCommentBtn: {
      backgroundColor: (colorScheme === "dark") ? "#FCF951" : "#3A95FF",
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      padding: "2%"
      // borderWidth: 1,
      // borderColor: '#FCF951'
    },
    TVSCommentsList: {
      //
    }
  });
  // remove the below line after dev
  var desc = `hey there, this is an example description for the thought ID [${props.thoughtID}] which is about [${props.thoughtTitle}]. The character limit is 500 words.
  you can \nadd:
  - text
  - numbers
  - list (as this)
  - some explanation`;
  desc += desc;


  const submitComment = () => {
    setCommentSubmit(true);
    setTimeout(() => {
      setCommentSubmit(false);
    }, 2000)
  } 

  return (
    <View>
      <Modal 
        isVisible={props.isThoughtViewModalVisible}
        onBackButtonPress={props.toggleThoughtViewModal}
        style={TVSStyles.TVSModal}
        >
          <View style={TVSStyles.TVSHeader}>
            <TouchableOpacity style={TVSStyles.TVSHeaderID}>
              <FAIcon name="hashtag" style={{marginRight: '1%', color: (colorScheme === "dark") ? "#000" : "#FFF"}} />
              <Text style={TVSStyles.TVSHeaderIDText}>{props.thoughtID}</Text>
            </TouchableOpacity>
            <FAIcon name="share-alt" style={{alignSelf: 'flex-end', fontSize: 15, fontWeight: 'bold', color: (colorScheme === "dark") ? "#000" : "#FFF"}} />
          </View>
          <SafeAreaView style={TVSStyles.TVSBody}>
            <ScrollView>
              <Text style={TVSStyles.TVSThoughtTitle}>{props.thoughtTitle}</Text>
              <Text style={TVSStyles.TVSThoughtDescription}>{desc}</Text>
              <View style={TVSStyles.TVSCommentBox}>
                <View style={TVSStyles.TVSCommentBoxHeader}>
                  <View style={TVSStyles.TVSCommentBoxHeaderInfo}>
                    <Text style={TVSStyles.TVSCommentUserInfo}>Commenting as: userName</Text>
                    <Text style={TVSStyles.TVSCommentUserInfo}>Please follow guidelines | chars left : {500 - Number(commentData.trim().length)}</Text>
                  </View>
                  {
                    commentSubmit ? 
                    <View>
                      <Loader1 color="#3A95FF" />
                    </View>
                    :
                    <TouchableOpacity
                      style={TVSStyles.TVSCommentBtn}
                      disabled={commentData.trim().length <= 0}
                      onPress={() => {
                        submitComment();
                      }}
                      >
                      <Text style={{color: (colorScheme === "dark") ? "#000" : "#FCF951"}}>Post</Text>
                      <IONIcon name="checkmark-done" size={20} style={{color: (colorScheme === "dark") ? "#000" : "#FCF951"}} />
                    </TouchableOpacity>
                  }
                </View>
                <TextInput
                  placeholder="Add a comment . . ."
                  value={commentData}
                  multiline={true}
                  maxLength={500}
                  onChangeText={(text) => {
                    setCommentData(text);
                  }}
                ></TextInput>
              </View>
              <View style={TVSStyles.TVSCommentsList}>
                <CommentsListView commentsList={commentsList} setCommentsList={setCommentsList} />
              </View>
            </ScrollView>
          </SafeAreaView>
        </Modal>
    </View>
  )
}

const CommentsListView = (props) => {
  const [colorScheme, setColorScheme] = useState(getColorScheme());

  const commentStyle = StyleSheet.create({
    commentContainer: {
      marginTop: '4%',
      backgroundColor: (colorScheme === "dark") ? "#282828" : "#E0F2F1",
      padding: '2%',
      elevation: 5
    },
    commentHeader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: (colorScheme === "dark") ? "#FCF951" : "#3A95FF",
      borderBottomWidth: 1
    },
    commentText: {
      marginTop: '2%',
      marginBottom: '2%',
      color: (colorScheme === "dark") ? "#E0F2F1" : "#282828",
      fontSize: 16,
      fontWeight: 'bold'
    },
    commentFooter: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });
  let commentsListMap = props.commentsList.map((item, key) => {
    const cmDate = new Date(item.commentDate);
    return (
      <View style={commentStyle.commentContainer} key={key}>
        <View style={commentStyle.commentHeader}>
          <Text> {moment(cmDate).format("dddd, MMM. Do YYYY H:mm")} :: {moment(cmDate).fromNow()}</Text>
        </View>
        <Text style={commentStyle.commentText}>{item.comment}</Text>
        <View style={commentStyle.commentFooter}>
          <Text>{item.id}</Text>
          <Text>{item.userID}</Text>
        </View>
      </View>
    )
  });

  return (
    <View>
      {
        commentsListMap
      }
    </View>
  )
}


const commentsList2 = [
  {
    "id": "1234",
    "userID": "user1",
    "commentDate": 1637956330317,
    "comment": "this is comment which is 500 characrets length and is commented by other user 1"
  },
  {
    "id": "1235",
    "userID": "user1",
    "commentDate": 1637956310317,
    "comment": "this is comment which is 500 characrets length and is commented by other user 1"
  }
];
