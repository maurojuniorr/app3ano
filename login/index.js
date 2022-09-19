import {
	SafeAreaView,
	View,
	StyleSheet,
	Image,
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
		<SafeAreaView style={styles.container}>
			
			<Image style={styles.logo} source={require('../img/header_logo.svg')} />
			
			<View style={styles.inputContainer}>
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
			</View>
			
			<View style={styles.buttonContainer}>
				<Button title='Entrar' onPress={() => navigation.navigate('Home')} />

				<Text>Não tem cadastro?</Text>

				<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
					<Text style={styles.buttonTextRegister}>Registrar-se</Text>
				</TouchableOpacity>
			</View>

			
		</SafeAreaView>
	);
}
