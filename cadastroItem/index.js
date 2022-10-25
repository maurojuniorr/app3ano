import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import styles from './estilo';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CadastroScreen({ navigation }) {
	const [nome, setNome] = useState('');
	const [marca, setMarca] = useState('');
	const [categoria, setCategoria] = useState('');
	const [estado, setEstado] = useState('');

	async function cadastrarProduto() {
		alert('Cadastrei o seu produto =)');
	}

	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Cadastre seu item</Text>

			<TextInput
				style={styles.input}
				placeholder='Indique uma categoria'
				defaultValue={categoria}
				onChange={(e) => setCategoria(e.target.value)}
			/>

			<TextInput
				style={styles.input}
				placeholder='Digite o nome do item'
				defaultValue={nome}
				onChange={(e) => setNome(e.target.value)}
			/>

			<TextInput
				style={styles.input}
				placeholder='Indique a marca do produto'
				defaultValue={marca}
				onChange={(e) => setMarca(e.target.value)}
			/>
			<TextInput
				style={styles.input}
				placeholder='Estado novo ou usado?'
				defaultValue={estado}
				onChange={(e) => setEstado(e.target.value)}
			/>

			<Button title='Cadastrar' onPress={() => cadastrarProduto()} />
		</SafeAreaView>
	);
}
