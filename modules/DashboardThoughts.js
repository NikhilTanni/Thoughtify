import React, { Fragment } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import OTIcon from 'react-native-vector-icons/Octicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import IONIcon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import { Loader1 } from './Loader';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignSelf: 'stretch',
    marginTop: '4%',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
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
    backgroundColor: '#fcf951',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  TVSHeaderID: {
    display: 'flex',
    flexDirection: 'row'
  },
  TVSBody: {
    paddingTop: '10%'
  },
  TVSThoughtTitle: {
    fontSize: 36,
    color: '#FCF951',
    alignSelf: 'center',
    textAlign: 'center'
  },
  TVSThoughtDescription: {
    fontSize: 18,
    color: '#FCF951',
    marginTop: '5%',
    alignSelf: 'center',
    textAlign: 'left'
  },
  TVSCommentBox: {
    display: 'flex',
    marginTop: '10%',
    backgroundColor: '#FCF951'
  },
  TVSCommentBoxHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#3A95FF'
  },
  TVSCommentBoxHeaderInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  TVSCommentUserInfo: {
    fontSize: 12,
    color: '#3A95FF'
  },
  TVSCommentBtn: {
    backgroundColor: '#3A95FF',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FCF951'
  },
  TVSCommentsList: {
    //
  }
});

