import { StyleSheet, Button, Text, View } from 'react-native';

export default function LoginScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Login Screen</Text>
			<Button
				title='Ir para Home'
				onPress={() => navigation.navigate('Home')}
			/>

			<Text>Não tem cadastro?</Text>
			<Button
				title='Cadastre-se'
				onPress={() => navigation.navigate('Signup')}
			/>
		</View>
	);
}
