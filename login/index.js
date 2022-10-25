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

import React, { useState } from 'react';

import styles from './estilo.js';
import api from '../service/api'

export default function LoginScreen({ navigation }) {
	
	const [email, setEmail] = useState(''); //variaveis de estado podem mudar em tempo de execução
	const [password, setPassword] = useState('');
	const [status, setStatus] = useState('')

	async function autenticar() {

		try {
			const response = await api.post('/auth/authenticate',{
		
			email: email,
			password: password
			
			})
			
		
			if (response.status === 200) {
				navigation.navigate('Home');
				
			}

		} catch (error) {
			// navigation.navigate('Home');
			// console.log(error.response.data.error)
			setStatus(error.response.data.error)
			// alert(error.response.data.error);
		
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			{/*View principal dentro dela tem todas as subviews */}
			<Image style={styles.logo} source={require('../img/header_logo.svg')} />

			<View style={styles.inputContainer}>
				{/*View onde ficam os inputs de email e senha */}
				
				<Text style={styles.inputLabel}>Email {status}</Text>
				<TextInput
					style={styles.input}
					placeholder='Insira seu email'
					value={email}
					onChangeText={setEmail}
				/>
				<Text style={styles.inputLabel}>Senha</Text>

				<TextInput
					style={styles.input}
					placeholder='Insira sua senha'
					value={password}
					onChangeText={setPassword}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button title='Entrar' onPress={() => autenticar()} />

				<Text>Não tem cadastro?</Text>

				<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
					<Text style={styles.buttonTextRegister}>Registrar-se</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