const ThoughtsList = (props) => {
  const thoughtliststyle = StyleSheet.create({
    thoughtlist: {
      margin: '2%',
      padding: '2%',
      justifyContent: 'center',
      textAlign: 'left',
      color: '#3A95FF',
      backgroundColor: 'rgba(252,249,81,1)',
      fontWeight: 'bold'
    },
    thoughtlistId: {
      fontSize: 10
    },
    thoughtlistTitle: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    thoughtlistFooter: {
      marginTop: '1%',
      padding: '1%'
    },
    thoughtlistComment: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'flex-start'
    }
  });
  const listData = [
    {id: 'b2d9a3d1-736f-435b-af1a-712e1f21a821', title: 'What is consiousness?', commentCount: 4},
    {id: 'c2d86148-8d2f-428e-a1b2-5502628953b1', title: 'How do we get more energy from sun?', commentCount: 1},
    {id: 'f3374e3c-3952-48d3-b5c1-b5e0e5fd9993', title: 'Can computers keep getting faster?', commentCount: 2},
    {id: '7b1dd369-f16f-4044-bd5e-c302137f1a908', title: 'Is time travel possible, like really really possible or just a science fantasy?', commentCount: 8}
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
        <Text style={thoughtliststyle.thoughtlistId}>{item.id}</Text>
        <Text style={thoughtliststyle.thoughtlistTitle}>{item.title}</Text>
        <View style={thoughtliststyle.thoughtlistFooter}>
          <TouchableOpacity style={thoughtliststyle.thoughtlistComment}>
            <OTIcon name="comment-discussion" size={15} />
            <Text style={{marginLeft: '1%'}}>{item.commentCount}</Text>
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
  // remove the below line after dev
  var desc = `hey there, this is an example description for the thought ID [${props.thoughtID}] which is about [${props.thoughtTitle}]. The character limit is 500 words.
  you can \nadd:
  - text
  - numbers
  - list (as this)
  - some explanation`;
  desc += desc;

  const [commentData, setCommentData] = useState("");
  const [commentSubmit, setCommentSubmit] = useState(false);
  const [commentsList, setCommentsList] = useState(commentsList2);

  const submitComment = () => {
    setCommentSubmit(true);
    setTimeout(() => {
      setCommentSubmit(false);
    }, 5000)
  } 

  return (
    <View>
      <Modal 
        isVisible={props.isThoughtViewModalVisible}
        onBackButtonPress={props.toggleThoughtViewModal}
        style={styles.TVSModal}
        >
          <View style={styles.TVSHeader}>
            <TouchableOpacity style={styles.TVSHeaderID}>
              <FAIcon name="hashtag" style={{marginRight: '1%'}} />
              <Text>{props.thoughtID}</Text>
            </TouchableOpacity>
            <FAIcon name="share-alt" style={{alignSelf: 'flex-end', fontSize: 15, fontWeight: 'bold'}} />
          </View>
          <SafeAreaView style={styles.TVSBody}>
            <ScrollView>
              <Text style={styles.TVSThoughtTitle}>{props.thoughtTitle}</Text>
              <Text style={styles.TVSThoughtDescription}>{desc}</Text>
              <View style={styles.TVSCommentBox}>
                <View style={styles.TVSCommentBoxHeader}>
                  <View style={styles.TVSCommentBoxHeaderInfo}>
                    <Text style={styles.TVSCommentUserInfo}>Commenting as: userName</Text>
                    <Text style={styles.TVSCommentUserInfo}>Please follow guidelines | chars left : {500 - Number(commentData.trim().length)}</Text>
                  </View>
                  {
                    commentSubmit ? 
                    <View>
                      <Loader1 color="#3A95FF" />
                    </View>
                    :
                    <TouchableOpacity
                      style={styles.TVSCommentBtn}
                      disabled={commentData.trim().length <= 0}
                      onPress={() => {
                        submitComment();
                      }}
                      >
                      <Text style={{color: '#FCF951'}}>Comment</Text>
                      <IONIcon name="checkmark-done" size={20} style={{color: '#FCF951'}} />
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
              <View style={styles.TVSCommentsList}>
                <CommentsListView commentsList={commentsList} setCommentsList={setCommentsList} />
              </View>
            </ScrollView>
          </SafeAreaView>
        </Modal>
    </View>
  )
}

const CommentsListView = (props) => {
  const commentStyle = StyleSheet.create({
    commentContainer: {
      marginTop: '4%',
      backgroundColor: '#FCF951',
      padding: '2%',
      elevation: 5
    },
    commentHeader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: '#3A95FF',
      borderBottomWidth: 1
    },
    commentText: {
      marginTop: '2%',
      marginBottom: '2%',
      color: '#3A95FF',
      fontWeight: 'bold'
    },
    commentFooter: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

  let commentsListMap = props.commentsList.map((item, key) => {
    return (
      <View style={commentStyle.commentContainer}>
        <View style={commentStyle.commentHeader}>
          <Text>{item.commentDate}</Text>
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
    "commentDate": "2021-11-24T14:29:00+0000",
    "comment": "this is comment which is 500 characrets length and is commented by other user 1"
  },
  {
    "id": "1235",
    "userID": "user1",
    "commentDate": "2021-11-24T14:29:00+0000",
    "comment": "this is comment which is 500 characrets length and is commented by other user 1"
  },
  {
    "id": "1236",
    "userID": "user1",
    "commentDate": "2021-11-24T14:29:00+0000",
    "comment": "this is comment which is 500 characrets length and is commented by other user 1"
  },
  {
    "id": "1237",
    "userID": "user1",
    "commentDate": "2021-11-24T14:29:00+0000",
    "comment": "this is comment which is 500 characrets length and is commented by other user 1"
  },
  {
    "id": "1238",
    "userID": "user1",
    "commentDate": "2021-11-24T14:29:00+0000",
    "comment": "this is comment which is 500 characrets length and is commented by other user 1"
  },
  {
    "id": "1239",
    "userID": "user1",
    "commentDate": "2021-11-24T14:29:00+0000",
    "comment": "this is comment which is 500 characrets length and is commented by other user 1"
  },
  {
    "id": "1231",
    "userID": "user1",
    "commentDate": "2021-11-24T14:29:00+0000",
    "comment": "this is comment which is 500 characrets length and is commented by other user 1"
  },
  {
    "id": "1232",
    "userID": "user1",
    "commentDate": "2021-11-24T14:29:00+0000",
    "comment": "this is comment which is 500 characrets length and is commented by other user 1"
  },
  {
    "id": "1233",
    "userID": "user1",
    "commentDate": "2021-11-24T14:29:00+0000",
    "comment": "this is comment which is 500 characrets length and is commented by other user 1"
  }
];
