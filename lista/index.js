import { Button, Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './estilo';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'Primeiro Item',
		idade: 36,
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Segundo Item',
		idade: 37,
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e"29d72',
		title: 'Terceiro Item',
		idade: 31,
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d70',
		title: 'Quarto Item',
		idade: 45,
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e9d372',
		title: 'Quinto Item',
		idade: 32,
	},
	{
		id: '58694a0f-3d31-471f-bd96-145571e9d372',
		title: 'Sexto Item',
		idade: 32,
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29370',
		title: 'Sétimo Item',
		idade: 48,
	},
	{
		id: '58694a0f-3da1-471f-bd96-4455795e29d70',
		title: 'Oitavo Item',
		idade: 45,
	},
	{
		id: '58694a0f-3da1-471f-bd96-1455431e9d372',
		title: 'Nono Item',
		idade: 32,
	},
	{
		id: '58694a0f-3da1-471f-bd96-14557231e29370',
		title: 'Decimo Item',
		idade: 48,
	},
];

export default function ListaScreen({ navigation }) {
	const lista = (
		{ item } //função de renderizar a lista
	) => (
		<View style={styles.item}>
			<TouchableOpacity
				onPress={() => navigation.navigate('Detalhes', { convoy: item.title })}>
				<Text style={styles.title}>{item.title}</Text>
			</TouchableOpacity>
		</View>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={DATA} //Lê o data frame
				renderItem={lista} //chama a função renderizar
				keyExtractor={(item) => item.id} //identifica a chave unica do DF
			/>
		</View>
	);
}
