import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { useAuthentication } from '../utils/hooks/useAuthentication';


export default function HomeScreen({ navigation }) {

  //Bascially a variable for the page of the app
  //User is logged in vs not logged in
	const [state, setState] = useState();

	const auth = getAuth();
	const user = auth.currentUser;

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
				<Text style={styles.loginText}>Sign Out</Text>
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
	logoutBtn: {
		width:"50%",
		borderRadius:25,
		margin: 25,
		height:50,
		alignSelf: "center",
		alignItems:"center",
		justifyContent:"center",
		backgroundColor:"grey",
		color: "white"
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
		backgroundColor: "yellow",
		borderRadius: 25,
		margin: 20
	},
});