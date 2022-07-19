export default function LoginScreen({navigation}) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

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
				{/* what do you think will go here? */}
			}}>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
		</>
	)
}