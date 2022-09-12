import { StyleSheet, Button, Text, View } from 'react-native';

export default function ListaScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Lista Screen</Text>
			<Button
				title='Ir para Detalhes'
				onPress={() => navigation.navigate('Detalhes')}
			/>

			<Button
				title='Ir para Procurar'
				onPress={() => navigation.navigate('Procurar')}
			/>
		</View>
	);
}
