//importar o arquivo de estilos da pasta estilo
import estilo from './estilo';

//Cria uma função padrão disponivel fora do arquivo Login
export default function Procurar() {
	return (
		<View style={estilo.container}>
			<View style={estilo.logoContainer}>
				<Text>Logo Container</Text>
			</View>

			<View style={estilo.inputContainer}>
				<Text>Input Container </Text>
			</View>

			<View style={estilo.signupContainer}>
				<Text>Signup Container </Text>
			</View>
		</View>
	);
}
