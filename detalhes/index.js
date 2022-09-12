import { StyleSheet, Button, Text, View } from 'react-native';

export default function DetalhesScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Detalhes Screen</Text>
			<Button title='Ir para PDF' onPress={() => navigation.navigate('PDF')} />
		</View>
	);
}
