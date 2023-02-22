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
	const [nome, setNome] = useState('');
	const [password, setPassword] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [status, setStatus] = useState('')
	const [passStatus, setPassStatus] = useState('Repita sua senha')

	async function autenticar() {

		try {
			const response = await api.post('/auth/register',{
			
			nome:nome,
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
function passCheck (  ){
	
	

}
	return (
		<SafeAreaView style={styles.container}>
			{/*View principal dentro dela tem todas as subviews */}
			<Image style={styles.logo} source={require('../img/header_logo.svg')} />

			<View style={styles.inputContainer}>
				{/*View onde ficam os inputs de email e senha */}
				
				<Text style={styles.inputLabel}>Nome {status}</Text>
				<TextInput
					style={styles.input}
					placeholder='Insira seu nome'
					value={nome}
					onChangeText={setNome}
				/>

				<Text style={styles.inputLabel}>Email </Text>
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
					value={password1}
					onChangeText={setPassword1}
				/>
				<Text style={styles.inputLabel}> {password1 == password2? 'Repita sua senha':'As senhas não coincidem'} </Text>
				<TextInput
				style={styles.input}
				placeholder='Repita sua senha'
				value={password2}
				onChangeText={setPassword2}
			/>
			</View>
			<View style={styles.buttonContainer}>
				
				<TouchableOpacity 
					style={styles.buttonCadastrar}
					onPress={() => autenticar()}>
					<Text style={styles.title}>Cadastrar</Text>
				</TouchableOpacity>		
				

				<Text style={styles.inputLabel}>Já tem cadastro?</Text>

				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<Text style={styles.buttonTextLogin}>Logar-se</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
