import { StyleSheet, Button, Text, View } from 'react-native';

export default function SignupScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text> Aqui é a tela de cadastro</Text>
			<Button
				title='Ir para a tela de Login'
				onPress={() => navigation.navigate('Login')}
			/>
		</View>
	);
}
