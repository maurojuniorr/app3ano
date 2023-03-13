import { StyleSheet, View } from 'react-native';
//importe o modulo {Stylesheet} da biblioteca 'react-native'
import Login from './login';
//importe o componente Login da pasta './login'
import Signup from './signup';
//Aqui embaixo é a função padrão do componente
//export deixa a função MeuApp() pública
//default faz com que a função se torne a principal
//essa função sempre precisa retornar algo
//nesse caso está retornando a View container
//dentro da View container existe o componente Login
export default function MeuApp() {
	return (
		<View style={styles.container}>
			<Login />
		</View>
	);
}
//Temos o conjunto de estilos
//ele retorna um objeto JSON
const styles = StyleSheet.create({
	container: {
		flex: 1, //<<<<< FlexBox
	},
});
