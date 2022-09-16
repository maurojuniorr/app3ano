import { StyleSheet, Button, Text, View } from 'react-native';
import ListaScreen from '../lista';
import styles from './estilo';

export default function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	);
}
