import {
	SafeAreaView,
	View,
	StyleSheet,
	Button,
	TextInput,
	Text,
	TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function LoginScreen({ navigation }) {
	const [text, onChangeText] = React.useState('Useless Text');
	const [number, onChangeNumber] = React.useState(null);

	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Login Screen</Text>

			<TextInput
				style={styles.input}
				placeholder='Insira seu usuario'
				onChange={() => {}}
			/>

			<TextInput
				style={styles.input}
				placeholder='Insira sua senha'
				onChange={() => {}}
			/>

			<Button title='Entrar' onPress={() => navigation.navigate('Home')} />

			<Text>Não tem cadastro?</Text>

			<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
				<Text style={styles.buttonTextRegister}>Registrar-se</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 50,
		margin: 12,
		borderWidth: 2,
		padding: 10,
	},
	buttonTextRegister: {
		color: '#4DAE4C',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
