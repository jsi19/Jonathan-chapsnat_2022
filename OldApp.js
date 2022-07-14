// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useCallback, useEffect } from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'
// import { StyleSheet, Text, View } from 'react-native';
// import db from "./firebase";
// import { collection, getDocs, onSnapshot, doc, updateDoc, arrayUnion } from 'firebase/firestore';


// function App() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     let unsubscribeFromNewSnapshots = onSnapshot(doc(db, "Chats", "myfirstchat"), (snapshot) => {
//       console.log("New Snapshot! ", snapshot.data().messages);
//       setMessages(snapshot.data().messages);
//     });
  
//     return function cleanupBeforeUnmounting() {
//       unsubscribeFromNewSnapshots();
//     };
//   }, []);

//   const onSend = useCallback(async (messages = []) => {
//     await updateDoc(doc(db, "Chats", "myfirstchat"), {
//       messages: arrayUnion(messages[0])
//     });
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//   }, [])

//   return (
//     <GiftedChat
//         messages={messages}
//         onSend={messages => onSend(messages)}
//         user={{
//           _id: "1",
//           name: 'Jonathan',
//           avatar: 'https://media-exp2.licdn.com/dms/image/C5603AQENeyOU219l6w/profile-displayphoto-shrink_800_800/0/1551594444630?e=1663200000&v=beta&t=dm10IEW97yyBMQjCwEM-7Zx0ZQFrBWrq9kmzUGyI6d8',
//         }}
//         inverted={true}
//         showUserAvatar = {true}
//         alwaysShowSend = {true}
//         renderUsernameOnMessage = {true}
      
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// export default App;
