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

import styles from './estilo.js';

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
