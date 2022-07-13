import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, Text, View } from 'react-native';
import db from "./firebase";


export default function App() {
  const [messages, setMessages] = useState([]);
  const [placeholder, setPlaceholder] = useState("Hi dad!");

  useEffect(() => {
    db.collection("Chats")
      .doc("myfirstchat")
      .get()
      .then((snapshot) => {
        console.log(snapshot.id);
        console.log(snapshot.data());
      });
  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'hi dad!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Yes, I am mom',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://media-exp2.licdn.com/dms/image/C4E03AQHdRc4RjD-_-g/profile-displayphoto-shrink_800_800/0/1653578770530?e=1663200000&v=beta&t=4Uxgb_kxnuciDqZ2ovBD2R4KQr14-tw7tWUWy_qg-yM',
        },
        image: 'https://media-exp2.licdn.com/dms/image/C4E03AQHdRc4RjD-_-g/profile-displayphoto-shrink_800_800/0/1653578770530?e=1663200000&v=beta&t=4Uxgb_kxnuciDqZ2ovBD2R4KQr14-tw7tWUWy_qg-yM',
      }
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        name: 'Rex',
        avatar: 'https://media-exp2.licdn.com/dms/image/C5603AQENeyOU219l6w/profile-displayphoto-shrink_800_800/0/1551594444630?e=1663200000&v=beta&t=dm10IEW97yyBMQjCwEM-7Zx0ZQFrBWrq9kmzUGyI6d8',
      }}
      showUserAvatar = {true}
      alwaysShowSend = {true}
      renderUsernameOnMessage = {true}
      
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
