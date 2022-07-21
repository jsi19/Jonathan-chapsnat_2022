import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from "react"
import db from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 

export default function LoginScreen({navigation}) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

    //What does getAuth() actually mean/do
	const auth = getAuth();

    //handleSubmit() creates/finalizes the user's credentials and outputs any errors if found
	async function handleSubmit() {
		console.log("handle submit envoked!!")

		await createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(userCredential, "<-----userCredential in SignUpScreen!!!")
			auth.currentUser = user;
			// Add a new document in collection "Users"
			setDoc(doc(db, "Users", user.uid), {
				username: user.email,
				bio: "I am new user",
			  });
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
            console.log(errorCode, "<---- error code");
            console.log(errorMessage, "<--- error message")
		});
	}

    //return outputs the signup here sheet where the user can manually
    //input their email/password, which sets the respective variables
	return (
		<>
		<View style={styles.container}>
			<Text style={styles.bigBlue}>Signup Here</Text>
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
            {//Button when pressed submits users credentials to be created into an actual user within system
            }
			<TouchableOpacity style={styles.loginBtn} onPress={() => {
				handleSubmit();
			}}>
				<Text style={styles.loginText}>Signup</Text>
			</TouchableOpacity>
            <TouchableOpacity style={styles.redirectBtn} onPress={() => {
                    navigation.navigate("Login") 
                }}>
                <Text>Already have an account? Login here</Text>
            </TouchableOpacity>
		</View>
		</>
        
	)
}

//styles creates the structure/foundation of how we want the screen to look
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

