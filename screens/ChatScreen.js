import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import {Text} from "react-native"
import db from "../firebase";
import firebase from "firebase/app";
import { collection, getDocs, onSnapshot, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useAuthentication } from '../utils/hooks/useAuthentication';

export default function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState([]);
  const { user, userData } = useAuthentication();
  
    useEffect(() => {
    let unsubscribeFromNewSnapshots = onSnapshot(doc(db, "Chats", "myfirstchat"), (snapshot) => {
      console.log("New Snapshot! ", snapshot.data().messages);
      setMessages(snapshot.data().messages);
    });
  
    return function cleanupBeforeUnmounting() {
      unsubscribeFromNewSnapshots();
    };
  }, []);

  const onSend = useCallback(async (messages = []) => {
    await updateDoc(doc(db, "Chats", "myfirstchat"), {
      messages: arrayUnion(messages[0])
    });
    //Creates duplicates with same key
    //setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  //Null Checking

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        // current "blue bubble" user
        _id: user && user.uid,
        name: userData && userData.username,
        avatar: "https://placeimg.com/140/140/any",
      }}
      inverted={false}
      showUserAvatar={true}
      renderUsernameOnMessage={true}
    />
  );
  // if (user && userData) {
  //   return (
  //     <GiftedChat
  //       messages={messages}
  //       onSend={(messages) => onSend(messages)}
  //       user={{
  //         // current "blue bubble" user
  //         _id: user.uid,
  //         name: userData.username,
  //         avatar: "https://placeimg.com/140/140/any",
  //       }}
  //       inverted={true}
  //       showUserAvatar={true}
  //       renderUsernameOnMessage={true}
  //     />
  //   );
  // }
  // else {
  //   return <Text> User not in Database </Text>
  //}
}