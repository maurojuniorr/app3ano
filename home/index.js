import { StyleSheet, Button, Text, View } from 'react-native';
import ListaScreen from '../lista';

export default function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title='Ir para lista'
				onPress={() => navigation.navigate('Lista')}
			/>
			<Button
				title='Ir para o cadastro de itens'
				onPress={() => navigation.navigate('CadastroScreen')}
			/>
		</View>
	);
}
