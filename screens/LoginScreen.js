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

    //return outputs a screen for login where user can input email/pass
	return (
		<>
			<Text style={styles.bigBlue}>Login Here</Text>
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
                <Text>Don't have an account? Sign up here</Text>
            </TouchableOpacity>
		</>
	)
}