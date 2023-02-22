import { TouchableOpacity, Button, Text, View, TextInput } from 'react-native';
import styles from './estilo';
import api from '../service/api'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CadastroScreen({ navigation,route }) {
	const [name, setName] = useState('');
	const [model, setModel] = useState('');
	const [category, setCategory] = useState('');
	const [serialNumber, setSerialNumber] = useState('');
	const [brand, setBrand] = useState('');
	const [wereFounded, setWereFounded] = useState('');
	const [foundAt, setFoundAt] = useState('');
	const [status, setStatus] = useState('')


	

	async function cadastrarProduto() {

		try {
			const response = await api.post('/item/register',{
			
			name:name,
			model: model,
			category:category,
			serialNumber: serialNumber,
			brand: brand,
			wereFounded:wereFounded,
			foundAt:foundAt,
			user: global.userId

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
			<View style={styles.productImage}>
				<Text>{status == ''? 'Aqui vai a foto do produto': status}</Text>
			</View>
			
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder='Insira o nome do item'
					value={name}
					onChangeText={setName}
				/>

				<TextInput
					style={styles.input}
					placeholder='Insira modelo'
					value={model}
					onChangeText={setModel}
				/>
				<TextInput
					style={styles.input}
					placeholder='Selecione uma categoria'
					value={category}
					onChangeText={setCategory}
				/>
				<TextInput
					style={styles.input}
					placeholder='Insira o numero de série do produto'
					value={serialNumber}
					onChangeText={setSerialNumber}
				/>
				<TextInput
					style={styles.input}
					placeholder='Insira a marca do produto'
					value={brand}
					onChangeText={setBrand}
				/>
				<TextInput
					style={styles.input}
					placeholder='Insira onde foi encontrado'
					value={wereFounded}
					onChangeText={setWereFounded}
				/>
				<TextInput
					style={styles.input}
					placeholder='Insira quando foi encontrado'
					value={foundAt}
					onChangeText={setFoundAt}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity 
					style={styles.buttonCadastrar}
					onPress={() => cadastrarProduto()}>
					<Text style={styles.title}>Cadastrar</Text>
				</TouchableOpacity>			
			</View>
		</SafeAreaView>
	);
}
