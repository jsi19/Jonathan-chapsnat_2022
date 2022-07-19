import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, signOut } from "firebase/auth";


export default function HomeScreen({ navigation }) {

  //Bascially a variable for the page of the app
  //User is logged in vs not logged in
	const [state, setState] = useState();

	const auth = getAuth();
	const user = auth.currentUser;

	console.log(user, "<--- user in the home screen")

  //Makes sure there is a user in order to output protected routes
	if (user !== null) {
		return (
			<View style={styles.container}>

			<TouchableOpacity style={styles.logoutBtn} onPress={() => {
				signOut(auth).then(() => {
					// Sign-out successful.
					user = null;
				}).catch((error) => {
					// An error happened.
					// should we do something with that error??
				});
			}}>
				<Text style={styles.loginText}>sign out</Text>
			</TouchableOpacity>

			<Text>Hello, {user.email}! </Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("Chat")}
			>
				<Text style={styles.item}>Chat</Text>
			</TouchableOpacity>
			</View>
			)
  //If there is no user logged in, outputs login/signup routes
	} else if (user === null) {
		return (
		<View style={styles.container}>
		<TouchableOpacity
			onPress={() => navigation.navigate("Login")}
		>
			<Text style={styles.item}>login</Text>
		</TouchableOpacity>

		<TouchableOpacity
			onPress={() => navigation.navigate("Signup")}
		>
			<Text style={styles.item}>signup</Text>
		</TouchableOpacity>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	redirectBtn: {
		width:"80%",
		borderRadius:25,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		marginTop:40,
		backgroundColor:"grey",
		color: "white"
	},
	inputView: {
		backgroundColor: "#FFC0CB",
		borderRadius: 30,
		width: "70%",
		height: 45,
		marginBottom: 20,
		alignItems: "center",
	},
	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
	},
	loginBtn: {
		width:"80%",
		borderRadius:25,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		marginTop:40,
		backgroundColor:"#FF1493",
	},
	bigBlue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
		padding: 50
	}
})