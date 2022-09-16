import {
	SafeAreaView,
	View,
	StyleSheet,
	Button,
	TextInput,
	Text,
	TouchableOpacity,
} from 'react-native';

import styles from './estilo';

export default function SignupScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text> Aqui é a tela de cadastro</Text>

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
			<TextInput
				style={styles.input}
				placeholder='Repita a sua senha'
				onChange={() => {}}
			/>

			<Button title='Cadastrar' onPress={() => navigation.navigate('Login')} />
		</View>
	);
}
