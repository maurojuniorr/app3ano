import { StyleSheet, Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListaScreen from '../lista';
import styles from './estilo';

export default function HomeScreen({ navigation,route }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.textContainer}>
				<Text>Home Screen</Text>
				<p>
					Olá pessoas, este aplicativo xiquererreemo serve para mostrar uma
					lista desnecessária pra nossa vida, mas que precisamos aprender pra
					poder passar de ano.
				</p>
			</View>
		</SafeAreaView>
	);
}
