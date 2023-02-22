import { StyleSheet, TouchableOpacity, Button, Text, View } from 'react-native';
import styles from './estilo';



export default function DetalhesScreen({navigation, route}) {
	
	return (
		<View style={styles.container}>
			<View style={styles.item}>	
				<Text style={styles.title}>{[route.params.item]}</Text>
							  
			</View>
			<View style={styles.item2}>
				<Text style={styles.title}>Descrição do {[route.params.item]} </Text>
			</View>
		</View>
		
	);
}
