import React, { useState, useEffect } from "react";
import { Image, Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, signOut, signInWithEmailAndPassword} from "firebase/auth";

export default function LoginScreen({navigation}) {
    //State Variables for user's email and password
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

    //getAuth() actually authenticates the user, I think
	const auth = getAuth();

    //Very similar handleSubmit() function as signupScreen.js
    //Instead, we have signIn with email/pass instead of creting new user
	async function handleSubmit() {
		console.log("handle submit envoked!!")

		await signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user; 
		})
        //Not using error code again
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
            console.log(errorCode, "<---- error code");
            console.log(errorMessage, "<--- error message")
		});
	}

    console.log(auth, "<-----auth object")

    //return outputs a screen for login where user can input email/pass
	return (
		<>
		<View style={styles.container}>
			<Text style={styles.bigBlue}>ChapSnat</Text>
			<Image style= {styles.img} source={require('../chapsnat.png')}/>
			<View style={styles.inputView}>
				<TextInput
					placeholder='Email'
					placeholderTextColor="#003f5c"
					onChangeText={(email) => setEmail(email)}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					placeholder='Password'
					secureTextEntry={true}
					placeholderTextColor="#003f5c"
					onChangeText={(password) => setPassword(password)}
				/>
			</View>
			<TouchableOpacity style={styles.loginBtn} onPress={() => {
				handleSubmit();
			}}>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
            <TouchableOpacity style={styles.redirectBtn} onPress={() => {
                navigation.navigate("Signup")
            }}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
		</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fffc01",
		height: "100%",
	},
	img: {
		resizeMode: "contain",
		height: 200,
		width: 200,
		alignSelf: "center",
		marginBottom: 20,
	},
	redirectBtn: {
		width:"40%",
		borderRadius:25,
		height:50,
		alignSelf: "center",
		alignItems:"center",
		justifyContent:"center",
		marginTop:40,
		backgroundColor:"#3cb2e2",
		color: "white"
	},
	inputView: {
		alignSelf: "center",
		backgroundColor: "white",
		borderRadius: 30,
		width: "70%",
		height: 45,
		marginBottom: 20,
		alignItems: "center",
	},
	TextInput: {
		alignSelf: "center",
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
	},
	loginBtn: {
		alignSelf: "center",
		width:"40%",
		borderRadius:25,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		marginTop:40,
		backgroundColor:"#e82754",
	},
	bigBlue: {
		alignSelf: "center",
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
		padding: 30
	}
})

